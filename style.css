/* ========================================
   ULTIMATE VALENTINE WEBSITE - PREMIUM CSS
   Features: 5 Themes, Rose Petals, Photo Upload,
   Love Calculator, Sparkle Cursor, Share Modal, etc.
   ======================================== */

/* ========================================
   CSS VARIABLES FOR THEMES
   ======================================== */
:root {
    --primary-gradient-start: #ffeef8;
    --primary-gradient-mid1: #ffd4e5;
    --primary-gradient-mid2: #ffb3d9;
    --primary-gradient-mid3: #ff9fcf;
    --primary-gradient-end: #ff8dc7;
    --accent-color: #ff6b9d;
    --accent-dark: #c44569;
    --text-primary: #2d2d2d;
    --text-secondary: #666;
    --box-bg: rgba(255, 255, 255, 0.95);
}

/* Theme: Red */
body[data-theme="red"] {
    --primary-gradient-start: #ffe5e5;
    --primary-gradient-mid1: #ffcccc;
    --primary-gradient-mid2: #ff9999;
    --primary-gradient-mid3: #ff6666;
    --primary-gradient-end: #ff3333;
    --accent-color: #ff0000;
    --accent-dark: #cc0000;
}

/* Theme: Purple */
body[data-theme="purple"] {
    --primary-gradient-start: #f3e5f5;
    --primary-gradient-mid1: #e1bee7;
    --primary-gradient-mid2: #ce93d8;
    --primary-gradient-mid3: #ba68c8;
    --primary-gradient-end: #ab47bc;
    --accent-color: #9c27b0;
    --accent-dark: #7b1fa2;
}

/* Theme: Blue */
body[data-theme="blue"] {
    --primary-gradient-start: #e3f2fd;
    --primary-gradient-mid1: #bbdefb;
    --primary-gradient-mid2: #90caf9;
    --primary-gradient-mid3: #64b5f6;
    --primary-gradient-end: #42a5f5;
    --accent-color: #2196f3;
    --accent-dark: #1976d2;
}

/* Theme: Dark */
body[data-theme="dark"] {
    --primary-gradient-start: #2d2d2d;
    --primary-gradient-mid1: #3d3d3d;
    --primary-gradient-mid2: #4d4d4d;
    --primary-gradient-mid3: #5d5d5d;
    --primary-gradient-end: #6d6d6d;
    --accent-color: #ff6b9d;
    --accent-dark: #c44569;
    --text-primary: #ffffff;
    --text-secondary: #cccccc;
    --box-bg: rgba(50, 50, 50, 0.95);
}

/* ========================================
   RESET & BASE STYLES
   ======================================== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    background: linear-gradient(135deg, 
        var(--primary-gradient-start) 0%, 
        var(--primary-gradient-mid1) 25%, 
        var(--primary-gradient-mid2) 50%, 
        var(--primary-gradient-mid3) 75%, 
        var(--primary-gradient-end) 100%
    );
    background-size: 400% 400%;
    animation: gradientShift 15s ease infinite;
    position: relative;
    cursor: none; /* For custom sparkle cursor */
}

@keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

/* ========================================
   LANGUAGE SELECTOR
   ======================================== */
.language-selector {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
}

