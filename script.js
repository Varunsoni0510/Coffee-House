//loader function

function loading() {
  var a = 0;
  setInterval(() => {
    a = a + Math.floor(Math.random() * 15);
    if (a < 100) {
      document.querySelector("#loader h1").innerHTML = a + "%";
    } else {
      a = 100;
      document.querySelector("#loader h1").innerHTML = a + "%";
    }
  }, 50);
}
loading();

var load = gsap.timeline();

load.to("#loader h1", {
  onStart: loading(),
});

load.to("#loader", {
  top: "-100%",
  delay: 0.5,
  duration: 1,
  opacity: 0,
});

//menu bar

function myNav() {
  let bar = document.querySelector(".menu-bar");
  let nav = document.querySelector(".navigation");
  bar.onclick = () => {
    if (nav.style.left == "0%") {
      nav.style.left = "-100%";
      bar.innerHTML = '<i class="ri-menu-line"></i>';
    } else {
      nav.style.left = "0%";
      bar.innerHTML = '<i class="ri-close-line"></i>';
      bar.style.color = "white";
      bar.style.size = "40px"

    }
  };
}
myNav();

window.onload = () => {
  let homeContent = document.querySelector(".home-content");
  homeContent.style.left = "50px";
};

// var timeline  = gsap.timeline();

load.from(".info-section", {
  y: 50,
  delay: 0.2,
  opacity: 0,
  stagger: 0.3,
  duration: 0.5,
});

load.from(".info-right", {
  y: 50,
  delay: 0,
  opacity: 0,
  stagger: 0.2,
  duration: 0.5,
});
// var navbar1  = gsap.timeline();

load.from(".navigation li", {
  y: -20,
  delay: 0,
  opacity: 0,
  stagger: 0.2,
  duration: 0.5,
});

// var homepage = gsap.timeline();

gsap.from(".home-content", {
  x: -200,
  delay: 2,
  opacity: 0,
  stagger: 0.2,
  duration: 0.5,
});

//page 2 animation

var services = gsap.timeline();

services.from(".service-one", {
  x: -200,
  delay: 1,
  opacity: 0,
  stagger: 1,
  duration: 1,
  scrollTrigger: {
    trigger: ".service-one",
    scroller: "body",
    // markers : true,
    start: "top 80%",
    end: "top 35%",
    scrub: 1,
  },
});

gsap.from(".shop1", {
  x: -1500,
  delay: 0.5,
  duration: 1,
  stagger: 0.5,
  opacity: 0,
  scrollTrigger: {
    trigger: ".shop1",
    scroller: "body",
  },
});
