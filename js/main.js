const analyticsData = [
  {
    title: "Competition Medal Rate",
    percent: 86,
    value: "6 / 7",
    description: "Six Podiums From Seven Competitions.",
  },
  {
    title: "Overall Win Rate",
    percent: 78,
    value: "21 / 27",
    description: "Twenty-One Wins In Official Competition.",
  },
  {
    title: "Wins By Ippon",
    percent: 90,
    value: "19 / 21",
    description: "Nineteen Victories Finished By Ippon.",
  },
  {
    title: "Junior Win Rate",
    percent: 100,
    value: "8 / 8",
    description: "Still Undefeated In Junior Competition.",
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
  name: "SUPER COPA DE ESPAÑA JUNIOR",
  location: "BINÉFAR • 5 SEPTEMBER 2026",
  quote: "THE COMEBACK STARTS HERE",
  target: "2026-09-05T09:00:00+02:00",
};

const countdownContainer = document.getElementById("countdownContainer");

if (countdownContainer) {
  countdownContainer.innerHTML = `
        <div class="countdown-wrapper">
            <div class="countdown-line top"></div>

            <p class="countdown-title">
                N E X T&nbsp;&nbsp;C O M P E T I T I O N
            </p>

            <h2 class="competition-name">
                ${nextCompetition.name}
            </h2>

            <div class="countdown-grid">

                <div class="time-box days">
                    <span id="days">00</span>
                    <small>DAYS</small>
                </div>

                <div class="time-box hours">
                    <span id="hours">00</span>
                    <small>HOURS</small>
                </div>

                <div class="time-box minutes">
                    <span id="minutes">00</span>
                    <small>MINUTES</small>
                </div>

                <div class="time-box seconds">
                    <span id="seconds">00</span>
                    <small>SECONDS</small>
                </div>

            </div>

            <p class="competition-location">
                ${nextCompetition.location}
            </p>

            <p class="competition-quote">
                ${nextCompetition.quote}
            </p>

            <div class="countdown-line bottom"></div>
        </div>
    `;

  const targetDate = new Date(nextCompetition.target).getTime();

  function updateCountdown() {
    const now = new Date().getTime();

    const distance = targetDate - now;

    if (distance <= 0) return;

    document.getElementById("days").textContent = Math.floor(
      distance / (1000 * 60 * 60 * 24),
    );

    document.getElementById("hours").textContent = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );

    document.getElementById("minutes").textContent = Math.floor(
      (distance % (1000 * 60 * 60)) / (1000 * 60),
    );

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const secondElement = document.getElementById("seconds");

    secondElement.classList.remove("tick");

    void secondElement.offsetWidth;

    secondElement.textContent = seconds;

    secondElement.classList.add("tick");
  }

  updateCountdown();

  setInterval(updateCountdown, 1000);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const wrapper = entry.target;

        wrapper.classList.add("show");

        const boxes = wrapper.querySelectorAll(".time-box");

        boxes.forEach((box, index) => {
          setTimeout(() => {
            box.classList.add("show");
          }, index * 250);
        });

        setTimeout(() => {
          wrapper.classList.add("finish");
        }, 1200);

        observer.unobserve(wrapper);
      });
    },
    {
      threshold: 0.1,
    },
  );

  observer.observe(document.querySelector(".countdown-wrapper"));
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
    src: "./images/gallery/competitions/super_copa_de_espana_ciutat_de_barcelona_semi_final_3.JPG",
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
            <strong>${String(index + 1).padStart(2, 0)}</strong>
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
    logo: "./images/partners/mizuno.png",
    name: "MIZUNO",
    year: "Part Of The Journey Since 2026.",
    role: "Official Equipment Partner.",
    button: "VISIT WEBSITE",
    website: "#",
  },
  {
    logo: "./images/partners/question_mark.png",
    name: "NEXT TO STAND HERE",
    year: "The Journey Continues With You.",
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
                    alt="${partner.name}"
                    loading="lazy"
                >
                <div class="partner-overlay">
                    <h3 class="partner-name">
                        ${partner.name}
                    </h3>
                    <h2 class="partner-year">
                        ${partner.year}
                    </h2>
                    <p class="partner-role">
                        ${partner.role}
                    </p>
                    <span class="partner-link">
                        ${partner.button}
                    </span>
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
