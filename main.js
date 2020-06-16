const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', () => {
  var header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);

  if (window.pageYOffset > 100) {
    toTop.classList.add('active');
  } else {
    toTop.classList.remove('active');
  }
});

// window.addEventListener('scroll'),
//   () => {
//     var header = document.querySelector('header');
//     header.classList.toggle('sticky', window.scrollY > 0);
//   };

// window.onscroll = function () {
//   myFunction();
// };

// var navbar = document.getElementById('navbar');
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add('sticky');
//   } else {
//     navbar.classList.remove('sticky');
//   }
// }
