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
    ippons: "3",
    fastestWin: "00:56",
    competitors: "9",
    preparation: {
      story:
        "This was my first competition after moving to Barcelona. My goal was still the gold medal: I wanted to test the skills I had been developing and discover how quickly I could adapt to a new environment.",
    },
    matches: [
      createMatch("01", "ROUND ONE", "WIN", {
        method: "IPPON",
        duration: "00:56",
        score: "100 – 000",
        technique: "Soto-Makikomi",
        note: "After establishing my dominant left grip, my opponent made a mistake while trying to break it. I took advantage of the opening and finished the match with a beautiful Soto-Makikomi.",
        scores: {
          mine: { ippon: 1, wazaAri: 0, yuko: 0, shidos: null },
          opponent: { ippon: 0, wazaAri: 0, yuko: 0, shidos: null },
        },
      }),
      createMatch("02", "QUARTER-FINAL", "WIN", {
        method: "IPPON",
        duration: "01:38",
        score: "100 – 000",
        technique: "Ko-Soto-Gake",
        note: "Once again, after establishing my dominant left grip, my opponent made a mistake while attempting Yoko-Gake. My stronger grip and positioning allowed me to counter the attack and finish the match with Ko-Soto-Gake.",
        scores: {
          mine: { ippon: 1, wazaAri: 0, yuko: 0, shidos: null },
          opponent: { ippon: 0, wazaAri: 0, yuko: 0, shidos: 1 },
        },
      }),
      createMatch("03", "SEMI-FINAL", "WIN", {
        method: "IPPON",
        duration: "01:24",
        score: "100 – 000",
        technique: "Uchi-Mata-Gaeshi",
        note: "By applying constant pressure from the left side, I forced my opponent into a mistake. When he attacked with Uchi-Mata, I countered with Uchi-Mata-Gaeshi and finished the match.",
        scores: {
          mine: { ippon: 1, wazaAri: 0, yuko: 0, shidos: 1 },
          opponent: { ippon: 0, wazaAri: 0, yuko: 0, shidos: null },
        },
      }),
      createMatch("04", "FINAL", "LOSS", {
        method: "IPPON",
        duration: "03:42",
        score: "001 – 101",
        technique: "Seoi-Otoshi",
        note: "After conceding a Yuko and being put under pressure in Ne-waza, I fought my way back by scoring a Yuko with Uchi-Mata. I could not take the lead, however, and after receiving two shidos, I tried to break the grip my opponent had been setting up throughout the match. He capitalized on that mistake with a beautiful Seoi-Otoshi in the final 15 seconds.",
        scores: {
          mine: { ippon: 0, wazaAri: 0, yuko: 1, shidos: 2 },
          opponent: { ippon: 1, wazaAri: 0, yuko: 1, shidos: 1 },
        },
      }),
    ],
    lessons: [
      {
        title: "PRESSURE",
        text: "I constantly pressured my opponents, forcing mistakes and creating opportunities. In the final, however, I could not maintain that same pressure.",
      },
      {
        title: "ADAPTATION",
        text: "Despite the challenges that shaped the result, I could feel myself progressing between matches. After every fight, I adapted and created a clearer plan for the next one. Most importantly, I adjusted to a new environment much faster than I expected. That ability helped me add new skills that influenced every competition that followed.",
      },
      {
        title: "TRANSITIONS",
        text: "My opponent in the final transitioned extremely well from standing to groundwork. His constant pressure affected my endurance and focus, eventually forcing the mistakes that decided the match.",
      },
    ],
    changes: [
      {
        before:
          "Before this competition, I had not realized how underdeveloped my groundwork was or how heavily I relied on standing techniques.",
        after:
          "When I left the pavilion, I felt like a different athlete from the one who had arrived that morning. I had progressed between every match, adapted faster than I expected and gained a clearer understanding of why I lost the final. The athlete after the first match was not the same athlete after the second, the third or the final. That ability to learn in real time became the most important lesson I took from this competition.",
      },
    ],
    progression: {
      eyebrow: "ACT 07 · PUT INTO PRACTICE",
      text: "After adding groundwork and transition skills to my game, I began putting them into practice in the competitions that followed. In a very short time, I could see how much they improved my overall performance and results against much stronger fields.",
    },
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
    ippons: "2",
    fastestWin: "00:34",
    competitors: "20",
    preparation: {
      story:
        "This was my first Super Copa, and I was excited to test myself against a stronger field of competitors. I also wanted to revisit the weaknesses exposed by my previous competition and discover how much progress I had made since then.",
    },
    matches: [
      createMatch("01", "ROUND ONE", "WIN", {
        method: "IPPON",
        duration: "00:34",
        score: "100 – 000",
        technique: "O-Soto-Gari",
        note: "My opponent was very tall and physically strong, but I established my grip and control within the opening seconds. I attacked with a one-handed drop O-Soto-Gari, and while attempting to defend the throw, he was injured and unable to continue the match.",
        scores: {
          mine: { ippon: 1, wazaAri: 0, yuko: 0, shidos: null },
          opponent: { ippon: 0, wazaAri: 0, yuko: 0, shidos: null },
        },
      }),
      createMatch("02", "QUARTER-FINAL", "WIN", {
        method: "IPPON",
        duration: "00:46",
        score: "100 – 000",
        technique: "Uchi-Mata",
        note: "After conceding a Yuko in the first minute, I spent the rest of regulation time searching for an equalizer. In the final seconds, I scored with Sumi-Gaeshi and forced the match into golden score. Despite receiving two shidos and suffering an injury early in golden score, I stayed composed and scored another Yuko with the same technique to win the match.",
        scores: {
          mine: { ippon: 1, wazaAri: 0, yuko: 0, shidos: null },
          opponent: { ippon: 0, wazaAri: 0, yuko: 0, shidos: null },
        },
      }),
      createMatch("03", "SEMI-FINAL", "WIN", {
        method: "YUKO",
        duration: "GS 07:36",
        score: "002 – 001",
        technique: "2X Sumi-Gaeshi",
        note: "After being scored yuko in the first minute of the match, I was constantly trying to even the score and in the last seconds of the match I was able to score a beautiful Sumi-Gaeshi and even the score, after that I got 2 shidos, but I did my best in golden score I got another yuko in the same style and finish the match.",
        scores: {
          mine: { ippon: 1, wazaAri: 0, yuko: 0, shidos: 2 },
          opponent: { ippon: 0, wazaAri: 0, yuko: 0, shidos: 1 },
        },
      }),
      createMatch("04", "FINAL", "LOSS", {
        method: "IPPON",
        duration: "GS 05:12",
        score: "000 – 100",
        technique: "Sasae-Tsuri-Komi-Ashi",
        note: "After a full match of difficult grip fighting, both of us had opportunities, but neither could take the lead during regulation time. One minute into golden score, I was unable to stop my opponent from establishing his strongest grip. He took advantage and scored with a beautiful Sasae-Tsurikomi-Ashi to decide the final.",
        scores: {
          mine: { ippon: 0, wazaAri: 0, yuko: 0, shidos: 2 },
          opponent: { ippon: 1, wazaAri: 0, yuko: 0, shidos: 1 },
        },
      }),
    ],
    lessons: [
      {
        title: "ENDURANCE",
        text: "The semifinal showed me that I could remain focused and follow my game plan deep into golden score. Even after falling behind, receiving two shidos and suffering an injury, my endurance kept me in the match long enough to find the winning score.",
      },
      {
        title: "MENTALITY",
        text: "Tiredness, pain and pressure were all telling me to stop, but I refused to quit. I learned that when the body begins asking for a way out, a disciplined mind can keep the fight alive.",
      },
    ],
    changes: [
      {
        before:
          "The night before the competition, I discovered that my opening match would be against the second seed, one of the strongest competitors in the draw. He was very tall, and because our contest was number 20, I would also have to manage a long wait before stepping onto the mat.",
        after:
          "The opening match ended after my opponent was injured while defending the throw, and I advanced through the quarter-final with a quick win. The semi-final then became a long and difficult test. I was injured early in golden score, but I remained focused and found a way to win. By the final, the injury had worsened and the semifinal had taken much of my energy. I could not perform at my best, but the progress I saw in my endurance, adaptability and mentality mattered far more than the result alone.",
      },
    ],
    progression: {
      eyebrow: "ACT 07 · PUT INTO PRACTICE",
      text: "This competition revealed that mentality and physical endurance were becoming two of my strongest weapons. I could also see clear progress in my tactics, techniques, groundwork and ability to adapt between matches. In the competitions that followed, I continued sharpening those qualities and turning them into a more complete style of judo.",
    },
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
    image: "./images/gallery/podiums/salou_team_competition.JPG",
    medal: "gold",
    placement: "Gold · 1st Place",
    category: "−90 KG",
    record: "3–1",
    totalMatTime: "08:05",
    ippons: "3",
    fastestWin: "00:14",
    competitorsLabel: "Teams",
    competitors: "6",
    preparation: {
      story:
        "This was my first team competition, and I was excited to test my ability to adapt once again. The competition format was completely different from anything I had experienced before, and every individual fight contributed to something larger than my own result.",
    },

    matches: [
      createMatch("01", "ROUND ONE", "WIN", {
        method: "IPPON",
        duration: "01:32",
        score: "110 – 001",
        technique: "Sumi-Gaeshi & Ko-Soto-Gake",
        note: "After scoring a beautiful Waza-ari with Sumi-Gaeshi in the opening seconds, I briefly lost focus and conceded a Yuko from Seoi-Otoshi. That score brought my concentration back. When my opponent attacked again, I countered with Ko-Soto-Gake and finished the match by Ippon. The team won the opening round 4–1.",
        scores: {
          mine: { ippon: 1, wazaAri: 1, yuko: 0, shidos: null },
          opponent: { ippon: 0, wazaAri: 0, yuko: 1, shidos: 1 },
        },
      }),
      createMatch("02", "ROUND TWO", "LOSS", {
        method: "YUKO",
        duration: "04:00",
        score: "000 – 001",
        technique: "Kata-Guruma",
        note: "After difficult grip fighting in the first minute, my opponent scored a Yuko. From that moment, I applied constant pressure and forced him to receive two shidos. By the time I realized I needed to attack more aggressively, there was not enough time left to change the result. Despite my loss, the team won the round 3–2 and advanced to the semifinal.",
        scores: {
          mine: { ippon: 0, wazaAri: 0, yuko: 0, shidos: null },
          opponent: { ippon: 0, wazaAri: 0, yuko: 1, shidos: 2 },
        },
      }),
      createMatch("03", "SEMI-FINAL", "WIN", {
        method: "IPPON",
        duration: "00:14",
        technique: "Sukashi",
        score: "100 – 000",
        note: "After intense grip fighting during the opening seconds, I established my grip and forced my opponent into a false attack while he attempted to escape the position. The mistake created a perfect opportunity to counter and finish the match after only 14 seconds. The team won the semifinal 4–1.",
        scores: {
          mine: { ippon: 1, wazaAri: 0, yuko: 0, shidos: null },
          opponent: { ippon: 0, wazaAri: 0, yuko: 0, shidos: null },
        },
      }),
      createMatch("04", "Final", "WIN", {
        method: "IPPON",
        duration: "02:44",
        score: "110 – 000",
        technique: "De-Ashi-Barai & O-goshi",
        note: "My team was leading the final 2–1 when it was time for my fight. A victory would secure first place. During the second minute, I scored a magnificent De-Ashi-Barai that brought the commentators and crowd to life. Fifty seconds later, my opponent had no choice but to take more risks, creating the opening I needed to finish with O-Goshi and secure the gold medal for the team. The final team score was 3–2.",
        scores: {
          mine: { ippon: 1, wazaAri: 1, yuko: 0, shidos: null },
          opponent: { ippon: 0, wazaAri: 0, yuko: 0, shidos: null },
        },
      }),
    ],
    lessons: [
      {
        title: "TIME",
        text: "Despite my endurance and constant pressure, time became the deciding factor in my only loss. By the time I realized that I needed to attack more aggressively, it was already too late. I came close to forcing a third shido, but my experienced opponent managed the final moments and protected his lead.",
      },
      {
        title: "TEAM",
        text: "I was frustrated and angry after losing my second fight, but my teammates helped me recover my strength and focus. Their support allowed me to reset, return to the mat and contribute to winning the gold medal. I learned that in a team competition, one individual result never defines the entire journey—the team is always there to lift you back up.",
      },
    ],
    changes: [
      {
        before:
          "My mother had been visiting me during that period, but she was leaving on the morning of the competition. When I took her to the airport, I had to say goodbye without knowing when I would see her again. The emotion of that moment and the travelling left me tired, but I tried to keep those feelings outside the tatami and not allow them to affect my performance.",
        after:
          "The weather was terrible that day, and her flight was delayed. Immediately after winning the final, I called her without realizing that she was supposed to be in the air. She answered, and I managed to tell her that we had won. The moment I finished speaking, the plane began taking off. Before the connection disappeared, she had time to say only one sentence: “The flight was delayed just long enough for you to tell me the result.”",
      },
    ],
    progression: {
      eyebrow: "ACT 07 · PUTTING INTO PRACTICE",
      text: "This day taught me not to carry every emotion from life onto the tatami. I needed to remain calm and clear-headed enough to make decisions under pressure. I also learned that team competitions demand a different mentality: an individual loss does not end the journey when the team is still fighting, and it must never affect the matches that remain.",
    },
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
    ippons: "3",
    fastestWin: "00:19",
    competitors: "15",
    preparation: {
      story:
        "The Super Copa de España in Jaca was my second senior Super Copa. I was excited to test my level against another experienced and physically strong field of competitors. What followed became one of the most important learning experiences of my season.",
    },
    matches: [
      createMatch("01", "ROUND ONE", "WIN", {
        method: "IPPON",
        duration: "00:53",
        score: "100 – 000",
        technique: "Ne-Waza",
        note: "I started the match poorly because I did not understand my opponent’s style quickly enough. I recovered, adapted and secured my first victory in Ne-waza since moving to Barcelona, finishing the contest near the end of the opening minute.",
        scores: {
          mine: { ippon: 1, wazaAri: 0, yuko: 0, shidos: null },
          opponent: { ippon: 0, wazaAri: 0, yuko: 0, shidos: null },
        },
      }),
      createMatch("02", "QUARTER-FINAL", "LOSS", {
        method: "IPPON",
        duration: "01:47",
        score: "000 – 101",
        technique: "Okuri-Eri-Jime",
        note: "I was facing a former Spanish national team member who had won national titles across multiple age categories. His experience and technical level prevented me from establishing my usual performance. I made several mistakes, and he took advantage to finish the contest with Okuri-Eri-Jime.",
        scores: {
          mine: { ippon: 0, wazaAri: 0, yuko: 0, shidos: 1 },
          opponent: { ippon: 1, wazaAri: 0, yuko: 1, shidos: null },
        },
      }),
      createMatch("03", "REPECHAGE R1", "WIN", {
        method: "YUKO",
        duration: "00:19",
        score: "001 – 000",
        technique: "Ko-Soto-Gake",
        note: "I carried frustration from the quarterfinal onto the mat and wanted to recover the result too quickly. My opponent made a mistake while trying to escape my dominant grip, giving me the opportunity to attack with Ko-Soto-Gake and take the lead within the opening 19 seconds.",
        scores: {
          mine: { ippon: 0, wazaAri: 0, yuko: 1, shidos: null },
          opponent: { ippon: 0, wazaAri: 0, yuko: 0, shidos: null },
        },
      }),
      createMatch("04", "REPECHAGE R2", "WIN", {
        method: "IPPON",
        duration: "01:39",
        score: "100 – 000",
        technique: "Ko-Uchi-Gari",
        note: "After the previous victory, I regained control of my emotions and entered the match with a calmer mindset. The opening minute was defined by difficult grip fighting and positional exchanges. Once I established my dominant left grip, I used a feint that encouraged my opponent to attack with Ura-Nage. I was already positioned to counter and finished the match with Ko-Uchi-Gari.",
        scores: {
          mine: { ippon: 1, wazaAri: 0, yuko: 0, shidos: null },
          opponent: { ippon: 0, wazaAri: 0, yuko: 0, shidos: null },
        },
      }),
      createMatch("05", "BRONZE FINAL", "WIN", {
        method: "IPPON",
        duration: "00:22",
        technique: "Uchi-Mata",
        score: "100 – 000",
        note: "During the short break before the bronze medal match, I created a clear plan for facing another experienced opponent. I recovered my focus and entered the fight calm. My pressure forced a decisive mistake, creating the opening for a beautiful Uchi-Mata that secured the bronze medal after only 22 seconds.",
        scores: {
          mine: { ippon: 1, wazaAri: 0, yuko: 0, shidos: null },
          opponent: { ippon: 0, wazaAri: 0, yuko: 0, shidos: null },
        },
      }),
    ],
    lessons: [
      {
        title: "ANGER",
        text: "The anger I carried into the first repechage match could easily have produced another bad result. I wanted to recover from the loss too quickly, which made my decisions emotional and rushed. I learned that frustration must never be allowed to control the next fight when there are still matches left to win.",
      },
      {
        title: "RESET",
        text: "After the quarterfinal, I briefly lost both my focus and my desire to continue competing. If I had allowed that feeling to remain, I would have left Jaca with regret instead of a medal. A serious athlete must learn to reset after disappointment because the direction of the entire competition can still change.",
      },
      {
        title: "WARM-UP",
        text: "A poor warm-up affected my lower back, movement and performance throughout the day. I learned that preparation before the first contest is not a minor detail—it can influence every match that follows. Since Jaca, I have approached my competition warm-up with much greater control and purpose.",
      },
    ],
    changes: [
      {
        before:
          "When we arrived at the pavilion, I did not warm up properly. I began with movements that were too fast and uncontrolled, causing lower-back pain that remained with me throughout the competition. Until that day, I had underestimated how strongly a poor warm-up could affect the final result.",
        after:
          "I left Jaca happy to have won the bronze medal, but my quarterfinal performance continued to trouble me. It forced me to examine details that had previously seemed unimportant: the warm-up, emotional control and the ability to reset after a loss. I understood that each of those details could influence a result far more than I had realized.",
      },
    ],
    progression: {
      eyebrow: "ACT 07 · PUTTING INTO PRACTICE",
      text: "The next competition arrived quickly and returned me to the junior category. It gave me room to apply the lessons from Jaca, rebuild my confidence and experiment with techniques and movement that were much harder to test against experienced senior opponents.",
    },
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
    ippons: "5",
    fastestWin: "00:14",
    competitors: "7",
    preparation: {
      story:
        "This was my first junior competition of the season. After already winning medals in the senior category, I stepped onto the mat with a completely different level of confidence. I wanted to compete freely, trust my movement and test techniques without being controlled by the fear of failure.",
    },
    matches: [
      createMatch("01", "ROUND ONE", "WIN", {
        method: "IPPON",
        duration: "00:53",
        score: "100 – 000",
        technique: "Harai-Tsurikomi-Ashi",
        note: "I entered the competition determined to experiment, improve and move differently from my previous events. I scored a Waza-ari with a beautiful foot technique before transitioning into groundwork and securing the opening victory with an Osaekomi.",
        scores: {
          mine: { ippon: 1, wazaAri: 0, yuko: 0, shidos: null },
          opponent: { ippon: 0, wazaAri: 0, yuko: 0, shidos: null },
        },
      }),
      createMatch("02", "ROUND TWO", "WIN", {
        method: "IPPON",
        duration: "00:35",
        score: "101 – 000",
        technique: "De-Ashi-Barai & Uchi-Mata",
        note: "I scored an early Yuko with De-Ashi-Barai. Immediately after the second Hajime, I maintained the momentum, attacked with Uchi-Mata and finished the contest after only 35 seconds.",
        scores: {
          mine: { ippon: 1, wazaAri: 0, yuko: 1, shidos: null },
          opponent: { ippon: 0, wazaAri: 0, yuko: 0, shidos: null },
        },
      }),
      createMatch("03", "ROUND THREE", "WIN", {
        method: "IPPON",
        duration: "00:52",
        score: "101 – 000",
        technique: "2X De-Ashi-Barai",
        note: "I scored an early Yuko with De-Ashi-Barai and continued creating opportunities through my footwork. Later in the contest, I attacked with the same technique again and converted it into a winning Ippon.",
        scores: {
          mine: { ippon: 1, wazaAri: 0, yuko: 1, shidos: null },
          opponent: { ippon: 0, wazaAri: 0, yuko: 0, shidos: null },
        },
      }),
      createMatch("04", "SEMI-FINAL", "WIN", {
        method: "IPPON",
        duration: "00:14",
        score: "100 – 000",
        technique: "De-Achi-Barai",
        note: "Fourteen seconds into the semifinal, another precise De-Ashi-Barai secured my fourth consecutive Ippon and a place in the final. The movement and timing I had been trying throughout the day were becoming completely natural.",
        scores: {
          mine: { ippon: 1, wazaAri: 0, yuko: 0, shidos: null },
          opponent: { ippon: 0, wazaAri: 0, yuko: 0, shidos: null },
        },
      }),
      createMatch("05", "FINAL", "WIN", {
        method: "IPPON",
        duration: "01:48",
        score: "100 – 000",
        technique: "Uchi-Mata-Gaeshi",
        note: "Almost two minutes into the final, my constant pressure forced my opponent into a rushed attack. I recognized the opportunity, countered with Uchi-Mata-Gaeshi and secured my first individual gold medal of the 2026 season.",
        scores: {
          mine: { ippon: 1, wazaAri: 0, yuko: 0, shidos: null },
          opponent: { ippon: 0, wazaAri: 0, yuko: 0, shidos: null },
        },
      }),
    ],
    lessons: [
      {
        title: "FOOTWORK",
        text: "Footwork had once been one of my strongest weapons, and this competition allowed me to rediscover it. Across five matches, my movement, timing and Ashi-waza created nearly every decisive opportunity. It reminded me how much of my judo could be built around controlling the space beneath my opponent.",
      },
      {
        title: "CONFIDENCE",
        text: "I was not simply moving and testing techniques—I believed in every decision I made. That confidence allowed me to attack without hesitation and created something more valuable than the gold medal: proof that I could trust my judo under pressure.",
      },
      {
        title: "TRUST",
        text: "I learned how to experiment without being controlled by fear. It was not because I believed every attack would succeed, but because I trusted myself to recover and respond when one failed. That freedom was something I had been trying to develop for a long time.",
      },
    ],
    changes: [
      {
        before:
          "When I arrived at the pavilion that morning, I had a powerful belief that no one would stop me from winning the gold medal. It was not because I considered myself the strongest or most experienced competitor. I had simply decided to free my mind, enjoy the competition and trust the momentum I had built.",
        after:
          "That mindset carried me through five victories and the gold medal, but it also gave me something that would matter far beyond this competition. I left with greater trust in my movement, sharper confidence in my decisions and the freedom to attempt techniques without fearing what would happen if they failed.",
      },
    ],
    progression: {
      eyebrow: "ACT 07 · PUTTING INTO PRACTICE",
      text: "The following competition was also in the junior category, giving me another opportunity to continue experimenting. I could carry forward the confidence, footwork and freedom I discovered here while testing them against a stronger national field.",
    },
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
    ippons: "3",
    fastestWin: "00:12",
    competitors: "10",
    preparation: {
      story:
        "This was my first junior Super Copa, and my mindset was stronger than ever. The confidence I had developed in my previous competition allowed me to trust my decisions, but a difficult night without enough sleep created a new challenge before I even reached the tatami.",
    },
    matches: [
      createMatch("01", "QUARTER-FINAL", "WIN", {
        method: "IPPON",
        duration: "02:12",
        score: "112 – 000",
        technique: "2X De-Ashi-Barai & O-Uchi-Gari & O-Uchi-Gaeshi",
        note: "I opened the contest by scoring two Yukos with foot techniques before adding a Waza-ari with O-Uchi-Gari. After two minutes, my opponent attempted O-Uchi-Gari while I held the stronger grip and position. The mistake gave me the opportunity to counter with O-Uchi-Gaeshi and finish the match by Ippon.",
        scores: {
          mine: { ippon: 1, wazaAri: 1, yuko: 2, shidos: null },
          opponent: { ippon: 0, wazaAri: 0, yuko: 0, shidos: null },
        },
      }),
      createMatch("02", "SEMI-FINAL", "WIN", {
        method: "IPPON",
        duration: "00:12",
        technique: "Sasae-Tsurikomi-Ashi",
        note: "After a demanding quarter-final, I trusted the confidence and willingness to take risks that I had developed at my previous competition. We established an even grip, but I committed to the attack without hesitation and scored a flawless Sasae-Tsurikomi-Ashi after only 12 seconds, securing my place in the final while saving valuable energy.",
        scores: {
          mine: { ippon: 1, wazaAri: 0, yuko: 0, shidos: null },
          opponent: { ippon: 0, wazaAri: 0, yuko: 0, shidos: null },
        },
      }),
      createMatch("03", "FINAL", "WIN", {
        method: "IPPON",
        duration: "01:35",
        score: "100 – 000",
        technique: "O-Soto-Gari",
        note: "The lunch break allowed me to recover my focus and strength before the final. I stepped onto the tatami calm, sharp and prepared. After a difficult opening minute of grip fighting, I established the position I needed and attacked with O-Soto-Gari, one of my favourite and strongest techniques to secure my place at the top of the podium.",
        scores: {
          mine: { ippon: 1, wazaAri: 0, yuko: 0, shidos: null },
          opponent: { ippon: 0, wazaAri: 0, yuko: 0, shidos: 1 },
        },
      }),
    ],
    lessons: [
      {
        title: "SLEEP",
        text: "The high temperature kept me awake during the night, and I then had to get up at five in the morning to travel to the pavilion. The lack of sleep affected my concentration and reaction time, contributing to a difficult and unfocused opening match. It showed me that proper sleep before a competition is part of performance, not something separate from it.",
      },
      {
        title: "RISK",
        text: "The confidence I had developed in the previous competition reduced my fear of failure. During the semifinal, we established an even grip, but I trusted myself enough to commit fully to the attack. Taking that calculated risk produced a flawless victory, saved energy and gave me more time to prepare for the final.",
      },
    ],
    changes: [
      {
        before:
          "Before the competition, I was worried about how the lack of sleep would affect my performance. I could not solve the problem that morning, but I was already thinking about what I needed to change to prevent it from happening again.",
        after:
          "Even after winning the gold medal, I continued thinking about how much better I might have performed with proper sleep. It taught me that details which appear small can have a major influence on competition day. That realization helped me begin building a more deliberate routine for the days before, during and after every event.",
      },
    ],
    progression: {
      eyebrow: "ACT 07 · PUTTING INTO PRACTICE",
      text: "The journey has only just begun. The confidence, calculated risk and preparation developed through these six chapters will now be tested at the next destination: one of the strongest senior events of the season, the Super Copa de España Absolut — Ciutat de Valencia.",
    },
    navigation: {
      previous: { id: "copa-catalunya-juniors-2026" },
      next: { id: "super-copa-espana-valencia-2026" },
    },
  },
  "super-copa-espana-valencia-2026": {
    id: "super-copa-espana-valencia-2026",
    status: "completed",
    chapter: "07",
    season: "2026",
    competition: "Super Copa de España Absolut",
    date: "16 · 08 · 2026",
    location: "Valencia, Spain",
    image:
      "./images/gallery/competitions/super_copa_de_espana_absolute_valencia_1.jpg",
    medal: "none",
    placement: "9th Place",
    category: "−90 KG",
    record: "0–2",
    totalMatTime: "04:35",
    ippons: "0",
    fastestWin: "—",
    competitors: "25",
    preparation: {
      story:
        "Preparation began at the beginning of July with a clear plan: gym in the morning and judo in the evening, twice a day throughout the month. Things did not unfold that way. By the middle of July, regular judo training had disappeared from my preparation. I continued working in the gym and developing my physical condition, but I arrived in Valencia after several weeks without training in a judogi. Multiple parts of my preparation fell below the standard this competition required. Those circumstances provide context, not excuses. It was still my responsibility to arrive ready—and I did not.",
    },
    matches: [
      createMatch("01", "ROUND TWO", "LOSS", {
        method: "IPPON",
        duration: "03:32",
        score: "000 – 100",
        technique: "Front Uchi-Mata",
        note: "I opened the competition against one of the strongest athletes in the −81 KG category, ranked No. 2 in the world at the time. Instead of cutting to his usual category, he competed at −90 KG in Valencia. He managed the contest intelligently. He took almost no unnecessary risks, controlled the distance and continually adapted his plan. I tried to close the space and establish my dominant left grip, but his experience kept me outside the position I wanted. During the final minute, I increased the pressure and began forcing him outside his comfort zone. It created several small opportunities, but I failed to convert them. In the final seconds, while crossing in to establish my grip, I left too much space between us. He recognized the opening immediately and finished the match with a beautiful front variation of Uchi-mata. I knew the attack was coming, but I could not recover my position in time to defend it. After the fight, he approached me and complimented both my performance and my physical strength. It did not erase the loss, but hearing that from an athlete of his level became one of the most meaningful moments of the competition. It reminded me that, despite the result, I was still moving in the right direction. ",
        scores: {
          mine: { ippon: 0, wazaAri: 1, yuko: 2, shidos: 1 },
          opponent: { ippon: 1, wazaAri: 0, yuko: 0, shidos: null },
        },
      }),
      createMatch("02", "REPECHAGE R1", "LOSS", {
        method: "WAZA-ARI",
        duration: "01:03",
        technique: "Tomoe-Nage",
        note: "I entered the repechage still confident that I could fight my way back to the podium. My opponent repeatedly attacked with Tomoe-nage. After his third attempt, I adjusted by staying close and pulling him toward me, trying to remove the distance he needed to execute the technique. I believed I had brought him too close to attempt it successfully again. I was wrong. Because I believed the position was safe, I was not fully prepared to defend the next attack. He attempted Tomoe-nage for the fourth time, scored a Waza-ari and ended my competition.",
        scores: {
          mine: { ippon: 0, wazaAri: 0, yuko: 0, shidos: 1 },
          opponent: { ippon: 0, wazaAri: 1, yuko: 0, shidos: null },
        },
      }),
    ],
    lessons: [
      {
        title: "DISTRACTIONS",
        text: "This competition gave me many lessons, but the clearest was about distractions. Some of the disruptions surrounding my preparation could have been prevented, while others were outside my control. The real mistake was allowing them to fracture my focus and remove the competition from the centre of my routine. Preparation is not only the work completed in training. It is also the discipline to protect that work, preserve the routine and prevent everything surrounding it from pulling attention away from the goal",
      },
      {
        title: "MINDSET",
        text: "My mindset changed before Valencia. In the previous competitions, I stepped onto the tatami wanting to win. While building this website and looking back at six podiums from six competitions, I began to understand how much that record meant to me. The thought of losing the streak became frightening. Without realizing it, I stopped attacking the competition and started defending a statistic. My mindset changed from wanting to win to being afraid to lose. The result had already begun controlling me before the first Hajime. Valencia taught me that I cannot compete to protect what I have already achieved. I must compete to create what comes next.",
      },
    ],
    changes: [
      {
        before:
          "When I learned who I would face in my opening contest, I genuinely believed I could defeat him. That belief became even stronger after watching his first match. When I lost, I immediately redirected my focus toward the repechage. The opening result was gone, but I still believed I could fight my way back and reach the podium",
        after:
          "I left Valencia without winning a match. It was my weakest result since moving to Spain, and it ended both my winning streak and my run of six podiums from six competitions. The result was heartbreaking, but it also exposed more than another victory could have shown me. It revealed weaknesses in my preparation, focus, distance management, adaptability and competitive mindset. There was now far more to examine and therefore far more to improve. The compliment after my opening match did not change the result, but it changed how I understood it. An athlete competing at the highest level had recognized something in my performance and strength. That gave me confidence, while the fight itself gave me experience that I can carry into every competition that follows. This setback was significant, but I believe the comeback can become even greater. Valencia did not take away my direction. It made that direction clearer.",
      },
    ],
    progression: {
      eyebrow: "ACT 07 · PUTTING INTO PRACTICE",
      text: "Less than twenty days separate Valencia from the next competition in Binéfar. That is not enough time to rebuild everything, but it is enough time to respond: to correct the details, restore discipline and step onto the tatami wanting to win again. This comeback is personal.",
    },
    navigation: {
      previous: { id: "super-copa-espana-juniors-tortosa-2026" },
      next: { id: "super-copa-espana-junior-binefar-2026" },
    },
  },
  "super-copa-espana-junior-binefar-2026": {
    id: "super-copa-espana-junior-binefar-2026",
    status: "upcoming",
    chapter: "08",
    season: "2026",
    competition: "Super Copa de España Junior",
    date: "05 · 09 · 2026",
    countdownDate: "2026-09-05T00:00:00+02:00",
    location: "Binéfar, Spain",
    image: null,
    category: "−90 KG",
    division: "Junior",
    level: "National Super Copa",
    opportunity: {
      eyebrow: "THE COMEBACK",
      story:
        "The next chapter returns to the junior category in Binéfar. It is an opportunity to apply the lessons from Valencia, respond with discipline and begin building momentum again.",
    },
    preparation: {
      story:
        "Preparation for Binéfar is focused on correcting the details exposed in Valencia and returning to competition with a clearer, more aggressive and more disciplined approach.",
    },
    objectives: [
      {
        title: "RESPONSE",
        text: "Turn the lessons from Valencia into visible changes from the opening Hajime.",
      },
      {
        title: "DISCIPLINE",
        text: "Follow the plan, control the distance and remain composed in every exchange.",
      },
      {
        title: "MOMENTUM",
        text: "Compete to win again and begin the next part of the season with purpose.",
      },
    ],
    navigation: {
      previous: { id: "super-copa-espana-valencia-2026" },
      next: null,
    },
  },
};
