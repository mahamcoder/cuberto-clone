var tl=gsap.timeline();
tl.from("#nav img",{
  y:"-300%",
  duration:1,
  opacity:0,
  delay:0.2
})
tl.from("#right .nav",{
y:"-300%",
  duration:0.6,
  opacity:0,
  stagger:0.3
})
tl.from("#homemain h1",{
  x:"-30%",
    duration:0.5,
    opacity:0,
  })
  tl.from("#heading h2",{
    y:"-30%",
      duration:0.6,
      opacity:0,
      stagger:0.3,
      delay:-1
    })
    tl.from("#homelast p",{
      x:"-30%",
        duration:0.6,
        opacity:0,
        stagger:0.3
      })
     tl.from("#featured h1",{
      x:-300,
      opacity:0,
      duration:0.5,
      stagger:0.4,
      scrollTrigger:{
        trigger:"#featured h1",
        scroller:"body",
        start:"top 85%",
        scrub:0.2
      }
     })
Shery.mouseFollower({
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.3,
});
Shery.makeMagnet(".menu , #button" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
Shery.hoverWithMediaCircle(".hr" /* Element to target.*/, {

  videos: ["0.mp4", "2.mp4","3.mp4"],
});
gsap.to(".fleftel", {
  scrollTrigger: {
    trigger: "#fimages",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1
  },
  y: "-300%",
  ease: Power1
})
let sections = document.querySelectorAll(".fleftel");
Shery.imageEffect(".images", {
  style: 5,
  config:{
    onMouse:{
      value:1
    }
  },
  slideStyle: (setScroll) => {
    sections.forEach(function (section, index) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: function (prog) {
          setScroll(prog.progress + index)
        },
      })
    })
  },
});
