const popmotion = require("popmotion");

const button = document.querySelector('.button')

button.keyframes({
    values: ['#14D790', '#198FE3', '#FF1C68', '#9B65DE', '#14D790'],
    duration: 10000,
    ease: easing.linear,
    loop: Infinity
  })