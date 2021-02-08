'use strict'

const controller = new ScrollMagic.Controller();
const title = document.querySelector('.title');

//all h003 anim loop build
$('.h003').each(function(i) {
    let title = $(this);

    var action = gsap.timeline()
    .from(title, {duration: .25, y: -20, opacity: 0})

    new ScrollMagic.Scene({
        triggerElement: this,
        duration: 200,
        triggerHook: .9
    })
    .setTween(action)
    .addTo(controller)
});

//hero anim
const tl001 = gsap.timeline()
.from('.h001', {opacity: 0, stagger: .25, duration: .5})
.from('.h002', {opacity: 0, stagger: .3, duration: 1.5})
.from('.hero', {backgroundColor: '#ffffff', duration: 1}, "-=2")
.from('.i001', {y: 20, opacity: 0, duration: 1.5, ease: "back.out(1.7)"}, "-=1.5");

const anim001 = new ScrollMagic.Scene({
    triggerElement: title,
    duration: 0,
    triggerHook: .5
})
.setTween(tl001)
.addTo(controller)

//service anim
$('.icon').each(function(i) {
    let icon = $(this);

    var action = gsap.timeline()
    .from(icon, {duration: .5, scale: 0, opacity: 0, ease: "back.out(1.7)"})

    new ScrollMagic.Scene({
        triggerElement: this,
        duration: 0,
        triggerHook: .8
    })
    .setTween(action)
    .addTo(controller)
});


$('.small-icon').each(function(i) {
    let icon = $(this);

    var action = gsap.timeline()
    .set(icon, {strokeDashoffset: 88, strokeWidth: 500})
    .to(icon, {strokeDashoffset: 0, duration: 1.3, ease: "power1.out"})

    new ScrollMagic.Scene({
        triggerElement: this,
        duration: 0,
        triggerHook: .75
    })
    .setTween(action)
    .addTo(controller)
});

$('.icon-container').each(function(i) {
    let icon = $(this);

    var action = gsap.timeline()
    .from(icon, {duration: .5, boxShadow: "0px 0px 0px 0px rgba(255,255,255,0)"})

    new ScrollMagic.Scene({
        triggerElement: this,
        duration: 0,
        triggerHook: .8
    })
    .setTween(action)
    .addTo(controller)
});

$('.text-container').each(function(i) {
    let text = $(this);

    var action = gsap.timeline()
    .from(text, {duration: .5, opacity:0, x: '-25%', ease: "power4.out"})

    new ScrollMagic.Scene({
        triggerElement: this,
        duration: 0,
        triggerHook: .8
    })
    .setTween(action)
    .addTo(controller)
});

$('.i002').each(function(i) {
    let image = $(this);

    var action = gsap.timeline()
    .from(image, {duration: 1.5, opacity:0, y: '50%', ease: "power4.out"})

    new ScrollMagic.Scene({
        triggerElement: this,
        duration: 0,
        triggerHook: 1
    })
    .setTween(action)
    .addTo(controller)
});
$('.i003').each(function(i) {
    let image = $(this);

    var action = gsap.timeline()
    .from(image, {duration: 1.5, opacity:0, ease: "power2.out"})

    new ScrollMagic.Scene({
        triggerElement: this,
        duration: 0,
        triggerHook: .8
    })
    .setTween(action)
    .addTo(controller)
});
$('.i004').each(function(i) {
    let image = $(this);

    var action = gsap.timeline()
    .from(image, {duration: 4, y:-40, repeat: -1, yoyo: true, ease: "power2.inOut"})

    new ScrollMagic.Scene({
        triggerElement: this,
        duration: 0,
        triggerHook: 1,
    })
    .setTween(action)
    .addTo(controller)
});
$('.v001').each(function(i) {
    let image = $(this);

    var action = gsap.timeline()
    .from(image, {duration: 1.5, opacity:0, y: 100, ease: "power4.out"})

    new ScrollMagic.Scene({
        triggerElement: this,
        duration: 0,
        triggerHook: .9
    })
    .setTween(action)
    .addTo(controller)
});