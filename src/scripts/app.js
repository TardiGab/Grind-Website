"use strict";

const parallax = document.querySelector('.hero__parallax');
const bgBuildingsBack = document.querySelector('.hero__bg-buildings-back');
const bgBuildingsFront = document.querySelector('.hero__bg-buildings-front');
const frontBuildings = document.querySelector('.hero__front-buildings');
const floor = document.querySelector('.hero__floor');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  bgBuildingsBack.style.transform = `translateY(${scrollY * 0.4}px)`;
  bgBuildingsFront.style.transform = `translateY(${scrollY * 0.3}px)`;
  frontBuildings.style.transform = `translateY(${scrollY * 0.2}px)`;
  floor.style.transform = `translateY(${scrollY * 0.2}px)`;
});

const accordions = document.querySelectorAll('.accordion__header');
const contents = document.querySelectorAll('.accordion__content');
accordions.forEach((accordion, index) => {
  accordion.addEventListener('click', () => {
    contents[index].classList.toggle('accordion__content--active');
    accordion.querySelector('.cross').classList.toggle('cross--active');
  });
});