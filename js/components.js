(() => {
  const navigationEntry = performance.getEntriesByType?.("navigation")[0];
  const isReload = navigationEntry
    ? navigationEntry.type === "reload"
    : performance.navigation?.type === 1;
  if (!isReload) return;
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  function resetScrollPosition() {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }
  resetScrollPosition();
  window.addEventListener("pageshow", resetScrollPosition, { once: true });
})();

async function loadComponent(id, file) {
  const element = document.getElementById(id);

  if (!element) return;

  try {
    const response = await fetch(file);

    if (!response.ok) {
      throw new Error(`Couldn't load ${file}`);
    }

    element.innerHTML = await response.text();

    if (id === "header") {
      initializeHeader();
    }

    if (id === "footer") {
      initializeFooterAnimations();
    }
  } catch (error) {
    console.error(error);
  }
}

function initializeHeader() {
  const header = document.querySelector(".site-header");

  if (!header) return;

  highlightCurrentPage();
  initializeHeaderScroll(header);
}

function highlightCurrentPage() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  const links = document.querySelectorAll(".nav-links a");

  links.forEach((link) => {
    const linkURL = new URL(link.getAttribute("href"), window.location.href);

    const linkPage = linkURL.pathname.split("/").pop() || "index.html";

    const isCurrentPage = linkPage === currentPage;

    link.classList.toggle("active", isCurrentPage);

    if (isCurrentPage) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function initializeHeaderScroll(header) {
  const mobileNavigation = window.matchMedia("(max-width: 850px)");

  let lastScrollY = Math.max(window.scrollY, 0);
  let directionStartY = lastScrollY;
  let currentDirection = null;
  let ticking = false;

  function updateHeader() {
    const currentScrollY = Math.max(window.scrollY, 0);
    const scrollDifference = currentScrollY - lastScrollY;

    header.classList.toggle("scrolled", currentScrollY > 20);

    if (!mobileNavigation.matches) {
      header.classList.remove("nav-compact");

      lastScrollY = currentScrollY;
      ticking = false;

      return;
    }

    let nextDirection = currentDirection;

    if (scrollDifference > 0) {
      nextDirection = "down";
    } else if (scrollDifference < 0) {
      nextDirection = "up";
    }

    if (nextDirection !== currentDirection) {
      currentDirection = nextDirection;
      directionStartY = lastScrollY;
    }

    const directionDistance = Math.abs(currentScrollY - directionStartY);
    if (currentScrollY < 60) {
      header.classList.remove("nav-compact");
    } else if (currentDirection === "down" && directionDistance >= 28) {
      header.classList.add("nav-compact");
    } else if (currentDirection === "up" && directionDistance >= 12) {
      header.classList.remove("nav-compact");
    }
    lastScrollY = currentScrollY;
    ticking = false;
  }

  function handleScroll() {
    if (ticking) return;

    ticking = true;
    window.requestAnimationFrame(updateHeader);
  }

  function handleViewportChange() {
    lastScrollY = Math.max(window.scrollY, 0);
    directionStartY = lastScrollY;
    currentDirection = null;

    if (!mobileNavigation.matches) {
      header.classList.remove("nav-compact");
    }

    updateHeader();
  }
  window.addEventListener("scroll", handleScroll, {
    passive: true,
  });
  mobileNavigation.addEventListener("change", handleViewportChange);
  updateHeader();
}

function initializeFooterAnimations() {
  const footer = document.querySelector("footer");

  if (!footer) return;

  const headline = footer.querySelector(".footer-left");
  const partnerButton = footer.querySelector(".partner-btn");
  const navigationIcons = [...footer.querySelectorAll(".footer-links img")];
  const socialLinks = [...footer.querySelectorAll(".footer-right a")];
  const footerBottom = footer.querySelector(".footer-bottom");
  const revealItems = [
    headline,
    partnerButton,
    ...navigationIcons,
    ...socialLinks,
    footerBottom,
  ].filter(Boolean);

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (headline) {
    headline.style.setProperty("--footer-delay", "0ms");
  }

  if (partnerButton) {
    partnerButton.style.setProperty("--footer-delay", "80ms");
  }

  navigationIcons.forEach((icon, index) => {
    icon.style.setProperty("--footer-delay", `${index * 55}ms`);
  });

  socialLinks.forEach((link, index) => {
    link.style.setProperty("--footer-delay", `${index * 70}ms`);
  });

  if (footerBottom) {
    footerBottom.style.setProperty("--footer-delay", "100ms");
  }

  revealItems.forEach((item) => {
    item.classList.add("footer-reveal-item");
  });

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => {
      item.classList.add("is-visible");
    });

    return;
  }

  const footerObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -30px",
    },
  );

  revealItems.forEach((item) => {
    footerObserver.observe(item);
  });
}

loadComponent("header", "./partials/header.html");
loadComponent("footer", "./partials/footer.html");
