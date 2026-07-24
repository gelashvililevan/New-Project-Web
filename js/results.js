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

const path = document.getElementById("journeyPath");
const glow = document.getElementById("roadGlow");
const nodes = [...document.querySelectorAll(".road-node")];
const nodePositions = nodes.map((node) => ({
  x: Number(node.getAttribute("cx")),
  y: Number(node.getAttribute("cy")),
}));
const cards = [];

const length = path.getTotalLength();

path.style.strokeDasharray = length;
path.style.strokeDashoffset = length;

const moveTime = 5000;
const stopTime = 1500;
const segmentCount = nodes.length - 1;

let start = null;
let nextNode = 1;

const firstNode = nodes[0];

glow.setAttribute("cx", firstNode.getAttribute("cx"));
glow.setAttribute("cy", firstNode.getAttribute("cy"));

firstNode.classList.add("active");

function animate(now) {
  if (start === null) {
    start = now;
  }

  let elapsed = now - start;

  let progress = 0;

  const segment = 1 / segmentCount;

  for (let i = 0; i < segmentCount; i++) {
    const moveDuration = moveTime / segmentCount;

    if (elapsed <= moveDuration) {
      progress += (elapsed / moveDuration) * segment;
      break;
    }

    progress += segment;
    elapsed -= moveDuration;

    if (elapsed <= stopTime) {
      break;
    }

    elapsed -= stopTime;
  }

  progress = Math.min(progress, 1);

  path.style.strokeDashoffset = length * (1 - progress);

  const point = path.getPointAtLength(length * progress);

  glow.setAttribute("cx", point.x);
  glow.setAttribute("cy", point.y);

  const node = nodes[nextNode];

  if (node) {
    const cx = nodePositions[nextNode].x;
    const cy = nodePositions[nextNode].y;

    if (Math.hypot(point.x - cx, point.y - cy) < 10) {
      node.classList.add("active");

      const card = cards[nextNode];

      if (card) {
        setTimeout(() => {
          card.classList.add("show");
        }, 220);
      }

      nextNode++;
    }
  }
  if (progress < 1) {
    requestAnimationFrame(animate);
  }
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
      "./images/gallery/competitions/super_copa_de_espana_ciutat_de_barcelona_semi_final_3.jPG",
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
      "./images/gallery/podiums/super_copa_de_espana_absolut_jaca_podium.JPG",
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
    image: "./images/gallery/podiums/copa_catalunya_juniors_podium.JPG",
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
      "./images/gallery/podiums/super_copa_de_espana_juniors_tortosa_podium_1.jpeg",
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
        <article class="journey-card">
            <div class="journey-card-image">
                <img
                    src="${event.image}"
                    alt="${event.competition}"
                    loading="lazy">
            </div>
            <div class="journey-medal ${event.medal}">
           <i class="fa-solid fa-medal"></i>
          </div>

            <div class="journey-card-content">
                <span class="journey-card-date">
                    ${event.date}
                </span>
                <h3 class="journey-card-title">
                    ${event.competition}
                </h3>
                <span class="journey-card-location">
                    ${event.location}
                </span>
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
                <button class="journey-card-button">
                    View Details
                </button>
            </div>
        </article>
    </div>
`;
}

function createNextJourneyItem(event) {
  return `
<div class="journey-item left next">
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

  positionJourneyItems();
  cards.push(...document.querySelectorAll(".journey-item"));
}

function positionJourneyItems() {
  const items = [...document.querySelectorAll(".journey-item")];

  items.forEach((item, index) => {
    const cx = nodePositions[index].x;
    const cy = nodePositions[index].y;

    item.style.top = `${cy - 225}px`;

    if (item.classList.contains("left")) {
      item.style.left = `${cx - 360}px`;
    } else {
      item.style.left = `${cx + 60}px`;
    }
  });
}

renderJourney();

let started = false;

const observer = new IntersectionObserver(
  (entries) => {
    if (!entries[0].isIntersecting || started) return;

    started = true;

    const firstCard = document.querySelector(".journey-item");

    if (firstCard) {
      firstCard.classList.add("show");
    }

    setTimeout(() => {
      requestAnimationFrame(animate);
    }, 1800);

    observer.disconnect();
  },
  {
    threshold: 0.1,
  },
);

observer.observe(document.querySelector(".journey-track"));

observer.observe(document.querySelector(".journey-track"));

const countdownElement = document.getElementById("competitionCountdown");

if (countdownElement) {
  const competitionDate = new Date("2026-08-16");

  function updateCountdown() {
    const now = new Date();
    const difference = competitionDate - now;
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
