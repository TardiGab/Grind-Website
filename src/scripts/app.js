"use strict";

const accordions = document.querySelectorAll('.accordion__header');
const contents = document.querySelectorAll('.accordion__content');

accordions.forEach((accordion, index) => {
  accordion.addEventListener('click', () => {
    contents[index].classList.toggle('accordion__content--active');
    accordion.querySelector('.cross').classList.toggle('cross--active');
  });
});