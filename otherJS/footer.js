// footer.js - Implements the common footer across all pages

document.addEventListener('DOMContentLoaded', function() {
    // Get the footer container
    const footerContainer = document.querySelector('a[id="FOOTER"]');
    
    if (footerContainer) {
        // Create the footer HTML
        const footerHTML = `
        <div class="footer">
            <div class="footer-floating-icons-container">
                <!-- Floating icons will be added via JavaScript -->
            </div>
            
            <div class="footer-content-container">
                <div class="footer-heading-container">
                    <h2 class="footer-heading">Let's <span class="accent-text">Connect</span></h2>
                    <div class="heading-underline"></div>
                </div>
                
                <div class="footer-main-content">
                    <div class="contact-form-container" data-aos="fade-right" data-aos-duration="800">
                        <form class="contact-form">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" id="name" placeholder="Your name" required>
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" id="email" placeholder="Your email" required>
                            </div>
                            <div class="form-group">
                                <label for="message">Message</label>
                                <textarea id="message" placeholder="Your message" rows="5" required></textarea>
                            </div>
                            <button type="submit" class="submit-btn">
                                <span>Send Message</span>
                                <i class="fas fa-paper-plane"></i>
                            </button>
                        </form>
                    </div>
                    
                    <div class="contact-info-container" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
                        <div class="social-links-container">
                            <h3>Connect With Me</h3>
                            <div class="social-links">
                                <a href="https://github.com/charanreddy-27" target="_blank" class="social-link">
                                    <i class="fab fa-github"></i>
                                    <span>GitHub</span>
                                </a>
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=charanreddychanda@gmail.com" target="_blank" class="social-link">
                                    <i class="far fa-envelope"></i>
                                    <span>Email</span>
                                </a>
                                <a href="https://www.linkedin.com/in/chandacharanreddy/" target="_blank" class="social-link">
                                    <i class="fab fa-linkedin"></i>
                                    <span>LinkedIn</span>
                                </a>
                            </div>
                        </div>
                        
                        <div class="contact-details">
                            <h3>About FeelWell</h3>
                            <p>FeelWell is dedicated to helping you improve your mental health through various activities, resources, and support.</p>
                            <p>Feel free to reach out if you have any questions or suggestions!</p>
                        </div>
                        
                        <div class="attribute-container">
                            <button class="attribute-btn">Resource Credits</button>
                            <div class="attribute-popup">
                                <div class="attribute-popup-header">
                                    <h4>Attribution to Resources</h4>
                                    <i class="fas fa-times attribute-close"></i>
                                </div>
                                <div class="attribute-popup-content">
                                    <p>Icons and images used in this project are from:</p>
                                    <ul>
                                        <li>Icons by <a href="https://www.freepik.com" target="_blank">Freepik</a> from <a href="https://www.flaticon.com/" target="_blank">Flaticon</a></li>
                                        <li>Icons by <a href="https://www.flaticon.com/authors/iconixar" target="_blank">iconixar</a> from <a href="https://www.flaticon.com/" target="_blank">Flaticon</a></li>
                                        <li>Icons by <a href="https://www.flaticon.com/authors/smashicons" target="_blank">Smashicons</a> from <a href="https://www.flaticon.com/" target="_blank">Flaticon</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="footer-bottom">
                <div class="footer-logo-container">
                    <h2 class="logo footer-logo">FeelWell.</h2>
                </div>
                <p class="copyright">© <span id="current-year"></span> FeelWell. Take care of your mental health.</p>
            </div>
        </div>
        
        <!-- Back to top button -->
        <a href="#HOME" class="back-to-top" id="back-to-top">
            <i class="fas fa-arrow-up"></i>
        </a>`;
        
        // Insert the footer HTML after the footer anchor
        footerContainer.insertAdjacentHTML('afterend', footerHTML);
        
        // Set current year in copyright
        const currentYearElement = document.getElementById('current-year');
        if (currentYearElement) {
            currentYearElement.textContent = new Date().getFullYear();
        }
        
        // Create floating icons in the footer
        const footerIconsContainer = document.querySelector('.footer-floating-icons-container');
        if (footerIconsContainer) {
            // Define icon classes to use
            const iconClasses = [
                'fas fa-brain',
                'fas fa-heart',
                'fas fa-smile',
                'fas fa-comment',
                'fas fa-running',
                'fas fa-apple-alt',
                'fas fa-sun',
                'fas fa-water',
                'fas fa-leaf',
                'fas fa-moon',
                'fas fa-seedling',
                'fas fa-cloud',
                'fas fa-spa',
                'fas fa-heartbeat',
                'fas fa-hands-helping'
            ];
            
            // Create 15 random floating icons
            for (let i = 0; i < 15; i++) {
                const icon = document.createElement('i');
                // Random icon from the array
                icon.className = `footer-floating-icon ${iconClasses[i % iconClasses.length]}`;
                
                // Random position, size, opacity and rotation
                const top = Math.random() * 100;
                const left = Math.random() * 100;
                const size = Math.random() * 25 + 15; // Between 15px and 40px
                const opacity = Math.random() * 0.15 + 0.05; // Between 0.05 and 0.2
                const rotation = Math.random() * 360;
                
                // Apply styles
                icon.style.top = `${top}%`;
                icon.style.left = `${left}%`;
                icon.style.fontSize = `${size}px`;
                icon.style.opacity = opacity;
                icon.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
                
                // Add animation with random delay
                const delay = Math.random() * 5;
                const duration = 3 + Math.random() * 4; // Between 3 and 7 seconds
                icon.style.animation = `floatIcon ${duration}s ease-in-out ${delay}s infinite`;
                
                // Add to container
                footerIconsContainer.appendChild(icon);
            }
        }
        
        // Animate footer heading
        const footerHeading = document.querySelector('.footer-heading');
        const headingUnderline = document.querySelector('.heading-underline');
        
        if (footerHeading && headingUnderline) {
            // Create intersection observer for footer heading
            const footerHeadingObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Animate the heading underline
                        headingUnderline.style.animation = 'underlineExpand 0.8s ease-out forwards 0.5s';
                        
                        // Animate each letter in the heading
                        const headingText = footerHeading.textContent;
                        footerHeading.textContent = '';
                        
                        // Split the text and create spans for each letter
                        [...headingText].forEach((letter, index) => {
                            const span = document.createElement('span');
                            span.textContent = letter;
                            span.style.display = 'inline-block';
                            span.style.opacity = '0';
                            span.style.transform = 'translateY(20px)';
                            span.style.animation = `letterFadeIn 0.5s forwards ${0.05 * index}s`;
                            footerHeading.appendChild(span);
                        });
                        
                        // Unobserve after animation
                        footerHeadingObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            footerHeadingObserver.observe(footerHeading);
        }
        
        // Contact form animation and functionality
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form values
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const message = document.getElementById('message').value;
                
                // Simple validation
                if (!name || !email || !message) {
                    alert('Please fill in all fields');
                    return;
                }
                
                // Show success message (in real app, you'd send this data to a server)
                const submitBtn = contactForm.querySelector('.submit-btn');
                const originalBtnText = submitBtn.innerHTML;
                
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                submitBtn.style.backgroundColor = '#2ecc71';
                
                // Reset form after delay
                setTimeout(() => {
                    contactForm.reset();
                    submitBtn.innerHTML = originalBtnText;
                    submitBtn.style.backgroundColor = '';
                }, 3000);
            });
        }
        
        // Attribute popup functionality
        const attributeBtn = document.querySelector('.attribute-btn');
        const attributePopup = document.querySelector('.attribute-popup');
        const attributeClose = document.querySelector('.attribute-close');
        
        if (attributeBtn && attributePopup && attributeClose) {
            attributeBtn.addEventListener('click', () => {
                attributePopup.classList.add('active');
            });
            
            attributeClose.addEventListener('click', () => {
                attributePopup.classList.remove('active');
            });
            
            // Close popup when clicking outside
            window.addEventListener('click', (e) => {
                if (e.target === attributePopup) {
                    attributePopup.classList.remove('active');
                }
            });
        }
        
        // Back to top button functionality
        const backToTopBtn = document.getElementById('back-to-top');
        if (backToTopBtn) {
            // Show/hide back to top button based on scroll position
            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                    backToTopBtn.classList.add('active');
                } else {
                    backToTopBtn.classList.remove('active');
                }
            });
            
            // Scroll to top when clicked
            backToTopBtn.addEventListener('click', (e) => {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }
}); 