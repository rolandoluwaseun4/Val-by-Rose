// ULTIMATE VALENTINE WEBSITE - WORKING VERSION
// No external dependencies that fail!

// ========================================
// TRANSLATIONS
// ========================================
const translations = {
    en: {
        'welcome': 'Welcome to Your',
        'valentine-exp': 'Valentine Experience',
        'subtitle': "Let's make this special... What's your name?",
        'add-photo': 'Add a photo (optional)',
        'upload': 'Upload Photo',
        'continue': 'Continue',
        'hint': "Or your crush's name if you're sharing this 😊",
        'countdown-label': "Days Until Valentine's Day",
        'will-you': 'Will You Be My',
        'valentine': 'Valentine?',
        'important': "This is the most important question I'll ask today ✨",
        'yes': 'Yes',
        'no': 'No',
        'heart-explode': 'You just made my',
        'heart': 'heart explode',
        'love-match': 'Love Match:',
        'knew-yes': "I knew you'd say yes!",
        'happy-valentine': "Happy Valentine's Day",
        'best-thing': "the best thing that's ever happened to me",
        'share': 'Share',
        'music': 'Click for Music',
        'share-love': 'Share the Love!',
        'copy': 'Copy Link'
    },
    es: {
        'welcome': 'Bienvenido a Tu',
        'valentine-exp': 'Experiencia de San Valentín',
        'subtitle': '¿Cuál es tu nombre?',
        'add-photo': 'Añadir foto (opcional)',
        'upload': 'Subir Foto',
        'continue': 'Continuar',
        'hint': 'O el nombre de tu crush 😊',
        'countdown-label': 'Días Hasta San Valentín',
        'will-you': '¿Serás Mi',
        'valentine': 'Valentín?',
        'important': 'Esta es la pregunta más importante ✨',
        'yes': 'Sí',
        'no': 'No',
        'heart-explode': '¡Hiciste que mi',
        'heart': 'corazón explote',
        'love-match': 'Compatibilidad:',
        'knew-yes': '¡Sabía que dirías que sí!',
        'happy-valentine': 'Feliz San Valentín',
        'best-thing': 'lo mejor que me ha pasado',
        'share': 'Compartir',
        'music': 'Click para Música',
        'share-love': '¡Comparte el Amor!',
        'copy': 'Copiar Enlace'
    },
    fr: {
        'welcome': 'Bienvenue à Votre',
        'valentine-exp': 'Expérience Saint-Valentin',
        'subtitle': 'Quel est votre nom?',
        'add-photo': 'Ajouter une photo (facultatif)',
        'upload': 'Télécharger Photo',
        'continue': 'Continuer',
        'hint': 'Ou le nom de votre bien-aimé(e) 😊',
        'countdown-label': 'Jours Jusqu\'à la Saint-Valentin',
        'will-you': 'Seras-Tu Mon',
        'valentine': 'Valentin?',
        'important': 'C\'est la question la plus importante ✨',
        'yes': 'Oui',
        'no': 'Non',
        'heart-explode': 'Tu as fait exploser mon',
        'heart': 'cœur',
        'love-match': 'Compatibilité:',
        'knew-yes': 'Je savais que tu dirais oui!',
        'happy-valentine': 'Joyeuse Saint-Valentin',
        'best-thing': 'la meilleure chose',
        'share': 'Partager',
        'music': 'Cliquez pour Musique',
        'share-love': 'Partagez l\'Amour!',
        'copy': 'Copier Lien'
    }
};

let currentLanguage = 'en';

function changeLanguage(lang) {
    currentLanguage = lang;
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

document.getElementById('languageSelect').addEventListener('change', (e) => {
    changeLanguage(e.target.value);
});

// ========================================
// THEME SYSTEM
// ========================================
const themeBtn = document.getElementById('themeBtn');
const themeOptions = document.getElementById('themeOptions');
const themeOptionBtns = document.querySelectorAll('.theme-option');

themeBtn.addEventListener('click', () => {
    themeOptions.classList.toggle('hidden');
});

themeOptionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const theme = btn.getAttribute('data-theme');
        document.body.setAttribute('data-theme', theme);
        themeOptions.classList.add('hidden');
        localStorage.setItem('valentine-theme', theme);
    });
});

const savedTheme = localStorage.getItem('valentine-theme');
if (savedTheme) {
    document.body.setAttribute('data-theme', savedTheme);
}

document.addEventListener('click', (e) => {
    if (!themeBtn.contains(e.target) && !themeOptions.contains(e.target)) {
        themeOptions.classList.add('hidden');
    }
});

// ========================================
// ELEMENTS
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

let userName = '';
let noClickCount = 0;
let uploadedPhotoData = null;

// ========================================
// PHOTO UPLOAD
// ========================================
const photoInput = document.getElementById('photoInput');
const uploadPhotoBtn = document.getElementById('uploadPhotoBtn');
const uploadedPhoto = document.getElementById('uploadedPhoto');
const photoPlaceholder = document.getElementById('photoPlaceholder');
const successPhotoContainer = document.getElementById('successPhotoContainer');
const successPhoto = document.getElementById('successPhoto');

