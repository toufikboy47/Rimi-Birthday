// Birthday Celebration JavaScript for Rimi

document.addEventListener('DOMContentLoaded', function() {
    initializeCelebration();
    initializeLetters();
    initializeGallery();
    initializeBackgroundAnimations();
    initializeConfetti();
    initializeMusicPlayer();
});

// Welcome Overlay
function initializeCelebration() {
    const welcomeOverlay = document.getElementById('welcomeOverlay');
    const welcomeBtn = document.getElementById('welcomeBtn');
    
    if (welcomeBtn && welcomeOverlay) {
        welcomeBtn.addEventListener('click', function() {
            welcomeOverlay.classList.add('hidden');
            setTimeout(() => {
                startConfetti();
                startBirthdayMusic();
                showAllahWishes();
            }, 500);
        });
    }
    
    // Allah Wishes Popup
    const allahWishesPopup = document.getElementById('allahWishesPopup');
    const closeAllahBtn = document.getElementById('closeAllahBtn');
    
    window.showAllahWishes = function() {
        if (allahWishesPopup) {
            allahWishesPopup.classList.add('show');
        }
    };
    
    if (closeAllahBtn && allahWishesPopup) {
        closeAllahBtn.addEventListener('click', function() {
            allahWishesPopup.classList.remove('show');
        });
    }
}

// Letters Functionality
function initializeLetters() {
    const letterCovers = document.querySelectorAll('.letter-cover');
    const openedLetters = new Set();
    
    letterCovers.forEach(cover => {
        cover.addEventListener('click', function() {
            const letterNum = this.dataset.letter;
            const letterContent = document.getElementById('letterContent' + letterNum);
            
            if (letterContent) {
                this.classList.add('opened');
                letterContent.classList.add('show');
                openedLetters.add(letterNum);
                
                // Check if all 5 letters are opened
                if (openedLetters.size === 5) {
                    setTimeout(() => {
                        showAllahWishes();
                    }, 1500);
                }
            }
        });
    });
}

// Gallery Functionality
function initializeGallery() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter gallery items
            const filter = this.dataset.filter;
            
            galleryItems.forEach((item, index) => {
                item.style.animation = 'none';
                item.offsetHeight; // Trigger reflow
                
                if (filter === 'all') {
                    item.classList.remove('hidden');
                    item.style.animation = `fadeInScale 0.5s ease forwards ${index * 0.1}s`;
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
    
    // Add hover effects to gallery items
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });
}

// Background Animations
function initializeBackgroundAnimations() {
    createFloatingHearts();
    createStars();
    createPetals();
}

// Create floating hearts
function createFloatingHearts() {
    const container = document.getElementById('heartsContainer');
    if (!container) return;
    
    const hearts = ['💕', '💖', '💗', '💓', '💝', '❤️'];
    const numHearts = 15;
    
    for (let i = 0; i < numHearts; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (12 + Math.random() * 8) + 's';
            heart.style.animationDelay = Math.random() * 5 + 's';
            container.appendChild(heart);
            
            // Remove heart after animation
            setTimeout(() => {
                heart.remove();
            }, 20000);
        }, i * 800);
    }
    
    // Keep adding hearts periodically
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (12 + Math.random() * 8) + 's';
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 20000);
    }, 3000);
}

// Create twinkling stars
function createStars() {
    const container = document.getElementById('starsContainer');
    if (!container) return;
    
    const numStars = 30;
    
    for (let i = 0; i < numStars; i++) {
        setTimeout(() => {
            const star = document.createElement('div');
            star.className = 'star';
            star.innerHTML = '✨';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDuration = (4 + Math.random() * 4) + 's';
            star.style.animationDelay = Math.random() * 5 + 's';
            container.appendChild(star);
            
            setTimeout(() => {
                star.remove();
            }, 12000);
        }, i * 500);
    }
    
    // Keep adding stars periodically
    setInterval(() => {
        const star = document.createElement('div');
        star.className = 'star';
        star.innerHTML = '✨';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDuration = (4 + Math.random() * 4) + 's';
        container.appendChild(star);
        
        setTimeout(() => {
            star.remove();
        }, 10000);
    }, 2000);
}

// Create falling petals
function createPetals() {
    const container = document.getElementById('petalsContainer');
    if (!container) return;
    
    const petals = ['🌸', '🌺', '🌷', '🌹', '💐', '🪷'];
    const numPetals = 12;
    
    for (let i = 0; i < numPetals; i++) {
        setTimeout(() => {
            const petal = document.createElement('div');
            petal.className = 'petal';
            petal.innerHTML = petals[Math.floor(Math.random() * petals.length)];
            petal.style.left = Math.random() * 100 + '%';
            petal.style.animationDuration = (12 + Math.random() * 8) + 's';
            petal.style.animationDelay = Math.random() * 5 + 's';
            container.appendChild(petal);
            
            setTimeout(() => {
                petal.remove();
            }, 25000);
        }, i * 1200);
    }
    
    // Keep adding petals periodically
    setInterval(() => {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.innerHTML = petals[Math.floor(Math.random() * petals.length)];
        petal.style.left = Math.random() * 100 + '%';
        petal.style.animationDuration = (12 + Math.random() * 8) + 's';
        container.appendChild(petal);
        
        setTimeout(() => {
            petal.remove();
        }, 20000);
    }, 4000);
}

