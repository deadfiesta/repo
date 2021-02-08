'use strict';

var header = document.querySelector(".title");
var heroh4 = header.querySelector("h4");
var heroh1 = header.querySelector("h1");
var controller = new ScrollMagic.Controller();
var h4Anim = TweenMax.fromTo(heroh4, 1, {
  opacity: 0
}, {
  opacity: 1
});
var scene = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: header,
  triggerHook: 0
});