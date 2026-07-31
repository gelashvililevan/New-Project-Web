(() => {
  const page = document.querySelector(".partners-page");
  if (!page) return;
  const heroOutro = document.querySelector(".partners-hero-outro");
  const revealSections = [
    document.querySelector(".partners-first"),
    document.querySelector(".partners-final"),
  ].filter(Boolean);
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const waitingSections = new Set();
  let introComplete = false;
  let introFallbackTimer = null;
  document.documentElement.classList.add(
    "partners-js",
    "partners-intro-running",
  );
  function revealSection(section) {
    if (!section) return;
    section.classList.add("is-visible");
  }
  function completeIntro() {
    if (introComplete) return;
    introComplete = true;
    if (introFallbackTimer !== null) {
      window.clearTimeout(introFallbackTimer);
      introFallbackTimer = null;
    }
    document.documentElement.classList.remove("partners-intro-running");
    document.documentElement.classList.add("partners-intro-complete");
    waitingSections.forEach((section) => {
      revealSection(section);
    });
    waitingSections.clear();
  }
  function handleSectionEntry(entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      if (introComplete) {
        revealSection(entry.target);
      } else {
        waitingSections.add(entry.target);
      }
      observer.unobserve(entry.target);
    });
  }
  function initializeSectionObserver() {
    if (!("IntersectionObserver" in window)) {
      revealSections.forEach((section) => {
        if (introComplete) {
          revealSection(section);
        } else {
          waitingSections.add(section);
        }
      });
      return;
    }
    const sectionObserver = new IntersectionObserver(handleSectionEntry, {
      threshold: 0.18,
      rootMargin: "0px 0px -8% 0px",
    });
    revealSections.forEach((section) => {
      sectionObserver.observe(section);
    });
  }
  function handleHeroAnimationEnd(event) {
    if (event.animationName !== "partnersTextReveal") {
      return;
    }
    completeIntro();
  }
  function initializeIntroSequence() {
    if (reducedMotion.matches) {
      completeIntro();
      revealSections.forEach(revealSection);
      return;
    }
    if (heroOutro) {
      heroOutro.addEventListener("animationend", handleHeroAnimationEnd, {
        once: true,
      });
    }

    introFallbackTimer = window.setTimeout(completeIntro, 3400);
  }
  initializeSectionObserver();
  initializeIntroSequence();
})();
