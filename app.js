const nav = document.querySelector("nav");
const langBtn = document.querySelector("#language__selector");

langBtn.addEventListener("click", () => {
  changeLanguage();
});

function changeLanguage() {
  console.log(":)))))");
}

document.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 0) {
    nav.classList.add("menu--alt");
  } else {
    nav.classList.remove("menu--alt");
  }
});
