gsap.registerPlugin(ScrollTrigger);


gsap.to(".FB1", {
  scrollTrigger: ".FB1",
  x: 1000,
  rotation: 360,
  duration: 2,
});



gsap.from(".IB1", { duration: 2, x: "-100vw" });
