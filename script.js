gsap.registerPlugin(ScrollTrigger);


gsap.to(".FB1", {
  scrollTrigger: ".FB1",
  // x: 10,
  rotation: 360,
  duration: 2,
});

gsap.from(".IB1", { 
  scrollTrigger: ".IB1",
  duration: 2, 
  rotation: 180,
  
                   // x: "-100vw"
                  });
