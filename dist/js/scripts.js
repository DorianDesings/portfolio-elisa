const bodyElement = document.body;
const rootStyles = document.documentElement.style;

const cursor = document.getElementById('cursor');
const headerElement = document.getElementById('header');
const menuElement = document.getElementById('menu');
const hamburgerContainerElement = document.getElementById(
  'hamburger-container'
);
const hamburgerIconElement = document.getElementById('hamburger-icon');

const NightModeElement = document.getElementById('toggle');

const allElementsIntersection = document.querySelectorAll(
  '[data-background-color]'
);

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3
};

const callback = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log(entry.target.dataset);
          rootStyles.setProperty(
            '--background-color',
            entry.target.dataset.backgroundColor
          );
          rootStyles.setProperty(
            '--degradados-background',
            `url(../assets/images/${entry.target.dataset.backgroundImage})`
          );
        }
      });
    }
  });
};

const observer = new IntersectionObserver(callback, options);

allElementsIntersection.forEach(article => observer.observe(article));

hamburgerContainerElement.addEventListener('click', () => {
  menuElement.classList.toggle('menu--show');
  hamburgerIconElement.classList.toggle('hamburger-icon--cross');
  if (menuElement.classList.contains('menu--show')) {
    rootStyles.setProperty('--menu-icon-color', ' #e8d3ff');
    rootStyles.setProperty('--header-line-color', '#e8d3ff');
  } else {
    rootStyles.setProperty('--menu-icon-color', '#000');
    rootStyles.setProperty('--header-line-color', '#000');
  }
});

window.addEventListener('mousemove', ev => {
  rootStyles.setProperty('--x-cord', ev.x + 'px');
  rootStyles.setProperty('--y-cord', ev.y + 'px');
});

headerElement.addEventListener('mouseenter', () => {
  rootStyles.setProperty('--cursor-color', '#EAE1F4');
});
