const galleryImages = [
  {
    src: "./images/gallery/competitions/copa_catalunya_absolut_final.JPEG",
    title: "Where the season began.",
    meta: "Copa Catalunya · Barcelona · 11.04.2026",
    category: "fight",
    shape: "landscape",
  },
  {
    src: "./images/gallery/competitions/super_copa_de_espana_ciutat_de_barcelona_semi_final_2.JPG",
    title: "Control through movement.",
    meta: "Super Copa de España · Barcelona · 02.05.2026",
    category: "fight",
    shape: "landscape",
  },
  {
    src: "./images/gallery/competitions/super_copa_de_espana_ciutat_de_barcelona_semi_final.jpg",
    title: "Balance before attack.",
    meta: "Super Copa de España · Barcelona · 02.05.2026",
    category: "fight",
    shape: "portrait",
  },
  {
    src: "./images/gallery/competitions/super_copa_de_espana_ciutat_de_barcelona_semi_final_4.JPG",
    title: "Technique under pressure.",
    meta: "Super Copa de España · Barcelona · 02.05.2026",
    category: "fight",
    shape: "portrait",
  },
  {
    src: "./images/gallery/competitions/super_copa_de_espana_ciutat_de_barcelona_semi_final_3.jpg",
    title: "Trust the preparation.",
    meta: "Super Copa de España · Barcelona · 02.05.2026",
    category: "fight",
    shape: "portrait",
  },
  {
    src: "./images/gallery/training/teams_pokemon_competition.png",
    title: "People behind the work.",
    meta: "Team · Barcelona · 2026",
    category: "team",
    shape: "portrait",
  },
  {
    src: "./images/gallery/podiums/super_copa_de_espana_ciutat_de_barcelona_podium_1.jpg",
    title: "The result made visible.",
    meta: "Silver · Barcelona · 02.05.2026",
    category: "podium",
    shape: "landscape",
  },
  {
    src: "./images/gallery/podiums/super_copa_de_espana_ciutat_de_barcelona_podium_2.jpg",
    title: "A place earned.",
    meta: "Silver · Barcelona · 02.05.2026",
    category: "podium",
    shape: "landscape",
  },
  {
    src: "./images/gallery/podiums/super_copa_de_espana_ciutat_de_barcelona_podium_3.jpg",
    title: "Another chapter recorded.",
    meta: "Silver · Barcelona · 02.05.2026",
    category: "podium",
    shape: "landscape",
  },
  {
    src: "./images/gallery/competitions/super_copa_de_espana_absolut_jaca_bronze_final.jpg",
    title: "The final exchange.",
    meta: "Bronze contest · Jaca · 30.05.2026",
    category: "fight",
    shape: "landscape",
  },
  {
    src: "./images/gallery/competitions/super_copa_de_espana_absolut_jaca_round_1.jpg",
    title: "The first exchange.",
    meta: "Super Copa de España · Jaca · 30.05.2026",
    category: "fight",
    shape: "portrait",
  },
  {
    src: "./images/gallery/competitions/super_copa_de_espana_absolut_jaca_quarter_final.jpg",
    title: "Pressure finds its answer.",
    meta: "Super Copa de España · Jaca · 30.05.2026",
    category: "fight",
    shape: "portrait",
  },
  {
    src: "./images/gallery/competitions/super_copa_de_espana_absolut_jaca_bronze_final_2.jpg",
    title: "Commit to the moment.",
    meta: "Bronze contest · Jaca · 30.05.2026",
    category: "fight",
    shape: "landscape",
  },
  {
    src: "./images/gallery/competitions/super_copa_de_espana_absolut_jaca_bronze_final_3.jpg",
    title: "No space wasted.",
    meta: "Bronze contest · Jaca · 30.05.2026",
    category: "fight",
    shape: "landscape",
  },
  {
    src: "./images/gallery/competitions/super_copa_de_espana_absolut_jaca_bronze_final_4.jpg",
    title: "Until the final second.",
    meta: "Bronze contest · Jaca · 30.05.2026",
    category: "fight",
    shape: "landscape",
  },
  {
    src: "./images/gallery/podiums/super_copa_de_espana_absolut_jaca_podium.jpg",
    title: "A difficult day remembered.",
    meta: "Bronze · Jaca · 30.05.2026",
    category: "podium",
    shape: "landscape",
  },
  {
    src: "./images/gallery/podiums/super_copa_de_espana_absolut_jaca_team_picture.jpg",
    title: "Never built alone.",
    meta: "Team · Jaca · 30.05.2026",
    category: "team",
    shape: "portrait",
  },
  {
    src: "./images/gallery/podiums/copa_catalunya_juniors_podium.JPG",
    title: "The work made visible.",
    meta: "Gold · Barcelona · 06.06.2026",
    category: "podium",
    shape: "portrait",
  },
  {
    src: "./images/gallery/podiums/super_copa_de_espana_juniors_tortosa_podium_1.jpeg",
    title: "At the top of the podium.",
    meta: "Gold · Tortosa · 28.06.2026",
    category: "podium",
    shape: "landscape",
  },
  {
    src: "./images/gallery/podiums/super_copa_de_espana_juniors_tortosa_podium_2.jpeg",
    title: "A chapter worth keeping.",
    meta: "Gold · Tortosa · 28.06.2026",
    category: "podium",
    shape: "landscape",
  },
  {
    src: "./images/gallery/competitions/super_copa_de_espana_absolute_valencia_1.JPG",
    title: "A confidence-changing compliment.",
    meta: "Super Copa de España · Valencia · 16.08.2026",
    category: "fight",
    shape: "wide",
  },
  {
    src: "./images/gallery/competitions/super_copa_de_espana_absolute_valencia_2.JPG",
    title: "A lesson worth carrying.",
    meta: "Super Copa de España · Valencia · 16.08.2026",
    category: "fight",
    shape: "wide",
  },
];

