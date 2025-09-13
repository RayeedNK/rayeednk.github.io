const dialogueData = {
    // LEVEL 1 – Alp’s Flyer (Cultural perspective focus)
    1: {
        start: {
            npcImage: "assets/alp_neutral.png",
            text: "Hey! I designed this flyer for the food checkpoints. I listed them from right (nearest) to left (furthest). What do you think?",
            options: [
                { text: "Looks fine, I’ll accept it as is.", next: "acceptDesign", effects: { empathy: 1, regulation: -1, selfAwareness: -1 } },
                { text: "That seems confusing. Can you change it?", next: "refuseDesign", effects: { regulation: -1, selfAwareness: 1 } },
                { text: "Is this because of Arabic reading style?", next: "askArabic", effects: { empathy: 2, selfAwareness: 1 } },
                { text: "Why are you doing it that way?", next: "askReason", effects: { empathy: 2, regulation: 2, selfAwareness: 1 } }
            ]
        },
        acceptDesign: {
            npcImage: "assets/alp_smile.png",
            text: "Cool, thanks for supporting my idea! Though, some people might find it unusual.",
            options: [
                { text: "Maybe you’re right, I should reconsider.", next: "refuseDesign", effects: { selfAwareness: 1 } },
                { text: "It’s fine, people will adapt.", next: "end", effects: { empathy: -1, selfAwareness: -1 } }
            ]
        },
        refuseDesign: {
            npcImage: "assets/alp_confused.png",
            text: "Oh, you think it might confuse people? I just thought it looked more anime-styled, like in Japanese manga.",
            options: [
                { text: "That’s creative, but clarity is important.", next: "end", effects: { empathy: 2, selfAwareness: 1 } },
                { text: "Anime or not, it’s wrong. Change it.", next: "end", effects: { empathy: -1, regulation: 1 } }
            ]
        },
        askArabic: {
            npcImage: "assets/alp_laugh.png",
            text: "Haha, no! Not Arabic. My Japanese friend Oskari and I read manga, so I wanted the flyer to feel anime-styled.",
            options: [
                { text: "That’s interesting, but most people expect left-to-right.", next: "refuseDesign", effects: { empathy: 1, selfAwareness: 1 } },
                { text: "Anime style doesn’t work here, sorry.", next: "end", effects: { empathy: -1, regulation: 1 } }
            ]
        },
        askReason: {
            npcImage: "assets/alp_explain.png",
            text: "It’s because my Japanese friend Oskari and I read manga, so I wanted it to look anime-styled!",
            options: [
                { text: "That’s creative! But maybe let’s balance clarity too.", next: "end", effects: { empathy: 2, selfAwareness: 1 } }
            ]
        },
        end: {
            npcImage: "assets/alp_done.png",
            text: "Okay, got it. Let’s move on!"
        }
    },

    // LEVEL 1.5 – Recurring distraction mini-interaction with Alp
    distraction: {
        start: {
            npcImage: "assets/alp_distracted.png",
            text: "Alp is distracted again… Do you want to remind him?",
            options: [
                { text: "Call him directly: 'Hey, focus now!'", next: "end", effects: { empathy: 1, selfAwareness: 1 } },
                { text: "Text him: 'Please continue.'", next: "end", effects: { empathy: 1, regulation: -1 } },
                { text: "Say nothing, I’ll do it myself later.", next: "end", effects: { regulation: 1, selfAwareness: -1 } }
            ]
        },
        end: {
            npcImage: "assets/alp_focus.png",
            text: "Alp reacts and gets back to work (or not)."
        }
    },

    // LEVEL 2 – Wine Society Checkpoint (Candidate Selection)
    2: {
        start: {
            npcImage: "assets/manager.png",
            text: "We need someone to manage the Wine Society checkpoint outside the church. Who do you choose?",
            options: [
                { text: "Otto – Christian, respected, avoids alcohol personally.", next: "ottoOutcome", effects: { empathy: 1, selfAwareness: 1, regulation: 1 } },
                { text: "Hunter – Experienced with wine, but rumored DUI.", next: "hunterOutcome", effects: { empathy: -1, selfAwareness: 1, regulation: 2 } },
                { text: "Ashar – Great manager, no wine knowledge, never drank.", next: "asharOutcome", effects: { empathy: 1, selfAwareness: 1 } },
                { text: "Filip – Capable but already busy with tasks.", next: "filipOutcome", effects: { selfAwareness: 2, regulation: 1 } }
            ]
        },
        ottoOutcome: { npcImage: "assets/otto.png", text: "Otto connects well with church members. Smooth checkpoint, but avoids tastings.", options: [{ text: "Continue", next: "end" }] },
        hunterOutcome: { npcImage: "assets/hunter.png", text: "Hunter is efficient and knowledgeable. Some attendees worry about rumors.", options: [{ text: "Continue", next: "end" }] },
        asharOutcome: { npcImage: "assets/ashar.png", text: "Ashar handles logistics fine but struggles with wine questions.", options: [{ text: "Continue", next: "end" }] },
        filipOutcome: { npcImage: "assets/filip.png", text: "Filip is competent but stretched thin. Minor delays occur.", options: [{ text: "Continue", next: "end" }] },
        end: { npcImage: "assets/manager.png", text: "Lesson: Balance competence, sensitivity, and ethics in selection." }
    },

    // LEVEL 3 – Kasanji (Expressive teammate)
    3: {
        start: {
            npcImage: "assets/kasanji.png",
            text: "Kasanji hasn’t shown up yet. You go to his house to convince him.",
            options: [
                { text: "Greet with a handshake and smile.", next: "handshake", effects: { empathy: 2, regulation: 1 } },
                { text: "Wave from a distance, stay silent.", next: "waveSilent", effects: { empathy: -1, regulation: 1 } },
                { text: "Use casual fist bump / playful gesture.", next: "fistBump", effects: { empathy: 1, selfAwareness: 1 } },
                { text: "Say nothing, just stare.", next: "awkward", effects: { empathy: -2, regulation: -2 } }
            ]
        },
        handshake: { npcImage: "assets/kasanji_happy.png", text: "He responds warmly and chats with you.", options: [{ text: "Explain task energetically.", next: "energeticExplain", effects: { empathy: 2, regulation: 1 } }] },
        waveSilent: { npcImage: "assets/kasanji_confused.png", text: "He feels ignored and hesitant.", options: [{ text: "Encourage him quietly.", next: "quietAsk", effects: { empathy: 1, selfAwareness: 1 } }] },
        fistBump: { npcImage: "assets/kasanji_laugh.png", text: "He laughs, comfortable but wants more engagement.", options: [{ text: "Guide him physically.", next: "physicalGuide", effects: { empathy: 2, selfAwareness: 1 } }] },
        awkward: { npcImage: "assets/kasanji_annoyed.png", text: "Awkward silence. He feels disrespected.", options: [{ text: "Try humor to recover.", next: "humor", effects: { empathy: 1, selfAwareness: 1 } }] },

        energeticExplain: { npcImage: "assets/kasanji_ready.png", text: "He likes the enthusiasm and agrees quickly.", options: [{ text: "End", next: "end" }] },
        quietAsk: { npcImage: "assets/kasanji_unsure.png", text: "He nods but seems unsure. Might delay.", options: [{ text: "End", next: "end" }] },
        physicalGuide: { npcImage: "assets/kasanji_follow.png", text: "He enjoys interaction and follows along.", options: [{ text: "End", next: "end" }] },
        humor: { npcImage: "assets/kasanji_smile.png", text: "Your joke lightens the mood. He joins.", options: [{ text: "End", next: "end" }] },
        end: { npcImage: "assets/kasanji.png", text: "Lesson: Matching energy and non-verbal cues builds rapport." }
    },

    // LEVEL 4 – Oskari (Gestures & hierarchy)
    4: {
        start: {
            npcImage: "assets/oskari.png",
            text: "Oskari is senior and only speaks Japanese. He values respect and hierarchy. How do you approach?",
            options: [
                { text: "Bow slightly and smile politely.", next: "bow", effects: { empathy: 2, selfAwareness: 1 } },
                { text: "Wave energetically, speak English loudly.", next: "loudWave", effects: { empathy: -1, regulation: -1 } },
                { text: "Gesture hello, wait silently.", next: "gestureSilent", effects: { empathy: 1, regulation: 1 } },
                { text: "Approach casually.", next: "casual", effects: { empathy: -2, regulation: -2 } }
            ]
        },
        bow: { npcImage: "assets/oskari_nod.png", text: "Oskari nods in acknowledgment. Positive start.", options: [{ text: "Try simple Japanese phrases.", next: "speakJapanese", effects: { empathy: 2, selfAwareness: 1 } }] },
        loudWave: { npcImage: "assets/oskari_confused.png", text: "He looks confused and uncomfortable.", options: [{ text: "End", next: "end" }] },
        gestureSilent: { npcImage: "assets/oskari_cautious.png", text: "Acceptable but minimal engagement.", options: [{ text: "Use gestures to explain task.", next: "gestureExplain", effects: { empathy: 2, selfAwareness: 1 } }] },
        casual: { npcImage: "assets/oskari_offended.png", text: "He feels disrespected.", options: [{ text: "End", next: "end" }] },

        speakJapanese: { npcImage: "assets/oskari_smile.png", text: "He appreciates the effort and cooperates.", options: [{ text: "End", next: "end" }] },
        gestureExplain: { npcImage: "assets/oskari_okay.png", text: "He understands and works with you.", options: [{ text: "End", next: "end" }] },
        end: { npcImage: "assets/oskari.png", text: "Lesson: Gestures + respect for hierarchy enable smooth teamwork." }
    },

    // LEVEL 5 – Ayush (Speed money & silence)
    5: {
        start: {
            npcImage: "assets/ayush.png",
            text: "Ayush offers you an envelope: 'Take this, it will make things easier.'",
            options: [
                { text: "Accept without question.", next: "accept", effects: { selfAwareness: -2, regulation: -2 } },
                { text: "Reject firmly.", next: "reject", effects: { empathy: -1, selfAwareness: 2, regulation: 1 } },
                { text: "Ask why he thinks it’s needed.", next: "askReason", effects: { empathy: 2, selfAwareness: 1, regulation: 1 } },
                { text: "Deflect politely: ‘Let’s try without.’", next: "deflect", effects: { empathy: 2, regulation: 2 } }
            ]
        },
        accept: { npcImage: "assets/ayush_smile.png", text: "Task moves quickly, but corruption normalized.", options: [{ text: "End", next: "end" }] },
        reject: { npcImage: "assets/ayush_offended.png", text: "He feels disrespected but you stay ethical.", options: [{ text: "End", next: "end" }] },
        askReason: { npcImage: "assets/ayush_explain.png", text: "He explains: in his culture, small payments show respect. Dialogue opens.", options: [{ text: "End", next: "end" }] },
        deflect: { npcImage: "assets/ayush_relief.png", text: "You avoid bribery without shaming him.", options: [{ text: "End", next: "end" }] },
        end: { npcImage: "assets/ayush.png", text: "Lesson: Balance ethics with empathy. Recognize silence or gifts differently across cultures." }
    },

    // LEVEL 6 – Anne (Breaking stereotypes)
    6: {
        start: {
            npcImage: "assets/anne.png",
            text: "You’re told: ‘Find a young Finnish woman to help.’ You meet Anne. How do you approach?",
            options: [
                { text: "Assume quiet & reserved, speak softly.", next: "quietAssume", effects: { selfAwareness: -1, empathy: -1 } },
                { text: "Assume direct & business-like.", next: "directAssume", effects: { regulation: 1, selfAwareness: 1 } },
                { text: "Offer her a pink towel as a gift.", next: "genderStereotype", effects: { empathy: -2, selfAwareness: -1 } },
                { text: "Drop assumptions: ask about her style.", next: "honestApproach", effects: { empathy: 2, regulation: 2, selfAwareness: 2 } }
            ]
        },
        quietAssume: { npcImage: "assets/anne_talkative.png", text: "She talks nonstop! Your assumption backfires.", options: [{ text: "End", next: "end" }] },
        directAssume: { npcImage: "assets/anne_tease.png", text: "She laughs and teases you for bluntness, but keeps talking.", options: [{ text: "End", next: "end" }] },
        genderStereotype: { npcImage: "assets/anne_suspicious.png", text: "She glares: 'Is this because I’m a woman?!'", options: [{ text: "End", next: "end" }] },
        honestApproach: { npcImage: "assets/anne_smile.png", text: "She appreciates honesty, happily engages.", options: [{ text: "End", next: "end" }] },
        end: { npcImage: "assets/anne.png", text: "Lesson: Don’t rely on stereotypes. Adapt to the real individual." }
    }
};
