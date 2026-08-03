import { competitions } from "./competition-data.js";

const MEDAL_THEMES = {
  gold: { color: "#d4af37", rgb: "212, 175, 55" },
  silver: { color: "#d7d9df", rgb: "215, 217, 223" },
  bronze: { color: "#c77b30", rgb: "199, 123, 48" },
};

function renderShidoCards(value) {
  if (value === null || value === undefined) {
    return `<span class="competition-score-empty">—</span>`;
  }
  const numericValue = Number(value);
  if (!Number.isFinite(numericValue)) {
    return `<span class="competition-score-empty">—</span>`;
  }
  const count = Math.max(0, Math.min(3, Math.trunc(numericValue)));
  if (count === 0) {
    return `<span class="competition-score-empty">—</span>`;
  }
  if (count === 3) {
    return `
      <span
        class="competition-shido-card competition-shido-card--red"
        title="Hansoku-make"
      >
        HM
      </span>
    `;
  }
  return Array.from(
    { length: count },
    () =>
      `<span class="competition-shido-card competition-shido-card--yellow"></span>`,
  ).join("");
}

function renderScore(value) {
  if (value === null || value === undefined || value === "") return "—";
  const score = Number(value);
  return Number.isFinite(score) ? Math.max(0, Math.trunc(score)) : "—";
}

function renderScoreboard(match) {
  const mine = match.scores?.mine ?? {};
  const opponent = match.scores?.opponent ?? {};
  return `
    <div class="competition-scoreboard">
      <div class="competition-scoreboard-top">
        <span>CONTEST TIME</span>
        <strong>${match.duration}</strong>
      </div>
      <div class="competition-scoreboard-labels" aria-hidden="true">
        <span></span>
        <span title="Ippon">I</span>
        <span title="Waza-ari">W</span>
        <span title="Yuko">Y</span>
        <span title="Penalties">P</span>
      </div>
      <div class="competition-scoreboard-row">
        <strong>ME</strong>
        <span aria-label="My ippons: ${renderScore(mine.ippon)}">
          ${renderScore(mine.ippon)}
        </span>
        <span aria-label="My waza-aris: ${renderScore(mine.wazaAri)}">
          ${renderScore(mine.wazaAri)}
        </span>
        <span aria-label="My yukos: ${renderScore(mine.yuko)}">
          ${renderScore(mine.yuko)}
        </span>
        <div
          class="competition-scoreboard-penalties"
          aria-label="My shidos: ${mine.shidos ?? "not recorded"}"
        >
          ${renderShidoCards(mine.shidos)}
        </div>
      </div>
      <div class="competition-scoreboard-row">
        <strong>OPPONENT</strong>
        <span aria-label="Opponent ippons: ${renderScore(opponent.ippon)}">
          ${renderScore(opponent.ippon)}
        </span>
        <span aria-label="Opponent waza-aris: ${renderScore(opponent.wazaAri)}">
          ${renderScore(opponent.wazaAri)}
        </span>
        <span aria-label="Opponent yukos: ${renderScore(opponent.yuko)}">
          ${renderScore(opponent.yuko)}
        </span>
        <div
          class="competition-scoreboard-penalties"
          aria-label="Opponent shidos: ${opponent.shidos ?? "not recorded"}"
        >
          ${renderShidoCards(opponent.shidos)}
        </div>
      </div>
    </div>
  `;
}

