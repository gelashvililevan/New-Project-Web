const analyticsData = [
  {
    title: "Competition Medal Rate",
    percent: 89,
    value: "9 / 8",
    description: "Eight Podiums From Nine Competitions.",
  },
  {
    title: "Overall Win Rate",
    percent: 78,
    value: "32 / 25",
    description: "Twenty-Five Wins In Official Competitions.",
  },
  {
    title: "Wins By Ippon",
    percent: 92,
    value: "25 / 23",
    description: "Twenty-Three Victories Finished By Ippon.",
  },
  {
    title: "Junior Win Rate",
    percent: 100,
    value: "10 / 10",
    description: "Still Undefeated In Junior Competitions.",
  },
];
const analyticsGrid = document.getElementById("analyticsGrid");
if (analyticsGrid) {
  analyticsGrid.innerHTML = analyticsData
    .map(
      (item, index) => `
        <article class="analytics-card">
          <span class="analytics-card-number" aria-hidden="true">
            ${String(index + 1).padStart(2, "0")}
          </span>
          <div class="analytics-card-copy">
            <h3>${item.title}</h3>
            <span class="analytics-percent" data-percent="${item.percent}">0%</span>
            <strong class="analytics-value">${item.value}</strong>
            <p>${item.description}</p>
          </div>
          <div class="progress-ring" aria-hidden="true">
            <svg viewBox="0 0 200 200">
              <circle class="ring-bg" cx="100" cy="100" r="70"></circle>
              <circle class="ring-progress" cx="100" cy="100" r="70"></circle>
              <circle class="ring-point" r="7" cx="100" cy="30"></circle>
            </svg>
          </div>
        </article>
      `,
    )
    .join("");
  const analyticsCards = [...analyticsGrid.querySelectorAll(".analytics-card")];
  const analyticsRadius = 70;
  const analyticsCircumference = 2 * Math.PI * analyticsRadius;
  const reducedAnalyticsMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  function setRingPoint(point, percent) {
    const angle = -90 + percent * 3.6;
    const radians = (angle * Math.PI) / 180;
    point.setAttribute("cx", 100 + analyticsRadius * Math.cos(radians));
    point.setAttribute("cy", 100 + analyticsRadius * Math.sin(radians));
  }
  function setAnalyticsProgress(card, percent) {
    const progressCircle = card.querySelector(".ring-progress");
    const ringPoint = card.querySelector(".ring-point");
    const percentText = card.querySelector(".analytics-percent");
    progressCircle.style.strokeDasharray = analyticsCircumference;
    progressCircle.style.strokeDashoffset =
      analyticsCircumference - (percent / 100) * analyticsCircumference;
    percentText.textContent = `${Math.round(percent)}%`;
    setRingPoint(ringPoint, percent);
  }
  function animateAnalyticsCard(card) {
    const target = Number(
      card.querySelector(".analytics-percent").dataset.percent,
    );
    const duration = 1900;
    let startTime = null;
    function update(timestamp) {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setAnalyticsProgress(card, target * easedProgress);
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }
  analyticsCards.forEach((card) => setAnalyticsProgress(card, 0));
  const analyticsSection = document.querySelector(".analytics");
  if (reducedAnalyticsMotion) {
    analyticsCards.forEach((card) => {
      card.classList.add("show");
      setAnalyticsProgress(
        card,
        Number(card.querySelector(".analytics-percent").dataset.percent),
      );
    });
  } else if (analyticsSection) {
    const analyticsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          analyticsCards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add("show");
              setTimeout(() => animateAnalyticsCard(card), 180);
            }, index * 700);
          });
          analyticsObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.1 },
    );
    analyticsObserver.observe(analyticsSection);
  }
}

const nextCompetition = {
  name: "SUPER COPA DE ESPANA",
  location: "VALENCIA",
  quote: "VALENCIA GAVE ME A LESSON. NOW I RETURN TO PUT IT TO WORK.",
  target: "2026-09-26T09:00:00+02:00",
  timeZone: "Europe/Madrid",
};

function competitionDayKey(date, timeZone) {
  const parts = new Intl.DateTimeFormat("en", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);
  return ["year", "month", "day"]
    .map((type) => parts.find((part) => part.type === type).value)
    .join("-");
}

