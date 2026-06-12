
  const hamburger = document.querySelector(".hamburger");
  const siteNav = document.querySelector("#site-nav");

  hamburger.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    hamburger.classList.toggle("is-open", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
  });
