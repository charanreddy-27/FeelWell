// +++++++++++++++++++++  LANDING PAGE ANIMATION ++++++++++++++++++++++++++

document.addEventListener('DOMContentLoaded', function() {
    // Initialize elements
    const girlIllustration = document.querySelector('.landing-illustration');
    const girlsShadow = document.querySelector('.shadow');
    
    // Scroll animation
    window.addEventListener('scroll', () => {
        let val = window.scrollY;
        
        if (girlIllustration) {
            girlIllustration.style.transform = `translateY(${val * 0.2}px)`;
        }
        
        if (girlsShadow && val < 170) {
            girlsShadow.style.width = `${val + 160}px`;
        }
    });
    
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
    
    // Card animations
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
            }
        });
    }, cardOptions);
    
    cards.forEach((card) => {
        cardObserver.observe(card);
    });
    
    // Small card animations
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
                }, delay);
                delay += 100;
            }
        });
    }, smallCardOptions);
    
    smallCards.forEach((card) => {
        smallCardObserver.observe(card);
    });
    
    // Reset animations on page top
    window.addEventListener('scroll', () => {
        if (window.pageYOffset === 0) {
            setTimeout(() => {
                cards.forEach((card) => {
                    card.classList.remove('appear');
                });
                
                smallCards.forEach((card) => {
                    card.classList.remove('appear');
                });
                
                // Re-trigger the observers
                cards.forEach((card) => {
                    cardObserver.observe(card);
                });
                
                smallCards.forEach((card) => {
                    smallCardObserver.observe(card);
                });
            }, 200);
        }
    });
    
    // Logo click for page reload
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
    
    // Attribution container in footer
    const attributeText = document.querySelector('.attribute-text');
    const attributeCont = document.querySelector('.actual-author-contribution-cont');
    const cross = document.querySelector('.cross');
    
    if (attributeText && attributeCont) {
        attributeText.addEventListener('click', () => {
            attributeCont.style.top = "50px";
            attributeCont.style.opacity = "1";
        });
    }
    
    if (cross && attributeCont) {
        cross.addEventListener('click', () => {
            attributeCont.style.top = "500px";
            attributeCont.style.opacity = "0";
        });
    }
});