.language-dropdown {
    padding: 10px 15px;
    border: 2px solid var(--accent-color);
    border-radius: 25px;
    background: var(--box-bg);
    color: var(--text-primary);
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.language-dropdown:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

/* ========================================
   THEME TOGGLE
   ======================================== */
.theme-toggle {
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 1000;
}

.theme-btn {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid var(--accent-color);
    background: var(--box-bg);
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.theme-btn:hover {
    transform: scale(1.1) rotate(15deg);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.theme-options {
    position: absolute;
    top: 60px;
    left: 0;
    background: var(--box-bg);
    border-radius: 15px;
    padding: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-width: 150px;
}

.theme-option {
    padding: 10px 15px;
    border: none;
    border-radius: 10px;
    background: transparent;
    color: var(--text-primary);
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: left;
}

.theme-option:hover {
    background: var(--accent-color);
    color: white;
    transform: translateX(5px);
}

/* ========================================
   SPARKLE CURSOR CANVAS
   ======================================== */
#cursorCanvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9999;
}

/* ========================================
   FLOATING HEARTS BACKGROUND
   ======================================== */
.hearts-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
    overflow: hidden;
}

.heart {
    position: absolute;
    font-size: 20px;
    opacity: 0;
    animation: float-up 8s ease-in infinite;
    will-change: transform, opacity;
}

@keyframes float-up {
    0% {
        transform: translateY(100vh) translateX(0) rotate(0deg);
        opacity: 0;
    }
    10% {
        opacity: 0.6;
    }
    90% {
        opacity: 0.6;
    }
    100% {
        transform: translateY(-100px) translateX(50px) rotate(360deg);
        opacity: 0;
    }
}

/* ========================================
   ROSE PETALS ANIMATION (NEW)
   ======================================== */
.petals-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 2;
    overflow: hidden;
}

.petal {
    position: absolute;
    font-size: 18px;
    opacity: 0;
    animation: fall-petal 12s linear infinite;
    will-change: transform, opacity;
}

@keyframes fall-petal {
    0% {
        transform: translateY(-100px) translateX(0) rotate(0deg);
        opacity: 0;
    }
    10% {
        opacity: 0.8;
    }
    90% {
        opacity: 0.6;
    }
    100% {
        transform: translateY(100vh) translateX(100px) rotate(720deg);
        opacity: 0;
    }
}

/* ========================================
   MAIN CONTAINER
   ======================================== */
.container {
    position: relative;
    z-index: 10;
    width: 90%;
    max-width: 650px;
    padding: 20px;
}

.content-box {
    background: var(--box-bg);
    backdrop-filter: blur(20px);
    border-radius: 35px;
    padding: 60px 45px;
    box-shadow: 
        0 25px 70px rgba(255, 105, 180, 0.35),
        0 0 0 1px rgba(255, 255, 255, 0.6),
        inset 0 1px 0 rgba(255, 255, 255, 0.9);
    text-align: center;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.content-box:hover {
    box-shadow: 
        0 30px 80px rgba(255, 105, 180, 0.45),
        0 0 0 1px rgba(255, 255, 255, 0.7),
        inset 0 1px 0 rgba(255, 255, 255, 1);
    transform: translateY(-8px);
}

/* ========================================
   TYPOGRAPHY
   ======================================== */
.main-title {
    font-family: 'Playfair Display', serif;
    font-size: 3.2rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 20px;
    line-height: 1.2;
}

.heart-icon {
    font-size: 4rem;
    display: inline-block;
    animation: pulse-heart 1.5s ease infinite;
}

.highlight {
    background: linear-gradient(45deg, var(--accent-color), var(--accent-dark), var(--accent-color));
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: inline-block;
    animation: gradient-text 3s ease infinite;
}

@keyframes gradient-text {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}

.subtitle {
    font-size: 1.15rem;
    color: var(--text-secondary);
    margin-bottom: 40px;
    font-weight: 400;
    letter-spacing: 0.5px;
    line-height: 1.6;
}

.hint-text {
    margin-top: 25px;
    font-size: 1rem;
    color: var(--accent-color);
    font-weight: 600;
    min-height: 30px;
    font-style: italic;
    transition: opacity 0.3s;
}

.hint-small {
    margin-top: 15px;
    font-size: 0.9rem;
    color: var(--text-secondary);
    font-weight: 300;
    font-style: italic;
}

/* ========================================
   PHOTO UPLOAD SECTION (NEW)
   ======================================== */
.photo-upload-container {
    margin: 30px 0;
}

.photo-preview {
    width: 150px;
    height: 150px;
    margin: 0 auto 15px;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid var(--accent-color);
    position: relative;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
}

.photo-preview:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.photo-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #ffe5f0, #ffd4e5);
    color: var(--accent-color);
}

.photo-icon {
    font-size: 3rem;
    margin-bottom: 5px;
}

.photo-placeholder p {
    font-size: 0.75rem;
    font-weight: 500;
}

