const dialogueData = {
    // LEVEL 1 – Alp’s Flyer (Cultural perspective focus)
    1: {
        start: {
            npcImage: "assets/alp_neutral.png",
            text: "Hey! I designed this flyer for the food checkpoints. I listed them from right (nearest) to left (furthest). What do you think?",
            options: [
                { text: "Looks fine, I’ll accept it as is.", next: "acceptDesign", effects: { selfAwareness: -5 } },
                { text: "That seems confusing. Can you change it?", next: "refuseDesign", effects: { selfAwareness: 10, regulation: 5 } },
                { text: "Is this because of Arabic reading style?", next: "askArabic", effects: { empathy: 5 } },
                { text: "Fix it, or I’ll remove you.", next: "threaten", effects: { empathy: -10, regulation: -10 } }
            ]
        },
        acceptDesign: {
            npcImage: "assets/alp_smile.png",
            text: "Cool, thanks for supporting my idea! Though, some people might find it unusual.",
            options: [
                { text: "Maybe you’re right, I should reconsider.", next: "refuseDesign", effects: { selfAwareness: 5 } },
                { text: "It’s fine, people will adapt.", next: "end", effects: { selfAwareness: -5, empathy: -5 } }
            ]
        },
        refuseDesign: {
            npcImage: "assets/alp_confused.png",
            text: "Oh, you think it might confuse people? I just thought it looked more anime-styled, like in Japanese manga.",
            options: [
                { text: "Ah, I see! That’s creative, but clarity is important.", next: "end", effects: { empathy: 10, selfAwareness: 10, regulation: 5 } },
                { text: "Anime or not, it’s wrong. Change it.", next: "end", effects: { empathy: -5, regulation: 5 } }
            ]
        },
        askArabic: {
            npcImage: "assets/alp_laugh.png",
            text: "Haha, no! Not Arabic. My Japanese friend Oskari and I read manga, so I wanted the flyer to feel anime-styled.",
            options: [
                { text: "That’s interesting, but most people expect left-to-right.", next: "refuseDesign", effects: { empathy: 5, selfAwareness: 5 } },
                { text: "Anime style doesn’t work here, sorry.", next: "end", effects: { empathy: -5, regulation: 5 } }
            ]
        },
        threaten: {
            npcImage: "assets/alp_sad.png",
            text: "Whoa, that’s harsh. I just wanted to be creative…",
            options: [
                { text: "Sorry, I overreacted. Let’s adjust it calmly.", next: "refuseDesign", effects: { empathy: 5, regulation: 10 } },
                { text: "Too bad. Do it my way.", next: "end", effects: { empathy: -10, regulation: -5 } }
            ]
        }
    },

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

    // LEVEL 3 – Heikki’s Sauna (Regulation/Teamwork focus)
    3: {
        start: {
            npcImage: "assets/heikki_neutral.png",
            text: "Our project team is split: one wants to rush, another wants to plan carefully. How do you handle it?",
            options: [
                { text: "Push ahead quickly.", next: "rushPath", effects: { selfAwareness: -5, regulation: -10 } },
                { text: "Plan carefully only.", next: "strictPath", effects: { selfAwareness: 5, regulation: -5 } },
                { text: "Hear both sides, then compromise.", next: "mediatePath", effects: { empathy: 10, selfAwareness: 5, regulation: 10 } }
            ]
        },
        rushPath: {
            npcImage: "assets/heikki_frown.png",
            text: "The cautious teammate is upset. Mistakes may happen if we rush.",
            options: [
                { text: "Okay, let’s slow down and listen.", next: "mediatePath", effects: { empathy: 5, selfAwareness: 5, regulation: 10 } },
                { text: "They’ll manage.", next: "end", effects: { empathy: -10, selfAwareness: -5, regulation: -10 } }
            ]
        },
        strictPath: {
            npcImage: "assets/heikki_serious.png",
            text: "The fast teammate feels unheard.",
            options: [
                { text: "Let’s compromise so both are included.", next: "mediatePath", effects: { empathy: 10, selfAwareness: 5, regulation: 10 } },
                { text: "Too bad, planning is key.", next: "end", effects: { empathy: -5, selfAwareness: 5, regulation: -10 } }
            ]
        },
        mediatePath: {
            npcImage: "assets/heikki_happy.png",
            text: "Good call! Both teammates feel valued.",
            options: [
                { text: "Glad we worked it out together.", next: "reflectPath", effects: { empathy: 5, selfAwareness: 5, regulation: 5 } }
            ]
        },
        reflectPath: {
            npcImage: "assets/heikki_smile.png",
            text: "Would you like to reflect on how we managed the conflict?",
            options: [
                { text: "Yes, that will help future teamwork.", next: "end", effects: { empathy: 5, selfAwareness: 5, regulation: 10 } },
                { text: "No, I’m fine.", next: "end" }
            ]
        }
    },

    // LEVEL 4 – Alex (Combined EI)
    4: {
        start: {
            npcImage: "assets/alex_neutral.png",
            text: "Hi! I feel confused about a comment from your team. Can we discuss it?",
            options: [
                { text: "Of course, tell me what happened.", next: "listenResponse", effects: { empathy: 10, selfAwareness: 5, regulation: 5 } },
                { text: "You’re overreacting, it’s fine.", next: "defensiveResponse", effects: { empathy: -10, selfAwareness: -5, regulation: -5 } },
                { text: "Let’s all calm down and solve this.", next: "mediateResponse", effects: { empathy: 5, selfAwareness: 5, regulation: 10 } }
            ]
        },
        listenResponse: {
            npcImage: "assets/alex_relieved.png",
            text: "Thanks! I misunderstood due to cultural differences.",
            options: [
                { text: "I’m glad we clarified. Communication is tricky.", next: "suggestSolution", effects: { empathy: 10, selfAwareness: 5, regulation: 5 } }
            ]
        },
        defensiveResponse: {
            npcImage: "assets/alex_upset.png",
            text: "That’s not helpful, I’m frustrated.",
            options: [
                { text: "Sorry, let’s talk calmly.", next: "listenResponse", effects: { empathy: 5, selfAwareness: 5, regulation: 10 } },
                { text: "It’s just how it is.", next: "end", effects: { empathy: -10, selfAwareness: -5, regulation: -10 } }
            ]
        },
        mediateResponse: {
            npcImage: "assets/alex_smile.png",
            text: "Good, let’s hear each perspective carefully.",
            options: [
                { text: "Yes, let’s find a solution.", next: "suggestSolution", effects: { empathy: 10, selfAwareness: 5, regulation: 10 } }
            ]
        },
        suggestSolution: {
            npcImage: "assets/alex_happy.png",
            text: "Perfect. We can all move forward understanding each other better.",
            options: [
                { text: "Glad we resolved this together!", next: "end", effects: { empathy: 10, selfAwareness: 10, regulation: 10 } }
            ]
        }
    },

    // LEVEL 5 – Li Wei’s Tea House (Perspective-taking focus)
    5: {
        start: {
            npcImage: "assets/liwei_neutral.png",
            text: "Welcome! In our culture, offering tea is a sign of respect. How do you respond when Li Wei serves you tea?",
            options: [
                { text: "Accept it warmly and thank them.", next: "acceptTea", effects: { empathy: 10, selfAwareness: 5, regulation: 5 } },
                { text: "Refuse directly, you don’t like tea.", next: "refuseTea", effects: { empathy: -10, selfAwareness: -5 } },
                { text: "Refuse politely but respectfully.", next: "politeRefuse", effects: { empathy: 5, selfAwareness: 10, regulation: 5 } }
            ]
        },
        acceptTea: {
            npcImage: "assets/liwei_happy.png",
            text: "Li Wei smiles warmly. You’ve honored their tradition.",
            options: [
                { text: "Happy to show respect.", next: "end", effects: { empathy: 5, selfAwareness: 5 } }
            ]
        },
        refuseTea: {
            npcImage: "assets/liwei_offended.png",
            text: "Li Wei looks hurt. Refusing directly can feel disrespectful here.",
            options: [
                { text: "Apologize and explain politely.", next: "politeRefuse", effects: { empathy: 5, selfAwareness: 5, regulation: 5 } },
                { text: "It’s just my preference.", next: "end", effects: { empathy: -5, selfAwareness: -5 } }
            ]
        },
        politeRefuse: {
            npcImage: "assets/liwei_smile.png",
            text: "Li Wei nods in understanding. Respectful communication avoids offense.",
            options: [
                { text: "Glad we handled that well.", next: "end", effects: { empathy: 5, selfAwareness: 5, regulation: 5 } }
            ]
        }
    }
};