const automaticShapes = [
  "wide",
  "portrait",
  "landscape",
  "square",
  "portrait",
  "landscape",
];

const archiveGrid = document.getElementById("archiveGrid");
const filters = document.getElementById("galleryFilters");
const totalElements = document.querySelectorAll("[data-gallery-total]");
const galleryExploreLabel = document.getElementById("galleryExploreLabel");
const feature = document.getElementById("galleryFeature");
const featuredImage = document.getElementById("featuredImage");
const featuredCurrent = document.getElementById("featuredCurrent");
const featuredTitle = document.getElementById("featuredTitle");
const featuredMeta = document.getElementById("featuredMeta");
const galleryReel = document.getElementById("galleryReel");
const featuredPrevious = document.getElementById("featuredPrevious");
const featuredNext = document.getElementById("featuredNext");
const lightbox = document.getElementById("galleryLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCurrent = document.getElementById("lightboxCurrent");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxMeta = document.getElementById("lightboxMeta");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrevious = document.getElementById("lightboxPrevious");
const lightboxNext = document.getElementById("lightboxNext");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

let selectedIndex = 0;
let activeFilter = "all";
let touchStartX = 0;
let revealObserver;

function formatNumber(number) {
  return String(number).padStart(2, "0");
}

function getImageShape(image, index) {
  return image.shape || automaticShapes[index % automaticShapes.length];
}

function updateGalleryTotals() {
  const total = galleryImages.length;
  const formattedTotal = formatNumber(total);

  totalElements.forEach((element) => {
    element.textContent = formattedTotal;
  });

  galleryExploreLabel.textContent = `EXPLORE THE ${total} FRAMES`;
}

function renderFilters() {
  const categories = [
    "all",
    ...new Set(galleryImages.map((image) => image.category).filter(Boolean)),
  ];

  filters.innerHTML = categories
    .map(
      (category, index) => `
        <button
          class="${index === 0 ? "is-active" : ""}"
          type="button"
          data-filter="${category}"
          aria-pressed="${index === 0}"
        >${category.toUpperCase()}</button>
      `,
    )
    .join("");
}

function createArchiveCard(image, index) {
  return `
        <button
          class="archive-card is-${getImageShape(image, index)}"
          type="button"
          data-index="${index}"
          data-category="${image.category}"
          aria-label="Open photograph ${index + 1}: ${image.title}"
        >
          <img
            src="${image.src}"
            alt="${image.title} ${image.meta}"
            loading="lazy"
            decoding="async"
          >
          <span class="archive-card-copy">
            <span class="archive-card-number">${formatNumber(index + 1)}</span>
            <span class="archive-card-text">
              <strong class="archive-card-title">${image.title}</strong>
              <small class="archive-card-meta">${image.meta}</small>
            </span>
          </span>
        </button>
      `;
}

function renderArchive(filter = activeFilter) {
  activeFilter = filter;

  const visibleImages = galleryImages
    .map((image, index) => ({ image, index }))
    .filter(
      ({ image }) => activeFilter === "all" || image.category === activeFilter,
    );

  const rows = [];

  for (let index = 0; index < visibleImages.length; index += 2) {
    rows.push(visibleImages.slice(index, index + 2));
  }

  archiveGrid.innerHTML = rows
    .map(
      (row) => `
        <div class="archive-row${row.length === 1 ? " is-single" : ""}">
          ${row
            .map(({ image, index }) => createArchiveCard(image, index))
            .join("")}
        </div>
      `,
    )
    .join("");

  archiveGrid.querySelectorAll(".archive-card").forEach((card) => {
    card.addEventListener("click", () => {
      selectedIndex = Number(card.dataset.index);
      updateFeature(selectedIndex);
      openLightbox(selectedIndex);
    });
  });

  initializeRevealObserver();
}

function getReelIndexes(centerIndex) {
  const count = galleryImages.length;
  return [-2, -1, 0, 1, 2].map(
    (offset) => (centerIndex + offset + count) % count,
  );
}

function renderReel() {
  galleryReel.innerHTML = getReelIndexes(selectedIndex)
    .map((index) => {
      const image = galleryImages[index];
      const activeClass = index === selectedIndex ? "is-active" : "";

      return `
        <button
          class="${activeClass}"
          type="button"
          data-index="${index}"
          aria-label="Select frame ${index + 1}"
          aria-pressed="${index === selectedIndex}"
        >
          <img src="${image.src}" alt="" loading="lazy" decoding="async">
        </button>
      `;
    })
    .join("");

  galleryReel.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      selectedIndex = Number(button.dataset.index);
      updateFeature(selectedIndex);
    });
  });
}

