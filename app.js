const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const mainContainer = document.getElementById('mainContainer');
const celebration = document.getElementById('celebration');

let noClickCount = 0;

yesBtn.addEventListener('click', () => {
    mainContainer.classList.add('hidden');
    celebration.classList.remove('hidden');
    
    // Launch confetti
    launchConfetti();
});

function launchConfetti() {
    const duration = 3000;
    const end = Date.now() + duration;

    const colors = ['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7'];

    (function frame() {
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
    
    // Heart-shaped confetti burst
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: colors,
        shapes: ['circle'],
        scalar: 1.2
    });
}

noBtn.addEventListener('click', () => {
    noClickCount++;
    
    const currentSize = 1 + (noClickCount * 0.1);
    yesBtn.style.transform = `scale(${currentSize})`;

    moveNoButton();

    updateNoButtonText();
});

noBtn.addEventListener('mouseenter', () => {
    if (noClickCount > 0) {
        moveNoButton();
    }
});

function moveNoButton() {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    
    const maxX = 100;
    const maxY = 50;
    
    const randomX = Math.random() * maxX - maxX / 2;
    const randomY = Math.random() * maxY - maxY / 2;
    
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

function updateNoButtonText() {
    const noTexts = [
        "No",
        "Are you sure?",
        "Really?",
        "Think again!",
        "Don't be like that!",
        "Give it a chance!",
        "Please? 🥺",
        "Last chance!",
        "Pretty please?"
    ];
    
    const textIndex = Math.min(noClickCount, noTexts.length - 1);
    noBtn.textContent = noTexts[textIndex];
}
