gsap.registerPlugin(Flip);

const navItems = document.querySelectorAll("nav a");
const activeNav = document.querySelector(".active");

for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", function () {
    console.log(`You clicked ${navItems[i].textContent}`);
    const state = Flip.getState(activeNav);
    navItems[i].appendChild(activeNav);
    Flip.from(state, {
      duration: 1.25,
      absolute: true,
      ease: "elastic.out(1,0.5)",
    });
  });
}
