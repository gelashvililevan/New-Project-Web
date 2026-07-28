if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.scrollTo(0, 0);

window.addEventListener("pageshow", () => {
  window.scrollTo(0, 0);
});

const beltHero = document.querySelector(".judogi-belt-hero");

if (beltHero) {
  const hint = beltHero.querySelector(".judogi-scroll-hint");

  let revealProgress = 0;
  let revealFinished = false;
  let touchStartY = 0;
  const revealDistance = window.matchMedia("(max-width: 700px)").matches
    ? 500
    : 1000;

  document.body.classList.add("belt-reveal-lock");

  function updateOverlay() {
    const progress = Math.min(revealProgress, 1);

    beltHero.style.opacity = 1 - progress;

    if (progress > 0) {
      hint.style.opacity = 0;
    }

    if (progress >= 1 && !revealFinished) {
      revealFinished = true;

      beltHero.style.opacity = 0;
      beltHero.style.visibility = "hidden";

      document.body.classList.remove("belt-reveal-lock");
    }
  }

  function progressBelt(amount) {
    if (revealFinished || amount <= 0) return;

    revealProgress += amount / revealDistance;
    updateOverlay();
  }

  window.addEventListener(
    "wheel",
    (event) => {
      if (revealFinished) return;

      event.preventDefault();
      progressBelt(event.deltaY);
    },
    { passive: false },
  );

  window.addEventListener(
    "touchstart",
    (event) => {
      touchStartY = event.touches[0].clientY;
    },
    { passive: true },
  );

  window.addEventListener(
    "touchmove",
    (event) => {
      if (revealFinished) return;

      const currentY = event.touches[0].clientY;
      const distance = touchStartY - currentY;

      event.preventDefault();
      progressBelt(distance);

      touchStartY = currentY;
    },
    { passive: false },
  );

  updateOverlay();
}

const missionButtons = document.querySelectorAll(".mission-option");
const missionPanel = document.querySelector("#missionFormPanel");
const missionHeading = document.querySelector(".mission-heading");
const missionOptions = document.querySelector(".mission-options");

const missionForms = {
  sponsorship: {
    label: "SPONSORSHIP",
    title: "LET’S BUILD THE NEXT CHAPTER.",
    fields: [
      { label: "YOUR NAME", type: "text", placeholder: "Name", required: true },
      {
        label: "COMPANY / BRAND",
        type: "text",
        placeholder: "Company name",
        required: true,
      },
      {
        label: "EMAIL ADDRESS",
        type: "email",
        placeholder: "email@example.com",
        required: true,
      },
      {
        label: "TELL ME ABOUT THE IDEA",
        type: "textarea",
        placeholder: "How would you like to work together?",
        required: true,
      },
    ],
  },

  media: {
    label: "MEDIA",
    title: "LET’S TELL THE STORY.",
    fields: [
      { label: "YOUR NAME", type: "text", placeholder: "Name", required: true },
      {
        label: "PUBLICATION / PLATFORM",
        type: "text",
        placeholder: "Where are you writing or filming for?",
        required: true,
      },
      {
        label: "EMAIL ADDRESS",
        type: "email",
        placeholder: "email@example.com",
        required: true,
      },
      {
        label: "YOUR REQUEST",
        type: "textarea",
        placeholder: "Tell me about the interview or media request.",
        required: true,
      },
    ],
  },

  partnership: {
    label: "PARTNERSHIP",
    title: "LET’S CREATE SOMETHING MEANINGFUL.",
    fields: [
      { label: "YOUR NAME", type: "text", placeholder: "Name", required: true },
      {
        label: "COMPANY / ORGANIZATION",
        type: "text",
        placeholder: "Company name",
        required: true,
      },
      {
        label: "EMAIL ADDRESS",
        type: "email",
        placeholder: "email@example.com",
        required: true,
      },
      {
        label: "YOUR IDEA",
        type: "textarea",
        placeholder: "Tell me what you have in mind.",
        required: true,
      },
    ],
  },

  general: {
    label: "GENERAL",
    title: "LET’S START A CONVERSATION.",
    fields: [
      { label: "YOUR NAME", type: "text", placeholder: "Name", required: true },
      {
        label: "WHAT IS THIS ABOUT?",
        type: "text",
        placeholder: "A quick summary",
        required: true,
      },
      {
        label: "EMAIL ADDRESS",
        type: "email",
        placeholder: "email@example.com",
        required: true,
      },
      {
        label: "YOUR MESSAGE",
        type: "textarea",
        placeholder: "What would you like to say?",
        required: true,
      },
    ],
  },

  fan: {
    label: "FAN MESSAGE",
    title: "THANK YOU FOR THE SUPPORT.",
    fields: [
      { label: "YOUR NAME", type: "text", placeholder: "Name", required: true },
      {
        label: "COUNTRY (OPTIONAL)",
        type: "text",
        placeholder: "Where are you writing from?",
      },
      {
        label: "EMAIL ADDRESS (OPTIONAL)",
        type: "email",
        placeholder: "email@example.com",
      },
      {
        label: "YOUR MESSAGE",
        type: "textarea",
        placeholder: "Send your message.",
        required: true,
      },
    ],
  },
};

function createField(field) {
  const required = field.required ? "required" : "";
  const fullWidth =
    field.type === "textarea" || field.type === "email" ? "full-width" : "";

  if (field.type === "textarea") {
    return `
      <div class="mission-form-field ${fullWidth}">
        <label>${field.label}</label>
        <textarea placeholder="${field.placeholder}" ${required}></textarea>
      </div>
    `;
  }

  return `
    <div class="mission-form-field">
      <label>${field.label}</label>
      <input type="${field.type}" placeholder="${field.placeholder}" ${required} />
    </div>
  `;
}

function showMissionForm(missionName) {
  const mission = missionForms[missionName];

  missionHeading.style.display = "none";
  missionOptions.style.display = "none";

  missionPanel.innerHTML = `
    <div class="mission-form-top">
    <button class="mission-back" type="button">CHOOSE ANOTHER
      </button>
      <div>
        <span>${mission.label}</span>
        <h3>${mission.title}</h3>
      </div>
    </div>
    <form class="mission-form">
      ${mission.fields.map(createField).join("")}
      <button class="mission-submit" type="submit">
        START CONVERSATION
      </button>
      <p class="mission-form-status"></p>
    </form>
  `;
  missionPanel.classList.add("show");
}

missionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showMissionForm(button.dataset.mission);
  });
});

missionPanel.addEventListener("click", (event) => {
  if (!event.target.classList.contains("mission-back")) return;

  missionPanel.classList.remove("show");
  missionPanel.innerHTML = "";
  missionHeading.style.display = "";
  missionOptions.style.display = "";
});

missionPanel.addEventListener("submit", (event) => {
  event.preventDefault();

  const status = missionPanel.querySelector(".mission-form-status");
  status.textContent =
    "Your form design is ready. We’ll connect delivery next.";
});

const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.15 },
);

revealItems.forEach((item) => {
  revealObserver.observe(item);
});
