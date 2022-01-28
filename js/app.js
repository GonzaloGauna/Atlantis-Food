/* eslint-disable linebreak-style */
// Variables
const menu = document.querySelector('#menu');
const linksDisplay = document.querySelector('#navBar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  linksDisplay.classList.toggle('menuActive');
};

const swiper = new Swiper('.home-swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
