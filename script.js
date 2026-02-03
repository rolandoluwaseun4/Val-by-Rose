// ========================================
// GLOBAL VARIABLES & ELEMENTS
// ========================================
const nameInputScreen = document.getElementById('nameInputScreen');
const questionScreen = document.getElementById('questionScreen');
const successScreen = document.getElementById('successScreen');
const nameInput = document.getElementById('nameInput');
const continueBtn = document.getElementById('continueBtn');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const hintText = document.getElementById('hintText');
const canvas = document.getElementById('fireworksCanvas');
const ctx = canvas.getContext('2d');
const backgroundMusic = document.getElementById('backgroundMusic');
const musicToggle = document.getElementById('musicToggle');

let userName = '';
let noClickCount = 0;

// ========================================
// NAME INPUT FUNCTIONALITY (NEW FEATURE)
// ========================================
// Allow Enter key to continue
nameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && nameInput.value.trim() !== '') {
        proceedToQuestion();
    }
});

// Continue button click
continueBtn.addEventListener('click', () => {
    if (nameInput.value.trim() !== '') {
        proceedToQuestion();
    } else {
        // Shake input if empty
        nameInput.style.animation = 'shake 0.5s';
        setTimeout(() => {
            nameInput.style.animation = '';
        }, 500);
    }
});

function proceedToQuestion() {
    userName = nameInput.value.trim();
    
    // Update all name displays
    document.getElementById('displayName').textContent = userName;
    document.getElementById('displayNameSuccess').textContent = userName;
    document.getElementById('displayNameFinal').textContent = userName;
    
    // Smooth transition
    nameInputScreen.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    nameInputScreen.style.opacity = '0';
    nameInputScreen.style.transform = 'scale(0.9)';
    
    setTimeout(() => {
        nameInputScreen.classList.add('hidden');
        questionScreen.classList.remove('hidden');
        questionScreen.style.opacity = '0';
        questionScreen.style.transform = 'scale(0.9)';
        
        // Fade in question screen
        setTimeout(() => {
            questionScreen.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            questionScreen.style.opacity = '1';
            questionScreen.style.transform = 'scale(1)';
        }, 50);
    }, 400);
}

// ========================================
// FLOATING HEARTS BACKGROUND
// ========================================
function createFloatingHearts() {
    const container = document.getElementById('heartsContainer');
    const heartEmojis = ['❤️', '💖', '💕', '💗', '💓', '💝', '💞'];
    
    // Create 20 hearts with random properties
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
            
            // Random horizontal position
            heart.style.left = Math.random() * 100 + '%';
            
            // Random animation delay for staggered effect
            heart.style.animationDelay = Math.random() * 8 + 's';
            
            // Random animation duration for variety
            heart.style.animationDuration = (6 + Math.random() * 4) + 's';
            
            // Random size
            const size = 15 + Math.random() * 10;
            heart.style.fontSize = size + 'px';
            
            container.appendChild(heart);
            
            // Remove heart after animation completes and recreate for infinite loop
            setTimeout(() => {
                heart.remove();
            }, 10000);
        }, i * 400); // Stagger heart creation
    }
    
    // Keep creating new hearts
    setTimeout(createFloatingHearts, 8000);
}

// ========================================
// DODGING "NO" BUTTON
// ========================================
// Array of playful messages when trying to click "No"
const hintMessages = [
    "Nice try 😌",
    "The button is broken 👀",
    "Nope, not happening! 😏",
    "You really thought... 😂",
    "Just click Yes already! 💖",
    "Stop being difficult 😤",
    "You know you want to say Yes! ✨",
    "The No button doesn't work here 🙈",
    "Are you sure about that? 🤔",
    "Come on, " + (userName || "friend") + "! Say yes! 💕"
];

// Make the No button dodge on hover (desktop)
noBtn.addEventListener('mouseenter', () => {
    dodgeButton();
    showHint();
});

// Make the No button dodge on click attempt (mobile)
noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    dodgeButton();
    showHint();
});

// For touch devices
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    dodgeButton();
    showHint();
});

function dodgeButton() {
    // Get viewport dimensions
    const maxX = window.innerWidth - noBtn.offsetWidth - 60;
    const maxY = window.innerHeight - noBtn.offsetHeight - 60;
    
    // Generate random position (avoiding edges)
    let newX = Math.random() * (maxX - 100) + 50;
    let newY = Math.random() * (maxY - 200) + 100;
    
    // Make sure button doesn't go off screen
    newX = Math.max(20, Math.min(newX, maxX));
    newY = Math.max(80, Math.min(newY, maxY));
    
    // Apply new position
    noBtn.style.position = 'fixed';
    noBtn.style.left = newX + 'px';
    noBtn.style.top = newY + 'px';
    noBtn.style.zIndex = '1000';
    
    // Add shake animation
    noBtn.style.animation = 'shake 0.4s';
    setTimeout(() => {
        noBtn.style.animation = '';
    }, 400);
    
    noClickCount++;
    
    // After 5 attempts, make Yes button bigger
    if (noClickCount >= 5) {
        yesBtn.style.transform = 'scale(1.2)';
        yesBtn.style.animation = 'pulse-heart 0.8s ease infinite';
    }
}

