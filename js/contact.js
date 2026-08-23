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

  const desktopRevealDistance = 900;
  const phoneRevealDistance = 240;

  function getWheelRevealDistance() {
    const phoneSizedViewport =
      Math.min(window.innerWidth, window.innerHeight) <= 600;

    return phoneSizedViewport ? phoneRevealDistance : desktopRevealDistance;
  }

  document.body.classList.add("belt-reveal-lock");

  function updateOverlay() {
    const progress = Math.min(revealProgress, 1);

    beltHero.style.opacity = 1 - progress;

    if (progress > 0 && hint) {
      hint.style.opacity = 0;
    }

    if (progress >= 1 && !revealFinished) {
      revealFinished = true;
      beltHero.style.opacity = 0;
      beltHero.style.visibility = "hidden";
      document.body.classList.remove("belt-reveal-lock");
    }
  }

  function progressBelt(amount, revealDistance) {
    if (revealFinished || amount <= 0) return;

    revealProgress += amount / revealDistance;
    updateOverlay();
  }

  window.addEventListener(
    "wheel",
    (event) => {
      if (revealFinished) return;

      event.preventDefault();
      progressBelt(event.deltaY, getWheelRevealDistance());
    },
    { passive: false },
  );

  window.addEventListener(
    "touchstart",
    (event) => {
      if (revealFinished) return;

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
      progressBelt(distance, phoneRevealDistance);
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

  collaboration: {
    label: "COLLABORATION",
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
  const required = field.required ? " required" : "";
  const fullWidth =
    field.type === "textarea" || field.type === "email" ? " full-width" : "";

  const fieldName =
    field.type === "email"
      ? "email"
      : field.label
          .toLowerCase()
          .replace(/\s*\(optional\)\s*/g, "")
          .replace(/[^a-z0-9]+/g, "_")
          .replace(/^_|_$/g, "");

  const fieldId = `mission-${fieldName}`;

  if (field.type === "textarea") {
    return `
      <div class="mission-form-field${fullWidth}">
        <label for="${fieldId}">${field.label}</label>
        <textarea
          id="${fieldId}"
          name="${fieldName}"
          placeholder="${field.placeholder}"${required}
        ></textarea>
      </div>
    `;
  }

  return `
    <div class="mission-form-field${fullWidth}">
      <label for="${fieldId}">${field.label}</label>
      <input
        id="${fieldId}"
        name="${fieldName}"
        type="${field.type}"
        placeholder="${field.placeholder}"${required}
      />
    </div>
  `;
}

function showMissionForm(missionName) {
  const mission = missionForms[missionName];

  if (!mission || !missionPanel || !missionHeading || !missionOptions) return;

  missionHeading.style.display = "none";
  missionOptions.style.display = "none";

  missionPanel.innerHTML = `
    <div class="mission-form-top">
      <button class="site-button mission-back" type="button">
         CHOOSE ANOTHER
      </button>
      <div>
        <span>${mission.label}</span>
        <h3>${mission.title}</h3>
      </div>
    </div>
    <form
    class="mission-form"
    action="https://formspree.io/f/mnparrve"
    method="POST"
     >
    <input
      type="hidden"
      name="inquiry_type"
      value="${mission.label}"
      />
      ${mission.fields.map(createField).join("")}
      <button class="site-button mission-submit" type="submit">
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

if (missionPanel && missionHeading && missionOptions) {
  missionPanel.addEventListener("click", (event) => {
    if (!event.target.classList.contains("mission-back")) return;

    missionPanel.classList.remove("show");
    missionPanel.innerHTML = "";
    missionHeading.style.display = "";
    missionOptions.style.display = "";
  });
  missionPanel.addEventListener("submit", async (event) => {
    event.preventDefault();

    const form = event.target;

    if (!form.classList.contains("mission-form")) return;

    const status = form.querySelector(".mission-form-status");
    const submitButton = form.querySelector(".mission-submit");
    const originalButtonText = submitButton.textContent;

    status.textContent = "SENDING YOUR MESSAGE...";
    status.classList.remove("success", "error");

    submitButton.disabled = true;
    submitButton.textContent = "SENDING...";

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);

        const errorMessage =
          data?.errors?.map((error) => error.message).join(" ") ||
          "Your message could not be sent. Please try again.";

        throw new Error(errorMessage);
      }

      form.reset();

      status.textContent =
        "MESSAGE SENT. THANK YOU - I’LL GET BACK TO YOU SOON.";
      status.classList.add("success");

      submitButton.textContent = "MESSAGE SENT";
    } catch (error) {
      status.textContent =
        error.message || "SOMETHING WENT WRONG. PLEASE TRY AGAIN.";

      status.classList.add("error");

      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
    }
  });
}

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

const journeyRevealItems = document.querySelectorAll(
  ".journey-links-label, .journey-link",
);

if (journeyRevealItems.length) {
  const journeyRevealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -45px",
    },
  );

  journeyRevealItems.forEach((item) => {
    journeyRevealObserver.observe(item);
  });
}
