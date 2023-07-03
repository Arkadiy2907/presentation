"use strict";

const body = document.getElementById("body");

const aboutText = document.querySelector(".about-text");
const aboutClose = document.querySelector(".about-close");

const contactText = document.querySelector(".contact-text");
const contactClose = document.querySelector(".contact-close");

const travel = document.querySelector(".travel");
const travelClose = document.querySelector(".travel-close");

const wildlife = document.querySelector(".wildlife");
const wildlifeClose = document.querySelector(".wildlife-close");

const nature = document.querySelector(".nature");
const natureClose = document.querySelector(".nature-close");

let radius = 240; // how big of the radius
const autoRotate = true; // auto rotate or not
const rotateSpeed = -60; // unit: seconds/360 degrees
const imgWidth = 120; // width of images (unit: px)
const imgHeight = 170; // height of images (unit: px)

const odrag = document.getElementById('drag-container');
const ospin = document.getElementById('spin-container');
const aImg = ospin.getElementsByClassName('spin_img');
let aEle = [...aImg];

setTimeout(init, 1000);

// Size of images
ospin.style.width = imgWidth + "px";
ospin.style.height = imgHeight + "px";

// Size of ground - depend on radius
const ground = document.getElementById('ground');
ground.style.width = radius * 3 + "px";
ground.style.height = radius * 3 + "px";

function init(delayTime) {
  for (let i = 0; i < aEle.length; i++) {
    aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
    aEle[i].style.transition = "transform 1s";
    aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
  }
}

function applyTranform(obj) {
  // Constrain the angle of camera (between 0 and 180)
  if (tY > 180) tY = 180;
  if (tY < 0) tY = 0;

  // Apply the angle
  obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
}

function playSpin(yes) {
  ospin.style.animationPlayState = (yes ? 'running' : 'paused');
}

var sX, sY, nX, nY, desX = 0,
  desY = 0,
  tX = 0,
  tY = 10;

// auto spin
if (autoRotate) {
  var animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
  ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
}

// // add background music
// if (bgMusicURL) {
//   document.getElementById('music-container').innerHTML += `
// <audio src="${bgMusicURL}" ${bgMusicControls? 'controls': ''} autoplay loop>    
// <p>If you are reading this, it is because your browser does not support the audio element.</p>
// </audio>
// `;
// }

// setup events
document.onpointerdown = function (e) {
  clearInterval(odrag.timer);
  e = e || window.event;
  var sX = e.clientX,
    sY = e.clientY;

  this.onpointermove = function (e) {
    e = e || window.event;
    var nX = e.clientX,
      nY = e.clientY;
    desX = nX - sX;
    desY = nY - sY;
    tX += desX * 0.1;
    tY += desY * 0.1;
    applyTranform(odrag);
    sX = nX;
    sY = nY;
  };

  this.onpointerup = function (e) {
    odrag.timer = setInterval(function () {
      desX *= 0.95;
      desY *= 0.95;
      tX += desX * 0.1;
      tY += desY * 0.1;
      applyTranform(odrag);
      playSpin(false);
      if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
        clearInterval(odrag.timer);
        playSpin(true);
      }
    }, 17);
    this.onpointermove = this.onpointerup = null;
  };

  return false;
};

document.onmousewheel = function (e) {
  e = e || window.event;
  var d = e.wheelDelta / 20 || -e.detail;
  radius += d;
  init(1);
};



body.addEventListener("click", function (e) {
  switch (e.target) {
    case aboutText:
      body.classList.add("about-on");
      break;
    case aboutClose:
      body.classList.remove("about-on");
      break;

    case contactText:
      body.classList.add("contact-on");
      break;
    case contactClose:
      body.classList.remove("contact-on");
      break;

    case travel:
      body.classList.add("travel-on");
      break;
    case travelClose:
      body.classList.remove("travel-on");
      break;

    case wildlife:
      body.classList.add("wildlife-on");
      break;
    case wildlifeClose:
      body.classList.remove("wildlife-on");
      break;

    case nature:
      body.classList.add("nature-on");
      break;
    case natureClose:
      body.classList.remove("nature-on");
      break;
  }
});


