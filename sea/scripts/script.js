$(function () {
  new fullpage("#fullpage", {
    //options here
    anchors: ["home", "work", "something"],
    autoScrolling: true,
    scrollHorizontally: true,
    navigation: true,
    onLeave: function (origin, destination, direction) {
      $class = destination.anchor;
      $content = $("#content");
      $content.fadeOut(200, function () {
        appendContent($class);
        setTimeout(function () {
          $content.fadeIn(300);
        }, 200);
      });
      setTimeout(function () {
        $("#glassmorphism").removeClass().addClass($class);
      }, 200);
    },
  });
});

function appendContent(html) {
  let append = "";
  switch (html) {
    case "home":
      append = `<div class="avatar-container">\
        <div class="img"></div></div>\
        <h4>Hello There</h4>\
        <div class="title-container"><h2>I'm&nbsp;</h2><h1>Wen Kiong</h1></div>\
        <p>I have worked at NUS for 4 years as a visual designer. I mainly worked with software engineers to\
        create high fidelity mobile and desktop app mockups for commercial and government entities.</p>\
        <ul class="fields"><li>#ui/ux</li><li>#animation</li><li>#frontendweb</li></ul>\
        <ul class="companies"><li><object data="./images/logos_nus.svg"></object></li>\
        <li><object data="./images/logos_red-jasper.svg"></object></li>\
        <li><object data="./images/logos_mindef.svg"></object></li>\
        <li><object data="./images/logos_caas.svg"></object></li>\
        </ul>`;
      break;
    case "work":
      append = `<h4>Previous Work</h4>\
        <p>Our team research works are focused on industrial analytics and education tools leveraging on the\
        technology of A.I. My design scope mainly involved designing marketing and publicity material\
        such as web, mobile/desktop app, pitch deck and video productions. Apart from internal\
        collaborations with faculties within the university, we also work with commercial businesses to\
        improve their business operations.</p>\
        <ul class="projects">\
        <li><div onclick="openLinks('alim', 'fleet-management/v3/timeline.html')" class="project-thumbnails"id="fleet"></div></li>\
        <li><div onclick="openLinks('alim', 'nus-suite')" class="project-thumbnails" id="suite"></div></li>\
        <li><div onclick="openLinks('alim', 'retail-app')" class="project-thumbnails" id="retail"></div></li>\
        <li><div onclick="openLinks('alim', 'exercise-app')" class="project-thumbnails" id="fit"></div></li>\
        </ul>\
        <div onclick="openLinks('behance', 'deadfiesta')" class="view-more"><div class="be-container"><i class="fab fa-behance"></i></div>\
        <h3>View more projects</h3><i class="fas fa-angle-right"></i></div>`;
  }

  $("#content").html(append);
}

function openLinks(server, what) {
  let domain = "";

  switch (server) {
    case "alim":
      domain = "https://alim.algorithmexchange.com/";
      break;
    case "behance":
      domain = "https://www.behance.net/";
      break;
    case "others":
      domain = server;
  }

  window.open(domain + what, "_blank");
}

const controller = new ScrollMagic.Controller();
const fader = document.querySelector(".black");

$(".black").each(function (i) {
  let $fader = $(this);
  new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.5,
    duration: $fader.height(),
  })
    .setClassToggle(this, "faded")
    .addTo(controller);
  // .addIndicators()
});

var init = $(".init-container");
var initfade = gsap.fromTo(
  init,
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 0.7,
    ease: Power4.easeInOut,
    onComplete: removeInit,
  }
);

function removeInit() {
  $(".init-container").css("display", "none");
}

function toggleGlass(e) {
  e.stopPropagation();
  $glass = $(".glass-container");
  $glass.toggleClass("hide");
  $glass.hasClass("hide") ? toFade("y") : toFade("n");

  function toFade(response) {
    $icon = $(".icon");
    $content = $("#content");
    $multiply = $(".multiply-container");
    if (response == "y") {
      $content.css("visibility", "hidden");
    } else {
      $content.css("visibility", "visible");
    }
    $icon.toggleClass("up");
    $multiply.toggleClass("faded").toggleClass("passthrough");
  }
}
