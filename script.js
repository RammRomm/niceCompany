gsap.registerPlugin(ScrollTrigger);

gsap.to(".FB1", {
  scrollTrigger: {
    trigger: ".FB1",
    // scrub: true,
    toggleActions: "restart pause reverse pause",
  },
  x: 500,
  rotation: 360,
  duration: 2,
});

gsap.to(".IB1", {
  scrollTrigger: {
    trigger: ".IB1",
    // scrub: true,
    toggleActions: "restart pause reverse pause",
  },
  x: 500,
  rotation: 360,
  duration: 2,
});
