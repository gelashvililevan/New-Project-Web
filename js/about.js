const chapterNav = document.querySelector(".about-chapter-nav");

if (chapterNav) {
  const chapterLinks = [...chapterNav.querySelectorAll(".about-chapter-link")];

  const chapters = chapterLinks
    .map((link) => document.getElementById(link.dataset.chapter))
    .filter(Boolean);

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const mobileNavigationQuery = window.matchMedia("(max-width: 900px)");

  let updateRequested = false;
  let lastScrollPosition = window.scrollY;

  function clamp(value, minimum, maximum) {
    return Math.min(Math.max(value, minimum), maximum);
  }

  function updateNavigationSize() {
    const currentScrollPosition = window.scrollY;
    const scrollDifference = currentScrollPosition - lastScrollPosition;

    if (!mobileNavigationQuery.matches) {
      chapterNav.classList.remove("is-compact");
      lastScrollPosition = currentScrollPosition;
      return;
    }

    if (currentScrollPosition < 80) {
      chapterNav.classList.remove("is-compact");
    } else if (scrollDifference > 4) {
      chapterNav.classList.add("is-compact");
    } else if (scrollDifference < -4) {
      chapterNav.classList.remove("is-compact");
    }

    lastScrollPosition = currentScrollPosition;
  }

  function updateChapterNavigation() {
    updateRequested = false;

    if (!chapters.length) return;

    updateNavigationSize();

    const readingLine = window.innerHeight * 0.38;
    let activeIndex = 0;

    chapters.forEach((chapter, index) => {
      if (chapter.getBoundingClientRect().top <= readingLine) {
        activeIndex = index;
      }
    });

    if (
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight - 4
    ) {
      activeIndex = chapters.length - 1;
    }

    chapterLinks.forEach((link, index) => {
      const isActive = index === activeIndex;

      link.classList.toggle("is-active", isActive);

      if (isActive) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    const firstChapterTop =
      chapters[0].getBoundingClientRect().top + window.scrollY;

    const lastChapter = chapters[chapters.length - 1];

    const lastChapterBottom =
      lastChapter.getBoundingClientRect().bottom + window.scrollY;

    const currentPosition = window.scrollY + readingLine;

    const progress = clamp(
      (currentPosition - firstChapterTop) /
        (lastChapterBottom - firstChapterTop),
      0,
      1,
    );

    chapterNav.style.setProperty("--story-progress", progress.toFixed(4));

    const siteHeader =
      document.querySelector("#header header") ||
      document.getElementById("header");

    const footer = document.getElementById("footer");

    const headerBottom = siteHeader?.getBoundingClientRect().bottom ?? 0;

    const headerIsVisible = window.scrollY < 80 || headerBottom > 8;

    const footerIsVisible =
      footer && footer.getBoundingClientRect().top < window.innerHeight - 20;

    chapterNav.classList.toggle(
      "is-hidden",
      Boolean(headerIsVisible || footerIsVisible),
    );
  }

  function requestNavigationUpdate() {
    if (updateRequested) return;

    updateRequested = true;
    requestAnimationFrame(updateChapterNavigation);
  }

  chapterLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const chapter = document.getElementById(link.dataset.chapter);

      if (!chapter) return;

      event.preventDefault();
      chapterNav.classList.remove("is-compact");

      chapter.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });

      history.replaceState(null, "", `#${chapter.id}`);
    });
  });

  window.addEventListener("scroll", requestNavigationUpdate, {
    passive: true,
  });

  window.addEventListener("resize", requestNavigationUpdate);
  window.addEventListener("load", updateChapterNavigation);

  mobileNavigationQuery.addEventListener("change", updateChapterNavigation);

  updateChapterNavigation();
}
