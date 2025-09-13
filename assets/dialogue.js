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
// LEVEL 2 – Wine Society Checkpoint (Self-Awareness focus)
2: {
    start: {
        npcImage: "assets/wine_society.png",
        text: "You need someone to manage the Wine Society checkpoint outside the church. Alcohol is involved, so cultural and ethical sensitivities matter. Who will you choose?",
        options: [
            { text: "Otto – Christian, avoids alcohol outside rituals.", next: "ottoOutcome", effects: { empathy: 5, selfAwareness: 10, regulation: 5 } },
            { text: "Hunter – Knows wine well, but has a DUI rumor.", next: "hunterOutcome", effects: { empathy: -5, selfAwareness: 5, regulation: 10 } },
            { text: "Ashar – Skilled manager, but doesn’t drink alcohol.", next: "asharOutcome", effects: { empathy: 10, selfAwareness: 5 } },
            { text: "Filip – Very capable, but busy with other duties.", next: "filipOutcome", effects: { selfAwareness: 10, regulation: 5 } }
        ]
    },
    ottoOutcome: {
        npcImage: "assets/otto.png",
        text: "Otto connects well with church members and respects cultural sensitivities. The checkpoint runs smoothly, though he avoids tastings.",
        options: [
            { text: "Good balance of respect and duty.", next: "end", effects: { empathy: 5, selfAwareness: 5 } }
        ]
    },
    hunterOutcome: {
        npcImage: "assets/hunter.png",
        text: "Hunter runs the checkpoint efficiently with wine expertise, but some attendees worry about his rumored DUI history.",
        options: [
            { text: "High efficiency but possible ethical risk.", next: "end", effects: { empathy: -5, regulation: 5 } }
        ]
    },
    asharOutcome: {
        npcImage: "assets/ashar.png",
        text: "Ashar manages logistics well and keeps things in order, but struggles when asked detailed wine questions.",
        options: [
            { text: "Reliable but limited wine knowledge.", next: "end", effects: { empathy: 5, selfAwareness: 5 } }
        ]
    },
    filipOutcome: {
        npcImage: "assets/filip.png",
        text: "Filip performs competently, but juggling other duties causes some small delays.",
        options: [
            { text: "Capable, but multitasking reduces focus.", next: "end", effects: { selfAwareness: 5, regulation: 5 } }
        ]
    }
},