function competitionState(now, target, timeZone) {
  const today = competitionDayKey(now, timeZone);
  const eventDay = competitionDayKey(target, timeZone);
  return today < eventDay ? "upcoming" : today === eventDay ? "today" : "past";
}

const countdownContainer = document.getElementById("countdownContainer");

if (countdownContainer) {
  const targetDate = new Date(nextCompetition.target);
  const eventDate = new Intl.DateTimeFormat("en-GB", {
    timeZone: nextCompetition.timeZone,
    day: "numeric",
    month: "long",
    year: "numeric",
  })
    .format(targetDate)
    .toUpperCase();
  const reducedCountdownMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  countdownContainer.innerHTML = `
    <div class="countdown-wrapper">
      <div class="countdown-line top"></div>
      <p class="countdown-title"></p>
      <h2 class="competition-name">${nextCompetition.name}</h2>
      <div class="countdown-grid"></div>
      <p class="competition-location"></p>
      <p class="competition-quote"></p>
      <div class="countdown-line bottom"></div>
    </div>
  `;

  const wrapper = countdownContainer.querySelector(".countdown-wrapper");
  const title = wrapper.querySelector(".countdown-title");
  const grid = wrapper.querySelector(".countdown-grid");
  const location = wrapper.querySelector(".competition-location");
  const quote = wrapper.querySelector(".competition-quote");
  let currentState = null;
  let timer = null;
  let numberElements = [];

  function updateCountdown() {
    const now = new Date();
    const state = competitionState(now, targetDate, nextCompetition.timeZone);

    if (state !== currentState) {
      currentState = state;
      wrapper.dataset.state = state;
      title.textContent =
        state === "past"
          ? "L A S T\u00a0\u00a0C O M P E T I T I O N"
          : "N E X T\u00a0\u00a0C O M P E T I T I O N";
      if (state === "today")
        title.textContent = "C O M P E T I T I O N\u00a0\u00a0D A Y";
      location.textContent =
        state === "past"
          ? nextCompetition.location
          : `${nextCompetition.location} • ${eventDate}`;
      quote.textContent = nextCompetition.quote;

      if (state === "upcoming") {
        grid.innerHTML = ["days", "hours", "minutes", "seconds"]
          .map(
            (unit) => `
            <div class="time-box ${unit}${wrapper.classList.contains("show") ? " show" : ""}">
              <span id="${unit}">00</span>
              <small>${unit.toUpperCase()}</small>
            </div>
          `,
          )
          .join("");
        numberElements = [...grid.querySelectorAll(".time-box span")];
      } else {
        grid.innerHTML = `
          <p class="countdown-status" role="status"></p>
          ${
            state === "past"
              ? '<p class="countdown-results-message">RESULTS COMING SOON</p>'
              : ""
          }
        `;
        grid.querySelector(".countdown-status").textContent =
          state === "today" ? "TODAY" : eventDate;
      }
    }

    if (state === "past") {
      clearInterval(timer);
      timer = null;
      return;
    }
    if (state === "today") return;

    const secondsLeft = Math.max(0, Math.floor((targetDate - now) / 1000));
    const values = [
      Math.floor(secondsLeft / 86400),
      Math.floor(secondsLeft / 3600) % 24,
      Math.floor(secondsLeft / 60) % 60,
      secondsLeft % 60,
    ];

    numberElements.forEach((element, index) => {
      const value = String(values[index]);
      if (element.textContent === value) return;
      element.textContent = value;
      if (index === 3 && !reducedCountdownMotion) {
        element.classList.remove("tick");
        void element.offsetWidth;
        element.classList.add("tick");
      }
    });
  }

  updateCountdown();
  if (currentState !== "past") timer = setInterval(updateCountdown, 1000);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) updateCountdown();
  });

  function revealCountdown() {
    wrapper.classList.add("show");
    wrapper.querySelectorAll(".time-box").forEach((box, index) => {
      if (reducedCountdownMotion) box.classList.add("show");
      else setTimeout(() => box.classList.add("show"), index * 250);
    });
    if (reducedCountdownMotion) wrapper.classList.add("finish");
    else setTimeout(() => wrapper.classList.add("finish"), 1200);
  }

  if (reducedCountdownMotion) {
    revealCountdown();
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        revealCountdown();
        observer.disconnect();
      },
      { threshold: 0.1 },
    );
    observer.observe(wrapper);
  }
}

