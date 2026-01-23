// Intersection Observer for reveal animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15
  }
);

document.querySelectorAll(".reveal").forEach(el => {
  observer.observe(el);
});

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
}

const editorialTrack = document.querySelector(".third-section #carouselTrack");
const editorialNext = document.querySelector(".third-section .nav-btn.next");
const editorialPrev = document.querySelector(".third-section .nav-btn.prev");

if (editorialTrack && editorialNext && editorialPrev) {
  const CARD_WIDTH = 280;
  const dir = document.documentElement.dir === "rtl" ? -1 : 1;
  
  editorialNext.onclick = () => {
    editorialTrack.scrollBy({ left: CARD_WIDTH * dir, behavior: "smooth" });
  };
  
  editorialPrev.onclick = () => {
    editorialTrack.scrollBy({ left: -CARD_WIDTH * dir, behavior: "smooth" });
  };
}

// Horizontal Section carousel
const horizontalTrack = document.querySelector(".horizontal-section .horizontal-track");
const horizontalNext = document.querySelector(".horizontal-section [data-next]");
const horizontalPrev = document.querySelector(".horizontal-section [data-prev]");

if (horizontalTrack && horizontalNext && horizontalPrev) {
  const STEP = 320;
  const dir = document.documentElement.dir === "rtl" ? -1 : 1;
  
  horizontalNext.onclick = () => {
    horizontalTrack.scrollBy({ left: STEP * dir, behavior: "smooth" });
  };
  
  horizontalPrev.onclick = () => {
    horizontalTrack.scrollBy({ left: -STEP * dir, behavior: "smooth" });
  };
}

document.querySelectorAll("[data-track]").forEach(track => {
  const section = track.closest(".horizontal-section");
  const next = section.querySelector("[data-next]");
  const prev = section.querySelector("[data-prev]");

  if (next && prev) {
    const step = 320;
    const dir = document.documentElement.dir === "rtl" ? -1 : 1;

    next.onclick = () => {
      track.scrollBy({ left: step * dir, behavior: "smooth" });
    };

    prev.onclick = () => {
      track.scrollBy({ left: -step * dir, behavior: "smooth" });
    };
  }
});