#uploadedPhoto {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.btn-secondary {
    padding: 12px 30px;
    border: 2px solid var(--accent-color);
    border-radius: 50px;
    background: transparent;
    color: var(--accent-color);
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-secondary:hover {
    background: var(--accent-color);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(255, 107, 157, 0.3);
}

/* ========================================
   NAME INPUT SECTION
   ======================================== */
.input-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 30px;
}

.name-input {
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    padding: 18px 25px;
    border: 3px solid rgba(255, 107, 157, 0.3);
    border-radius: 50px;
    background: rgba(255, 255, 255, 0.9);
    color: var(--text-primary);
    text-align: center;
    transition: all 0.3s ease;
    outline: none;
    box-shadow: 0 5px 15px rgba(255, 107, 157, 0.1);
}

.name-input:focus {
    border-color: var(--accent-color);
    box-shadow: 0 8px 25px rgba(255, 107, 157, 0.3);
    transform: translateY(-2px);
}

.name-input::placeholder {
    color: #bbb;
    font-weight: 300;
}

/* ========================================
   COUNTDOWN TIMER (NEW)
   ======================================== */
.countdown-container {
    margin-bottom: 30px;
    padding: 20px;
    background: linear-gradient(135deg, rgba(255, 107, 157, 0.1), rgba(196, 69, 105, 0.1));
    border-radius: 20px;
    border: 2px solid rgba(255, 107, 157, 0.3);
}

.countdown-label {
    font-size: 0.9rem;
    color: var(--text-secondary);
    margin-bottom: 10px;
    font-weight: 500;
}

.countdown-display {
    font-family: 'Playfair Display', serif;
    font-size: 4rem;
    font-weight: 700;
    color: var(--accent-color);
    text-shadow: 0 4px 10px rgba(255, 107, 157, 0.3);
}

/* ========================================
   BUTTONS
   ======================================== */
.buttons-container {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
    min-height: 85px;
}

.btn {
    font-family: 'Poppins', sans-serif;
    font-size: 1.25rem;
    font-weight: 600;
    padding: 20px 55px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
    position: relative;
    overflow: hidden;
    letter-spacing: 0.5px;
}

.btn::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.4);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
}

.btn:hover::before {
    width: 350px;
    height: 350px;
}

.btn-primary,
.btn-yes {
    background: linear-gradient(135deg, var(--accent-color) 0%, var(--accent-dark) 100%);
    color: white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.btn-primary:hover,
.btn-yes:hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 18px 45px rgba(255, 107, 157, 0.5);
}

.btn-primary:active,
.btn-yes:active {
    transform: translateY(-2px) scale(1.02);
}

.btn-no {
    background: linear-gradient(135deg, #e8e8e8 0%, #c0c0c0 100%);
    color: #666;
    transition: all 0.15s ease;
}

.btn-no:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}

/* ========================================
   SUCCESS SCREEN - PHOTO DISPLAY (NEW)
   ======================================== */
.success-photo-container {
    margin-bottom: 30px;
}

.heart-frame {
    width: 200px;
    height: 200px;
    margin: 0 auto;
    position: relative;
    animation: float-gentle 3s ease-in-out infinite;
}

.heart-frame::before {
    content: '💖';
    position: absolute;
    font-size: 220px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    opacity: 0.3;
}

.heart-frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    position: relative;
    z-index: 2;
    border: 5px solid var(--accent-color);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

@keyframes float-gentle {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

/* ========================================
   LOVE CALCULATOR (NEW)
   ======================================== */
.love-calculator {
    margin: 30px 0;
    padding: 25px;
    background: linear-gradient(135deg, rgba(255, 107, 157, 0.15), rgba(196, 69, 105, 0.15));
    border-radius: 20px;
    border: 2px solid rgba(255, 107, 157, 0.3);
}

.calculator-display {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 15px;
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--text-primary);
}

.calc-icon {
    font-size: 2rem;
    animation: pulse-heart 1.5s ease infinite;
}

.compatibility-score {
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    color: var(--accent-color);
    font-weight: 700;
    animation: count-up 2s ease-out;
}

