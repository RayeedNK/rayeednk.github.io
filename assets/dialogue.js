const dialogueData = {
  // LEVEL 1 – Alp (Flyer + Halal focus)
  1: {
    start: {
      npcImage: "assets/alp_neutral.png",
      text: "Hey! I designed the flyer for Running BaBa. What do you think?",
      options: [
        { text: "Looks fine, go with it.", next: "acceptLayout", effects: { empathy: 5, regulation: 5, selfAwareness: -5 } },
        { text: "No, this is wrong. Redo it left-to-right.", next: "refuseLayout", effects: { regulation: -5, selfAwareness: 5 } },
        { text: "Cool, you’re using Arabic right-to-left style?", next: "arabicGuess", effects: { empathy: 5, selfAwareness: 5 } },
        { text: "Why did you design it this way?", next: "askReason", effects: { empathy: 10, regulation: 5, selfAwareness: 5 } }
      ]
    },
    acceptLayout: {
      npcImage: "assets/alp_confused.png",
      text: "Really? Most people might find it confusing, but okay...",
      options: [
        { text: "Alright, let’s move on.", next: "halalQuestion", effects: {} }
      ]
    },
    refuseLayout: {
      npcImage: "assets/alp_annoyed.png",
      text: "Why are you so strict about it? This is just my style.",
      options: [
        { text: "Fine, explain your style.", next: "askReason", effects: { empathy: 5 } },
        { text: "No, just fix it.", next: "halalQuestion", effects: { regulation: -5 } }
      ]
    },
    arabicGuess: {
      npcImage: "assets/alp_laugh.png",
      text: "Haha no, not Arabic! I was inspired by manga layouts with my friend Oskari.",
      options: [
        { text: "Ah, interesting approach!", next: "halalQuestion", effects: { empathy: 5, selfAwareness: 5 } }
      ]
    },
    askReason: {
      npcImage: "assets/alp_happy.png",
      text: "It’s manga-style! I thought it’d look cool. Not about Arabic at all.",
      options: [
        { text: "Makes sense. Let’s move on.", next: "halalQuestion", effects: { empathy: 5, selfAwareness: 5 } }
      ]
    },
    halalQuestion: {
      npcImage: "assets/alp_neutral.png",
      text: "By the way, should I mark which food is halal?",
      options: [
        { text: "Doesn’t matter, just list everything.", next: "ignoreHalal", effects: { empathy: -10, selfAwareness: -5 } },
        { text: "Yes, mark the halal items clearly.", next: "includeHalal", effects: { empathy: 10, selfAwareness: 5 } },
        { text: "Why does that matter?", next: "halalReasoning", effects: { empathy: 5, regulation: 5 } },
        { text: "Ask someone else about it.", next: "delegateHalal", effects: { empathy: -5, selfAwareness: 5 } }
      ]
    },
    ignoreHalal: {
      npcImage: "assets/alp_frown.png",
      text: "That feels disrespectful… inclusivity matters.",
      options: [
        { text: "Sorry, you’re right. Add halal labels.", next: "includeHalal", effects: { empathy: 5, selfAwareness: 5 } },
        { text: "It’s still fine, move on.", next: "end", effects: { empathy: -10 } }
      ]
    },
    includeHalal: {
      npcImage: "assets/alp_happy.png",
      text: "Perfect, that makes the flyer much better for everyone.",
      options: [
        { text: "Glad it works for you.", next: "end", effects: { empathy: 10, selfAwareness: 5, regulation: 5 } }
      ]
    },
    halalReasoning: {
      npcImage: "assets/alp_explain.png",
      text: "It matters because some people only eat halal. It’s about inclusivity.",
      options: [
        { text: "Got it, let’s add the labels.", next: "includeHalal", effects: { empathy: 5, selfAwareness: 5, regulation: 5 } }
      ]
    },
    delegateHalal: {
      npcImage: "assets/alp_annoyed.png",
      text: "But it was my responsibility… I feel left out now.",
      options: [
        { text: "You’re right, let’s do it together.", next: "includeHalal", effects: { empathy: 5 } },
        { text: "Too bad, moving on.", next: "end", effects: { empathy: -10 } }
      ]
    }
  }
};
