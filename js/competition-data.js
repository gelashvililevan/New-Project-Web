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
        "This was my first competition after moving to Barcelona, but despite that my main goal was gold medal and to test my new skills and see how fast I would adapt to the new environment.",
    },
    matches: [
      createMatch("01", "ROUND ONE", "WIN", {
        method: "IPPON",
        duration: "00:56",
        technique: "Soto-Makikomi",
        note: "After getting my dominant left grip, opponent made a mistake while trying to break my grip and I was able to take advantage of that and finish the match with a beautiful Soto-Makikomi.",
        scores: {
          mine: { ippon: 1, wazaAri: 0, yuko: 0, shidos: null },
          opponent: { ippon: 0, wazaAri: 0, yuko: 0, shidos: null },
        },
      }),
      createMatch("02", "QUARTER-FINAL", "WIN", {
        method: "IPPON",
        duration: "01:38",
        technique: "Ko-Soto-Gake",
        note: "Still after getting my dominant left grip, opponent made a mistake while trying to throw me with Yoko-Gake and because I had better grip and positioning I was able to counter that and finish the match with a beautiful Ko-Soto-Gake.",
        scores: {
          mine: { ippon: 1, wazaAri: 0, yuko: 0, shidos: null },
          opponent: { ippon: 0, wazaAri: 0, yuko: 0, shidos: 1 },
        },
      }),
      createMatch("03", "SEMI-FINAL", "WIN", {
        method: "IPPON",
        duration: "01:24",
        technique: "Uchi-Mata-Gaeshi",
        note: "After constant presure from left side, I was able to make my opponent to make a mistake and I was able to counter his Uchi-Mata with Uchi-Mata-Gaeshi and finish the match.",
        scores: {
          mine: { ippon: 1, wazaAri: 0, yuko: 0, shidos: 1 },
          opponent: { ippon: 0, wazaAri: 0, yuko: 0, shidos: null },
        },
      }),
      createMatch("04", "FINAL", "LOSS", {
        method: "IPPON",
        duration: "03:42",
        technique: "Uchi-Mata",
        note: "After being scored yuko and getting presured in Ne-waza, I was able to comeback in match by scoring yuko with Uchi-Mata, but I wasn't able to take the lead in points and after getting 2 shidos I made a mistake by trying to break grip that he was waiting for the whole match and he was able to take advantage of that and scored a beautiful Seoi-Otoshi that decided the match in the last 15 seconds.",
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
        title: "RESULT",
        text: "Despite the challenges that shaped my result, I felt the huge progress even between matches, after every match I was adapting and setting up a plan for next one. Most importantly, I was able to adapt way faster to new enviroment than i expected, and this competition and experience led me to adding new set of skills to my game that shaped every next competition since then.",
      },
      {
        title: "TRANSITIONS",
        text: "My opponent in the final transitioned extremely well from standing to groundwork. His constant pressure affected my endurance and focus, eventually forcing the mistakes that decided the match.",
      },
    ],
    changes: [
      {
        before:
          "Before this competition, I was unable to realize how low was my groundwork skills and how much I was relying on standing techniques. Also I was able to adapt new things easier than i expected.",
        after:
          "After I left the pavilion, I realized that me who came in the morning and me who left the competition was completely different person, I knew that I had to work on the reasons that made me lose the final, but I have never felt progress between matches like that before, the guy after first match, the guy after second match, the guy after third match and the guy after final were 4 completely different person, and that was the most important lesson I took from this competition.",
      },
    ],
    progression: {
      eyebrow: "ACT 07 · PUTTING INTO PRACTICE",
      text: "After adding groundwork and transition skills to my game, I was able to put them into practice in the next competitions, and I was able to see how much they improved my overall performance and results in a very short time and way stronger events.",
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
        "This was my first super copa and I was excited to test my skills against a stronger field of competitors. Also I wanted to test the weaknesses that I discovered in the previous competition and see how much I improved since then.",
    },
    matches: [
      createMatch("01", "ROUND ONE", "WIN", {
        method: "IPPON",
        duration: "00:34",
        technique: "O-Soto-Gari",
        note: "The guy was so tall and strong, but I was able to take grip and control in the first seconds of the match and after that I tried one handed drop O-Soto-Gari and he got injured while trying to defend the throw in a wrong way and was unable to continue the match.",
        scores: {
          mine: { ippon: 1, wazaAri: 0, yuko: 0, shidos: null },
          opponent: { ippon: 0, wazaAri: 0, yuko: 0, shidos: null },
        },
      }),
      createMatch("02", "QUARTER-FINAL", "WIN", {
        method: "IPPON",
        duration: "00:46",
        technique: "Uchi-Mata",
        note: "After putting much presure from left grip, opponent made a mistake by trying to throw me with Yoko-Gake and I was able to counter that with a beautiful Uchi-Mata and finish the match in early seconds.",
        scores: {
          mine: { ippon: 1, wazaAri: 0, yuko: 0, shidos: null },
          opponent: { ippon: 0, wazaAri: 0, yuko: 0, shidos: null },
        },
      }),
      createMatch("03", "SEMI-FINAL", "WIN", {
        method: "IPPON",
        duration: "GS 07:36",
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
        technique: "Sasae-Tsuri-Komi-Ashi",
        note: "After strong grip fighting whole match and both of us having out moments, still none of us was able to take the lead until golden score. After 1 minute of golden score, I couldn't defend his strongest grip and technique and he was able to score a beautiful Sasae-Tsuri-Komi-Ashi that decided the match.",
        scores: {
          mine: { ippon: 0, wazaAri: 0, yuko: 0, shidos: 2 },
          opponent: { ippon: 1, wazaAri: 0, yuko: 0, shidos: 1 },
        },
      }),
    ],
    lessons: [
      {
        title: "ENDURANCE",
        text: "I was able to keep my focus and game plan in the semi-final even tho everything seemed to be against me, but still I got the score late in the golden score. I was amazed by my endurance that gave me the chance to win the match and go to the final. Since then I realized that it's one of my strongest skills and I can use it to my advantage in the future.",
      },
      {
        title: "MENTALITY",
        text: "Despite of the longevity of the match, I was able to get through tiredness and didn't listen to the body that only wanted to quit.",
      },
    ],
    changes: [
      {
        before:
          "Night before the competition when I saw the contest order, I found out that my first match was against one of the strongest guy in the competition who was seeded number 2 and also that the match was #20 in the contest which meant I would have to wait about 1 hour since the competition start. I knew that guy was so tall and I had to be very careful.",
        after:
          "Unfortunately, after causing an injury to my opponent in the first match, I was able to find my way to the final, I was able to win my second match easily. Semi-final was long and tough test, despite of the injury that I got in the beginning of the golden score, that affected my focus and attacks, I was still able to win the match and go to the final, but I was so exhausted and injury got worse during break before the final, and I wasn't able to perform at my best in the final and still after trying my best I lost the final. Most importantly, I saw huge progress and that's what mattered most.",
      },
    ],
    progression: {
      eyebrow: "ACT 07 · PUTTING INTO PRACTICE",
      text: "After this competition, I realized that my mentality and physical endurance are one of my strongest skills. I was able to see huge progress in my game plan, tactics, techniques, groundwork and adapting so fast after every match. I kept improving and sharpening these set of skills to shape them into my strongest weapons in the upcoming competitions.",
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
    image: "./images/gallery/competitions/salou_team_competition.JPG",
    medal: "gold",
    placement: "Gold · 1st Place",
    category: "−90 KG",
    record: "3–1",
    totalMatTime: "08:05",
    ippons: "3",
    fastestWin: "00:14",
    competitors: "6",
    preparation: {
      story:
        "This was my first team competition and I was excited to test my adaptation skills again because competition style and format was completely different from any other I had before.",
    },
    matches: [
      createMatch("01", "ROUND ONE", "WIN", {
        method: "IPPON",
        duration: "01:32",
        technique: "Sumi-Gaeshi & Ko-Soto-Gake",
        note: "After scoring one beautiful waza-ari with Sumi-Gaeshi in the first seconds of the match, I lost focus and got scored yuko by Seoi-Otoshi. It helped me find my focus again and counter his attack with Ko-Soto-Gari to finish match in under 2 minutes. Team was able to win the first match with score of 4-1.",
        scores: {
          mine: { ippon: 1, wazaAri: 1, yuko: 0, shidos: null },
          opponent: { ippon: 0, wazaAri: 0, yuko: 1, shidos: 1 },
        },
      }),
      createMatch("02", "ROUND TWO", "LOSS", {
        method: "YUKO",
        duration: "04:00",
        technique: "Kata-Guruma",
        note: "In the first minute of the match, after strong grip fighting I got scored yuko. Since then I kept applying lots of presure and made opponent gain 2 shidos, but due to lack of time I wasn't able to save the match, despite my loss, team still triumphed the way into the semi-final with final score of 3-2 in the round 2.",
        scores: {
          mine: { ippon: 0, wazaAri: 1, yuko: 0, shidos: null },
          opponent: { ippon: 0, wazaAri: 0, yuko: 1, shidos: 2 },
        },
      }),
      createMatch("03", "SEMI-FINAL", "WIN", {
        method: "IPPON",
        duration: "00:14",
        technique: "Sukashi",
        note: "Hard grip fighting in the first 10 seconds of the match and after getting my grip opponent made a mistake by doing false attack to break my grip which gave me an huge opportunity to counter and win the match in very early seconds. Team won semi-final with the score of 4-1.",
        scores: {
          mine: { ippon: 1, wazaAri: 0, yuko: 0, shidos: null },
          opponent: { ippon: 0, wazaAri: 0, yuko: 0, shidos: null },
        },
      }),
      createMatch("04", "Final", "WIN", {
        method: "IPPON",
        duration: "02:44",
        technique: "De-Ashi-Barai & O-goshi",
        note: "2-1 leading in the match by my team and then there comes my fight, if I win team gets first place, if I lose there is still another chance, but in the second minute of fight I scored magnificent De-Ashi-Barai that made the comentators and fans go crazy. 50 seconds after that my opponent had no choice but to leave me many opportunities and I was able to score Ippon with O-goshi and win the gold medal for the team. Final score was 3-2.",
        scores: {
          mine: { ippon: 1, wazaAri: 1, yuko: 0, shidos: null },
          opponent: { ippon: 0, wazaAri: 0, yuko: 0, shidos: null },
        },
      }),
    ],
    lessons: [
      {
        title: "TIME",
        text: "Despite of my endurance and constant presure, time was the main reason why I lost the second match, when I realized that I had to got more aggresive with my attacks it was already too late. I was so close to winning by shidos but opponent was too expierienced and stopped all my attacks and won the match without getting disqualified.",
      },
      {
        title: "TEAM",
        text: "After losing my second fight, I was really frustraited and angry, but my team helped me get through it and gain all my strength and focus back. They motivated me and we did everything to secure a gold medal. It made me realize in this case individual loss means nothing and team always got your back.",
      },
    ],
    changes: [
      {
        before:
          "In that period of time my mother was visiting me and she was leaving before the competition. When I got her to the airport I had to say goodbye without knowing when will I be able to see her again. Also it affected my mood and traveling made me tired, despite that I had tried everything to not let it affect my performance and to leave my feelings and mood behind the tatami.",
        after:
          "The weather was so bad in that day and flight was delayed. Right after winning the final I called my mother without realizing she was meant to be in the middle of the flight, but she answered, I was able to tell her about the result and the second I finished my speech, plane took off, she was able to tell me only one sentence 'The flight was delayed just enough time for u to tell me about ut result.' and then connection was lost.",
      },
    ],
    progression: {
      eyebrow: "ACT 07 · PUTTING INTO PRACTICE",
      text: "After this day, I realized that I should always try not to merge mood and feelings to the tatami. I should keep calm and cold heart to make decisions quickly and not to let other things affect my performance and resutls. I also learned that team competitions needs very differend kind of approuch, there is no loss if team won and it shouldn't affect my remaining fights.",
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
        "Super Copa De Espana Jaca was my 2nd seniors super copa, I was so excited to test my level among one of the most experienced and strong ones. Rest is history.",
    },
    matches: [
      createMatch("01", "ROUND ONE", "WIN", {
        method: "IPPON",
        duration: "00:53",
        technique: "Ne-Waza",
        note: "After bad start due to lack of knowladge about the opponents style I managed to get my first ever win in Ne-Waza, since I moved in Barcelona at the very end of the first minute in the fight.",
        scores: {
          mine: { ippon: 1, wazaAri: 0, yuko: 0, shidos: null },
          opponent: { ippon: 0, wazaAri: 0, yuko: 0, shidos: null },
        },
      }),
      createMatch("02", "QUARTER-FINAL", "LOSS", {
        method: "IPPON",
        duration: "01:47",
        technique: "Okuri-Eri-Jime",
        note: "In this fight I was facing one of the strongest Spain national team member years ago and national champion in every category, his experience and skills made me unable to perform well and unfortunately duo to making lots of mistakes I lost this fight.",
        scores: {
          mine: { ippon: 0, wazaAri: 0, yuko: 0, shidos: 1 },
          opponent: { ippon: 1, wazaAri: 0, yuko: 1, shidos: null },
        },
      }),
      createMatch("03", "REPECHAGE R1", "WIN", {
        method: "IPPON",
        duration: "00:19",
        technique: "Ko-Soto-Gake",
        note: "Due to frustration, I went in this fight angry, I wanted to win so fast and hard, luckily my opponent made mistake duo to dominant grip and I was able to get an easy win in the first 20 seconds of the match.",
        scores: {
          mine: { ippon: 0, wazaAri: 0, yuko: 1, shidos: null },
          opponent: { ippon: 0, wazaAri: 0, yuko: 0, shidos: null },
        },
      }),
      createMatch("04", "REPECHAGE R2", "WIN", {
        method: "IPPON",
        duration: "01:39",
        technique: "Ko-Uchi-Gari",
        note: "After last win, I was able to control my emotions a little bit and went to the fight calm. First minute was hard, grip fighting, positions and so on, at the end of the second minute I was able to get my domimant left grip and did false attack which worked well and opponent tried to throw Ura-Nage but I already had the right position to countered it with Ko-Uchi-Gari and won the fight.",
        scores: {
          mine: { ippon: 1, wazaAri: 0, yuko: 0, shidos: null },
          opponent: { ippon: 0, wazaAri: 0, yuko: 0, shidos: null },
        },
      }),
      createMatch("04", "BRONZE FINAL", "WIN", {
        method: "IPPON",
        duration: "00:22",
        technique: "Uchi-Mata",
        note: "After small break I was able to set up a plan for the bronze medal fight where my opponent was very experienced judoka. I was able to gain focus and calm before the fight which led me to force opponent make a fatal mistake which gave me opportunity to throw beautiful Uchi-Mata and win fight in first 20 seconds.",
        scores: {
          mine: { ippon: 1, wazaAri: 0, yuko: 0, shidos: null },
          opponent: { ippon: 0, wazaAri: 0, yuko: 0, shidos: null },
        },
      }),
    ],
    lessons: [
      {
        title: "ANGER",
        text: "The anger I carried to the mat after my loss could have made the first repechage fight ended very bad for me, I learned that despite the performance and the loss I should always try to keep my focus, emotions, mentality and strength especially when there are fights ahead to win!",
      },
      {
        title: "FOCUS",
        text: "After loss, I lost my focus, also lost my will to continue competing at that cup, but I learned that it can cause the results that will turn into reasons of regret, I will always try to control my emtions, anger, frustration, focus and mindset, without these it will become almost impossible to win important fights. Every proffesional athlete should work on these skills that might change the directionof  many fights in the future.",
      },
      {
        title: "WARM UP",
        text: "The bad warm up can really define and affect the results and performance of the day, this is what I realized after having bad warp up.It made me face the importance of the good warm up before the competition, and changed the way I approuch it from since then.",
      },
    ],
    changes: [
      {
        before:
          "In the morning when we went in pavilion, I wasn't able to properly warm up. I started doing fast and uncontrolable moves that caused lower back pain throughout the whole competition. This made me realize very certain point that good or bad warm up can shape the final resutls more than I thought.",
        after:
          "After I left Jaca with bronze medal, I was happy with this results, but my underperformance in quarter-final still haunted me, but it taught me very important lessons that will shape me and my approuches to the very certain things that might seem unimportant but these has more influence on results than I have ever thought.",
      },
    ],
    progression: {
      eyebrow: "ACT 07 · PUTTING INTO PRACTICE",
      text: "Next competition was very close but it was in the juniors which gave me opportunities to test a lot of things, which I was unable to test in seniors category.",
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
        "This was my first cup in juniors, duo to past medals in the seniors category, I stepped into the mat with very different mindset and confidance.",
    },
    matches: [
      createMatch("01", "ROUND ONE", "WIN", {
        method: "IPPON",
        duration: "00:53",
        technique: "Harai-Tsurikomi-Ashi",
        note: "With this confidence and the mission to test as much and improve as much as possible I was moving really differently from the last competitions, in this fight I was able to score waza-ari with beautiful foot technique and then pin another 10 seconds down to secure a first win.",
        scores: {
          mine: { ippon: 1, wazaAri: 0, yuko: 0, shidos: null },
          opponent: { ippon: 0, wazaAri: 0, yuko: 0, shidos: null },
        },
      }),
      createMatch("02", "ROUND TWO", "WIN", {
        method: "IPPON",
        duration: "00:35",
        technique: "De-Ashi-Barai & Uchi-Mata",
        note: "After scoring yuko with foot technique in the first seconds of the fight, I was able to finish fight after second hajime with Uci-Mata.",
        scores: {
          mine: { ippon: 1, wazaAri: 0, yuko: 1, shidos: null },
          opponent: { ippon: 0, wazaAri: 0, yuko: 0, shidos: null },
        },
      }),
      createMatch("03", "ROUND THREE", "WIN", {
        method: "IPPON",
        duration: "00:52",
        technique: "2X De-Ashi-Barai",
        note: "Scoring yuko with De-Ashi-Barai early in the fight, I scored ippon using same technique afterwards.",
        scores: {
          mine: { ippon: 1, wazaAri: 0, yuko: 1, shidos: null },
          opponent: { ippon: 0, wazaAri: 0, yuko: 0, shidos: null },
        },
      }),
      createMatch("04", "SEMI-FINAL", "WIN", {
        method: "IPPON",
        duration: "00:14",
        technique: "De-Achi-Barai",
        note: "First 15 seconds in the fight and I already has my place in final, after scoring 4th ippon in a row using only foot.",
        scores: {
          mine: { ippon: 1, wazaAri: 0, yuko: 0, shidos: null },
          opponent: { ippon: 0, wazaAri: 0, yuko: 0, shidos: null },
        },
      }),
      createMatch("05", "FINAL", "WIN", {
        method: "IPPON",
        duration: "01:48",
        technique: "Uchi-Mata-Gaeshi",
        note: "Almost 2 minutes into the fight and constant presure payed off, forcing opponent do quick attack and I was able to counter it and secure my first ever individual gold medal in 2026.",
        scores: {
          mine: { ippon: 1, wazaAri: 0, yuko: 0, shidos: null },
          opponent: { ippon: 0, wazaAri: 0, yuko: 0, shidos: null },
        },
      }),
    ],
    lessons: [
      {
        title: "TEST",
        text: "I was able to improve my foot work magnificently. In the past, foot work was one of my strongest weapons and after this competition i realived it.",
      },
      {
        title: "CONFIDENCE",
        text: "In this competition I wasn't just moving and testing things, I was confident doing these things, I had this unexplaineble belief that everything I was testing would work, which let me to gaining something far more valuable than just a gold medal.",
      },
      {
        title: "SKILL",
        text: "This competition helped me develop a new skill which lets me test things without fear, not because everything will work but because I knew what to do if it wouldn't. This is something I have been trying to earn for so long.",
      },
    ],
    changes: [
      {
        before:
          "I had this belief when I get to the pavilion in the morning that no one would stop me from getting this gold medal that day. Not because I was strongest or most experienced guy there but because I chose to free my mind and just enjoy and trust the momentum.",
        after:
          "And that momentum helped me get my gold medal and the skill that changed much and will change and define much more in the future. I gained the confidence that strengthened and sharpened my mentality and mindset even more than it was before!",
      },
    ],
    progression: {
      eyebrow: "ACT 07 · PUTTING INTO PRACTICE",
      text: "Upcoming competition was still in juniors which let me countinueing trying new things.",
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
        "First Super copa in juniors and my mindset was stroner then ever.",
    },
    matches: [
      createMatch("01", "QUARTER-FINAL", "WIN", {
        method: "IPPON",
        duration: "02:12",
        technique: "2X De-Ashi-Barai & O-Uchi-Gari & O-Uchi-Gaeshi",
        note: "Scoring 2 yukos with foot I was able to keep up waza-ari with O-Uchi-Gari, minute in a fight and I already had 2 yukos and waza-ari. After 2 minute passed opponent made a mistake by doing O-Uchi-Gari when I had the better position and grip it gave me opportunity to score a winning ippon with O-Uchi-Gaeshi",
        scores: {
          mine: { ippon: 1, wazaAri: 1, yuko: 2, shidos: null },
          opponent: { ippon: 0, wazaAri: 0, yuko: 0, shidos: null },
        },
      }),
      createMatch("02", "SEMI-FINAL", "WIN", {
        method: "IPPON",
        duration: "00:12",
        technique: "Sasae-Tsurikomi-Ashi",
        note: "After tough quarter-final, I was able to get easy win in semi-final with excelent Sasai-Tsurikomi-Ashi, securing my place into the final.",
        scores: {
          mine: { ippon: 1, wazaAri: 0, yuko: 0, shidos: null },
          opponent: { ippon: 0, wazaAri: 0, yuko: 0, shidos: null },
        },
      }),
      createMatch("03", "FINAL", "WIN", {
        method: "IPPON",
        duration: "01:35",
        technique: "O-Soto-Gari",
        note: "After lunch break I was able to gain back my focus and strength quickly, which led me to stepping into the tatami calm, sharp and prepared to win the final. After tough first minute grip fighting, I was able to secure a great grip and score beautiful one of my favorites and strongest techniques O-Soto-Gari, booking my place at top of the podium.",
        scores: {
          mine: { ippon: 1, wazaAri: 0, yuko: 0, shidos: null },
          opponent: { ippon: 0, wazaAri: 0, yuko: 0, shidos: 1 },
        },
      }),
    ],
    lessons: [
      {
        title: "SLEEP",
        text: "Due to the lack of sleep, first because of high temperature and being unable to sleep at night and second having to wake up at 5 and get to the pavilion. This affected my focus and my time of reaction which let to tough and unfocused first fight, it made me realize the importance of the sleep especially day before the competition.",
      },
      {
        title: "RISk",
        text: "The skill I gained from the last competition which decreased the fear of risk and increased the confidence in case of failure defined and led me win the semi-final in a flawless way. We had the even grip but I was able to take the 'risk' and succeded, giving me lots of time and saving me lots of energy for the final.",
      },
    ],
    changes: [
      {
        before:
          "I was worried about lack of sleep and how it would affect my performance, unable to solve the problem immediately but to think of the ways to never let this happen to me again.",
        after:
          "After securing gold medal I was still thinking how much better I would perform if I could have taken proper amount of sleep. It made me realize that every datail that might seem small at once can have huge influence on performance. Helping me create perfect rountine before,during and after competitions.",
      },
    ],
    progression: {
      eyebrow: "ACT 07 · PUTTING INTO PRACTICE",
      text: "Journey has only started, this is just a beggining, next stop is one of the srongest Super Copa De Espana Absolut - Ciutat De Valencia.",
    },
    navigation: {
      previous: { id: "copa-catalunya-juniors-2026" },
      next: null,
    },
  },
};
