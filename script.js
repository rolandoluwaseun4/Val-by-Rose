// ========================================
// ULTIMATE VALENTINE WEBSITE - PREMIUM JAVASCRIPT
// ALL FEATURES INCLUDED!
// ========================================

// ========================================
// MULTI-LANGUAGE SUPPORT (NEW)
// ========================================
const translations = {
    en: {
        'welcome': 'Welcome to Your',
        'valentine-exp': 'Valentine Experience',
        'lets-make-special': "Let's make this special... What's your name?",
        'add-photo': 'Add a photo (optional)',
        'upload-photo': '📷 Upload Photo',
        'enter-name': 'Enter your name here...',
        'continue': 'Continue',
        'or-crush': "Or your crush's name if you're sharing this 😊",
        'days-until': "Days Until Valentine's Day",
        'will-you': 'Will You Be My',
        'valentine': 'Valentine?',
        'important-question': "This is the most important question I'll ask today ✨",
        'yes': 'Yes',
        'no': 'No',
        'heart-explode': 'You just made my',
        'heart': 'heart explode',
        'love-match': 'Love Match:',
        'knew-yes': "I knew you'd say yes!",
        'happy-valentine': "Happy Valentine's Day",
        'best-thing': "the best thing that's ever happened to me",
        'save-moment': 'Save This Moment',
        'share': 'Share',
        'record-message': 'Record Message',
        'generate-qr': 'Generate QR Code',
        'start-recording': 'Start Recording',
        'stop': 'Stop',
        'play': 'Play',
        'qr-title': 'Share This QR Code',
        'qr-hint': 'Print or share this code with your Valentine!',
        'click-music': 'Click for Music',
        'song1': 'Romantic Piano',
        'song2': 'Jazz Love',
        'song3': 'Classical Romance',
        'share-love': 'Share the Love!',
        'copy-link': 'Copy Link'
    },
    es: {
        'welcome': 'Bienvenido a Tu',
        'valentine-exp': 'Experiencia de San Valentín',
        'lets-make-special': '¿Cuál es tu nombre?',
        'add-photo': 'Añadir una foto (opcional)',
        'upload-photo': '📷 Subir Foto',
        'enter-name': 'Escribe tu nombre aquí...',
        'continue': 'Continuar',
        'or-crush': 'O el nombre de tu crush si compartes esto 😊',
        'days-until': 'Días Hasta San Valentín',
        'will-you': '¿Serás Mi',
        'valentine': 'Valentín?',
        'important-question': 'Esta es la pregunta más importante que haré hoy ✨',
        'yes': 'Sí',
        'no': 'No',
        'heart-explode': '¡Acabas de hacer que mi',
        'heart': 'corazón explote',
        'love-match': 'Compatibilidad:',
        'knew-yes': '¡Sabía que dirías que sí!',
        'happy-valentine': 'Feliz Día de San Valentín',
        'best-thing': 'lo mejor que me ha pasado',
        'save-moment': 'Guardar Este Momento',
        'share': 'Compartir',
        'record-message': 'Grabar Mensaje',
        'generate-qr': 'Generar Código QR',
        'start-recording': 'Comenzar Grabación',
        'stop': 'Detener',
        'play': 'Reproducir',
        'qr-title': 'Comparte Este Código QR',
        'qr-hint': '¡Imprime o comparte este código con tu Valentín!',
        'click-music': 'Click para Música',
        'song1': 'Piano Romántico',
        'song2': 'Jazz de Amor',
        'song3': 'Romance Clásico',
        'share-love': '¡Comparte el Amor!',
        'copy-link': 'Copiar Enlace'
    },
    fr: {
        'welcome': 'Bienvenue à Votre',
        'valentine-exp': 'Expérience de la Saint-Valentin',
        'lets-make-special': 'Quel est votre nom?',
        'add-photo': 'Ajouter une photo (facultatif)',
        'upload-photo': '📷 Télécharger Photo',
        'enter-name': 'Entrez votre nom ici...',
        'continue': 'Continuer',
        'or-crush': 'Ou le nom de votre bien-aimé(e) 😊',
        'days-until': 'Jours Jusqu\'à la Saint-Valentin',
        'will-you': 'Seras-Tu Mon',
        'valentine': 'Valentin?',
        'important-question': 'C\'est la question la plus importante aujourd\'hui ✨',
        'yes': 'Oui',
        'no': 'Non',
        'heart-explode': 'Tu as fait exploser mon',
        'heart': 'cœur',
        'love-match': 'Compatibilité:',
        'knew-yes': 'Je savais que tu dirais oui!',
        'happy-valentine': 'Joyeuse Saint-Valentin',
        'best-thing': 'la meilleure chose qui me soit arrivée',
        'save-moment': 'Enregistrer Ce Moment',
        'share': 'Partager',
        'record-message': 'Enregistrer Message',
        'generate-qr': 'Générer Code QR',
        'start-recording': 'Commencer l\'Enregistrement',
        'stop': 'Arrêter',
        'play': 'Jouer',
        'qr-title': 'Partagez Ce Code QR',
        'qr-hint': 'Imprimez ou partagez ce code avec votre Valentin!',
        'click-music': 'Cliquez pour la Musique',
        'song1': 'Piano Romantique',
        'song2': 'Jazz d\'Amour',
        'song3': 'Romance Classique',
        'share-love': 'Partagez l\'Amour!',
        'copy-link': 'Copier le Lien'
    },
    de: {
        'welcome': 'Willkommen zu Deinem',
        'valentine-exp': 'Valentinstag-Erlebnis',
        'lets-make-special': 'Wie ist dein Name?',
        'add-photo': 'Foto hinzufügen (optional)',
        'upload-photo': '📷 Foto Hochladen',
        'enter-name': 'Gib hier deinen Namen ein...',
        'continue': 'Weiter',
        'or-crush': 'Oder der Name deines Schwarms 😊',
        'days-until': 'Tage Bis Valentinstag',
        'will-you': 'Willst Du Mein',
        'valentine': 'Valentinsschatz Sein?',
        'important-question': 'Dies ist die wichtigste Frage heute ✨',
        'yes': 'Ja',
        'no': 'Nein',
        'heart-explode': 'Du hast mein',
        'heart': 'Herz explodieren lassen',
        'love-match': 'Liebesübereinstimmung:',
        'knew-yes': 'Ich wusste, du würdest Ja sagen!',
        'happy-valentine': 'Froher Valentinstag',
        'best-thing': 'das Beste, was mir je passiert ist',
        'save-moment': 'Diesen Moment Speichern',
        'share': 'Teilen',
        'record-message': 'Nachricht Aufnehmen',
        'generate-qr': 'QR-Code Generieren',
        'start-recording': 'Aufnahme Starten',
        'stop': 'Stoppen',
        'play': 'Abspielen',
        'qr-title': 'Teile Diesen QR-Code',
        'qr-hint': 'Drucke oder teile diesen Code mit deinem Valentinsschatz!',
        'click-music': 'Klick für Musik',
        'song1': 'Romantisches Klavier',
        'song2': 'Jazz-Liebe',
        'song3': 'Klassische Romanze',
        'share-love': 'Teile die Liebe!',
        'copy-link': 'Link Kopieren'
    },
    it: {
        'welcome': 'Benvenuto alla Tua',
        'valentine-exp': 'Esperienza di San Valentino',
        'lets-make-special': 'Come ti chiami?',
        'add-photo': 'Aggiungi una foto (opzionale)',
        'upload-photo': '📷 Carica Foto',
        'enter-name': 'Inserisci il tuo nome qui...',
        'continue': 'Continua',
        'or-crush': 'O il nome della tua cotta 😊',
        'days-until': 'Giorni Fino a San Valentino',
        'will-you': 'Vuoi Essere il Mio',
        'valentine': 'Valentino?',
        'important-question': 'Questa è la domanda più importante oggi ✨',
        'yes': 'Sì',
        'no': 'No',
        'heart-explode': 'Hai fatto esplodere il mio',
        'heart': 'cuore',
        'love-match': 'Compatibilità:',
        'knew-yes': 'Sapevo che avresti detto di sì!',
        'happy-valentine': 'Buon San Valentino',
        'best-thing': 'la cosa migliore che mi sia mai capitata',
        'save-moment': 'Salva Questo Momento',
        'share': 'Condividi',
        'record-message': 'Registra Messaggio',
        'generate-qr': 'Genera Codice QR',
        'start-recording': 'Inizia Registrazione',
        'stop': 'Ferma',
        'play': 'Riproduci',
        'qr-title': 'Condividi Questo Codice QR',
        'qr-hint': 'Stampa o condividi questo codice con il tuo Valentino!',
        'click-music': 'Clicca per la Musica',
        'song1': 'Pianoforte Romantico',
        'song2': 'Jazz d\'Amore',
        'song3': 'Romance Classica',
        'share-love': 'Condividi l\'Amore!',
        'copy-link': 'Copia Link'
    },
    pt: {
        'welcome': 'Bem-vindo à Sua',
        'valentine-exp': 'Experiência de Dia dos Namorados',
        'lets-make-special': 'Qual é o seu nome?',
        'add-photo': 'Adicionar uma foto (opcional)',
        'upload-photo': '📷 Carregar Foto',
        'enter-name': 'Digite seu nome aqui...',
        'continue': 'Continuar',
        'or-crush': 'Ou o nome da sua paixão 😊',
        'days-until': 'Dias Até o Dia dos Namorados',
        'will-you': 'Você Será Meu',
        'valentine': 'Namorado(a)?',
        'important-question': 'Esta é a pergunta mais importante hoje ✨',
        'yes': 'Sim',
        'no': 'Não',
        'heart-explode': 'Você fez meu',
        'heart': 'coração explodir',
        'love-match': 'Compatibilidade:',
        'knew-yes': 'Eu sabia que você diria sim!',
        'happy-valentine': 'Feliz Dia dos Namorados',
        'best-thing': 'a melhor coisa que já me aconteceu',
        'save-moment': 'Salvar Este Momento',
        'share': 'Compartilhar',
        'record-message': 'Gravar Mensagem',
        'generate-qr': 'Gerar Código QR',
        'start-recording': 'Iniciar Gravação',
        'stop': 'Parar',
        'play': 'Reproduzir',
        'qr-title': 'Compartilhe Este Código QR',
        'qr-hint': 'Imprima ou compartilhe este código com seu Namorado(a)!',
        'click-music': 'Clique para Música',
        'song1': 'Piano Romântico',
        'song2': 'Jazz de Amor',
        'song3': 'Romance Clássico',
        'share-love': 'Compartilhe o Amor!',
        'copy-link': 'Copiar Link'
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
    
    // Update placeholder
    const nameInput = document.getElementById('nameInput');
    if (nameInput) {
        nameInput.placeholder = translations[lang]['enter-name'] || 'Enter your name here...';
    }
}

// Language selector event
document.getElementById('languageSelect').addEventListener('change', (e) => {
    changeLanguage(e.target.value);
});

// ========================================
// THEME SYSTEM (NEW)
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

// Load saved theme
const savedTheme = localStorage.getItem('valentine-theme');
if (savedTheme) {
    document.body.setAttribute('data-theme', savedTheme);
}

// Close theme options when clicking outside
document.addEventListener('click', (e) => {
    if (!themeBtn.contains(e.target) && !themeOptions.contains(e.target)) {
        themeOptions.classList.add('hidden');
    }
});

// ========================================
// SPARKLE CURSOR TRAIL (NEW)
// ========================================
const cursorCanvas = document.getElementById('cursorCanvas');
const cursorCtx = cursorCanvas.getContext('2d');
cursorCanvas.width = window.innerWidth;
cursorCanvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    cursorCanvas.width = window.innerWidth;
    cursorCanvas.height = window.innerHeight;
});

