let mainMenu = document.querySelector("#main-menu");
let btnMenu = document.querySelector("#btn-menu");
let menuImg = document.querySelector("#menu-img");

btnMenu.addEventListener("click", function(e) {
  if (mainMenu.classList.contains("mobile-hide")) {
    menuImg.src = "./assets/images/bars/close.png";
  } else {
    menuImg.src = "./assets/images/bars/IconMenu.png";
  }
  mainMenu.classList.toggle("mobile-hide")
})
