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
    name: 'Creative Space website',
    description:
      'A space for the craatives to empower and build innovative solutions together .',
    image: './assets/images/creativeapp.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'LOCAL STORAGE API'],
    link: 'https://kinginthenorthcodez.github.io/capstone-project-1/',
    source: 'https://github.com/kinginthenorthcodez/capstone-project-1',
  },
  {
    id: 2,
    name: 'Awesome Book App',
    description:
      'Built a book library using JavaScript classes and used localStorage to save the data.',
    image: './assets/images/awesomeBook3.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Modules'],
    link: 'https://github.com/kinginthenorthcodez/sandox/',
    source: 'https://github.com/kinginthenorthcodez/sandox',
  },
  {
    id: 3,
    name: 'ToDo List App',
    description: 'To-do list" is a tool that helps to organize your day.',
    image: './assets/images/Todoapp.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Webpack', 'ES6'],
    link: 'https://kinginthenorthcodez.github.io/To-Do-List/',
    source: 'https://github.com/kinginthenorthcodez/To-Do-List',
  },
  {
    id: 4,
    name: 'leaderboard App',
    description:
      'The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service.',
    image: './assets/images/leaderboard.png',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Webpack',
      'Use ES6 modules',
      'API',
    ],
    link: 'https://kinginthenorthcodez.github.io/North-portifolio/',
    source: 'https://github.com/kinginthenorthcodez/Leaderboard-app-',
  },
  {
    id: 5,
    name: 'Pennode app',
    description:
      ' A Blog app that will show the list of posts and empower readers to interact with them by adding comments and liking posts. Share your experiences and stories with the cosmos of the pennoders.',
    image: './assets/images/pen1.png',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Ruby on Rails',
      'Devise for authentication',
    ],
    link: 'https://kinginthenorthcodez.github.io/North-portifolio/',
    source: 'https://github.com/kinginthenorthcodez/pennode',
  },
  {
    id: 6,
    name: 'Recipe App',
    description:
      'The Recipe app keeps track of all your recipes and ingredients. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe. Also, since sharing recipes is an important part of cooking the app should allow you to make them public so anyone can access them.',
    image: './assets/images/recipeapp.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby on Rails', 'postgresql'],
    link: 'https://recipe-app-on-rials.herokuapp.com/',
    source: 'https://github.com/kinginthenorthcodez/Recipe-app',
  },
  {
    id: 7,
    name: 'Air Pollution App',
    description:
      'Air Pollution Metrics app provides current, forecast and historical air pollution data for any coordinates on the globe, users can search by region(continent) or Country to get Metrics update in real time..',
    image: './assets/images/Airpollutionapp.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    link: 'https://kinginthenorthcodez.github.io/air-pollution-metric-app/',
    source: 'https://github.com/kinginthenorthcodez/air-pollution-metric-app',
  },
  {
    id: 8,
    name: 'space-travellers-hub',
    description:
      ' The Space Travelers is a React, Redux application based on the SpaceX API.The user can reserve a rocket and it ll update the state automatically, reserve a dragon and it will update the state automatically, and also the user can join a mission in this application',
    image: './assets/images/spaceX.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'API'],
    link: 'https://kinginthenorthcodez.github.io/space-travellers-hub/',
    source: 'https://github.com/kinginthenorthcodez/space-travellers-hub',
  },
  {
    id: 9,
    name: 'BookStore React APP',
    description:
      'The Bookstore is a React-Redux application connected to an existing API to create and remove books in a remote server. Users can Display the list of books, Add and Remove a selected book..',
    image: './assets/images/bookstore.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    link: 'https://kinginthenorthcodez.github.io/North-portifolio/',
    source: 'https://github.com/kinginthenorthcodez/bookstore',
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
  userName: 'North',
  email: 'email@gmail.com',
  textMsg: 'Nihao!',
};

// const formDataHive = JSON.parse(localStorage.getItem('dataHive'));
// if (formDataHive) {
//   for (let i = 0; i < formInputs.length; i += 1) {
//     formInputs[i].value = formDataHive[formInputs[i].name];
//   }
// }

// Update dataHive object with form inputs

function updateDataHive(name, value) {
  dataHive[name] = value;
  localStorage.setItem('dataHive', JSON.stringify(dataHive));
}

// Listen for inputs on form data

for (let i = 0; i < formInputs.length; i += 1) {
  formInputs[i].addEventListener('input', (e) => {
    updateDataHive(e.target.name, e.target.value);
  });
}

// Form validation

const isRequired = (value) => value !== '';
const isEmailValid = (email) => {
  const reg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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

document.querySelector('.contact-form').onsubmit = (e) => {
  e.target.submit();
  e.target.reset();
  return false;
};
