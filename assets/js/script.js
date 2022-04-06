const mainMenu = document.querySelector('#main-menu');
const btnMenu = document.querySelector('#btn-menu');
const menuImg = document.querySelector('#menu-img');
const menuItems = document.querySelectorAll('.menu-item a');

// Modal

const closeModal = document.querySelector('#closeModal');
const pModal = document.querySelector('.modal');

const projects = [
  {
    id: 1,
    name: 'Ecommerce website',
    description:
      'A website for a fictional ecommerce company lorem A website for a fictional ecommerce company lorem A website for a fictional ecommerce company lorem A website for a fictional ecommerce company lorem',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=815&q=80',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'My SQL'],
    link: 'https://aimalamiri.github.io/Microverse-Portfolio/',
    source: 'https://github.com/aimalamiri/Microverse-Portfolio',
  },
  {
    id: 2,
    name: 'Finance App',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus aliquid suscipit odit, eveniet nisi impedit nam placeat labore excepturi nulla facere ratione cupiditate culpa iure vel aliquam eum dolore.',
    image:
      'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1102&q=80',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby'],
    link: 'https://aimalamiri.github.io/Microverse-Portfolio/',
    source: 'https://github.com/aimalamiri/Microverse-Portfolio',
  },
  {
    id: 3,
    name: 'Marketing Analysis',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus aliquid suscipit odit, eveniet nisi impedit nam placeat labore excepturi nulla facere ratione cupiditate culpa iure vel aliquam eum dolore.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby'],
    link: 'https://aimalamiri.github.io/Microverse-Portfolio/',
    source: 'https://github.com/aimalamiri/Microverse-Portfolio',
  },
  {
    id: 4,
    name: 'Portfolio Page',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus aliquid suscipit odit, eveniet nisi impedit nam placeat labore excepturi nulla facere ratione cupiditate culpa iure vel aliquam eum dolore.',
    image: 'https://i.pinimg.com/originals/6e/4b/2e/6e4b2e5e016ee15a405be4e09decfdc9.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://aimalamiri.github.io/Microverse-Portfolio/',
    source: 'https://github.com/aimalamiri/Microverse-Portfolio',
  },
  {
    id: 5,
    name: 'WebDesign Agency',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus aliquid suscipit odit, eveniet nisi impedit nam placeat labore excepturi nulla facere ratione cupiditate culpa iure vel aliquam eum dolore.',
    image:
      'https://mldpshakfq9r.i.optimole.com/Q925PfU-6c8Cn91e/w:1200/h:683/q:auto/https://www.core365.co.uk/wp-content/uploads/2021/07/JLN-Website-Screenshot.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://aimalamiri.github.io/Microverse-Portfolio/',
    source: 'https://github.com/aimalamiri/Microverse-Portfolio',
  },
  {
    id: 6,
    name: 'Bussiness booster',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus aliquid suscipit odit, eveniet nisi impedit nam placeat labore excepturi nulla facere ratione cupiditate culpa iure vel aliquam eum dolore.',
    image: 'https://i.pinimg.com/originals/ed/de/b9/eddeb936e3c74afa5b0182f847fb59fd.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby'],
    link: 'https://aimalamiri.github.io/Microverse-Portfolio/',
    source: 'https://github.com/aimalamiri/Microverse-Portfolio',
  },
  {
    id: 7,
    name: 'Help Center',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus aliquid suscipit odit, eveniet nisi impedit nam placeat labore excepturi nulla facere ratione cupiditate culpa iure vel aliquam eum dolore.',
    image:
      'https://img.webdesign-inspiration.com/v7/webdesign-inspiration.com/uploads/design/2019-05/v2-zopim-com-52981.png?width=488',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby'],
    link: 'https://aimalamiri.github.io/Microverse-Portfolio/',
    source: 'https://github.com/aimalamiri/Microverse-Portfolio',
  },
];

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
  pModal.classList.add('hide');
});
