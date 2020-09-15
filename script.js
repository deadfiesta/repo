//shorthand
var $ = function( id ) { 
    return document.getElementById( id );
};

//const
const nzxtCase = document.querySelector(".hero-right");
const heroText = document.querySelector(".hero-left");
const descriptionText = document.querySelector(".description");


//click events
$('cpu').addEventListener("click", () => {
    window.open("https://www.amd.com/en/products/cpu/amd-ryzen-7-3700x", "_blank")
});


//gsap events

gsap.from(nzxtCase, {
    duration: 2,
    x: 300,
    opacity: 0,
    ease: "power4.out",
});
gsap.from(heroText, {
    duration: 1,
    x: -100,
    opacity: 0,
} )

gsap.from(descriptionText, {
    duration: 2,
    opacity: 0,
    delay: .25,
})

