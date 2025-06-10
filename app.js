// +++++++++++++++++++++  LANDING PAGE ANIMATION ++++++++++++++++++++++++++

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll) library with optimized settings
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true, // Set to true for better performance
        mirror: false, // Set to false for better performance
        disable: 'mobile' // Disable on mobile for better performance
    });
    // Initialize elements
    const girlIllustration = document.querySelector('.landing-illustration');
    const girlsShadow = document.querySelector('.shadow');
    const header = document.querySelector('.header');
    const navItems = document.querySelectorAll('.nav-ul li');
    const mobileNavItems = document.querySelectorAll('.mobile-view-list');
    const exploreBtn = document.querySelector('.explore-btn');
    const blogBtn = document.querySelector('.blog-btn');
    
    // Add staggered animation delay to nav items
    navItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            item.style.transition = 'all 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 100 * (index + 1));
    });
    
    // Add data-index attribute to mobile nav items for staggered animations
    mobileNavItems.forEach((item, index) => {
        item.parentElement.style.setProperty('--i', index + 1);
    });
    
    // Header scroll effect and back-to-top button
    const backToTopBtn = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(247, 250, 252, 0.9)';
            header.style.backdropFilter = 'blur(10px)';
            header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            
            // Show back-to-top button
            if (backToTopBtn) {
                backToTopBtn.classList.add('active');
            }
        } else {
            header.style.background = 'transparent';
            header.style.backdropFilter = 'blur(10px)';
            header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
            
            // Hide back-to-top button
            if (backToTopBtn) {
                backToTopBtn.classList.remove('active');
            }
        }
    });
    
    // Parallax effect for illustration
    window.addEventListener('scroll', () => {
        let val = window.scrollY;
        
        if (girlIllustration) {
            girlIllustration.style.transform = `translateY(${val * 0.2}px)`;
        }
        
        if (girlsShadow && val < 170) {
            girlsShadow.style.width = `${val + 160}px`;
        }
    });
    
    // Mouse move parallax effect for illustration
    const mainSection = document.querySelector('.main');
    if (mainSection && girlIllustration) {
        mainSection.addEventListener('mousemove', (e) => {
            const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
            const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
            girlIllustration.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    }
    
    // Add pulse animation to explore button
    if (exploreBtn) {
        exploreBtn.classList.add('pulse');
    }
    
    // PAGE LINKING FUNCTIONALITY
    const card1 = document.querySelector('.card-1');
    const card2 = document.querySelector('.card-2');
    const card3 = document.querySelector('.card-3');
    const card4 = document.querySelector('.card-4');
    const chatBotPageTakingBtn = document.querySelector('#chat-bot-page-portal-btn');
    
    if (card1) {
        card1.addEventListener('click', () => {
            window.location.href = "otherHTML/food.html";
        });
    }
    
    if (card2) {
        card2.addEventListener('click', () => {
            window.location.href = "otherHTML/exercise.html";
        });
    }
    
    if (card3) {
        card3.addEventListener('click', () => {
            window.location.href = "#SECTION-3";
        });
    }
    
    if (card4) {
        card4.addEventListener('click', () => {
            window.location.href = "otherJS/carGame/games.html";
        });
    }
    
    if (chatBotPageTakingBtn) {
        chatBotPageTakingBtn.addEventListener('click', () => {
            window.location.href = "otherHTML/chatBot.html";
        });
    }
    
    // +++++++++++++++++++++++++++ ANIMATION EFFECTS
    
    // Card animations with improved effects
    const cards = document.querySelectorAll('.card');
    
    const cardOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                // Add a slight rotation to each card for a more dynamic appearance
                const randomRotation = Math.random() * 2 - 1; // Random value between -1 and 1
                entry.target.style.transform = `translateY(0) rotate(${randomRotation}deg)`;
            }
        });
    }, cardOptions);
    
    cards.forEach((card) => {
        cardObserver.observe(card);
    });
    
    // Small card animations with improved effects
    const smallCards = document.querySelectorAll('.more-card');
    
    const smallCardOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0
    };
    
    const smallCardObserver = new IntersectionObserver((entries, observer) => {
        let delay = 100;
        
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('appear');
                    // Add a slight bounce effect
                    entry.target.style.animation = 'bounce 0.5s ease';
                }, delay);
                delay += 100;
            }
        });
    }, smallCardOptions);
    
    smallCards.forEach((card) => {
        smallCardObserver.observe(card);
    });
    
    // Section 3 animations
    const section3 = document.querySelector('.section-3-cont');
    const talkPageContent = document.querySelector('.talk-page-content');
    const chatBotImg = document.querySelector('.chat-bot-img');
    
    const section3Options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };
    
    const section3Observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (talkPageContent) {
                    talkPageContent.style.opacity = '0';
                    talkPageContent.style.transform = 'translateX(-30px)';
                    setTimeout(() => {
                        talkPageContent.style.transition = 'all 0.8s ease';
                        talkPageContent.style.opacity = '1';
                        talkPageContent.style.transform = 'translateX(0)';
                    }, 200);
                }
                if (chatBotImg) {
                    chatBotImg.style.opacity = '0';
                    chatBotImg.style.transform = 'translateX(30px)';
                    setTimeout(() => {
                        chatBotImg.style.transition = 'all 0.8s ease';
                        chatBotImg.style.opacity = '1';
                        chatBotImg.style.transform = 'translateX(0)';
                    }, 500);
                }
            }
        });
    }, section3Options);
    
    if (section3) {
        section3Observer.observe(section3);
    }
    
    // Reset animations on page top
    window.addEventListener('scroll', () => {
        if (window.pageYOffset === 0) {
            setTimeout(() => {
                cards.forEach((card) => {
                    card.classList.remove('appear');
                    card.style.transform = '';
                });
                
                smallCards.forEach((card) => {
                    card.classList.remove('appear');
                    card.style.animation = '';
                });
                
                // Re-trigger the observers
                cards.forEach((card) => {
                    cardObserver.observe(card);
                });
                
                smallCards.forEach((card) => {
                    smallCardObserver.observe(card);
                });
                
                if (section3) {
                    section3Observer.observe(section3);
                }
            }, 200);
        }
    });
    
    // Logo click for page reload with smooth scroll
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', () => {
            window.location.href = "#HOME";
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Back to top button click handler
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Attribution container in footer with improved animation
    const attributeText = document.querySelector('.attribute-text');
    const attributeCont = document.querySelector('.actual-author-contribution-cont');
    const cross = document.querySelector('.cross');
    
    if (attributeText && attributeCont) {
        attributeText.addEventListener('click', () => {
            attributeCont.style.top = "50px";
            attributeCont.style.opacity = "1";
            attributeCont.style.transform = "translateX(-50%) scale(1)";
            attributeCont.style.transition = "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
        });
    }
    
    if (cross && attributeCont) {
        cross.addEventListener('click', () => {
            attributeCont.style.top = "500px";
            attributeCont.style.opacity = "0";
            attributeCont.style.transform = "translateX(-50%) scale(0.8)";
        });
    }
    
    // Add bounce animation
    document.head.insertAdjacentHTML('beforeend', `
        <style>
            @keyframes bounce {
                0%, 100% {
                    transform: translateY(0);
                }
                50% {
                    transform: translateY(-10px);
                }
            }
        </style>
    `);
});