function showHint() {
    const randomHint = hintMessages[Math.floor(Math.random() * hintMessages.length)];
    hintText.textContent = randomHint;
    hintText.style.opacity = '1';
    
    // Fade out hint after 2.5 seconds
    setTimeout(() => {
        hintText.style.opacity = '0';
    }, 2500);
}

// ========================================
// YES BUTTON - SUCCESS FLOW
// ========================================
yesBtn.addEventListener('click', () => {
    // Hide question screen
    questionScreen.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    questionScreen.style.opacity = '0';
    questionScreen.style.transform = 'scale(0.8)';
    
    setTimeout(() => {
        questionScreen.classList.add('hidden');
        successScreen.classList.remove('hidden');
        
        // Launch fireworks
        launchFireworks();
        
        // Launch confetti hearts
        for (let i = 0; i < 40; i++) {
            setTimeout(() => {
                createConfettiHeart();
            }, i * 80);
        }
        
        // Additional burst after 2 seconds
        setTimeout(() => {
            for (let i = 0; i < 20; i++) {
                setTimeout(() => {
                    createConfettiHeart();
                }, i * 60);
            }
        }, 2000);
    }, 400);
});

// ========================================
// BACKGROUND MUSIC CONTROL (NEW FEATURE)
// ========================================
let isMusicPlaying = false;

musicToggle.addEventListener('click', () => {
    if (isMusicPlaying) {
        backgroundMusic.pause();
        musicToggle.textContent = '🔇 Click for Music';
        musicToggle.classList.remove('playing');
        isMusicPlaying = false;
    } else {
        backgroundMusic.play().catch(err => {
            console.log('Audio play failed:', err);
            alert('Unable to play music. Please check your browser settings.');
        });
        musicToggle.textContent = '🔊 Music Playing';
        musicToggle.classList.add('playing');
        isMusicPlaying = true;
    }
});

// ========================================
// FIREWORKS ANIMATION
// ========================================
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Resize canvas when window resizes
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

class Particle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.velocity = {
            x: (Math.random() - 0.5) * 9,
            y: (Math.random() - 0.5) * 9
        };
        this.alpha = 1;
        this.decay = 0.012;
        this.gravity = 0.08;
        this.size = Math.random() * 4 + 2;
    }
    
    update() {
        this.velocity.y += this.gravity;
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.alpha -= this.decay;
    }
    
    draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        
        ctx.restore();
    }
}

let particles = [];
let animationId;

function createFirework(x, y) {
    const colors = ['#ff6b9d', '#c44569', '#ff8dc7', '#ffd4e5', '#fff', '#ffb3d9', '#ff69b4'];
    const particleCount = 100;
    
    for (let i = 0; i < particleCount; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        particles.push(new Particle(x, y, color));
    }
}

function animate() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach((particle, index) => {
        if (particle.alpha <= 0) {
            particles.splice(index, 1);
        } else {
            particle.update();
            particle.draw();
        }
    });
    
    if (particles.length > 0) {
        animationId = requestAnimationFrame(animate);
    } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

function launchFireworks() {
    let count = 0;
    const maxFireworks = 20;
    
    const interval = setInterval(() => {
        // Random position for each firework
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height * 0.6; // Keep in upper 60%
        
        createFirework(x, y);
        
        if (particles.length > 0 && !animationId) {
            animate();
        }
        
        count++;
        if (count >= maxFireworks) {
            clearInterval(interval);
        }
    }, 250);
}

// ========================================
// CONFETTI HEARTS
// ========================================
function createConfettiHeart() {
    const confetti = document.createElement('div');
    const heartEmojis = ['❤️', '💖', '💕', '💗', '💓', '💝', '💞', '💘'];
    confetti.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    
    confetti.style.position = 'fixed';
    confetti.style.fontSize = (25 + Math.random() * 15) + 'px';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.top = '-80px';
    confetti.style.zIndex = '100';
    confetti.style.pointerEvents = 'none';
    
    // Random rotation and animation duration
    const duration = 2.5 + Math.random() * 1.5;
    confetti.style.animation = `fall ${duration}s linear forwards`;
    
    document.body.appendChild(confetti);
    
    setTimeout(() => {
        confetti.remove();
    }, duration * 1000);
}

// ========================================
// INITIALIZE ON PAGE LOAD
// ========================================
window.addEventListener('DOMContentLoaded', () => {
    // Start floating hearts animation
    createFloatingHearts();
    
    // Auto-focus name input
    nameInput.focus();
});

// ========================================
// SMOOTH TRANSITIONS
// ========================================
successScreen.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

// ========================================
// PREVENT ACCIDENTAL REFRESH (OPTIONAL)
// ========================================
let hasClickedYes = false;

yesBtn.addEventListener('click', () => {
    hasClickedYes = true;
});

window.addEventListener('beforeunload', (e) => {
    if (hasClickedYes) {
        e.preventDefault();
        e.returnValue = 'Are you sure you want to leave? Your Valentine moment will be lost!';
    }
});

// ========================================
// EASTER EGG: Special names
// ========================================
continueBtn.addEventListener('click', () => {
    const specialNames = ['Rose', 'rose', 'ROSE'];
    if (specialNames.includes(nameInput.value.trim())) {
        // Add extra special effect for "Rose"
        nameInput.style.animation = 'pulse-heart 0.5s ease 3';
    }
});

