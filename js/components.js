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
      highlightCurrentPage();

      const header = document.querySelector("header");

      window.addEventListener("scroll", () => {
        header.classList.toggle("scrolled", window.scrollY > 20);
      });
    }
  } catch (error) {
    console.error(error);
  }
}

function highlightCurrentPage() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  const links = document.querySelectorAll(".nav-links a");

  links.forEach((link) => {
    const href = link.getAttribute("href");

    if (href === currentPage) {
      link.classList.add("active");
    }
  });
}

loadComponent("header", "./partials/header.html");
loadComponent("footer", "./partials/footer.html");
