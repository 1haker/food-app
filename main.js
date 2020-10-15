// Sticky nav

const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', () => {
  var nav = document.querySelector('nav');
  nav.classList.toggle('sticky', window.scrollY > 0);

  if (window.pageYOffset > 100) {
    toTop.classList.add('active');
  } else {
    toTop.classList.remove('active');
  }
});

// Menu bar

const menuBar = document.getElementById('menu');
const navUL = document.getElementById('nav-ul');

const x = window.matchMedia("(max-width: 768px)")

if(x.matches) {
  console.log('we are on mobile');
  const navULMobile2 = document.querySelectorAll('#nav-ul li');

  navULMobile2.forEach(element => {
    element.addEventListener('click', () => {
      menuBar.classList.toggle('change');
      navUL.classList.toggle('change');
      toggleOverflowMenu();
    })
  });
}

menuBar.addEventListener('click', () => {
  menuBar.classList.toggle('change');
  navUL.classList.toggle('change');
  toggleOverflowMenu();
});

const toggleOverflowMenu = () => {
  if (document.body.style.overflow === 'hidden') {
    document.body.style.overflow = 'auto';
  } else {
    document.body.style.overflow = 'hidden';
  }
};

// Progress on scroll

window.onscroll = () => {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById('myBar').style.width = scrolled + '%';
};