// Confetti functionality
function initializeConfetti() {
    // Will be called when celebration starts
}

function startConfetti() {
    const container = document.getElementById('confettiContainer');
    if (!container) return;
    
    const colors = ['#ff8fab', '#ffb3c6', '#ffccd5', '#ffe5ec', '#c9184a', '#ff6600', '#ffcc00'];
    const shapes = ['●', '■', '▲', '★', '♦'];
    const numConfetti = 150;
    
    for (let i = 0; i < numConfetti; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confetti.style.width = (5 + Math.random() * 10) + 'px';
            confetti.style.height = (5 + Math.random() * 10) + 'px';
            confetti.innerHTML = shapes[Math.floor(Math.random() * shapes.length)];
            confetti.style.color = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.fontSize = (8 + Math.random() * 8) + 'px';
            confetti.style.display = 'flex';
            confetti.style.alignItems = 'center';
            confetti.style.justifyContent = 'center';
            confetti.style.animationDuration = (3 + Math.random() * 4) + 's';
            container.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 8000);
        }, i * 30);
    }
    
    // Keep adding confetti for a longer period
    let additionalConfetti = 0;
    const confettiInterval = setInterval(() => {
        if (additionalConfetti > 50) {
            clearInterval(confettiInterval);
            return;
        }
        
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.width = (5 + Math.random() * 10) + 'px';
        confetti.style.height = (5 + Math.random() * 10) + 'px';
        confetti.style.animationDuration = (3 + Math.random() * 4) + 's';
        container.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 8000);
        
        additionalConfetti++;
    }, 200);
}

// Add smooth scroll behavior for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation to elements when they come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements that need animation
document.querySelectorAll('.wish-card, .letter-wrapper, .timeline-item, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add click sound effect (optional - can be enabled by uncommenting)
function playCelebrationSound() {
    // Create a simple beep sound using Web Audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    // Create oscillator for celebration sound
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Play multiple notes for a celebration melody
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    
    notes.forEach((freq, index) => {
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();
        
        osc.connect(gain);
        gain.connect(audioContext.destination);
        
        osc.type = 'sine';
        osc.frequency.value = freq;
        
        gain.gain.setValueAtTime(0.1, audioContext.currentTime + index * 0.15);
        gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + index * 0.15 + 0.3);
        
        osc.start(audioContext.currentTime + index * 0.15);
        osc.stop(audioContext.currentTime + index * 0.15 + 0.3);
    });
}

// Add celebration sound on welcome button click
const welcomeBtn = document.getElementById('welcomeBtn');
if (welcomeBtn) {
    welcomeBtn.addEventListener('click', function() {
        playCelebrationSound();
    });
}

// Add hover sound to letters (optional)
document.querySelectorAll('.letter-cover').forEach(letter => {
    letter.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
    });
    
    letter.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Add click ripple effect to buttons
document.querySelectorAll('.welcome-btn, .filter-btn, .close-allah-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.5)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.pointerEvents = 'none';
        
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = e.clientX - rect.left - size / 2 + 'px';
        ripple.style.top = e.clientY - rect.top - size / 2 + 'px';
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Music Player
function initializeMusicPlayer() {
    const musicBtn = document.getElementById('musicBtn');
    const musicIcon = document.getElementById('musicIcon');
    const birthdayAudio = document.getElementById('birthdayAudio');
    let isPlaying = false;
    
    if (musicBtn && birthdayAudio) {
        musicBtn.addEventListener('click', function() {
            if (isPlaying) {
                birthdayAudio.pause();
                musicIcon.textContent = '🎵';
                musicBtn.classList.remove('playing');
                isPlaying = false;
            } else {
                birthdayAudio.play().catch(function(error) {
                    console.log('Music playback requires user interaction first. Click the button to play!');
                });
                musicIcon.textContent = '🎶';
                musicBtn.classList.add('playing');
                isPlaying = true;
            }
        });
        
        // Update icon when music ends
        birthdayAudio.addEventListener('ended', function() {
            if (isPlaying) {
                musicIcon.textContent = '🎵';
                musicBtn.classList.remove('playing');
                isPlaying = false;
            }
        });
    }
}

// Start birthday music automatically
function startBirthdayMusic() {
    const birthdayAudio = document.getElementById('birthdayAudio');
    const musicIcon = document.getElementById('musicIcon');
    const musicBtn = document.getElementById('musicBtn');
    
    if (birthdayAudio) {
        birthdayAudio.volume = 0.5;
        birthdayAudio.play().then(function() {
            if (musicIcon) musicIcon.textContent = '🎶';
            if (musicBtn) musicBtn.classList.add('playing');
        }).catch(function(error) {
            console.log('Auto-play was prevented. User can click the music button to play.');
        });
    }
}

// Console welcome message
console.log('%c🎂 Happy Birthday Rimi! 🎂', 'font-size: 30px; font-weight: bold; color: #ff8fab;');
console.log('%cMade with love 💕', 'font-size: 16px; color: #c9184a;');
