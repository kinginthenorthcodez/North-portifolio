const mainMenu = document.querySelector('#main-menu');
const btnMenu = document.querySelector('#btn-menu');
const menuImg = document.querySelector('#menu-img');
const menuItems = document.querySelectorAll('.menu-item a');

// Modal

const closeModal = document.querySelector('#closeModal');
const pModal = document.querySelector('.modal');

function swapIcon() {
  if (mainMenu.classList.contains('mobile-hide')) {
    menuImg.src = './assets/images/bars/close.png';
  } else {
    menuImg.src = './assets/images/bars/IconMenu.png';
  }
}

btnMenu.addEventListener('click', () => {
  swapIcon();
  mainMenu.classList.toggle('mobile-hide');
});

menuItems.forEach((menuList) => {
  menuList.addEventListener('click', () => {
    mainMenu.classList.toggle('mobile-hide');
    menuImg.src = './assets/images/bars/IconMenu.png';
  });
});

closeModal.addEventListener('click', () => {
  pModal.classList.add('hide')
})
