document.addEventListener('DOMContentLoaded', () => {

    // --- DOM ELEMENTS ---
    const screens = document.querySelectorAll('.screen');
    const startButton = document.getElementById('start-button');
    const continueButton = document.getElementById('continue-button');
    const levelIcons = document.querySelectorAll('.level-icon');
    const taskDescModal = document.getElementById('task-desc-modal');
    const taskDescImage = document.getElementById('task-desc-image');
    const taskDescText = document.getElementById('task-desc-text');
    const taskDescContinueBtn = document.getElementById('task-desc-continue-btn');
    const presidentContinueBtn = document.getElementById('president-continue-btn');
        // --- MOBILE VIEWPORT HEIGHT FIX ---
        function setScreenHeight() {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
            document.querySelectorAll('.screen').forEach(screen => {
                screen.style.height = `${window.innerHeight}px`;
            });
        }
        setScreenHeight();
        window.addEventListener('resize', setScreenHeight);
        window.addEventListener('orientationchange', setScreenHeight);

    const playAgainButton = document.getElementById('play-again-button');
    if (playAgainButton) {
        playAgainButton.addEventListener('click', () => {
            location.reload();
        });
    }
    
    // Level Screen Elements
    const npcPortraitImage = document.getElementById('npc-portrait-image');
    const dialogueText = document.getElementById('dialogue-text');
    const replyOptionsContainer = document.getElementById('reply-options');
    const levelCompleteMessage = document.getElementById('level-complete-message');

    // Stats Bar Element
    const eiBar = document.getElementById('ei-bar');

    // Final Score Elements
    const finalEmpathy = document.getElementById('final-empathy');
    const finalSelfAwareness = document.getElementById('final-self-awareness');
    const finalRegulation = document.getElementById('final-regulation');

    // Character Profiles Modal Elements
    const characterProfilesModal = document.getElementById('character-profiles-modal');
    const profileImage = document.getElementById('profile-image');
    const profileDescription = document.getElementById('profile-description');
    const profileContinueBtn = document.getElementById('profile-continue-btn');


    

    const taskDescriptions = [
    {
        image: 'assets/probba_member1.png',
        text: 'Your Mission:<br> Hi I am Pihla the Communications Coordinator. Alp Iyol is your Arab friend from the Middle East. He has been given the task to draft a flyer for Running BaBa food checkpoints. However, the initial draft looks a bit unusual for some people as the food stalls are listed from right to left. Your job is to solve the situation.'
    },
    {
        image: 'assets/probba_member2.png',
        text: 'Your Mission:<br>Hi I am Alex, the International affairs coordinator. I need help in selecting the right person to manage the Wine Society checkpoint here at the church. Consider their background and the needs of the event. I am providing you a list of the candidates.'
    },
    {
        image: 'assets/probba_member3.png',
        text: 'Your Mission:<br>Hi I am Nicholas, the Treasurer of Probba. While looking through the financial sheets I saw one guy called Kasanji missing! People are suspecting that he is sleeping and not doing his work. Convince him to join and help with the event.'
    },
    {
        image: 'assets/probba_member4.png',
        text: 'Your Mission:<br> Hi I am Kimi, the Academic Affairs Coordinator. We have a new Professor who came from Japan and we need to make a good first impression for him. Can you please approach him in a way that builds trust and teamwork.'
    },
    {
        image: 'assets/probba_member5.png',
        text: 'Your Mission:<br>Hey there again! While having lunch at the school cafeteria today, Probba agreed to make a Study Club for ayush. Now when I met him here, he offered me personally 100 Euro to do it faster. I dont mind extra money but still can you talk to him about it ?'
    },
    {
        image: 'assets/probba_member6.png',
        text: 'Your Mission:<br>Hey there! I came to tidy this place up when this Finnish girl entered and started playing pool. Finnish people are quite reserved so I am not sure how to approach her. Can you ask what her concerns are about ?.'
    },
    {
        image: 'assets/probba_member7.png',
        text: 'Your Mission:<br>Hunter and Ayush are fighting in class. What will you do?'
    }
];    



    // --- GAME STATE ---
    const gameState = {
        currentLevel: 0,
        levelStatus: ['unlocked', 'locked', 'locked', 'locked','locked','locked','locked'],
        stats: {
            empathy: 50,
            selfAwareness: 50,
            regulation: 50
        },
        currentDialogueNode: null,
        flyerProgress: 0,
        profileIndex: 0
    };

        // Character Profiles Data
        const characterProfiles = [
            {
                image: 'assets/otto.png',
                description: '<b>Otto</b><br>Christian, respected, avoids alcohol personally. Trusted by church members.'
            },
            {
                image: 'assets/hunter.png',
                description: '<b>Hunter</b><br>Experienced with wine, but rumored DUI. Efficient and knowledgeable.'
            },
            {
                image: 'assets/ashar.png',
                description: '<b>Ashar</b><br>Great manager. Handles logistics well. However, doesnt drink wine'
            },
            {
                image: 'assets/filip.png',
                description: '<b>Filip</b><br>Capable but already busy with managing Baba Beer Club and Aalto BASE. Competent but stretched thin.'
            }
        ];

    // --- FUNCTIONS ---
    function showScreen(screenId) {
        screens.forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
            // Set background for level screen
            if (screenId === 'level-screen') {
                const levelBg = document.getElementById('level-screen');
                let bgImg = '';
                switch (gameState.currentLevel) {
                    case 1:
                        bgImg = "assets/scenery level 1.jpg";
                        break;
                    case 2:
                        bgImg = "assets/scenery level 2.jpg";
                        break;
                    case 3:
                        bgImg = "assets/scenery level 3.jpg";
                        break;
                    case 4:
                        bgImg = "assets/scenery level 4.jpg";
                        break;
                    case 5:
                        bgImg = "assets/scenery level 5.jpg";
                        break;
                    case 6:
                        bgImg = "assets/scenery level 6.jpg";
                        break;
                    default:
                        bgImg = "assets/scenery1.jpg";
                }
                levelBg.style.backgroundImage = `url('${bgImg}')`;
            }
            // Set background for Alp distraction modal
            if (screenId === 'distractions-modal') {
                const distractionsModal = document.getElementById('distractions-modal');
                distractionsModal.style.backgroundImage = "url('assets/scenery1.jpg')";
                distractionsModal.style.backgroundSize = "cover";
                distractionsModal.style.backgroundPosition = "center";
            }
            // Remove background from other screens
            if (screenId !== 'level-screen') {
                document.getElementById('level-screen').style.backgroundImage = '';
            }
            if (screenId !== 'distractions-modal') {
                document.getElementById('distractions-modal').style.backgroundImage = '';
            }
        }



    function updateMapView() {
        levelIcons.forEach((icon, index) => {
            const status = gameState.levelStatus[index];
            icon.className = 'level-icon';
            icon.classList.add(status);
        });
    }

    function updateStatsUI() {
        // Emotional Intelligence is sum of all three, max 300
        const totalEI = Math.max(0, Math.min(300, gameState.stats.empathy + gameState.stats.selfAwareness + gameState.stats.regulation));
        eiBar.style.width = `${(totalEI/3)}%`;
    }

    function startLevel(levelNumber, skipTaskDesc) {
        gameState.currentLevel = levelNumber;
        gameState.currentDialogueNode = 'start';
        if (!skipTaskDesc) {
            showTaskDescription(levelNumber);
            return;
        }
        // Show character profiles before Level 2
        if (levelNumber === 2) {
            gameState.profileIndex = 0;
            showCharacterProfile();
        } else {
            showScreen('level-screen');
            updateLevelUI();
        }
    }

        function showCharacterProfile() {
            showScreen('character-profiles-modal');
            const profile = characterProfiles[gameState.profileIndex];
            profileImage.src = profile.image;
            profileDescription.innerHTML = profile.description;
            profileContinueBtn.textContent = (gameState.profileIndex < characterProfiles.length - 1) ? 'Continue' : 'Start Level';
        }

    profileContinueBtn.addEventListener('click', () => {
        if (gameState.profileIndex < characterProfiles.length - 1) {
            gameState.profileIndex++;
            showCharacterProfile();
        } else {
            showScreen('level-screen');
            updateLevelUI();
        }
    });

    function updateLevelUI() {
        const levelData = dialogueData[gameState.currentLevel];
        const nodeData = levelData[gameState.currentDialogueNode];

        npcPortraitImage.src = nodeData.npcImage;
        dialogueText.textContent = nodeData.text;
        replyOptionsContainer.innerHTML = '';

        // Set character name above dialogue box
        const npcNameDiv = document.getElementById('npc-name');
        let name = '';
        switch (gameState.currentLevel) {
            case 1: name = 'Alp Iyol'; break;
            case 2: name = 'Otto'; break;
            case 3: name = 'Kasanji'; break;
            case 4: name = 'Oskari'; break;
            case 5: name = 'Ayush'; break;
            case 6: name = 'Anne'; break;
            case 7: name = 'Hunter & Ayush'; break;
            default: name = '';
        }
        npcNameDiv.textContent = name;

        nodeData.options.forEach((option) => {
            const button = document.createElement('button');
            button.className = 'reply-btn';
            button.textContent = option.text;
            button.addEventListener('click', () => selectOption(option));
            replyOptionsContainer.appendChild(button);
        });
    }

    function selectOption(option) {
        if (option.effects) {
            gameState.stats.empathy = Math.max(0, Math.min(100, gameState.stats.empathy + (option.effects.empathy || 0)));
            gameState.stats.selfAwareness = Math.max(0, Math.min(100, gameState.stats.selfAwareness + (option.effects.selfAwareness || 0)));
            gameState.stats.regulation = Math.max(0, Math.min(100, gameState.stats.regulation + (option.effects.regulation || 0)));
            updateStatsUI();
        }

        if (option.next === 'end') {
            endLevel();
        } else {
            gameState.currentDialogueNode = option.next;
            updateLevelUI();
        }
    }
    
    function endLevel() {
        gameState.levelStatus[gameState.currentLevel - 1] = 'completed';
        
        if (gameState.currentLevel >= 6) { // Use >= in case more levels are added
            showFinalScore();
        } else {
            if (gameState.currentLevel < gameState.levelStatus.length) {
                gameState.levelStatus[gameState.currentLevel] = 'unlocked';
            }
            // No distractions modal after level
        }
    }
    
    function showFinalScore() {
        finalEmpathy.textContent = gameState.stats.empathy;
        finalSelfAwareness.textContent = gameState.stats.selfAwareness;
        finalRegulation.textContent = gameState.stats.regulation;
        showScreen('final-score-screen');
    }
    function showTaskDescription(levelNumber) {
        showScreen('task-desc-modal');
        const desc = taskDescriptions[levelNumber - 1];
        taskDescImage.src = desc.image;
        taskDescText.innerHTML = desc.text;
        gameState.nextLevelToStart = levelNumber;
        if (levelNumber === 7) {
            taskDescContinueBtn.disabled = true;
            taskDescContinueBtn.textContent = 'Continue (Disabled)';
            taskDescContinueBtn.style.opacity = '0.5';
            taskDescContinueBtn.style.cursor = 'not-allowed';
        } else {
            taskDescContinueBtn.disabled = false;
            taskDescContinueBtn.textContent = 'Continue';
            taskDescContinueBtn.style.opacity = '';
            taskDescContinueBtn.style.cursor = '';
        }
    }

    // --- EVENT LISTENERS ---
    startButton.addEventListener('click', () => {
        showScreen('president-intro-screen');
    });

    // After president continue, go to map only
    function presidentContinueHandler() {
        updateMapView();
        showScreen('map-screen');
    }
    presidentContinueBtn.addEventListener('click', presidentContinueHandler);
    presidentContinueBtn.addEventListener('touchstart', presidentContinueHandler);
    
        continueButton.addEventListener('click', () => {
            showScreen('wait-focus-modal');
        });
    taskDescContinueBtn.addEventListener('click', () => {
        startLevel(gameState.nextLevelToStart, true);
    });    

        // Distractions Modal Logic
        distractionOptions.addEventListener('click', (e) => {
            if (e.target.classList.contains('distraction-btn')) {
                distractionOptions.querySelectorAll('button').forEach(btn => btn.disabled = true);
                let outcome = '';
                let scoreChange = { empathy: 0, selfAwareness: 0, regulation: 0 };
                switch (e.target.dataset.option) {
                    case 'call':
                        outcome = 'He returns to work immediately.';
                        scoreChange = { empathy: 1, selfAwareness: 1, regulation: 0 };
                        gameState.flyerProgress = Math.min(100, gameState.flyerProgress + 20);
                        break;
                    case 'text':
                        outcome = 'He ignores text, work slows.';
                        scoreChange = { empathy: 1, selfAwareness: 0, regulation: -1 };
                        gameState.flyerProgress = Math.max(0, gameState.flyerProgress + 10);
                        break;
                    case 'nothing':
                        outcome = 'Task delays; he feels left out.';
                        scoreChange = { empathy: 0, selfAwareness: -1, regulation: 1 };
                        gameState.flyerProgress = Math.max(0, gameState.flyerProgress + 5);
                        break;
                }
                gameState.stats.empathy = Math.max(0, Math.min(100, gameState.stats.empathy + scoreChange.empathy));
                gameState.stats.selfAwareness = Math.max(0, Math.min(100, gameState.stats.selfAwareness + scoreChange.selfAwareness));
                gameState.stats.regulation = Math.max(0, Math.min(100, gameState.stats.regulation + scoreChange.regulation));
                updateStatsUI();
                flyerProgressValue.textContent = `${gameState.flyerProgress}%`;
                distractionOutcome.textContent = outcome + `\n\nScore: Empathy ${scoreChange.empathy > 0 ? '+1' : scoreChange.empathy < 0 ? '-1' : ''}, Self-awareness ${scoreChange.selfAwareness > 0 ? '+1' : scoreChange.selfAwareness < 0 ? '-1' : ''}, Regulation ${scoreChange.regulation > 0 ? '+1' : scoreChange.regulation < 0 ? '-1' : ''}`;
                distractionContinueBtn.classList.remove('hidden');
            }
        });

        distractionContinueBtn.addEventListener('click', () => {
            showScreen('wait-focus-modal');
        });

        // Wait and Focus modal logic
        const waitFocusContinueBtn = document.getElementById('wait-focus-continue-btn');
        waitFocusContinueBtn.addEventListener('click', () => {
            updateMapView();
            showScreen('map-screen');
        });
    levelIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            if (icon.classList.contains('unlocked')) {
                const level = parseInt(icon.dataset.level);
                showTaskDescription(level);
                // Set mission screen background to match level
                const taskDescModal = document.getElementById('task-desc-modal');
                let bgImg = '';
                switch (level) {
                    case 1: bgImg = "assets/scenery level 1.jpg"; break;
                    case 2: bgImg = "assets/scenery level 2.jpg"; break;
                    case 3: bgImg = "assets/mission level 3.jpg"; break;
                    case 4: bgImg = "assets/scenery level 4.jpg"; break;
                    case 5: bgImg = "assets/scenery level 5.jpg"; break;
                    case 6: bgImg = "assets/scenery level 6.jpg"; break;
                    case 7: bgImg = "assets/scenery1.jpg"; break;
                    default: bgImg = "assets/scenery1.jpg";
                }
                taskDescModal.style.backgroundImage = `url('${bgImg}')`;
                taskDescModal.style.backgroundSize = "cover";
                taskDescModal.style.backgroundPosition = "center";
            }
        });
    });
    
    // Proceed to Final Level button logic
    const proceedFinalBtn = document.getElementById('proceed-final-btn');
    if (proceedFinalBtn) {
        proceedFinalBtn.addEventListener('click', () => {
            showScreen('error408-screen');
        });
    }

    // Play Again button on error screen
    const playAgainFinalBtn = document.getElementById('play-again-final-btn');
    if (playAgainFinalBtn) {
        playAgainFinalBtn.addEventListener('click', () => {
            location.reload();
        });
    }

    showScreen('opening-screen');
    updateStatsUI();
});