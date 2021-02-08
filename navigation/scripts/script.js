$(function () {
    anim();
    $(window).on('scroll load', function () {

        if ($(window).width() < 768) {
            hamburgerBG();
        }
    })
})

function menuClick() {
    $('.hamburger > div').toggleClass('active');
    $('.hamburger').removeClass('bg');
    $('.main-nav').toggleClass('active');
    $('.glassmorphism').toggleClass('active');
    hamburgerBG();
}

function hamburgerBG() {
    var $ham = $('.hamburger')
    var $navbar = $('nav');
    var $offset = $navbar.height();
    var $scroll = $(window).scrollTop();
    var $active = $('.main-nav');

    if (!$($active).hasClass('active')) {
        if ($scroll >= $offset) {
            $ham.addClass('bg');
        } else {
            $ham.removeClass('bg');
        }
    }
}

//intro anim
function anim() {
    const controller = new ScrollMagic.Controller();
    
    const introTl = gsap.timeline()
    .from('.hero', {opacity: 0, y:-50, ease: Power4.easeOut, duration: .95})
    .from('header h1', {opacity: 0, duration: 1}, "-=.5")
    .from('header h3', {opacity: 0, duration: 1},"-=.85")
    .from('header p', {opacity: 0, duration: 1},"-=.85")
    .from('.main-cta', {opacity: 0, duration: .5},"-=.75")
    .from('.side-cta', {opacity: 0, duration: .75, x:-50, ease: Power4.easeOut},"-=.25")
    
    
    $('.banner').each(function (i) {
        let banner = $(this);
        var action = gsap.from(banner, { duration: .4, opacity: 0, y: 10 })

        new ScrollMagic.Scene({
            triggerElement: this,
            duration: 0,
            triggerHook: .7
        })
            .setTween(action)
            .addTo(controller)
    })
    $('.how-icon').each(function (i) {
        let icon = $(this);
        var action = gsap.from(icon, {strokeDashoffset: 1000, duration: 1, ease: Power4.easeOut})

        new ScrollMagic.Scene({
            triggerElement: this,
            duration: 0,
            triggerHook: .75
        })
            .setTween(action)
            .addTo(controller)
    })
    $('.icon-container').each(function (i) {
        let icon = $(this);
        var action = gsap.from(icon, { duration: .2, opacity: 0 })

        new ScrollMagic.Scene({
            triggerElement: this,
            duration: 0,
            triggerHook: .9
        })
            .setTween(action)
            .addTo(controller)
    })
    $('.sensor-name').each(function (i) {
        let title = $(this);
        var action = gsap.from(title, { duration: .3, opacity: 0, x: -10, })

        new ScrollMagic.Scene({
            triggerElement: this,
            duration: 200,
            triggerHook: .85
        })
            .setTween(action)
            .addTo(controller)
    })
    $('.how li').each(function (i) {
        let height = $(this).height();
        new ScrollMagic.Scene({
            triggerElement: this,
            duration: height,
        })
            .setClassToggle(this, 'current')
            .addTo(controller)
    })
    $('.benefits li').each(function (i) {
        let height = $(this).height();
        new ScrollMagic.Scene({
            triggerElement: this,
            duration: height,
        })
            .setClassToggle(this, 'current')
            .addTo(controller)
    })
    $('h1, h2, h3, p, hr').each(function (i) {
        let title = $(this);

        var action = gsap.from(title, { duration: .3, y: 50, opacity: 0 })

        new ScrollMagic.Scene({
            triggerElement: this,
            duration: 0,
            triggerHook: .9
        })
            .setTween(action)
            .addTo(controller)
    })
    $('.rocket').each(function(i) {
        let rocket = $(this);
        var vroom = gsap.from(rocket, {duration: .6, opacity: 0, y: 100, ease: Power4.easeOut})
        new ScrollMagic.Scene({
            triggerElement: this,
            duration: 0,
            triggerHook: .65
        })
            .setTween(vroom)
            .addTo(controller)
    })
}

