const resultsAnalytics = document.querySelector(".results-analytics");

if (resultsAnalytics) {
  const analyticsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        resultsAnalytics.classList.add("show");

        analyticsObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.1,
    },
  );

  analyticsObserver.observe(resultsAnalytics);
}

const journeyData = [
  {
    image: "./images/gallery/competitions/copa_catalunya_absolut_final.JPEG",
    competition: "Copa Catalunya Absolut",
    date: "11 | 04 | 2026",
    location: "• BARCELONA •",
    weight: "-90 KG",
    record: "3 - 1",
    matTime: "07:04",
    medal: "silver",
    result: "Silver • 2nd Place",
  },
  {
    image:
      "./images/gallery/competitions/super_copa_de_espana_ciutat_de_barcelona_semi_final_3.jpg",
    competition: "Super Copa De Espana Absolut",
    date: "02 | 05 | 2026",
    location: "• BARCELONA •",
    weight: "-90 KG",
    record: "3 - 1",
    matTime: "13:46",
    medal: "silver",
    result: "Silver • 2nd Place",
  },
  {
    image: "./images/gallery/competitions/salou_team_competition.JPG",
    competition: "Vila Salou Trophy Teams",
    date: "09 | 05 | 2026",
    location: "• SALOU •",
    weight: "-90 KG",
    record: "3 - 1",
    matTime: "08:05",
    medal: "gold",
    result: "Gold • 1st Place",
  },
  {
    image:
      "./images/gallery/podiums/super_copa_de_espana_absolut_jaca_podium.jpg",
    competition: "Super Copa De Espana Absolut",
    date: "30 | 05 | 2026",
    location: "• JACA •",
    weight: "-90 KG",
    record: "4 - 1",
    matTime: "04:55",
    medal: "bronze",
    result: "Bronze • 3rd Place",
  },
  {
    image: "./images/gallery/podiums/copa_catalunya_juniors_podium_c.JPG",
    competition: "Copa Catalunya Juniors",
    date: "06 | 06 | 2026",
    location: "• BARCELONA •",
    weight: "-90 KG",
    record: "5 - 0",
    matTime: "04:06",
    medal: "gold",
    result: "Gold • 1st Place",
  },
  {
    image:
      "./images/gallery/podiums/super_copa_de_espana_juniors_tortosa_podium_1_c.jpeg",
    competition: "Super Copa De Espana Juniors",
    date: "28 | 06 | 2026",
    location: "• TORTOSA •",
    weight: "-90 KG",
    record: "3 - 0",
    matTime: "04:32",
    medal: "gold",
    result: "Gold • 1st Place",
  },
];

const nextCompetition = {
  title: "Super Copa De Espana",
  date: "16 | 08 | 2026",
  location: "• Valencia •",
  category: "-90KG",
};

function createJourneyItem(event, index) {
  const side = index % 2 === 0 ? "left" : "right";

  return `
    <div class="journey-item ${side} ${event.medal}">
      <span class="journey-pin" aria-hidden="true"></span>
      <article class="journey-card">
      <div class="journey-medal ${event.medal}">
        <i class="fa-solid fa-medal"></i>
      </div>
        <div class="journey-card-image">
          <img
            src="${event.image}"
            alt="${event.competition}"
            loading="eager"
            decoding="async"
          >
        </div>
        <div class="journey-card-content">
          <span class="journey-card-date">${event.date}</span>
          <h3 class="journey-card-title">${event.competition}</h3>
          <span class="journey-card-location">${event.location}</span>
          <div class="journey-card-divider"></div>
          <div class="journey-card-info">
            <div class="journey-card-row">
              <span>Result</span>
              <strong>${event.result}</strong>
            </div>
            <div class="journey-card-row">
              <span>Category</span>
              <strong>${event.weight}</strong>
            </div>
            <div class="journey-card-row">
              <span>Record</span>
              <strong>${event.record}</strong>
            </div>
            <div class="journey-card-row">
              <span>Time on Mat</span>
              <strong>${event.matTime}</strong>
            </div>
          </div>
          <button class="journey-card-button">View Details</button>
        </div>
      </article>
    </div>
  `;
}

function createNextJourneyItem(event) {
  return `
<div class="journey-item left next">
<span class="journey-pin" aria-hidden="true"></span>
    <article class="journey-card">
        <div class="journey-card-content">
        <div class="journey-target">
        <i class="fa-solid fa-bullseye"></i>
    </div>
            <span class="journey-card-date">
                ${event.date}
            </span>
            <h3 class="journey-card-title">
                NEXT MISSION
            </h3>
            <span class="journey-card-location">
                ${event.location}
            </span>
            <div class="journey-card-divider"></div>
            <div class="journey-countdown">
                <strong id="competitionCountdown">-- Days</strong>
            </div>
            <div class="journey-card-divider"></div>
            <div class="journey-card-info">
                <div class="journey-card-row">
                    <span>Competition</span>
                    <strong>${event.title}</strong>
                </div>
                <div class="journey-card-row">
                    <span>Category</span>
                    <strong>${event.category}</strong>
                </div>
            </div>
            <button class="journey-card-button">
                Competition Details
            </button>
        </div>
    </article>
</div>
`;
}

function renderJourney() {
  const timeline = document.getElementById("journeyTimeline");

  timeline.innerHTML =
    journeyData.map(createJourneyItem).join("") +
    createNextJourneyItem(nextCompetition);
}

