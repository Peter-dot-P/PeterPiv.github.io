// "use strict";

const langButtons = document.querySelectorAll("#language__selector");
const engTexts = document.querySelectorAll(".eng");
const hunTexts = document.querySelectorAll(".hun");

const hunArray = Array.from(hunTexts);
const engArray = Array.from(engTexts);

let currentLanguage = "en"; // Initial language is set to English
// Initialize the page with english text
translateText(currentLanguage);

for (const button of langButtons) {
  button.addEventListener("click", () => {
    changeCurrentLang();
  });
}

function changeCurrentLang() {
  if (currentLanguage === "en") {
    currentLanguage = "hu";
  } else {
    currentLanguage = "en";
  }
  console.log(`currentLanguage is set to ${currentLanguage}`);
  translateText(currentLanguage);
}

function translateText(lang) {
  if (lang === "en") {
    engArray.forEach((element) => {
      element.classList.remove("dontshow");
    });
    hunArray.forEach((element) => {
      element.classList.add("dontshow");
    });
  } else if (lang === "hu") {
    engArray.forEach((element) => {
      element.classList.add("dontshow");
    });
    hunArray.forEach((element) => {
      element.classList.remove("dontshow");
    });
  }
}