function renderMatches(matches = []) {
  return matches
    .map((match, index) => {
      const detailsId = `competition-match-${index + 1}-details`;
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
            <div class="competition-match-breakdown">
              <div class="competition-match-fact">
                <span>TECHNIQUE</span>
                <strong>${match.technique}</strong>
              </div>
              ${renderScoreboard(match)}
              <div class="competition-match-fact">
                <span>FINAL SCORE</span>
                <strong>${match.score}</strong>
              </div>
            </div>
            <blockquote class="competition-match-quote">
              <span>KEY MOMENT</span>
              <p>${match.note}</p>
            </blockquote>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderLessons(lessons = []) {
  return lessons
    .slice(0, 3)
    .map(
      (lesson) => `
        <article class="competition-lesson" data-reveal>
          <h3>${lesson.title}</h3>
          <p>${lesson.text}</p>
        </article>
      `,
    )
    .join("");
}

function renderChanges(changes = []) {
  const change = changes[0];
  if (!change) return "";
  return `
    <article class="competition-change" data-reveal>
      <div class="competition-change-side competition-change-before">
        <small>BEFORE</small>
        <p>${change.before}</p>
      </div>
      <span class="competition-change-arrow" aria-hidden="true">
        <i class="fa-solid fa-arrow-right"></i>
      </span>
      <div class="competition-change-side competition-change-after">
        <small>AFTER</small>
        <p>${change.after}</p>
      </div>
    </article>
  `;
}

function renderProgressionLink(chapter, direction) {
  if (!chapter) return "";
  const targetCompetition = competitions[chapter.id];
  const date = targetCompetition?.date || chapter.date;
  const title = targetCompetition?.competition || chapter.title;
  const result =
    targetCompetition?.placement || chapter.result || "VIEW CHAPTER";
  const isPrevious = direction === "previous";
  const label = isPrevious ? "PREVIOUS CHAPTER" : "NEXT CHAPTER";
  const arrowClass = isPrevious ? "fa-arrow-left" : "fa-arrow-right";
  const arrow = `<i class="fa-solid ${arrowClass}" aria-hidden="true"></i>`;
  return `
    <a
      class="competition-progression-link competition-progression-link--${direction}"
      href="./competition.html?id=${encodeURIComponent(chapter.id)}"
      data-reveal
    >
      <span class="competition-progression-direction">
        ${isPrevious ? arrow : ""}
        ${label}
        ${isPrevious ? "" : arrow}
      </span>
      <small>${date}</small>
      <strong>${title}</strong>
      <span class="competition-progression-result">${result}</span>
    </a>
  `;
}

function renderProgressionNavigation(navigation = {}) {
  const links = [
    renderProgressionLink(navigation.previous, "previous"),
    renderProgressionLink(navigation.next, "next"),
  ].filter(Boolean);
  if (links.length === 0) return "";
  return `
    <div
      class="competition-progression-navigation"
      data-count="${links.length}"
    >
      ${links.join("")}
    </div>
  `;
}

function formatMatchCount(count) {
  if (count === 0) return "NO MATCHES.";
  const numberWords = [
    "ZERO",
    "ONE",
    "TWO",
    "THREE",
    "FOUR",
    "FIVE",
    "SIX",
    "SEVEN",
    "EIGHT",
    "NINE",
    "TEN",
  ];
  const number = numberWords[count] || String(count);
  return `${number} ${count === 1 ? "MATCH" : "MATCHES"}.`;
}

function setMedalTheme(medal) {
  const theme = MEDAL_THEMES[medal] || MEDAL_THEMES.silver;
  document.body.style.setProperty("--event-accent", theme.color);
  document.body.style.setProperty("--event-accent-rgb", theme.rgb);
}

function initializeRevealAnimations(container) {
  const elements = container.querySelectorAll("[data-reveal]");
  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.18, rootMargin: "0px 0px -60px" },
  );
  elements.forEach((element) => observer.observe(element));
}

function initializeMatchDetails(container) {
  const buttons = [...container.querySelectorAll(".competition-match-summary")];
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedMatch = button.closest(".competition-match");
      const selectedDetails = selectedMatch?.querySelector(
        ".competition-match-details",
      );
      if (!selectedMatch || !selectedDetails) return;
      const willOpen = button.getAttribute("aria-expanded") !== "true";
      buttons.forEach((otherButton) => {
        const otherMatch = otherButton.closest(".competition-match");
        const otherDetails = otherMatch?.querySelector(
          ".competition-match-details",
        );
        otherButton.setAttribute("aria-expanded", "false");
        otherMatch?.classList.remove("is-open");
        if (otherDetails) otherDetails.hidden = true;
      });
      button.setAttribute("aria-expanded", String(willOpen));
      selectedMatch.classList.toggle("is-open", willOpen);
      selectedDetails.hidden = !willOpen;
    });
  });
}

