const UNKNOWN = "TO BE ADDED";
const UNKNOWN_TIME = "--:--";
function unknownScores() {
  return {
    mine: { ippon: null, wazaAri: null, yuko: null, shidos: null },
    opponent: { ippon: null, wazaAri: null, yuko: null, shidos: null },
  };
}
function createMatch(number, round, outcome, options = {}) {
  return {
    number: String(number).padStart(2, "0"),
    round,
    outcome,
    method: options.method ?? UNKNOWN,
    duration: options.duration ?? UNKNOWN_TIME,
    score: options.score ?? UNKNOWN,
    technique: options.technique ?? UNKNOWN,
    note: options.note ?? "The key moment from this match will be added here.",
    scores: options.scores ?? unknownScores(),
  };
}
function createLessons(count = 2) {
  return Array.from({ length: count }, (_, index) => ({
    title: `LESSON ${String(index + 1).padStart(2, "0")}`,
    text: "The lesson taken from this competition will be added here.",
  }));
}
function createChanges() {
  return [
    {
      before:
        "The technical or mental approach before this competition will be added here.",
      after: "The adjustment made after this competition will be added here.",
    },
  ];
}
function createPreparation() {
  return {
    story:
      "The complete preparation story, expectations and condition before this competition will be added here.",
  };
}
function createProgression() {
  return {
    eyebrow: "ACT 07 · PUT INTO PRACTICE",
    text: "How the lessons from this competition appeared in training and the next chapter will be added here.",
  };
}
export const competitions = {
  "copa-catalunya-2026": {
    id: "copa-catalunya-2026",
    status: "completed",
    chapter: "01",
    season: "2026",
    competition: "Copa Catalunya Absolut",
    date: "11 · 04 · 2026",
    location: "Barcelona, Spain",
    image: "./images/gallery/competitions/copa_catalunya_absolut_final.JPEG",
    medal: "silver",
    placement: "Silver · 2nd Place",
    category: "−90 KG",
    record: "3–1",
    totalMatTime: "07:04",
    ippons: "2",
    fastestWin: "00:42",
    competitors: "16",
    preparation: createPreparation(),
    matches: [
      createMatch("01", "ROUND ONE", "WIN", {
        method: "IPPON",
        duration: "00:42",
        scores: {
          mine: { ippon: 1, wazaAri: 0, yuko: 0, shidos: null },
          opponent: { ippon: 0, wazaAri: 0, yuko: 0, shidos: null },
        },
      }),
      createMatch("02", "QUARTERFINAL", "WIN"),
      createMatch("03", "SEMIFINAL", "WIN"),
      createMatch("04", "FINAL", "LOSS"),
    ],
    lessons: [
      {
        title: "PATIENCE",
        text: "The first important lesson from this competition will be added here.",
      },
      {
        title: "TRANSITIONS",
        text: "What this competition revealed about transitions and continuation will be added here.",
      },
    ],
    changes: createChanges(),
    progression: createProgression(),
    navigation: {
      previous: null,
      next: { id: "super-copa-espana-barcelona-2026" },
    },
  },
  "super-copa-espana-barcelona-2026": {
    id: "super-copa-espana-barcelona-2026",
    status: "completed",
    chapter: "02",
    season: "2026",
    competition: "Super Copa de España Absolut",
    date: "02 · 05 · 2026",
    location: "Barcelona, Spain",
    image:
      "./images/gallery/competitions/super_copa_de_espana_ciutat_de_barcelona_semi_final_3.jpg",
    medal: "silver",
    placement: "Silver · 2nd Place",
    category: "−90 KG",
    record: "3–1",
    totalMatTime: "13:46",
    ippons: "—",
    fastestWin: "—",
    competitors: "—",
    preparation: createPreparation(),
    matches: [
      createMatch("01", "ROUND ONE", "WIN"),
      createMatch("02", "QUARTERFINAL", "WIN"),
      createMatch("03", "SEMIFINAL", "WIN"),
      createMatch("04", "FINAL", "LOSS"),
    ],
    lessons: createLessons(2),
    changes: createChanges(),
    progression: createProgression(),
    navigation: {
      previous: { id: "copa-catalunya-2026" },
      next: { id: "vila-salou-teams-2026" },
    },
  },
  "vila-salou-teams-2026": {
    id: "vila-salou-teams-2026",
    status: "completed",
    chapter: "03",
    season: "2026",
    competition: "Vila Salou Trophy Teams",
    date: "09 · 05 · 2026",
    location: "Salou, Spain",
    image: "./images/gallery/competitions/salou_team_competition.JPG",
    medal: "gold",
    placement: "Gold · 1st Place",
    category: "−90 KG",
    record: "3–1",
    totalMatTime: "08:05",
    ippons: "—",
    fastestWin: "—",
    competitors: "—",
    preparation: createPreparation(),
    matches: [
      createMatch("01", "MATCH ONE", "TO BE ADDED"),
      createMatch("02", "MATCH TWO", "TO BE ADDED"),
      createMatch("03", "MATCH THREE", "TO BE ADDED"),
      createMatch("04", "MATCH FOUR", "TO BE ADDED"),
    ],
    lessons: createLessons(2),
    changes: createChanges(),
    progression: createProgression(),
    navigation: {
      previous: { id: "super-copa-espana-barcelona-2026" },
      next: { id: "super-copa-espana-jaca-2026" },
    },
  },
  "super-copa-espana-jaca-2026": {
    id: "super-copa-espana-jaca-2026",
    status: "completed",
    chapter: "04",
    season: "2026",
    competition: "Super Copa de España Absolut",
    date: "30 · 05 · 2026",
    location: "Jaca, Spain",
    image:
      "./images/gallery/podiums/super_copa_de_espana_absolut_jaca_podium.jpg",
    medal: "bronze",
    placement: "Bronze · 3rd Place",
    category: "−90 KG",
    record: "4–1",
    totalMatTime: "04:55",
    ippons: "—",
    fastestWin: "—",
    competitors: "—",
    preparation: createPreparation(),
    matches: [
      createMatch("01", "MATCH ONE", "TO BE ADDED"),
      createMatch("02", "MATCH TWO", "TO BE ADDED"),
      createMatch("03", "MATCH THREE", "TO BE ADDED"),
      createMatch("04", "MATCH FOUR", "TO BE ADDED"),
      createMatch("05", "MEDAL MATCH", "WIN"),
    ],
    lessons: createLessons(2),
    changes: createChanges(),
    progression: createProgression(),
    navigation: {
      previous: { id: "vila-salou-teams-2026" },
      next: { id: "copa-catalunya-juniors-2026" },
    },
  },
  "copa-catalunya-juniors-2026": {
    id: "copa-catalunya-juniors-2026",
    status: "completed",
    chapter: "05",
    season: "2026",
    competition: "Copa Catalunya Juniors",
    date: "06 · 06 · 2026",
    location: "Barcelona, Spain",
    image: "./images/gallery/podiums/copa_catalunya_juniors_podium_c.jpg",
    medal: "gold",
    placement: "Gold · 1st Place",
    category: "−90 KG",
    record: "5–0",
    totalMatTime: "04:06",
    ippons: "—",
    fastestWin: "—",
    competitors: "—",
    preparation: createPreparation(),
    matches: [
      createMatch("01", "MATCH ONE", "WIN"),
      createMatch("02", "MATCH TWO", "WIN"),
      createMatch("03", "MATCH THREE", "WIN"),
      createMatch("04", "SEMIFINAL", "WIN"),
      createMatch("05", "FINAL", "WIN"),
    ],
    lessons: createLessons(2),
    changes: createChanges(),
    progression: createProgression(),
    navigation: {
      previous: { id: "super-copa-espana-jaca-2026" },
      next: { id: "super-copa-espana-juniors-tortosa-2026" },
    },
  },
  "super-copa-espana-juniors-tortosa-2026": {
    id: "super-copa-espana-juniors-tortosa-2026",
    status: "completed",
    chapter: "06",
    season: "2026",
    competition: "Super Copa de España Juniors",
    date: "28 · 06 · 2026",
    location: "Tortosa, Spain",
    image:
      "./images/gallery/podiums/super_copa_de_espana_juniors_tortosa_podium_1_c.jpeg",
    medal: "gold",
    placement: "Gold · 1st Place",
    category: "−90 KG",
    record: "3–0",
    totalMatTime: "04:32",
    ippons: "—",
    fastestWin: "—",
    competitors: "—",
    preparation: createPreparation(),
    matches: [
      createMatch("01", "QUARTERFINAL", "WIN"),
      createMatch("02", "SEMIFINAL", "WIN"),
      createMatch("03", "FINAL", "WIN"),
    ],
    lessons: createLessons(2),
    changes: createChanges(),
    progression: createProgression(),
    navigation: {
      previous: { id: "copa-catalunya-juniors-2026" },
      next: null,
    },
  },
};
