"use strict";

//const
const nzxtCase = document.querySelector(".hero-right");
const heroText = document.querySelector(".hero-left");
const descriptionText = document.querySelector(".description");
const priceTag = document.querySelector(".pricing");

//cal total cost pricing
var sum = 0;
var buy = 0;
$('.pricing').each(function () {
    var val = $.trim($(this).text());

    if (val) {
        val = parseFloat(val.replace(/^\$/, ""));

        sum += !isNaN(val) ? val : 0;
    }
});
const cost = (Math.round(sum * 100) / 100).toFixed(2);
$('.total-pricing').html(cost);
//cal total purchased 
$('.purchased').each(function () {
    var val = $.trim($(this).text());

    if (val) {
        val = parseFloat(val.replace(/^\$/, ""));

        buy += !isNaN(val) ? val : 0;
    }
});
const bought = (Math.round(buy * 100) / 100).toFixed(2);
$('.total-purchased').html(bought);

//click events
$('#cpu').click(() => {
    window.open("https://www.amd.com/en/products/cpu/amd-ryzen-7-3700x", "_blank")
});
$('#aio').click(() => {
    window.open("https://www.nzxt.com/products/kraken-x53", "_blank")
});
$('.branding').click(() => {
    window.open("https://deadfiesta.studio/")
})
$('#ryzen3700').click(() => {
    window.open("https://www.amazon.sg/AMD-Ryzen-3700X-16-Thread-Processor/dp/B07SXMZLPK/ref=sr_1_1?dchild=1&keywords=ryzen+3700x&qid=1600333382&sr=8-1", "_blank")
})
$('#nzxtm22').click(() => {
    window.open("https://www.amazon.sg/NZXT-Kraken-120mm-All-One/dp/B079JF6NDC/ref=sr_1_1?dchild=1&keywords=kraken+m22&qid=1600318203&sr=8-1&load-pop-up=1&", "_blank")
})
$('#corsairvengence').click(() => {
    window.open("https://www.lazada.sg/products/corsair-vengeance-lpx-32gb-2x16gb-ddr4-3600mhz-c18-amd-ryzen-dimm-desktop-memory-kit-black-cmk32gx4m2z3600c18-i706136909-s2209694374.html?mp=1&spm=spm%3Da2o42.order_details.item_title.1", "_blank")
})
$('#samsungevo970').click(() => {
    window.open("https://www.lazada.sg/products/lowest-price-guranteed-samsung-970-evo-plus-500gb1tb2tb-nvme-m2-ssd-i990054906-s3590612800.html?mp=1&spm=spm%3Da2o42.order_details.item_title.1", "_blank")
})
$('#samsungevo870').click(() => {
    window.open("https://www.amazon.sg/gp/product/B0786QNSBD/ref=ox_sc_act_title_1?smid=ARPIJN329XQ0D&psc=1", "_blank")
})
$('#seagatebarracuda').click(() => {
    window.open("https://www.lazada.sg/products/seagate-barracuda-st2000dm008-2tb-7200-rpm-256mb-cache-sata-60gbs-35-hard-drive-bare-drive-i324910907-s676724344.html?mp=1", "_blank")
})
$('#evgasupernova').click(() => {
    window.open("https://www.lazada.sg/products/evga-supernova-850-g-80-plus-gold-850w-fully-modular-fdb-fan-10-year-warranty-includes-power-on-self-tester-power-supply-120-gp-0850-x3-evga-850w-psu-i265332042-s411955592.html?mp=1", "_blank")
})
$('#nzxth210i').click(() => {
    window.open("https://www.lazada.sg/products/nzxt-h210i-mini-tower-case-cam-powered-premium-mini-itx-case-i447424576-s1190472822.html?mp=1", "_blank")
})
$('#bequietsilentwings').click(() => {
    window.open("https://www.lazada.sg/products/be-quiet-silent-wings-3-120mm-140-mm-pwm-fans-i426170115-s1090828642.html?", "_blank")
})

//mouseover events
// $('.type').addClass('unselected');
$('.part').hover(
    function () {
        var type = "#" + $(this).attr('type');
        $(type).addClass('selectedhover');
    }, function () {
        var type = "#" + $(this).attr('type');
        $(type).removeClass('selectedhover');
    }
);

