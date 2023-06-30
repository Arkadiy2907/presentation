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