uploadPhotoBtn.addEventListener('click', () => {
    photoInput.click();
});

photoInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
            uploadedPhotoData = event.target.result;
            uploadedPhoto.src = uploadedPhotoData;
            uploadedPhoto.classList.remove('hidden');
            photoPlaceholder.classList.add('hidden');
        };
        reader.readAsDataURL(file);
    }
});

// ========================================
// COUNTDOWN TIMER
// ========================================
function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    let valentinesDay = new Date(currentYear, 1, 14);
    
    if (now > valentinesDay) {
        valentinesDay = new Date(currentYear + 1, 1, 14);
    }
    
    const diff = valentinesDay - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    document.getElementById('daysCount').textContent = days;
}

updateCountdown();
setInterval(updateCountdown, 60000);

// ========================================
// NAME INPUT
// ========================================
nameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && nameInput.value.trim() !== '') {
        proceedToQuestion();
    }
});

continueBtn.addEventListener('click', () => {
    if (nameInput.value.trim() !== '') {
        proceedToQuestion();
    } else {
        nameInput.style.animation = 'shake 0.5s';
        setTimeout(() => {
            nameInput.style.animation = '';
        }, 500);
    }
});

function proceedToQuestion() {
    userName = nameInput.value.trim();
    
    document.getElementById('displayName').textContent = userName;
    document.getElementById('displayNameSuccess').textContent = userName;
    document.getElementById('displayNameFinal').textContent = userName;
    
    nameInputScreen.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    nameInputScreen.style.opacity = '0';
    nameInputScreen.style.transform = 'scale(0.9)';
    
    setTimeout(() => {
        nameInputScreen.classList.add('hidden');
        questionScreen.classList.remove('hidden');
        questionScreen.style.opacity = '0';
        questionScreen.style.transform = 'scale(0.9)';
        
        setTimeout(() => {
            questionScreen.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            questionScreen.style.opacity = '1';
            questionScreen.style.transform = 'scale(1)';
        }, 50);
    }, 400);
}

// ========================================
// FLOATING HEARTS & ROSE PETALS
// ========================================
function createFloatingHearts() {
    const container = document.getElementById('heartsContainer');
    const heartEmojis = ['❤️', '💖', '💕', '💗', '💓', '💝', '💞'];
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 8 + 's';
            heart.style.animationDuration = (6 + Math.random() * 4) + 's';
            heart.style.fontSize = (15 + Math.random() * 10) + 'px';
            container.appendChild(heart);
            
            setTimeout(() => heart.remove(), 10000);
        }, i * 400);
    }
    
    setTimeout(createFloatingHearts, 8000);
}

function createRosePetals() {
    const container = document.getElementById('petalsContainer');
    const petalEmojis = ['🌹', '🌺', '🌸', '💐', '🏵️'];
    
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const petal = document.createElement('div');
            petal.className = 'petal';
            petal.textContent = petalEmojis[Math.floor(Math.random() * petalEmojis.length)];
            petal.style.left = Math.random() * 100 + '%';
            petal.style.animationDelay = Math.random() * 12 + 's';
            petal.style.animationDuration = (10 + Math.random() * 5) + 's';
            petal.style.fontSize = (16 + Math.random() * 8) + 'px';
            container.appendChild(petal);
            
            setTimeout(() => petal.remove(), 15000);
        }, i * 600);
    }
    
    setTimeout(createRosePetals, 12000);
}

// ========================================
// DODGING "NO" BUTTON
// ========================================
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
    "Come on, " + (userName || "friend") + "! Say yes! 💕",
    "My grandma clicks faster 😂",
    "Error 404: No button not found 🤖",
    "This isn't a game... or is it? 🎮",
    "Resistance is futile! 👾",
    "The universe says YES! 🌟",
    "Even my cat knows the answer 🐱",
    "Plot twist: No isn't an option 📖",
    "Your heart says yes, trust it 💓"
];

noBtn.addEventListener('mouseenter', () => {
    dodgeButton();
    showHint();
});

noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    dodgeButton();
    showHint();
});

noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    dodgeButton();
    showHint();
});

function dodgeButton() {
    const maxX = window.innerWidth - noBtn.offsetWidth - 60;
    const maxY = window.innerHeight - noBtn.offsetHeight - 60;
    
    let newX = Math.random() * (maxX - 100) + 50;
    let newY = Math.random() * (maxY - 200) + 100;
    
    newX = Math.max(20, Math.min(newX, maxX));
    newY = Math.max(80, Math.min(newY, maxY));
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = newX + 'px';
    noBtn.style.top = newY + 'px';
    noBtn.style.zIndex = '1000';
    noBtn.style.animation = 'shake 0.4s';
    
    setTimeout(() => {
        noBtn.style.animation = '';
    }, 400);
    
    noClickCount++;
    
    if (noClickCount >= 5) {
        yesBtn.style.transform = 'scale(1.2)';
        yesBtn.style.animation = 'pulse-heart 0.8s ease infinite';
    }
}

