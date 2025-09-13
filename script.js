document.addEventListener('DOMContentLoaded', () => {

    // --- DOM ELEMENTS ---
    const screens = document.querySelectorAll('.screen');
    const startButton = document.getElementById('start-button');
    const continueButton = document.getElementById('continue-button');
    const levelIcons = document.querySelectorAll('.level-icon');
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
    };

    // --- FUNCTIONS ---
    function showScreen(screenId) {
        screens.forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
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
        showScreen('level-screen');
        updateLevelUI();
    }

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
        
        if (gameState.currentLevel >= 4) { // Use >= in case more levels are added
            showFinalScore();
        } else {
            if (gameState.currentLevel < gameState.levelStatus.length) {
                gameState.levelStatus[gameState.currentLevel] = 'unlocked';
            }
            showScreen('transition-screen');
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