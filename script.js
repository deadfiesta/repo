"use strict";

//const
const nzxtCase = document.querySelector(".hero-right");
const heroText = document.querySelector(".hero-left");
const descriptionText = document.querySelector(".description");
const priceTag = document.querySelector(".pricing");

//cal total cost pricing
var sum = 0;
var buy = 0;
$('.pricing').each(function() {
    var val = $.trim( $(this).text() );

    if ( val ) {
        val = parseFloat( val.replace( /^\$/, "" ) );

        sum += !isNaN( val ) ? val : 0;
    }
});
const cost = (Math.round(sum*100)/100).toFixed(2);
$('.total-pricing').html("S$"+cost);
//cal total purchased 
$('.purchased').each(function() {
    var val = $.trim( $(this).text() );

    if ( val ) {
        val = parseFloat( val.replace( /^\$/, "" ) );

        buy += !isNaN( val ) ? val : 0;
    }
});
const bought = (Math.round(buy*100)/100).toFixed(2);
$('.total-purchased').html("S$"+bought);

$('.pricing').prepend("S$");

//click events
$('#cpu').click(() => {
    window.open("https://www.amd.com/en/products/cpu/amd-ryzen-7-3700x", "_blank")
});
$('#aio').click(() => {
    window.open("https://www.nzxt.com/products/kraken-x53", "_blank")
});

//gsap events
gsap.from(nzxtCase, {
    duration: 2,
    x: "+=100",
    opacity: 0,
    ease: "power4.out",
});
gsap.from(heroText, {
    duration: 1,
    x: "-=100",
    opacity: 0,
} )

gsap.from(descriptionText, {
    duration: 2,
    opacity: 0,
    delay: .25,
})

