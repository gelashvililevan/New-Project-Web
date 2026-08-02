import { competitions } from "./competition-data.js";
function renderMatches(matches = []) {
  return matches
    .map((match) => {
      const detailsId = `match-details-${match.number}`;
      return `
        <article class="competition-match" data-match>
          <button
            class="competition-match-summary"
            type="button"
            aria-expanded="false"
            aria-controls="${detailsId}"
          >
            <span class="competition-match-number">${match.number}</span>
            <span class="competition-match-round">${match.round}</span>
            <span class="competition-match-outcome">${match.outcome}</span>
            <span class="competition-match-method">${match.method}</span>
            <span class="competition-match-duration">${match.duration}</span>
            <i class="fa-solid fa-plus" aria-hidden="true"></i>
          </button>
          <div
            class="competition-match-details"
            id="${detailsId}"
            hidden
          >
            <dl>
              <div>
                <dt>Opponent</dt>
                <dd>${match.opponent}</dd>
              </div>
              <div>
                <dt>Country / Club</dt>
                <dd>${match.country}</dd>
              </div>
              <div>
                <dt>Final Score</dt>
                <dd>${match.score}</dd>
              </div>
              <div>
                <dt>Technique</dt>
                <dd>${match.technique}</dd>
              </div>
              <div>
                <dt>Shidos</dt>
                <dd>${match.shidos}</dd>
              </div>
            </dl>
            <p>${match.note}</p>
            ${
              match.video
                ? `
                  <a
                    href="${match.video}"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WATCH MATCH
                  </a>
                `
                : ""
            }
          </div>
        </article>
      `;
    })
    .join("");
}
function renderLessons(lessons = []) {
  return lessons
    .map(
      (lesson) => `
        <article class="competition-lesson" data-reveal>
          <span>${lesson.number}</span>
          <h3>${lesson.title}</h3>
          <p>${lesson.text}</p>
        </article>
      `,
    )
    .join("");
}
function renderChanges(changes = []) {
  return changes
    .map(
      (change, index) => `
        <article class="competition-change" data-reveal>
          <span class="competition-change-number">
            ${String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <small>BEFORE</small>
            <p>${change.before}</p>
          </div>
          <span class="competition-change-arrow" aria-hidden="true">
            <i class="fa-solid fa-arrow-right"></i>
          </span>
          <div>
            <small>AFTER</small>
            <p>${change.after}</p>
          </div>
        </article>
      `,
    )
    .join("");
}
function renderChapterLink(chapter, direction) {
  if (!chapter) {
    return `<span class="competition-chapter-empty" aria-hidden="true"></span>`;
  }
  const label = direction === "previous" ? "PREVIOUS CHAPTER" : "NEXT CHAPTER";
  const arrow =
    direction === "previous"
      ? `<i class="fa-solid fa-arrow-left" aria-hidden="true"></i>`
      : `<i class="fa-solid fa-arrow-right" aria-hidden="true"></i>`;
  return `
    <a
      class="competition-chapter-link competition-chapter-link--${direction}"
      href="./competition.html?id=${encodeURIComponent(chapter.id)}"
    >
      <span>${arrow}${label}</span>
      <small>${chapter.date}</small>
      <strong>${chapter.title}</strong>
    </a>
  `;
}
function initializeRevealAnimations(content) {
  const revealElements = content.querySelectorAll("[data-reveal]");
  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((element) => {
      element.classList.add("is-visible");
    });
    return;
  }
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -60px",
    },
  );
  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
}
function initializeMatchDetails(content) {
  const matchButtons = content.querySelectorAll(".competition-match-summary");
  matchButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedMatch = button.closest(".competition-match");
      const selectedDetails = selectedMatch.querySelector(
        ".competition-match-details",
      );
      const isOpen = button.getAttribute("aria-expanded") === "true";
      matchButtons.forEach((otherButton) => {
        if (otherButton === button) return;
        const otherMatch = otherButton.closest(".competition-match");
        const otherDetails = otherMatch.querySelector(
          ".competition-match-details",
        );
        otherButton.setAttribute("aria-expanded", "false");
        otherMatch.classList.remove("is-open");
        otherDetails.hidden = true;
      });
      button.setAttribute("aria-expanded", String(!isOpen));
      selectedMatch.classList.toggle("is-open", !isOpen);
      selectedDetails.hidden = isOpen;
    });
  });
}
const content = document.getElementById("competitionContent");
const loading = document.getElementById("competitionLoading");
const error = document.getElementById("competitionError");
const params = new URLSearchParams(window.location.search);
const competitionId = params.get("id");
const competition = competitions[competitionId];
if (!competition) {
  loading.hidden = true;
  error.hidden = false;
} else {
  const medalThemes = {
    gold: {
      color: "#d4af37",
      rgb: "212, 175, 55",
    },
    silver: {
      color: "#d7d9df",
      rgb: "215, 217, 223",
    },
    bronze: {
      color: "#c77b30",
      rgb: "199, 123, 48",
    },
  };
  const medalTheme = medalThemes[competition.medal] || medalThemes.silver;
  document.body.style.setProperty("--event-accent", medalTheme.color);
  document.body.style.setProperty("--event-accent-rgb", medalTheme.rgb);
  document.title = `${competition.competition} | Levan Gelashvili`;
  loading.hidden = true;
  content.innerHTML = `
    <section
      class="competition-hero competition-hero--${competition.medal}"
      aria-labelledby="competitionTitle"
    >
      <div class="competition-hero-media" aria-hidden="true">
        <img
          src="${competition.image}"
          alt=""
          loading="eager"
          decoding="async"
          fetchpriority="high"
        >
      </div>
      <div class="competition-hero-overlay" aria-hidden="true"></div>
      <div class="competition-hero-grid" aria-hidden="true"></div>
      <div class="container competition-hero-container">
        <div class="competition-hero-navigation">
        <a class="competition-back-link" href="./results.html">
            <i class="fa-solid fa-arrow-left" aria-hidden="true"></i>
            <span>BACK TO THE 2026 JOURNEY</span>
        </a>
        </div>
        <div class="competition-hero-content">
        <p class="competition-chapter">
            CHAPTER ${competition.chapter} · ${competition.season} SEASON
        </p>
        <h1 class="competition-hero-title" id="competitionTitle">
            ${competition.competition}
        </h1>
        <div class="competition-hero-meta">
            <span>${competition.date}</span>
            <span class="competition-meta-dot" aria-hidden="true"></span>
            <span>${competition.location}</span>
        </div>
        <div class="competition-hero-result">
            <span class="competition-result-medal" aria-hidden="true">
            <i class="fa-solid fa-medal"></i>
            </span>
            <div>
            <small>FINAL RESULT</small>
            <strong>${competition.placement}</strong>
            </div>
        </div>
        </div>>
      </div>
    </section>
    <section
      class="competition-context"
      id="competitionContext"
      aria-labelledby="competitionContextTitle"
    >
      <div class="container competition-context-container">
        <div class="competition-context-heading" data-reveal>
          <p class="competition-section-label">
            ACT 02 · THE CONTEXT
          </p>
          <h2 id="competitionContextTitle">
            BEFORE THE
            <span>FIRST BOW.</span>
          </h2>
        </div>
        <div class="competition-context-layout">
          <div class="competition-context-story" data-reveal>
            <span
              class="competition-story-line"
              aria-hidden="true"
            ></span>
            <p>
              ${
                competition.preparation.story ||
                "The complete preparation story for this competition will be added here."
              }
            </p>
          </div>
        </div>
      </div>
    </section>
    <section
      class="competition-act competition-record"
      aria-labelledby="competitionRecordTitle"
    >
      <div class="container competition-act-container">
        <header class="competition-act-header" data-reveal>
          <p>ACT 03 · THE OFFICIAL RECORD</p>
          <h2 id="competitionRecordTitle">WHAT HAPPENED.</h2>
        </header>
        <div class="competition-record-summary" data-reveal>
          <div class="competition-record-result">
            <span>FINAL PLACEMENT</span>
            <strong>${competition.placement}</strong>
          </div>
          <dl class="competition-record-facts">
            <div>
              <dt>Category</dt>
              <dd>${competition.category}</dd>
            </div>
            <div>
              <dt>Record</dt>
              <dd>${competition.record}</dd>
            </div>
            <div>
              <dt>Mat Time</dt>
              <dd>${competition.totalMatTime}</dd>
            </div>
            <div>
              <dt>Ippons</dt>
              <dd>${competition.ippons}</dd>
            </div>
            <div>
              <dt>Fastest Win</dt>
              <dd>${competition.fastestWin}</dd>
            </div>
            <div>
              <dt>Competitors</dt>
              <dd>${competition.competitors}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
    <section
      class="competition-act competition-matches"
      aria-labelledby="competitionMatchesTitle"
    >
      <div class="container competition-act-container">
        <header class="competition-act-header" data-reveal>
          <p>ACT 04 · THE MATCH TAPE</p>
          <h2 id="competitionMatchesTitle">
            FOUR MATCHES.
            <span>ONE COMPLETE STORY.</span>
          </h2>
        </header>
        <div class="competition-match-list" data-reveal>
          ${renderMatches(competition.matches)}
        </div>
      </div>
    </section>
    <section
      class="competition-act competition-lessons"
      aria-labelledby="competitionLessonsTitle"
    >
      <div class="container competition-act-container">
        <header class="competition-act-header" data-reveal>
          <p>ACT 05 · THE LESSON</p>
          <h2 id="competitionLessonsTitle">
            WHAT THE RESULT
            <span>COULD NOT SHOW.</span>
          </h2>
        </header>
        <div class="competition-lessons-list">
          ${renderLessons(competition.lessons)}
        </div>
      </div>
    </section>
    <section
      class="competition-act competition-shift"
      aria-labelledby="competitionShiftTitle"
    >
      <div class="container competition-act-container">
        <header class="competition-act-header" data-reveal>
          <p>ACT 06 · THE SHIFT</p>
          <h2 id="competitionShiftTitle">
            THE ATHLETE WHO LEFT
            <span>WAS NOT THE ONE WHO ARRIVED.</span>
          </h2>
        </header>
        <div class="competition-change-list">
          ${renderChanges(competition.changes)}
        </div>
      </div>
    </section>
    <section
      class="competition-act competition-progression"
      aria-labelledby="competitionProgressionTitle"
    >
      <div class="container competition-progression-container">
        <div class="competition-progression-copy" data-reveal>
          <p>${competition.progression.eyebrow}</p>
          <h2 id="competitionProgressionTitle">
            THE STORY
            <span>CONTINUED.</span>
          </h2>
          <div>${competition.progression.text}</div>
        </div>
        <a
          class="competition-next-preview"
          href="./competition.html?id=${encodeURIComponent(
            competition.progression.nextCompetitionId,
          )}"
          data-reveal
        >
          <small>${competition.progression.nextDate}</small>
          <strong>${competition.progression.nextTitle}</strong>
          <span>${competition.progression.nextResult}</span>
          <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
        </a>
      </div>
    </section>
    <nav
      class="competition-chapter-navigation"
      aria-label="Competition chapters"
    >
      <div class="container competition-chapter-navigation-container">
        ${renderChapterLink(competition.navigation.previous, "previous")}
        <a class="competition-return-link" href="./results.html">
          <i class="fa-solid fa-route" aria-hidden="true"></i>
          <span>RETURN TO THE JOURNEY</span>
        </a>
        ${renderChapterLink(competition.navigation.next, "next")}
      </div>
    </nav>
  `;
  content.classList.add("is-ready");
  initializeRevealAnimations(content);
  initializeMatchDetails(content);
}
