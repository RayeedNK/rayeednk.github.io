document.addEventListener('DOMContentLoaded', () => {

    // --- DOM ELEMENTS ---
    const screens = document.querySelectorAll('.screen');
    const startButton = document.getElementById('start-button');
    const continueButton = document.getElementById('continue-button');
    const levelIcons = document.querySelectorAll('.level-icon');
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
    
    // Level Screen Elements
    const npcPortraitImage = document.getElementById('npc-portrait-image');
    const dialogueText = document.getElementById('dialogue-text');
    const replyOptionsContainer = document.getElementById('reply-options');
    const levelCompleteMessage = document.getElementById('level-complete-message');

    // Stats Bar Elements
    const empathyBar = document.getElementById('empathy-bar');
    const selfAwarenessBar = document.getElementById('self-awareness-bar');
    const regulationBar = document.getElementById('regulation-bar');

    // Final Score Elements
    const finalEmpathy = document.getElementById('final-empathy');
    const finalSelfAwareness = document.getElementById('final-self-awareness');
    const finalRegulation = document.getElementById('final-regulation');

    // Character Profiles Modal Elements
    const characterProfilesModal = document.getElementById('character-profiles-modal');
    const profileImage = document.getElementById('profile-image');
    const profileDescription = document.getElementById('profile-description');
    const profileContinueBtn = document.getElementById('profile-continue-btn');

    // Distractions Modal Elements
    const distractionsModal = document.getElementById('distractions-modal');
    const distractionOptions = document.getElementById('distraction-options');
    const distractionOutcome = document.getElementById('distraction-outcome');
    const distractionContinueBtn = document.getElementById('distraction-continue-btn');
    const flyerProgressValue = document.getElementById('flyer-progress-value');

    // --- GAME STATE ---
    const gameState = {
        currentLevel: 0,
        levelStatus: ['unlocked', 'locked', 'locked', 'locked','locked','locked'],
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
                description: '<b>Ashar</b><br>Great manager, no wine knowledge, never drank. Handles logistics well.'
            },
            {
                image: 'assets/filip.png',
                description: '<b>Filip</b><br>Capable but already busy with tasks. Competent but stretched thin.'
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
                        bgImg = "assets/scenery level  1.jpg";
                        break;
                    case 2:
                        bgImg = "assets/scenery level  2.jpg";
                        break;
                    case 3:
                        bgImg = "assets/scenery level  3.jpg";
                        break;
                    case 4:
                        bgImg = "assets/scenery level  4.jpg";
                        break;
                    case 5:
                        bgImg = "assets/scenery level  5.jpg";
                        break;
                    case 6:
                        bgImg = "assets/scenery level  6.jpg";
                        break;
                    default:
                        bgImg = "assets/scenery1.png";
                }
                levelBg.style.backgroundImage = `url('${bgImg}')`;
            }
            // Set background for Alp distraction modal
            if (screenId === 'distractions-modal') {
                const distractionsModal = document.getElementById('distractions-modal');
                distractionsModal.style.backgroundImage = "url('assets/scenery alp.jpg')";
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

        function showDistractionsModal() {
            distractionOutcome.textContent = '';
            distractionContinueBtn.classList.add('hidden');
            distractionOptions.querySelectorAll('button').forEach(btn => btn.disabled = false);
            flyerProgressValue.textContent = `${gameState.flyerProgress}%`;
            showScreen('distractions-modal');
    }

    function updateMapView() {
        levelIcons.forEach((icon, index) => {
            const status = gameState.levelStatus[index];
            icon.className = 'level-icon';
            icon.classList.add(status);
        });
    }

    function updateStatsUI() {
        empathyBar.style.width = `${gameState.stats.empathy}%`;
        selfAwarenessBar.style.width = `${gameState.stats.selfAwareness}%`;
        regulationBar.style.width = `${gameState.stats.regulation}%`;
    }

    function startLevel(levelNumber) {
            gameState.currentLevel = levelNumber;
            gameState.currentDialogueNode = 'start';
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
                showDistractionsModal();
        }
    }
    
    function showFinalScore() {
        finalEmpathy.textContent = gameState.stats.empathy;
        finalSelfAwareness.textContent = gameState.stats.selfAwareness;
        finalRegulation.textContent = gameState.stats.regulation;
        showScreen('final-score-screen');
    }

    // --- EVENT LISTENERS ---
    startButton.addEventListener('click', () => {
        updateMapView();
        showScreen('map-screen');
    });
    
    continueButton.addEventListener('click', () => {
        updateMapView();
        showScreen('map-screen');
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
            showScreen('transition-screen');
        });

    levelIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            if (icon.classList.contains('unlocked')) {
                const level = parseInt(icon.dataset.level);
                startLevel(level);
            }
        });
    });
    
    playAgainButton.addEventListener('click', () => {
        location.reload();
    });

    // --- INITIALIZATION ---
    showScreen('opening-screen');
    updateStatsUI();
});