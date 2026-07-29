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
  const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

  const links = document.querySelectorAll(".nav-links a");

  links.forEach((link) => {
    const linkURL = new URL(link.getAttribute("href"), window.location.href);

    const linkPage =
      linkURL.pathname.split("/").pop() || "index.html";

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

    const directionDistance = Math.abs(
      currentScrollY - directionStartY,
    );
    if (currentScrollY < 60) {
      header.classList.remove("nav-compact");
    } else if (
      currentDirection === "down" &&
      directionDistance >= 28
    ) {
      header.classList.add("nav-compact");
    } else if (
      currentDirection === "up" &&
      directionDistance >= 12
    ) {
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
  mobileNavigation.addEventListener(
    "change",
    handleViewportChange,
  );
  updateHeader();
}

loadComponent("header", "./partials/header.html");
loadComponent("footer", "./partials/footer.html");
