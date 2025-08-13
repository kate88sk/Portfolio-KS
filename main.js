// === HAMBURGER TOGGLE ===
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".mobile-nav");

  hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  // === SCROLL NAVIGATION ===
  document.querySelectorAll("a").forEach(link => {
    if (link.matches(".resume-btn, .project-btn")) return;

    if (link.getAttribute("href").startsWith("#")) {
      link.addEventListener("click", e => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: "smooth"
          });
        }
      });
    }
  });

  // === FADE-IN SCROLL ANIMATIONS ===
  const scrollElements = document.querySelectorAll(".fade-in-scroll");

  const elementInView = (el, dividend = 1.25) => {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
  };

  const displayScrollElement = element => {
    element.classList.add("visible");
  };

  const hideScrollElement = element => {
    element.classList.remove("visible");
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach(el => {
      if (elementInView(el)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    });
  };

  window.addEventListener("scroll", handleScrollAnimation);
  handleScrollAnimation();

  // === PROJECT FILTER FUNCTIONALITY ===
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCategories = document.querySelectorAll(".projects-gallery .project-category");

  if (!filterButtons.length || !projectCategories.length) return;

  // Initial display
  projectCategories.forEach(category => {
    if (category.getAttribute("data-category") === "web") {
      category.style.display = "flex";
    } else {
      category.style.display = "none";
    }
  });

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const selected = button.getAttribute("data-filter");

      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      projectCategories.forEach(category => {
        if (category.getAttribute("data-category") === selected) {
          category.style.display = "flex";
        } else {
          category.style.display = "none";
        }
      });
    });
  });
});




