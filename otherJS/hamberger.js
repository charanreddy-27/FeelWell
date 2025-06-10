//+++++++++++++++++++++++++++++++++HAMBURGER MENU+++++++++++++=++++++++++++++++++++++++

const hamburger = document.querySelector('.hamBurger');
const line1 = document.querySelector('.line1');
const line3 = document.querySelector('.line3');
const midLine1 = document.querySelector('.mid-line1');
const midLine2 = document.querySelector('.mid-line2');
const mobileNav = document.querySelector('#mobile-nav');
const mobileNavList = document.querySelectorAll('.mobile-view-list');
const body = document.body;

// Add animation delay to mobile nav items
mobileNavList.forEach((list, index) => {
    list.parentElement.style.setProperty('--i', index + 1);
});

// Toggle hamburger menu with enhanced animations
hamburger.addEventListener('click', () => {
    line1.classList.toggle('changetheline1');
    line3.classList.toggle('changetheline3');
    midLine1.classList.toggle('changeMidLine1');
    midLine2.classList.toggle('changeMidLine2');
    mobileNav.classList.toggle('show-nav');
    
    // Prevent scrolling when menu is open
    if (mobileNav.classList.contains('show-nav')) {
        body.style.overflow = 'hidden';
        
        // Animate each list item with delay
        mobileNavList.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, 100 * (index + 1));
        });
    } else {
        body.style.overflow = 'auto';
        
        // Reset animations when menu closes
        mobileNavList.forEach((item) => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-50px)';
        });
    }
});

// Close menu when clicking a link
mobileNavList.forEach((list) => {
    list.addEventListener('click', () => {
        mobileNav.classList.remove('show-nav');
        line1.classList.remove('changetheline1');
        line3.classList.remove('changetheline3');
        midLine1.classList.remove('changeMidLine1');
        midLine2.classList.remove('changeMidLine2');
        body.style.overflow = 'auto';
        
        // Reset animations when menu closes
        mobileNavList.forEach((item) => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-50px)';
        });
    });
});

// Add hover effect to hamburger
hamburger.addEventListener('mouseenter', () => {
    if (!mobileNav.classList.contains('show-nav')) {
        line1.style.width = '28px';
        line3.style.width = '28px';
    }
});

hamburger.addEventListener('mouseleave', () => {
    if (!mobileNav.classList.contains('show-nav')) {
        line1.style.width = '32px';
        line3.style.width = '32px';
    }
});