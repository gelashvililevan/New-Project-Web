const analyticsData = [
  {
    title: "Competition Medal Rate",
    percent: 100,
    value: "6 / 6",
    description: "Every Competition Ended On The Podium.",
  },
  {
    title: "Overall Win Rate",
    percent: 84,
    value: "25 / 21",
    description: "Victories In Official Competitions.",
  },
  {
    title: "Wins By Ippon",
    percent: 90,
    value: "21 / 19",
    description: "Most Victories Finished Early.",
  },
  {
    title: "Junior Win Rate",
    percent: 100,
    value: "8 / 8",
    description: "Undefeated Junior Record.",
  },
];

const grid = document.getElementById("analyticsGrid");

let html = "";

analyticsData.forEach((item) => {
  html += `
        <div class="analytics-card">
            <div class="progress-ring">
                <h3>${item.title}</h3>

                <svg width="200" height="200">
                    <circle class="ring-bg" cx="100" cy="100" r="70"></circle>
                    <circle class="ring-progress" cx="100" cy="100" r="70"></circle>
                </svg>

                <span class="percent" data-percent="${item.percent}">0%</span>
            </div>

            <h4>${item.value}</h4>
            <p>${item.description}</p>
        </div>
    `;
});

grid.innerHTML = html;

const cards = document.querySelectorAll(".analytics-card");

const radius = 70;
const circumference = 2 * Math.PI * radius;

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add("show");

          setTimeout(() => {
            const progressCircle = card.querySelector(".ring-progress");

            progressCircle.style.transform = "rotate(-90deg)";
            progressCircle.style.transformOrigin = "50% 50%";

            const percentText = card.querySelector(".percent");
            const targetPercent = parseInt(percentText.dataset.percent);

            progressCircle.style.strokeDasharray = circumference;
            progressCircle.style.strokeDashoffset = circumference;

            animateCircle(progressCircle, percentText, targetPercent);
          }, 180);
        }, index * 700);
      });

      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.1,
  },
);

const analyticsSection = document.querySelector(".analytics");

if (analyticsSection) {
  observer.observe(analyticsSection);
}

function animateCircle(circle, text, target) {
  let current = 0;

  const duration = 1900;
  const interval = 25;
  const step = target / (duration / interval);

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    text.textContent = Math.round(current) + "%";
    const offset = circumference - (current / 100) * circumference;
    circle.style.strokeDashoffset = offset;
  }, interval);
}

const nextCompetition = {
  name: "SUPER COPA DE ESPANA",
  location: "VALENCIA • 16 AUGUST 2026",
  quote: "ONE STEP CLOSER",
  target: "2026-08-16T09:00:00",
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

const galleryImages = [
  {
    src: "./images/gallery/competitions/super_copa_de_espana_absolut_jaca_quarter_final.jpg",
    title: "Super Copa De Espana Absolut Jaca Quarter-Final",
  },
  {
    src: "./images/gallery/competitions/super_copa_de_espana_absolut_jaca_bronze_final.jpg",
    title: "Super Copa De Espana Absolut Jaca - Bronze Final",
  },
  {
    src: "./images/gallery/competitions/super_copa_de_espana_ciutat_de_barcelona_semi_final.jpg",
    title: "Super Copa De Espana Ciutat De Barcelona Semi-Final",
  },
  {
    src: "./images/gallery/training/teams_pokemon_competition.png",
    title: "Teams Pokemon Competition",
  },
  {
    src: "./images/gallery/competitions/super_copa_de_espana_absolut_jaca_bronze_final_2.jpg",
    title: "Super Copa De Espana Absolut Jaca - Bronze Final",
  },
  {
    src: "./images/gallery/competitions/copa_catalunya_absolut_final.jpeg",
    title: "Copa Catalunya Absolut Final",
  },
  {
    src: "./images/gallery/competitions/super_copa_de_espana_ciutat_de_barcelona_semi_final_2.jpg",
    title: "Super Copa De Espana Ciutat De Barcelona Semi-Final",
  },
  {
    src: "../images/gallery/podiums/super_copa_de_espana_absolut_jaca_team_picture.jpg",
    title: "Super Copa De Espana Absolut Jaca Team Picture",
  },
  {
    src: "../images/gallery/competitions/super_copa_de_espana_absolut_jaca_bronze_final_3.jpg",
    title: "Super Copa De Espana Absolut Jaca - Bronze Final",
  },
  {
    src: "../images/gallery/competitions/super_copa_de_espana_absolut_jaca_bronze_final_4.jpg",
    title: "Super Copa De Espana Absolut Jaca - Bronze Final",
  },
  {
    src: "./images/gallery/competitions/super_copa_de_espana_absolut_jaca_round_1.jpg",
    title: "Super Copa De Espana Absolut Jaca Round 1",
  },
  {
    src: "./images/gallery/competitions/super_copa_de_espana_ciutat_de_barcelona_semi_final_3.jpg",
    title: "Super Copa De Espana Ciutat De Barcelona Semi-Final",
  },
  {
    src: "./images/gallery/competitions/super_copa_de_espana_ciutat_de_barcelona_semi_final_4.jpg",
    title: "Super Copa De Espana Ciutat De Barcelona Semi-Final",
  },
  {
    src: "../images/gallery/podiums/copa_catalunya_juniors_podium.jpg",
    title: "Copa Catalunya Juniors Podium",
  },
  {
    src: "./images/gallery/podiums/super_copa_de_espana_absolut_jaca_podium.jpg",
    title: "Super Copa De Espana Absolut Jaca Podium",
  },
  {
    src: "./images/gallery/podiums/super_copa_de_espana_ciutat_de_barcelona_podium_1.jpg",
    title: "Super Copa De Espana Ciutat De Barcelona Podium",
  },
  {
    src: "./images/gallery/podiums/super_copa_de_espana_ciutat_de_barcelona_podium_2.jpg",
    title: "Super Copa De Espana Ciutat De Barcelona Podium",
  },
  {
    src: "./images/gallery/podiums/super_copa_de_espana_ciutat_de_barcelona_podium_3.jpg",
    title: "Super Copa De Espana Ciutat De Barcelona Podium",
  },
  {
    src: "./images/gallery/podiums/super_copa_de_espana_juniors_tortosa_podium_1.jpeg",
    title: "Super Copa De Espana Juniors Tortosa Podium",
  },
  {
    src: "./images/gallery/podiums/super_copa_de_espana_juniors_tortosa_podium_2.jpeg",
    title: "Super Copa De Espana Juniors Tortosa Podium",
  },
];

const galleryGrid = document.getElementById("galleryGrid");

if (galleryGrid) {
  const previewCount = 7;

  let html = "";

  galleryImages.slice(0, previewCount).forEach((image) => {
    html += `
            <div class="gallery-card">

                <img
                    src="${image.src}"
                    alt="${image.title}"
                    loading="lazy"
                >

            </div>
        `;
  });

  const remaining = galleryImages.length - previewCount;

  if (remaining > 0) {
    html += `
            <a href="./gallery.html" class="gallery-more">
                <div>
                    <span class="gallery-number">
                        +${remaining}
                    </span>
                    <span class="gallery-text">
                        MORE
                    </span>
                </div>
            </a>
        `;
  }

  galleryGrid.innerHTML = html;

  const galleryItems = document.querySelectorAll(
    ".gallery-card, .gallery-more",
  );

  galleryItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("show");
    }, index * 180);
  });
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
