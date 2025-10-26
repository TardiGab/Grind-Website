"use strict";

import Swiper from "swiper/bundle";
import "swiper/css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
gsap.registerPlugin(ScrollTrigger, TextPlugin, ScrambleTextPlugin);

const parallax = document.querySelector('.hero__parallax');
const bgBuildingsBack = document.querySelector('.hero__bg-buildings-back');
const bgBuildingsFront = document.querySelector('.hero__bg-buildings-front');
const frontBuildings = document.querySelector('.hero__front-buildings');
const floor = document.querySelector('.hero__floor');
const stars = document.querySelector('.hero__stars');
const trees = document.querySelector('.hero__trees');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  bgBuildingsBack.style.transform = `translateY(${scrollY * 0.4}px)`;
  bgBuildingsFront.style.transform = `translateY(${scrollY * 0.3}px)`;
  frontBuildings.style.transform = `translateY(${scrollY * 0.2}px)`;
  floor.style.transform = `translateY(${scrollY * 0.2}px)`;
  stars.style.transform = `translateY(${scrollY * 0.6}px)`;
  trees.style.transform = `translateY(${scrollY * 0.2}px)`;
});

const accordions = document.querySelectorAll('.accordion__header');
const contents = document.querySelectorAll('.accordion__content');
accordions.forEach((accordion, index) => {
  accordion.addEventListener('click', () => {
    contents[index].classList.toggle('accordion__content--active');
    accordion.querySelector('.cross').classList.toggle('cross--active');
  });
});

const swiper = new Swiper('.swiper', {
  loop: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  grabCursor: true,
  spaceBetween: 0,
  speed: 800,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

gsap.from(".leveling__title", {
  duration: 2,
  delay: 0.5,
  text: "",
  scrollTrigger: {
    trigger: ".leveling__title",
    start: "top 80%",
  },
})

gsap.from(".intro-titre__blanc span", {
  text: "",
  duration: 2,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".intro-titre__blanc",
    start: "top 80%",
  },
})