function positionJourneyItems() {
  const items = [...document.querySelectorAll(".journey-item")];
  const track = document.querySelector(".journey-track");

  if (items.length === 0) return;

  const isMobileTimeline = window.matchMedia(
    "(max-width: 768px), (max-width: 1024px) and (max-height: 500px) and (orientation: landscape)",
  ).matches;

  if (isMobileTimeline) {
    items.forEach((item) => {
      item.style.removeProperty("top");
      item.style.removeProperty("left");
      item.style.removeProperty("right");
    });

    return;
  }

  const scale = track.clientWidth / 1200;
  const cardWidth = items[0].offsetWidth;
  const leftMargin = 20 * scale;
  const rightMargin = 20 * scale;
  const startY = 120 * scale;
  let verticalGap = 280 * scale;

  if (window.innerWidth <= 1200) {
    verticalGap = 270;
  }

  if (window.innerWidth <= 992) {
    verticalGap = 250;
  }

  items.forEach((item, index) => {
    item.style.top = `${startY + index * verticalGap}px`;

    if (item.classList.contains("left")) {
      item.style.left = `${leftMargin}px`;
    } else {
      item.style.left = `${track.clientWidth - cardWidth - rightMargin}px`;
    }
  });
}

renderJourney();
positionJourneyItems();

function prepareJourneyImages() {
  const images = [...document.querySelectorAll(".journey-card-image img")];

  images.forEach((image) => {
    image.loading = "eager";
  });

  return Promise.all(
    images.map((image) => {
      if (typeof image.decode !== "function") {
        return Promise.resolve();
      }

      return image.decode().catch(() => {});
    }),
  );
}

const journeyImagesReady = prepareJourneyImages();

const path = document.getElementById("journeyPath");
const glow = document.getElementById("roadGlow");
const track = document.querySelector(".journey-track");

const journeyCards = [...document.querySelectorAll(".journey-item")];

const mobileTimelineQuery = window.matchMedia(
  "(max-width: 768px), (max-width: 1024px) and (max-height: 500px) and (orientation: landscape)",
);

let journeyAnimationDuration = mobileTimelineQuery.matches ? 9500 : 7000;

let roadNodes = [];
let roadLength = 0;
let journeyStarted = false;
let animationStart = null;
let activeNodeIndex = 1;

function getPinPositions() {
  const trackRect = track.getBoundingClientRect();
  const pins = [...document.querySelectorAll(".journey-pin")];

  return pins.map((pin) => {
    const pinRect = pin.getBoundingClientRect();

    return {
      x: pinRect.left - trackRect.left + pinRect.width / 2,
      y: pinRect.top - trackRect.top + pinRect.height / 2,
    };
  });
}

function buildRoad() {
  const pins = getPinPositions();

  if (pins.length < 2) return;

  path.setAttribute(
    "d",
    pins
      .map((pin, index) => `${index === 0 ? "M" : "L"} ${pin.x} ${pin.y}`)
      .join(" "),
  );
  roadNodes = [...document.querySelectorAll(".journey-pin")];

  roadLength = path.getTotalLength();

  path.style.strokeDasharray = roadLength;
  path.style.strokeDashoffset = roadLength;

  glow.setAttribute("cx", pins[0].x);
  glow.setAttribute("cy", pins[0].y);
}
function buildRoadAtFinalCardPositions() {
  track.classList.add("is-measuring");

  track.getBoundingClientRect();
  buildRoad();

  track.classList.remove("is-measuring");
}

function animateRoad(timestamp) {
  if (animationStart === null) {
    animationStart = timestamp;
  }

  const elapsedTime = timestamp - animationStart;

  const progress = Math.min(elapsedTime / journeyAnimationDuration, 1);

  const currentRoadLength = roadLength * progress;

  path.style.strokeDashoffset = roadLength - currentRoadLength;

  const point = path.getPointAtLength(currentRoadLength);

  glow.setAttribute("cx", point.x);
  glow.setAttribute("cy", point.y);

  while (
    activeNodeIndex < roadNodes.length &&
    progress >= activeNodeIndex / (roadNodes.length - 1)
  ) {
    roadNodes[activeNodeIndex].classList.add("active");

    journeyCards[activeNodeIndex]?.classList.add("show");

    activeNodeIndex += 1;
  }

  if (progress < 1) {
    requestAnimationFrame(animateRoad);
  } else {
    path.style.strokeDashoffset = 0;
    track.classList.remove("is-animating");
  }
}

async function startJourneyAnimation() {
  if (journeyStarted || roadNodes.length === 0) return;

  journeyStarted = true;

  await journeyImagesReady;

  positionJourneyItems();
  buildRoadAtFinalCardPositions();

  journeyAnimationDuration = mobileTimelineQuery.matches ? 9500 : 7000;

  animationStart = null;
  activeNodeIndex = 1;

  track.classList.add("is-animating");

  roadNodes[0].classList.add("active");
  journeyCards[0]?.classList.add("show");

  requestAnimationFrame(animateRoad);
}

buildRoadAtFinalCardPositions();

const journeyObserver = new IntersectionObserver(
  ([entry]) => {
    if (!entry.isIntersecting) return;

    startJourneyAnimation();
    journeyObserver.disconnect();
  },
  { threshold: 0.1 },
);

journeyObserver.observe(track);

window.addEventListener("resize", () => {
  positionJourneyItems();

  if (journeyStarted) {
    buildRoad();
    path.style.strokeDashoffset = 0;

    const finalPoint = path.getPointAtLength(roadLength);

    glow.setAttribute("cx", finalPoint.x);
    glow.setAttribute("cy", finalPoint.y);
  } else {
    buildRoadAtFinalCardPositions();
  }
});

const countdownElement = document.getElementById("competitionCountdown");

if (countdownElement) {
  const competitionDate = new Date("2026-08-16");

  function updateCountdown() {
    const difference = competitionDate - new Date();

    if (difference <= 0) {
      countdownElement.textContent = "TODAY";
      return;
    }

    const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
    countdownElement.textContent = `${days} DAYS`;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}