function renderCompetitionPage(competition, content) {
  const matches = Array.isArray(competition.matches) ? competition.matches : [];
  const lessons = Array.isArray(competition.lessons)
    ? competition.lessons.slice(0, 3)
    : [];
  const changes = Array.isArray(competition.changes)
    ? competition.changes.slice(0, 1)
    : [];
  const preparationStory =
    competition.preparation?.story ||
    "The complete preparation story for this competition will be added here.";
  const progression = competition.progression ?? {};
  setMedalTheme(competition.medal);
  document.title = `${competition.competition} | Levan Gelashvili`;
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
            <span>BACK TO THE ${competition.season} JOURNEY</span>
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
        </div>
      </div>
    </section>
    <section
      class="competition-context"
      aria-labelledby="competitionContextTitle"
    >
      <div class="container competition-context-container">
        <header class="competition-context-heading" data-reveal>
          <p class="competition-section-label">ACT 02 · THE CONTEXT</p>
          <h2 id="competitionContextTitle">
            BEFORE THE <span>FIRST BOW.</span>
          </h2>
        </header>
        <div class="competition-context-story" data-reveal>
          <p>${preparationStory}</p>
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
            <div><dt>Category</dt><dd>${competition.category}</dd></div>
            <div><dt>Record</dt><dd>${competition.record}</dd></div>
            <div><dt>Mat Time</dt><dd>${competition.totalMatTime}</dd></div>
            <div><dt>Ippons</dt><dd>${competition.ippons}</dd></div>
            <div><dt>Fastest Win</dt><dd>${competition.fastestWin}</dd></div>
            <div><dt>Competitors</dt><dd>${competition.competitors}</dd></div>
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
            ${formatMatchCount(matches.length)}
            <span>ONE COMPLETE STORY.</span>
          </h2>
        </header>
        <div class="competition-match-list" data-reveal>
          ${renderMatches(matches)}
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
            WHAT THE RESULT <span>COULD NOT SHOW.</span>
          </h2>
        </header>
        <div
          class="competition-lessons-list"
          data-count="${lessons.length}"
        >
          ${renderLessons(lessons)}
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
          ${renderChanges(changes)}
        </div>
      </div>
    </section>
    <section
      class="competition-act competition-progression"
      aria-labelledby="competitionProgressionTitle"
    >
      <div class="container competition-progression-container">
        <div class="competition-progression-copy" data-reveal>
          <p>${progression.eyebrow || "ACT 07 · PUT INTO PRACTICE"}</p>
          <h2 id="competitionProgressionTitle">
            THE STORY <span>CONTINUED.</span>
          </h2>
          <div>${progression.text || "The next chapter will be added here."}</div>
        </div>
        ${renderProgressionNavigation(competition.navigation)}
      </div>
    </section>
    <nav
      class="competition-chapter-navigation"
      aria-label="Return to the results journey"
    >
      <div class="container competition-chapter-navigation-container">
        <a class="competition-return-link" href="./results.html">
          <i class="fa-solid fa-route" aria-hidden="true"></i>
          <span>RETURN TO THE JOURNEY</span>
        </a>
      </div>
    </nav>
  `;
  content.classList.add("is-ready");
  initializeRevealAnimations(content);
  initializeMatchDetails(content);
}

function initializeCompetitionPage() {
  const content = document.getElementById("competitionContent");
  const loading = document.getElementById("competitionLoading");
  const error = document.getElementById("competitionError");
  if (!content || !loading || !error) return;
  const competitionId = new URLSearchParams(window.location.search).get("id");
  const competition = competitions[competitionId];
  loading.hidden = true;
  if (!competition) {
    error.hidden = false;
    return;
  }
  error.hidden = true;
  renderCompetitionPage(competition, content);
}

initializeCompetitionPage();