@keyframes count-up {
    from { transform: scale(0); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
}

.compatibility-bar {
    width: 100%;
    height: 15px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    overflow: hidden;
    position: relative;
}

.compatibility-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--accent-color), var(--accent-dark));
    border-radius: 10px;
    width: 0%;
    animation: fill-bar 2s ease-out forwards;
    box-shadow: 0 0 10px var(--accent-color);
}

@keyframes fill-bar {
    to { width: 98%; }
}

/* ========================================
   LOVE MESSAGE GENERATOR (NEW)
   ======================================== */
.love-message-box {
    margin: 25px 0;
    padding: 20px 25px;
    background: rgba(255, 255, 255, 0.5);
    border-left: 4px solid var(--accent-color);
    border-radius: 10px;
    font-style: italic;
}

.love-message {
    font-size: 1.05rem;
    color: var(--text-secondary);
    line-height: 1.7;
    font-family: 'Georgia', serif;
}

/* ========================================
   ACTION BUTTONS (NEW)
   ======================================== */
.action-buttons {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin: 30px 0;
}

.btn-action {
    padding: 15px 25px;
    border: 2px solid var(--accent-color);
    border-radius: 15px;
    background: transparent;
    color: var(--accent-color);
    font-family: 'Poppins', sans-serif;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.btn-action:hover {
    background: var(--accent-color);
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(255, 107, 157, 0.4);
}

/* ========================================
   VOICE RECORDER (NEW)
   ======================================== */
.voice-recorder {
    margin-top: 25px;
    padding: 25px;
    background: rgba(255, 107, 157, 0.1);
    border-radius: 20px;
    border: 2px dashed var(--accent-color);
}

.recorder-controls {
    display: flex;
    gap: 15px;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 15px;
}

.record-btn,
.stop-btn,
.play-btn {
    padding: 12px 25px;
    border: none;
    border-radius: 25px;
    font-family: 'Poppins', sans-serif;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.record-btn {
    background: linear-gradient(135deg, #ff4444, #cc0000);
    color: white;
}

.stop-btn {
    background: linear-gradient(135deg, #666, #333);
    color: white;
}

.play-btn {
    background: linear-gradient(135deg, #44ff44, #00cc00);
    color: white;
}

.record-btn:hover,
.stop-btn:hover,
.play-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.recording-status {
    text-align: center;
    color: var(--accent-color);
    font-weight: 600;
    min-height: 25px;
}

#audioPlayback {
    width: 100%;
    margin-top: 15px;
    border-radius: 25px;
}

/* ========================================
   QR CODE CONTAINER (NEW)
   ======================================== */
.qr-code-container {
    margin-top: 30px;
    padding: 30px;
    background: white;
    border-radius: 20px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}

.qr-code-container h3 {
    color: var(--accent-color);
    font-family: 'Playfair Display', serif;
    margin-bottom: 20px;
}

#qrcode {
    display: flex;
    justify-content: center;
    padding: 20px;
}

.qr-hint {
    margin-top: 15px;
    font-size: 0.9rem;
    color: var(--text-secondary);
    font-style: italic;
}

/* ========================================
   SHARE MODAL (NEW)
   ======================================== */
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
}

.modal-content {
    background: var(--box-bg);
    border-radius: 30px;
    padding: 40px;
    max-width: 500px;
    width: 90%;
    position: relative;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    animation: modal-appear 0.3s ease-out;
}

@keyframes modal-appear {
    from {
        opacity: 0;
        transform: scale(0.8);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

.close-modal {
    position: absolute;
    top: 15px;
    right: 20px;
    font-size: 2rem;
    color: var(--text-secondary);
    cursor: pointer;
    transition: all 0.3s ease;
}

.close-modal:hover {
    color: var(--accent-color);
    transform: rotate(90deg);
}

.modal-content h2 {
    font-family: 'Playfair Display', serif;
    color: var(--accent-color);
    margin-bottom: 20px;
}

.share-text {
    color: var(--text-secondary);
    margin-bottom: 25px;
    line-height: 1.6;
}

.share-b
