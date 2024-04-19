document.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline({ defaults: { duration: 1 } });
  
  tl.from("#navbar", {
    opacity: 0,
    y: "-100",
    ease: "power1.out",
  })
  .from('#ultra-txt', {
    opacity:  0,
    duration: 0.8,
    y: 20,
    stagger:0.2
  })
  .from('#ultra-txt2', {
    opacity:  0,
    duration: 0.8,
    y: 20,
    stagger:0.1
  });;
});

const tl = gsap.timeline({ paused: true });

tl.to("#menu-sect", {
  autoAlpha: 1,
  delay: 0.1,
  ease: "power1.in",
})
  .from("#menu-sect li", {
    opacity: 0,
    y: 20,
    duration: 0.3,
    stagger: 0.2,
  })
  .to("#sec-sep", {
    autoAlpha: 1,
    duration: 1.5,
    width: "100%",
    ease: "power4.inOut",
  });

const menubtn = document.getElementById("menubtn");
const closebtn = document.getElementById("closebtn");
const menuSection = document.getElementById("menu-sect");

function toggleMenu(e) {
  e.preventDefault();
  menuSection.classList.toggle("hidden");

  const isOpen = !menuSection.classList.contains("hidden");
  if (isOpen) {
    tl.play();
  } else {
    tl.reverse();
  }
}

menubtn.addEventListener("click", toggleMenu);
closebtn.addEventListener("click", toggleMenu);
