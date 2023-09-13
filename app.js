"use strict";

const nav = document.querySelector("nav");
const navItems = document.querySelector("#nav__items");
const langBtn = document.querySelector("#language__selector");

// solve how to translate the site using JS. tried json but having nested elements AND applying ids and classes to them is out of my realm
let currentLanguage = "en";
console.log(currentLanguage);

langBtn.addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "hu" : "en";
  languageCheck(currentLanguage);
  console.log(currentLanguage);
});

function languageCheck(currentLanguage) {
  switch (currentLanguage) {
    case "en":
      console.log("its a da enrishu");
      break;

    case "hu":
      console.log("its a da hurishu");
      break;
  }
}

const h2 = document.querySelector("h2");
const p = document.querySelectorAll("p");