function swapImage(element, source, alt, callback) {
  if (reducedMotion.matches) {
    element.src = source;
    element.alt = alt;
    callback?.();
    return;
  }

  element.classList.add("is-changing");
  const preload = new Image();
  preload.src = source;
  preload.onload = () => {
    window.setTimeout(() => {
      element.src = source;
      element.alt = alt;
      callback?.();
      requestAnimationFrame(() => element.classList.remove("is-changing"));
    }, 140);
  };
  preload.onerror = () => element.classList.remove("is-changing");
}

function updateFeature(index) {
  const image = galleryImages[index];
  selectedIndex = index;
  featuredCurrent.textContent = formatNumber(index + 1);
  featuredTitle.textContent = image.title;
  featuredMeta.textContent = image.meta;
  swapImage(featuredImage, image.src, `${image.title} ${image.meta}`);
  renderReel();
}

function moveSelection(direction) {
  const count = galleryImages.length;
  selectedIndex = (selectedIndex + direction + count) % count;
  updateFeature(selectedIndex);
}

function updateLightbox(index) {
  const image = galleryImages[index];
  selectedIndex = index;
  lightboxCurrent.textContent = formatNumber(index + 1);
  lightboxTitle.textContent = image.title;
  lightboxMeta.textContent = image.meta;
  swapImage(lightboxImage, image.src, `${image.title} ${image.meta}`);
  updateFeature(index);
}

function openLightbox(index) {
  updateLightbox(index);
  document.body.classList.add("lightbox-open");

  if (typeof lightbox.showModal === "function") {
    if (!lightbox.open) lightbox.showModal();
  } else {
    lightbox.setAttribute("open", "");
  }
}

function closeLightbox() {
  if (typeof lightbox.close === "function" && lightbox.open) {
    lightbox.close();
  } else {
    lightbox.removeAttribute("open");
  }
  document.body.classList.remove("lightbox-open");
}

function moveLightbox(direction) {
  const count = galleryImages.length;
  updateLightbox((selectedIndex + direction + count) % count);
}

function initializeRevealObserver() {
  revealObserver?.disconnect();
  const visibleCards = [...archiveGrid.querySelectorAll(".archive-card")];

  if (reducedMotion.matches || !("IntersectionObserver" in window)) {
    visibleCards.forEach((card) => card.classList.add("is-visible"));
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -35px" },
  );

  visibleCards.forEach((card, index) => {
    card.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
    revealObserver.observe(card);
  });
}

filters.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-filter]");
  if (!button) return;

  activeFilter = button.dataset.filter;
  filters.querySelectorAll("button").forEach((filterButton) => {
    const isActive = filterButton === button;
    filterButton.classList.toggle("is-active", isActive);
    filterButton.setAttribute("aria-pressed", String(isActive));
  });

  renderArchive(activeFilter);
});

feature.addEventListener("click", () => openLightbox(selectedIndex));
featuredPrevious.addEventListener("click", () => moveSelection(-1));
featuredNext.addEventListener("click", () => moveSelection(1));
lightboxClose.addEventListener("click", closeLightbox);
lightboxPrevious.addEventListener("click", () => moveLightbox(-1));
lightboxNext.addEventListener("click", () => moveLightbox(1));

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

lightbox.addEventListener("close", () => {
  document.body.classList.remove("lightbox-open");
});

lightbox.addEventListener(
  "touchstart",
  (event) => {
    touchStartX = event.changedTouches[0].clientX;
  },
  { passive: true },
);

lightbox.addEventListener(
  "touchend",
  (event) => {
    const distance = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(distance) >= 55) moveLightbox(distance > 0 ? -1 : 1);
  },
  { passive: true },
);

document.addEventListener("keydown", (event) => {
  if (!lightbox.open) return;
  if (event.key === "ArrowLeft") moveLightbox(-1);
  if (event.key === "ArrowRight") moveLightbox(1);
});

updateGalleryTotals();
renderFilters();
renderArchive();
updateFeature(0);
