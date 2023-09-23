gsap.registerPlugin(ScrollTrigger);

const aboutBlock = document.querySelector(".about-block");
const eventBlock = document.querySelector(".next-event-block");
const storeBlocks = document.querySelectorAll(".store-block");

gsap.from(aboutBlock, {
  autoAlpha: 0,
  y: 30,
  duration: 1.5,
  // ease: "power1.inOut",
  scrollTrigger: {
    trigger: aboutBlock,
    start: "top 90%",
    // markers: true,
  },
});
gsap.from(eventBlock, {
  autoAlpha: 0,
  y: 30,
  duration: 1.5,
  // ease: "power1.inOut",
  scrollTrigger: {
    trigger: eventBlock,
    start: "top 90%",
    // markers: true,
  },
});
storeBlocks.forEach((store, index) => {
  gsap.from(store, {
    autoAlpha: 0,
    y: 30,
    duration: 1.5,
    // ease: "power1.inOut",
    scrollTrigger: {
      trigger: store,
      start: "top 90%",
      // markers: true,
    },
  });
});