class Sparkle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 2;
        this.speedY = (Math.random() - 0.5) * 2;
        this.life = 1;
        this.decay = 0.02;
        this.color = `hsla(${Math.random() * 60 + 300}, 100%, 70%, ${this.life})`;
    }
    
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= this.decay;
    }
    
    draw() {
        cursorCtx.fillStyle = this.color;
        cursorCtx.beginPath();
        cursorCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        cursorCtx.fill();
    }
}

let sparkles = [];

// Only on desktop
if (window.innerWidth > 768) {
    document.addEventListener('mousemove', (e) => {
        for (let i = 0; i < 3; i++) {
            sparkles.push(new Sparkle(e.clientX, e.clientY));
        }
    });

    function animateSparkles() {
        cursorCtx.clearRect(0, 0, cursorCanvas.width, cursorCanvas.height);
        
        sparkles.forEach((sparkle, index) => {
            if (sparkle.life <= 0) {
                sparkles.splice(index, 1);
            } else {
                sparkle.update();
                sparkle.draw();
            }
        });
        
        requestAnimationFrame(animateSparkles);
    }

    animateSparkles();
}

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

let userName = '';
let noClickCount = 0;
let uploadedPhotoData = null;

// ========================================
// PHOTO UPLOAD (NEW)
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
// COUNTDOWN TIMER (NEW)
// ========================================
function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    let valentinesDay = new Date(currentYear, 1, 14); // Feb 14
    
    // If Valentine's Day has passed this year, show next year
    if (now > valentinesDay) {
        valentinesDay = new Date(currentYear + 1, 1, 14);
    }
    
    const diff = valentinesDay - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    document.getElementById('daysCount').textContent = days;
}

updateCountdown();
setInterval(updateCountdown, 60000); // Update every minute

// ========================================
// NAME INPUT FUNCTIONALITY
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
    
    for (let i = 0; i < 20; i++) {
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

// Rose Petals (NEW)
function createRosePetals() {
    const container = document.getElementById('petalsContainer');
    const petalEmojis = ['🌹', '🌺', '🌸', '💐', '🏵️'];
    
    for (let i = 0; i < 15; i++) {
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
// DODGING "NO" BUTTON (ENHANCED)
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
    "My grandma clicks faster than you 😂",
    "Error 404: No button not found 🤖",
    "This isn't a game... or is it? 🎮",
    "Resistance is futile! 👾",
    "The universe says YES! 🌟",
    "Even my cat knows the answer 🐱",
    "Plot twist: No isn't an opti