//scrollreveal events
var slideUp = {
    distance: '5em',
    origin: 'bottom',
    opacity: '0',
}

var fadeIn = {
    distance: '1em',
    origin: 'bottom',
    opacity: '0',
}
// ScrollReveal().reveal('.type', fadeIn)
ScrollReveal().reveal('.part', slideUp)

//counterup 
// $('.pricing').counterUp();
$('.total-pricing').counterUp();
$('.total-purchased').counterUp();

//scrollmagic events
//init controller
var cpu, aio, mobo, gpu, ram, hdd, psu, chas, acc, fan;

function calculateHeight() {
    var type = $('.type').height() + parseInt($('.type').css('margin-top')) + parseInt($('.type').css('margin-bottom')) + parseInt($('.type').css('padding-top')) + parseInt($('.type').css('padding-bottom'));
    var pad = parseInt($('.part').css('padding-top')) + parseInt($('.part').css('padding-bottom')) + parseInt($('.part').css('margin-top')) + parseInt($('.part').css('margin-bottom'));
    var spaces = type + pad;
    cpu = spaces + $('#processor').height();
    aio = spaces + $('#liquidcooler').height();
    mobo = spaces + $('#motherboard').height();
    gpu = spaces + $('#graphics').height();
    ram = spaces + $('#memory').height();
    hdd = type + $('#storage-1').height() + pad + $('#storage-2').height() + pad + $('#storage-3').height() + pad;
    psu = spaces + $('#powersupply').height();
    chas = spaces + $('#chassis').height();
    acc = spaces + $('#accessories').height();
    fan = spaces +$('#fans').height();
}

const scrollMagic = () => {
    var controller = new ScrollMagic.Controller({});

    new ScrollMagic.Scene({
        triggerElement: "#typecpu", duration: cpu
    })
        .setClassToggle("#typecpu, #processor", "selected")
        .addTo(controller)
        // .addIndicators();

    new ScrollMagic.Scene({
        triggerElement: "#typeaio", duration: aio
    })
        .setClassToggle("#typeaio, #liquidcooler", "selected")
        .addTo(controller)
        // .addIndicators();

    new ScrollMagic.Scene({
        triggerElement: "#typemobo", duration: mobo
    })
        .setClassToggle("#typemobo, #motherboard", "selected")
        .addTo(controller)
        // .addIndicators();

    new ScrollMagic.Scene({
        triggerElement: "#typegpu", duration: gpu
    })
        .setClassToggle("#typegpu, #graphics", "selected")
        .addTo(controller)
        // .addIndicators();

    new ScrollMagic.Scene({
        triggerElement: "#typeram", duration: ram
    })
        .setClassToggle("#typeram, #memory", "selected")
        .addTo(controller)
        // .addIndicators();

    new ScrollMagic.Scene({
        triggerElement: "#typehdd", duration: hdd
    })
        .setClassToggle("#typehdd, #storage-1, #storage-2, #storage-3", "selected")
        .addTo(controller)
        // .addIndicators();

    new ScrollMagic.Scene({
        triggerElement: "#typepsu", duration: psu
    })
        .setClassToggle("#typepsu, #powersupply", "selected")
        .addTo(controller)
        // .addIndicators();

    new ScrollMagic.Scene({
        triggerElement: "#typecase", duration: chas
    })
        .setClassToggle("#typecase, #chassis", "selected")
        .addTo(controller)
        // .addIndicators();

    new ScrollMagic.Scene({
        triggerElement: "#typeaccessories", duration: acc
    })
        .setClassToggle("#typeaccessories, #accessories", "selected")
        .addTo(controller)
        // .addIndicators();

    new ScrollMagic.Scene({
        triggerElement: "#typecasefan", duration: fan
    })
        .setClassToggle("#typecasefan, #fans", "selected")
        .addTo(controller)
        // .addIndicators();


}

$(document).ready(function () {
    calculateHeight();
    scrollMagic();
})

$(window).resize(function() {
    calculateHeight();
    scrollMagic();
})