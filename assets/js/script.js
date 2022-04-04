let mainMenu = document.querySelector("#main-menu");
let btnMenu = document.querySelector("#btn-menu");
let menuImg = document.querySelector("#menu-img");
let menuItems = document.querySelectorAll('.menu-item a');

btnMenu.addEventListener("click", function(e) {
  swapIcon();
  mainMenu.classList.toggle("mobile-hide")
})

for(let menuItem of menuItems){
  menuItem.addEventListener('click', function(e){
    mainMenu.classList.toggle('mobile-hide');
    menuImg.src = "./assets/images/bars/IconMenu.png";
  })
}

function swapIcon(){
  if (mainMenu.classList.contains("mobile-hide")) {
    menuImg.src = "./assets/images/bars/close.png";
  } else {
    menuImg.src = "./assets/images/bars/IconMenu.png";
  }
}