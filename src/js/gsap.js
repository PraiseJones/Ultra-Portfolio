const tl = gsap.timeline({ paused: true });

const animateMenuOpen = () => {
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
  });
};

const openMenu = () => {
  const menuButton = document.getElementById("menubtn");
  const closeButton = document.getElementById("closebtn");
  const menuSection = document.getElementById("menu-sect");

  function toggleMenu(e) {
    e.preventDefault();
    menuSection.classList.toggle("hidden");

    const isOpen = !menuSection.classList.contains("hidden");
    if (isOpen) {
      animateMenuOpen();
      tl.play();
    } else {
    //   tl.reverse();
    }
  }

  menuButton.addEventListener("click", toggleMenu);
  closeButton.addEventListener("click", toggleMenu);
};

openMenu();

