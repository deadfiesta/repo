'use strict'

const header = document.querySelector(".title");
const heroh4 = header.querySelector("h4");
const heroh1 = header.querySelector("h1");

const controller = new ScrollMagic.Controller();

const h4Anim = TweenMax.fromTo(heroh4, 1, { opacity: 0 }, { opacity: 1 });

let scene = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: header,
  triggerHook: 0,
});
