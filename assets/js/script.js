const mainMenu = document.querySelector('#main-menu');
const btnMenu = document.querySelector('#btn-menu');
const menuImg = document.querySelector('#menu-img');
const menuItems = document.querySelectorAll('.menu-item a');
const projectsSection = document.querySelector('#projects-section');

// Form validation

const form = document.querySelector('.contact-form');
const email = document.querySelector('#email');

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
    link: 'https://kinginthenorthcodez.github.io/North-portifolio/',
    source: 'https://github.com/kinginthenorthcodez/North-portifolio',
  },
  {
    id: 2,
    name: 'Finance App',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus aliquid suscipit odit, eveniet nisi impedit nam placeat labore excepturi nulla facere ratione cupiditate culpa iure vel aliquam eum dolore.',
    image:
      'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1102&q=80',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby'],
    link: 'https://kinginthenorthcodez.github.io/North-portifolio/',
    source: 'https://github.com/kinginthenorthcodez/North-portifolio',
  },
  {
    id: 3,
    name: 'Marketing Analysis',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus aliquid suscipit odit, eveniet nisi impedit nam placeat labore excepturi nulla facere ratione cupiditate culpa iure vel aliquam eum dolore.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby'],
    link: 'https://kinginthenorthcodez.github.io/North-portifolio/',
    source: 'https://github.com/kinginthenorthcodez/North-portifolio',
  },
  {
    id: 4,
    name: 'Portfolio Page',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus aliquid suscipit odit, eveniet nisi impedit nam placeat labore excepturi nulla facere ratione cupiditate culpa iure vel aliquam eum dolore.',
    image: 'https://i.pinimg.com/originals/6e/4b/2e/6e4b2e5e016ee15a405be4e09decfdc9.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://kinginthenorthcodez.github.io/North-portifolio/',
    source: 'https://github.com/kinginthenorthcodez/North-portifolio',
  },
  {
    id: 5,
    name: 'WebDesign Agency',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus aliquid suscipit odit, eveniet nisi impedit nam placeat labore excepturi nulla facere ratione cupiditate culpa iure vel aliquam eum dolore.',
    image:
      'https://mldpshakfq9r.i.optimole.com/Q925PfU-6c8Cn91e/w:1200/h:683/q:auto/https://www.core365.co.uk/wp-content/uploads/2021/07/JLN-Website-Screenshot.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://kinginthenorthcodez.github.io/North-portifolio/',
    source: 'https://github.com/kinginthenorthcodez/North-portifolio',
  },
  {
    id: 6,
    name: 'Bussiness booster',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus aliquid suscipit odit, eveniet nisi impedit nam placeat labore excepturi nulla facere ratione cupiditate culpa iure vel aliquam eum dolore.',
    image: 'https://i.pinimg.com/originals/ed/de/b9/eddeb936e3c74afa5b0182f847fb59fd.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby'],
    link: 'https://kinginthenorthcodez.github.io/North-portifolio/',
    source: 'https://github.com/kinginthenorthcodez/North-portifolio',
  },
  {
    id: 7,
    name: 'Help Center',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus aliquid suscipit odit, eveniet nisi impedit nam placeat labore excepturi nulla facere ratione cupiditate culpa iure vel aliquam eum dolore.',
    image:
      'https://img.webdesign-inspiration.com/v7/webdesign-inspiration.com/uploads/design/2019-05/v2-zopim-com-52981.png?width=488',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby'],
    link: 'https://kinginthenorthcodez.github.io/North-portifolio/',
    source: 'https://github.com/kinginthenorthcodez/North-portifolio',
  },
];

for (let i = 0; i < projects.length; i += 1) {
  const project = projects[i];
  let tags = '';
  project.technologies.forEach((tag) => {
    tags += `<li>${tag}</li>`;
  });
  const projectContent = `
                  <div class="card">
                    <div class="profile" style="background-image: url('${project.image}');">
                    </div>
                    <div class="card-items">
                        <div class="card-text">
                            <div class="workText">
                                <h2>${project.name}</h2>
                                <p>
                                    ${project.description} 
                                </p>
                            </div>
                            <ul class="categories">
                              ${tags} 
                            </ul>
                            <div class="btn">
                                <button type="button" data-id="${project.id}">See Project</button>
                            </div>
                        </div>
                    </div>
                </div>
  `;
  projectsSection.innerHTML += projectContent;
}

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
  document.querySelector('body').style.overflow = 'auto';
});

function findProject(id) {
  for (let i = 0; i < projects.length; i += 1) {
    if (projects[i].id === Number(id)) {
      return projects[i];
    }
  }
  return null;
}

function updateModal(project) {
  const Title = document.querySelector('#modal-title');
  const Img = document.querySelector('#modal-img');
  const Tags = document.querySelector('#modal-tags');
  const Text = document.querySelector('#modal-text');
  const Live = document.querySelector('#modal-live');
  const Source = document.querySelector('#modal-source');
  let tags = '';
  project.technologies.forEach((tag) => {
    tags += `<li>${tag}</li>`;
  });

  Title.textContent = project.name;
  Img.src = project.image;
  Tags.innerHTML = tags;
  Text.textContent = project.description;
  Live.href = project.link;
  Source.href = project.source;
}

window.addEventListener('load', () => {
  const projectBtns = document.querySelectorAll('[data-id]');
  for (let i = 0; i < projectBtns.length; i += 1) {
    projectBtns[i].addEventListener('click', (btn) => {
      const id = btn.target.getAttribute('data-id');
      updateModal(findProject(id));
      document.querySelector('body').style.overflowY = 'hidden';
      pModal.classList.toggle('hide');
      pModal.style.top = `${window.pageYOffset}px`;
    });
  }
});

// Local Storage

const formInputs = document.querySelectorAll('.form-field');
const dataHive = {
  userName:'North',
  email: 'email@gmail.com',
  textMsg: 'Nihao!'
}

const formDataHive = JSON.parse(localStorage.getItem('dataHive'));
if(formDataHive) {
 for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].value = formDataHive[formInputs[i].name]
 }
}

// Update dataHive object with form inputs

function updateDataHive(name, value) {
  dataHive[name] = value;
  localStorage.setItem('dataHive',JSON.stringify(dataHive));
}

// Listen for inputs on form data

for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener('input', (e) => {
    updateDataHive(e.target.name, e.target.value);
  })
}

// Form validation

const isRequired = (value) => value !== '';
const isEmailValid = (email) => {
  const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email);
};
const msgError = document.querySelector('#msg-error');
function handleError(input, erroMsg) {
  input.textContent = erroMsg;
  input.classList.remove('hide');
}

function handleSuccess(input, successMsg) {
  input.textContent = successMsg;
  input.classList.toggle('hide');
}

function checkEmail() {
  let valid = false;
  const emailV = email.value.trim();
  if (email.value.toLowerCase() !== email.value) {
    handleError(msgError, 'Email should be lowercase!');
  } else if (!isRequired(emailV)) {
    handleError(msgError, 'Please fill in email!');
  } else if (!isEmailValid(emailV)) {
    handleError(msgError, 'Enter valid email!');
  } else {
    handleSuccess(msgError, 'Valid!');
    msgError.style = 'background-color: green;';
    valid = true;
  }
  return valid;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const isValidEmail = checkEmail();
  if (isValidEmail) {
    form.submit();
  }
});