const galleryFeatureData = {
  src: "./images/gallery/competitions/super_copa_de_espana_absolut_jaca_quarter_final.jpg",
  title: "Super Copa de España Absolut Jaca Quarter-Final",
};

const galleryPreviewData = [
  {
    src: "./images/gallery/competitions/super_copa_de_espana_absolut_jaca_bronze_final.jpg",
    title: "Super Copa de España Absolut Jaca Bronze Final",
    caption: "Emotion.",
  },
  {
    src: "./images/gallery/competitions/super_copa_de_espana_absolute_valencia_1.JPG",
    title: "Super Copa de España Absolut Valencia",
    caption: "Respect.",
  },
  {
    src: "./images/gallery/competitions/super_copa_de_espana_ciutat_de_barcelona_semi_final.jpg",
    title: "Super Copa de España Ciutat de Barcelona semi-final",
    caption: "Balance.",
  },
  {
    src: "./images/gallery/competitions/super_copa_de_espana_ciutat_de_barcelona_semi_final_3.jpg",
    title: "Super Copa de España Ciutat de Barcelona semi-final",
    caption: "Technique.",
  },
];

const gallerySection = document.querySelector(".gallery");
const galleryFeature = document.getElementById("galleryFeature");
const galleryGrid = document.getElementById("galleryGrid");

if (gallerySection && galleryFeature && galleryGrid) {
  galleryFeature.innerHTML = `
    <img
      src="${galleryFeatureData.src}"
      alt="${galleryFeatureData.title}"
      loading="lazy"
      decoding="async"
    >
  `;

  galleryGrid.innerHTML = galleryPreviewData
    .map(
      (image, index) => `
        <a class="gallery-card" href="./gallery.html">
          <span class="gallery-card-image">
            <img
              src="${image.src}"
              alt="${image.title}"
              loading="lazy"
              decoding="async"
            >
          </span>
          <span class="gallery-card-caption">
            <strong>${String(index + 1).padStart(2, "0")}</strong>
            <span>${image.caption}</span>
          </span>
        </a>
      `,
    )
    .join("");

  const reducedGalleryMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (reducedGalleryMotion) {
    gallerySection.classList.add("show");
  } else {
    const galleryObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          gallerySection.classList.add("show");
          galleryObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -6% 0px",
      },
    );

    galleryObserver.observe(gallerySection);
  }
}

const aboutSection = document.querySelector(".about");

if (aboutSection) {
  const aboutObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        aboutSection.classList.add("show");

        aboutObserver.unobserve(aboutSection);
      });
    },
    {
      threshold: 0.1,
    },
  );

  aboutObserver.observe(aboutSection);
}

const partnersData = [
  {
    logo: "./images/partners/question_mark.png",
    name: "NEXT TO STAND HERE",
    journeyLines: ["The Journey", "Continues", "With You."],
    role: "Become Part Of It.",
    button: "CONTACT",
    website: "./contact.html",
  },
];

const partnersGrid = document.getElementById("partnersGrid");

if (partnersGrid) {
  let html = "";

  partnersData.forEach((partner) => {
    html += `
            <a href="${partner.website}" class="partner-card">
                <img
                    src="${partner.logo}"
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                >
                <div class="partner-overlay">
                    <div class="partner-message">
                        <h3 class="partner-name">${partner.name.replaceAll(" ", "<br>")}</h3>
                    </div>

                    <span class="partner-divider" aria-hidden="true"></span>

                    <div class="partner-invite">
                        <p class="partner-role">${partner.role}</p>
                        <span class="partner-link">${partner.button}</span>
                        <p class="partner-year">
                            ${partner.journeyLines
                              .map(
                                (line) =>
                                  `<span class="partner-year-line">${line}</span>`,
                              )
                              .join("")}
                        </p>
                    </div>
                </div>
            </a>
        `;
  });

  partnersGrid.innerHTML = html;
}

const partnersSection = document.querySelector(".partners");

if (partnersSection) {
  const partnerCards = partnersSection.querySelectorAll(".partner-card");

  const partnersObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        partnersSection.classList.add("show");

        partnerCards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("show");
          }, index * 250);
        });
        partnersObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.1,
    },
  );
  partnersObserver.observe(partnersSection);
}
