const hamburger = document.querySelector(".hamburger");

const handleHamburgerEvent = (() => {
  const hamburger = document.querySelector(".hamburger");
  if (!hamburger) return;

  hamburger.addEventListener("click", () => {
    const body = document.querySelector("body");

    if (body) {
      body.classList.toggle("max-md:overflow-hidden");
    }

    const nav = document.querySelector("nav[role='navigation']");

    if (nav) {
      nav.classList.toggle("expanded");
    }
  });
})();
