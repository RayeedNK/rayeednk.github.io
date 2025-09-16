const dialogueData = {
    // LEVEL 1 – Alp’s Flyer (Cultural perspective focus).
    1: {
        start: {
            npcImage: "assets/alp_neutral.png",
            text: "I made this flyer. Right = nearest, left = farthest. Thoughts?",
            options: [
                { text: "This looks great! Left to right could make it even more intuitive, and that will help make our event a success!", next: "branch1", effects: { empathy: 1, selfAwareness: 1 } },
                { text: "Right-to-left is good but most people in Finland read from left to right. Would you be open to trying both ways?", next: "branch2", effects: { regulation: 1, selfAwareness: 1 } },
                { text: "I love it! Let’s ask the rest of the group if this works.", next: "branch3", effects: { empathy: 2, selfAwareness: 1 } },
                { text: "Great job on the flyer! Align the checkpoints from left to right and you will get used to how people here read.", next: "branch4", effects: { empathy: 2, regulation: 2 } }
            ]
        },
        branch1: {
            npcImage: "assets/alp_neutral.png",
            text: "I want this event to succeed. I’ll try again.",
            options: [
                { text: "Yes! With teamwork, it will succeed.", next: "end", effects: { empathy: 2, regulation: 1, selfAwareness: 1 } },
                { text: "Just keep the goal in mind.", next: "end", effects: { empathy: -1, selfAwareness: -1 } }
            ]
        },
        branch2: {
            npcImage: "assets/alp_neutral.png",
            text: "Right feels natural to me.",
            options: [
                { text: "I know it’s hard adjusting. I’ll guide you.", next: "end", effects: { empathy: 2, selfAwareness: 1 } },
                { text: "Sorry, I didn’t see this as an issue.", next: "end", effects: { empathy: -1, selfAwareness: -1 } }
            ]
        },
        branch3: {
            npcImage: "assets/alp_neutral.png",
            text: "Yes, hearing all opinions is good.",
            options: [
                { text: "Agree. You’ll get credit, but input helps.", next: "end", effects: { empathy: 2, regulation: 2 } },
                { text: "Great! I knew you were a team player.", next: "end", effects: { selfAwareness: -1, empathy: -1 } }
            ]
        },
        branch4: {
            npcImage: "assets/alp_neutral.png",
            text: "I knew about reading, but not visuals.",
            options: [
                { text: "Same, I only realized when I saw it flipped.", next: "end", effects: { empathy: 2, selfAwareness: 2 } },
                { text: "Happy to share my view anytime.", next: "end", effects: { empathy: 1, selfAwareness: 1 } }
            ]
        },
        end: {
            npcImage: "assets/alp_neutral.png",
            text: "Alp reacts and gets back to work."
        }
    },

    // LEVEL 2 – Character Traits Setup
    2: {
        start: {
            npcImage: "assets/alex_trans.png",
            text: "We need someone to manage the Wine Society checkpoint outside the church. Who do you choose?",
            options: [
                { text: "Otto – Calm, trusted, trusted by church people, makes thoughtful decisions, avoids alcohol.", next: "end", effects: { empathy: 1, selfAwareness: 1, regulation: 1 } },
                { text: "Hunter – Experienced with wine Inspires, inspires others, sometimes overlooks risks (rumored DUI).", next: "end", effects: { empathy: -1, selfAwareness: 1, regulation: 2 } },
                { text: "Ashar – Excellent at managing logistics Can handle tasks outside his comfort zone (doesn’t drink wine).", next: "end", effects: { empathy: 1, selfAwareness: 1 } },
                { text: "Filip – Highly goal-driven, multitasks, lives with alcohol, has work at Aalto Base and Beer Club checkpoints.", next: "end", effects: { selfAwareness: 2, regulation: 1 } }
            ]
        },
        end: { npcImage: "assets/manager.png", text: "Lesson: Balance competence, sensitivity, and ethics in selection." }
    },

    // LEVEL 3 – Kasanji Exam Cheating
    3: {
        start: {
            npcImage: "assets/kasanji_neutral.png",
            text: "Hey...Whats up? Let me Sleep....",
            options: [
                { text: "Kasanji, I noticed your work isn’t on the sheets yet. I just wanted to check in and see how you’re doing with the tasks.", next: "branch1", effects: { empathy: 2, regulation: 1 } },
                { text: "Kasanji, I was wondering how I could support you in getting your part done for the event?", next: "branch2", effects: { empathy: 2, selfAwareness: 1 } },
                { text: "Kasanji, I noticed your work isn’t on the sheets yet. Can you make sure it’s done soon?", next: "branch3", effects: { regulation: 1 } }
            ]
        },
        branch1: {
            npcImage: "assets/kasanji_neutral.png",
            text: "I’m behind, sorry.",
            options: [
                { text: "No worries, how can I help?", next: "end", effects: { empathy: 2, regulation: 2 } },
                { text: "Please try to finish faster.", next: "end", effects: { empathy: -1, regulation: -1 } }
            ]
        },
        branch2: {
            npcImage: "assets/kasanji_neutral.png",
            text: "Thanks, I need help with details.",
            options: [
                { text: "I’ll walk you through.", next: "end", effects: { empathy: 2, regulation: 2, selfAwareness: 2 } },
                { text: "Ask someone else.", next: "end", effects: { empathy: -2, selfAwareness: -1 } }
            ]
        },
        branch3: {
            npcImage: "assets/kasanji_neutral.png",
            text: "Okay, I’ll try.",
            options: [
                { text: "Good, I trust you.", next: "end", effects: { regulation: 1, selfAwareness: 1 } },
                { text: "Don’t be late again.", next: "end", effects: { empathy: -1, regulation: -1 } }
            ]
        },
        end: {
            npcImage: "assets/kasanji_neutral.png",
            text: "Lesson: Directness vs. support impacts motivation."
        }
    },

    // LEVEL 4 – Kimi Task Check
    4: {
        start: {
            npcImage: "assets/kimi_neutral.png",
            text: "So what do you think of the HUnter Situation ? I feel so uneasy.",
            options: [
                { text: "I totally understand how this situation makes you feel uneasy. Hunter doesn’t represent our school’s spirit at all.", next: "branch1", effects: { empathy: 2, selfAwareness: 1 } },
                { text: "Mr AAC, I appreciate you asking me for my opinion. Hunter really should have been more considerate towards your feelings. ", next: "branch2", effects: { selfAwareness: -1, regulation: -1 } },
                { text: "I feel terrible about the situation. You could clearly see that Hunter is in a really rough spot, I wish I could help him. ", next: "branch3", effects: { empathy: 2, regulation: 1 } }
            ]
        },
        branch1: {
            npcImage: "assets/kimi_neutral.png",
            text: "Well, as the AAC and the member of the Probba board I can’t really comment on that",
            options: [
                { text: "I understand, thanks for sharing anyway.", next: "end", effects: { empathy: 2, selfAwareness: 1 } },
                { text: "We should put the hunter guy to jail for DUI", next: "end", effects: { empathy: -1, regulation: -1 } }
            ]
        },
        branch2: {
            npcImage: "assets/kimi_neutral.png",
            text: "Uhmm, sure okay......",
            options: [
                { text: "Sorry, I meant it’s tough for everyone.", next: "end", effects: { selfAwareness: 1, regulation: 1 } },
                { text: "Exactly, he disrespected you.", next: "end", effects: { empathy: -2, regulation: -2 } }
            ]
        },
        branch3: {
            npcImage: "assets/kimi_neutral.png",
            text: "I agree, it’s difficult to see a fellow student have such a tough time.",
            options: [
                { text: "Maybe we should support him.", next: "end", effects: { empathy: 2, selfAwareness: 1 } },
                { text: "Still, rules are rules.", next: "end", effects: { regulation: 1 } }
            ]
        },
        end: {
            npcImage: "assets/kimi_neutral.png",
            text: "Lesson: Your reactions impact trust and team dynamics."
        }
    },

    // Remaining levels from the original data
    5: {
        start: {
            npcImage: "assets/ayush_neutral.png",
            text: "Take this money, and do my work faster.",
            options: [
                { text: "Thank you, I accept it", next: "accept", effects: { selfAwareness: -2, regulation: -2 } },
                { text: "I reject this bribery !!!", next: "reject", effects: { empathy: -1, selfAwareness: 2, regulation: 1 } },
                { text: "What is this money for ?", next: "askReason", effects: { empathy: 2, selfAwareness: 1, regulation: 1 } },
                { text: "How was the food in Currytime ? ", next: "deflect", effects: { empathy: 2, regulation: 2 } }
            ]
        },
        accept: { npcImage: "assets/ayush_smile.png", text: "Task moves quickly, but corruption normalized.", options: [{ text: "End", next: "end" }] },
        reject: { npcImage: "assets/ayush_offended.png", text: "He feels disrespected but you stay ethical.", options: [{ text: "Continue", next: "end" }] },
        askReason: { npcImage: "assets/ayush_explain.png", text: "In our culture, small payments show respect for hard-work. Dialogue opens.", options: [{ text: "Continue", next: "end" }] },
        deflect: { npcImage: "assets/ayush_relief.png", text: "What do you mean Currytime ?? I ate food at cafeteria. Nicholas told you that right?", options: [{ text: "End", next: "end" }] },
        end: { npcImage: "assets/ayush.png", text: "Lesson: Balance ethics with empathy. Recognize silence or gifts differently across cultures." }
    },

    // LEVEL 6 – Anne (Breaking stereotypes)
    6: {
        start: {
            npcImage: "assets/anne_neutral.png",
            text: "Uhmm ??? You need something ???",
            options: [
                { text: "Assume quiet & reserved, speak softly.", next: "quietAssume", effects: { selfAwareness: -1, empathy: -1 } },
                { text: "Assume direct & business-like.", next: "directAssume", effects: { regulation: 1, selfAwareness: 1 } },
                { text: "Offer her a pink towel as a gift.", next: "genderStereotype", effects: { empathy: -2, selfAwareness: -1 } },
                { text: "Drop assumptions: ask about her style.", next: "honestApproach", effects: { empathy: 2, regulation: 2, selfAwareness: 2 } }
            ]
        },
        quietAssume: { npcImage: "assets/anne_talkative.png", text: "Hi My name is Anne ! Nice to meet you b", options: [{ text: "End", next: "end" }] },
        directAssume: { npcImage: "assets/anne_smile.png", text: "She laughs and teases you for bluntness, but keeps talking.", options: [{ text: "End", next: "end" }] },
        genderStereotype: { npcImage: "assets/anne_suspicious.png", text: "She glares: 'Is this because I’m a woman?!'", options: [{ text: "End", next: "end" }] },
        honestApproach: { npcImage: "assets/anne_smile.png", text: "She appreciates honesty, happily engages.", options: [{ text: "End", next: "end" }] },
        end: { npcImage: "assets/anne.png", text: "Lesson: Don’t rely on stereotypes. Adapt to the real individual." }
    }
};