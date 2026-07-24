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

const activated = new Set();

const length = path.getTotalLength();

path.style.strokeDasharray = length;
path.style.strokeDashoffset = length;

const moveTime = 12000;
const stopTime = 1800;
const segmentCount = nodes.length - 1;

let start = null;

const firstNode = nodes[0];

glow.setAttribute("cx", firstNode.getAttribute("cx"));
glow.setAttribute("cy", firstNode.getAttribute("cy"));

firstNode.classList.add("active");
activated.add(0);

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

  nodes.forEach((node, index) => {
    if (activated.has(index)) return;

    const cx = +node.getAttribute("cx");
    const cy = +node.getAttribute("cy");

    if (Math.hypot(point.x - cx, point.y - cy) < 10) {
      activated.add(index);
      node.classList.add("active");

      const card = document.querySelectorAll(".journey-item")[index];

      if (card) {
        setTimeout(() => {
          card.classList.add("show");
        }, 220);
      }
    }
  });

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
  },
  {
    image:
      "./images/gallery/competitions/super_copa_de_espana_ciutat_de_barcelona_semi_final_3.JPG",
    competition: "Super Copa De Espana Absolut",
    date: "02 | 05 | 2026",
    location: "• BARCELONA •",
    weight: "-90 KG",
    record: "3 - 1",
    matTime: "13:46",
  },
  {
    image: "./images/gallery/competitions/salou_team_competition.JPG",
    competition: "Vila Salou Trophy Teams",
    date: "09 | 05 | 2026",
    location: "• SALOU •",
    weight: "-90 KG",
    record: "3 - 1",
    matTime: "08:05",
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
  },
  {
    image: "./images/gallery/podiums/copa_catalunya_juniors_podium.JPG",
    competition: "Copa Catalunya Juniors",
    date: "06 | 06 | 2026",
    location: "• BARCELONA •",
    weight: "-90 KG",
    record: "5 - 0",
    matTime: "04:06",
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
  },
];

function createJourneyItem(event, index) {
  const side = index % 2 === 0 ? "left" : "right";

  return `
<div class="journey-item ${side}">
    <div class="journey-float">
        <article class="journey-card">
            <div class="journey-card-image">
                <img
                    src="${event.image}"
                    alt="${event.competition}"
                    loading="lazy">
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
                        <span>Weight</span>
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
</div>
`;
}

function renderJourney() {
  const timeline = document.getElementById("journeyTimeline");

  timeline.innerHTML = journeyData.map(createJourneyItem).join("");

  positionJourneyItems();
}

function positionJourneyItems() {
  const items = [...document.querySelectorAll(".journey-item")];
  const nodes = [...document.querySelectorAll(".road-node")];

  items.forEach((item, index) => {
    const node = nodes[index];

    if (!node) return;

    const cx = Number(node.getAttribute("cx"));
    const cy = Number(node.getAttribute("cy"));

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
