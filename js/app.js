/* eslint-disable linebreak-style */
// Variables
const menu = document.querySelector('#menu');
const linksDisplay = document.querySelector('#navBar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  linksDisplay.classList.toggle('menuActive');
};

const homeSwiper = new Swiper('.home-swiper', {
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const foodSwiper = new Swiper('.food-slider', {
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});