function showHint() {
    const randomHint = hintMessages[Math.floor(Math.random() * hintMessages.length)];
    hintText.textContent = randomHint;
    hintText.style.opacity = '1';
    
    setTimeout(() => {
        hintText.style.opacity = '0';
    }, 2500);
}

// ========================================
// YES BUTTON - SUCCESS
// ========================================
yesBtn.addEventListener('click', () => {
    questionScreen.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    questionScreen.style.opacity = '0';
    questionScreen.style.transform = 'scale(0.8)';
    
    setTimeout(() => {
        questionScreen.classList.add('hidden');
        successScreen.classList.remove('hidden');
        
        if (uploadedPhotoData) {
            successPhoto.src = uploadedPhotoData;
            successPhotoContainer.classList.remove('hidden');
        }
        
        calculateLoveCompatibility();
        generateLoveMessage();
        launchFireworks();
        
        for (let i = 0; i < 40; i++) {
            setTimeout(() => {
                createConfettiHeart();
            }, i * 70);
        }
    }, 400);
});

// ========================================
// LOVE CALCULATOR
// ========================================
function calculateLoveCompatibility() {
    let score = 85 + Math.floor(Math.random() * 14);
    
    document.getElementById('compatibilityScore').textContent = score + '%';
    document.getElementById('compatibilityFill').style.width = score + '%';
}

// ========================================
// LOVE MESSAGE GENERATOR
// ========================================
const loveMessages = [
    "Like stars align in the night sky, our hearts were meant to find each other.",
    "In a world of billions, you're the one who makes my heart skip a beat.",
    "Every moment with you feels like a beautiful dream I never want to wake from.",
    "You're not just my Valentine - you're my favorite person in the entire universe.",
    "If love was a language, your name would be the most beautiful word.",
    "You make ordinary days feel like magical adventures.",
    "My heart knew you were special the moment I saw your smile.",
    "With you, every day feels like Valentine's Day.",
    "You're the missing piece that makes my life complete.",
    "Love isn't finding perfection - it's finding you and realizing you're perfect for me."
];

function generateLoveMessage() {
    const randomMessage = loveMessages[Math.floor(Math.random() * loveMessages.length)];
    const messageElement = document.getElementById('generatedMessage');
    
    let index = 0;
    messageElement.textContent = '';
    
    const typeInterval = setInterval(() => {
        if (index < randomMessage.length) {
            messageElement.textContent += randomMessage[index];
            index++;
        } else {
            clearInterval(typeInterval);
        }
    }, 30);
}

// ========================================
// SHARE FEATURE
// ========================================
const shareBtn = document.getElementById('shareBtn');
const shareModal = document.getElementById('shareModal');
const closeShare = document.getElementById('closeShare');
const shareLinkInput = document.getElementById('shareLinkInput');

shareBtn.addEventListener('click', () => {
    const shareText = `${userName || 'Someone special'} said YES! 💖`;
    const shareUrl = window.location.href;
    
    document.getElementById('shareText').textContent = shareText;
    shareLinkInput.value = shareUrl;
    shareModal.classList.remove('hidden');
});

closeShare.addEventListener('click', () => {
    shareModal.classList.add('hidden');
});

shareModal.addEventListener('click', (e) => {
    if (e.target === shareModal) {
        shareModal.classList.add('hidden');
    }
});

document.getElementById('shareWhatsApp').addEventListener('click', () => {
    const text = `${userName || 'Someone'} said YES! 💖`;
    const url = `https://wa.me/?text=${encodeURIComponent(text + ' ' + window.location.href)}`;
    window.open(url, '_blank');
});

document.getElementById('shareTwitter').addEventListener('click', () => {
    const text = `${userName || 'Someone special'} said YES! 💖✨`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank');
});

document.getElementById('shareFacebook').addEventListener('click', () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank');
});

document.getElementById('copyLink').addEventListener('click', () => {
    shareLinkInput.select();
    document.execCommand('copy');
    alert('✅ Link copied to clipboard!');
});

// ========================================
// MUSIC CONTROL
// ========================================
const musicToggle = document.getElementById('musicToggle');
const backgroundMusic = document.getElementById('backgroundMusic');
let isMusicPlaying = false;

musicToggle.addEventListener('click', () => {
    if (isMusicPlaying) {
        backgroundMusic.pause();
        musicToggle.innerHTML = '🔇 <span data-translate="music">Click for Music</span>';
        musicToggle.classList.remove('playing');
        isMusicPlaying = false;
    } else {
        backgroundMusic.play().catch(err => {
            console.log('Audio play failed:', err);
        });
        musicToggle.textContent = '🔊 Music Playing';
        musicToggle.classList.add('playing');
        isMusicPlaying = true;
    }
});

// ========================================
// FIREWORKS
// ========================================
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

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
            x: (Math.random() - 0.5) * 10,
            y: (Math.random() - 0.5) * 10
        };
        this.alpha = 1;
        this.decay = 0.01;
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
        ctx.shadowBlur = 15;
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
    ctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
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
    
    const interval = setInterva
