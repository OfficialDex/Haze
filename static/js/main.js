// HAZE BOT Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for anchor links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add shadow when scrolled
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Hide/show navbar on scroll (optional - uncomment if desired)
        /*
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        */
        
        lastScrollTop = scrollTop;
    });
    
    // Feature cards hover effect enhancement
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Animate stats when they come into view
    const animateStats = function() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const finalValue = target.textContent;
                    
                    // Extract number and suffix
                    const match = finalValue.match(/(\d+(?:\.\d+)?)(.*)/);
                    if (match) {
                        const number = parseFloat(match[1]);
                        const suffix = match[2];
                        
                        // Animate the number
                        let current = 0;
                        const increment = number / 50;
                        const timer = setInterval(() => {
                            current += increment;
                            if (current >= number) {
                                current = number;
                                clearInterval(timer);
                            }
                            target.textContent = Math.floor(current) + suffix;
                        }, 40);
                    }
                    
                    observer.unobserve(target);
                }
            });
        }, { threshold: 0.5 });
        
        statNumbers.forEach(stat => {
            observer.observe(stat);
        });
    };
    
    // Initialize stats animation
    animateStats();
    
    // Command showcase interaction
    const commandItems = document.querySelectorAll('.command-item');
    commandItems.forEach(item => {
        item.addEventListener('click', function() {
            // Add click effect
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // Copy command to clipboard
            const codeElement = this.querySelector('code');
            if (codeElement && navigator.clipboard) {
                navigator.clipboard.writeText(codeElement.textContent).then(() => {
                    // Show temporary feedback
                    const originalText = codeElement.textContent;
                    codeElement.textContent = 'Copied!';
                    codeElement.style.background = 'rgba(0, 255, 0, 0.1)';
                    
                    setTimeout(() => {
                        codeElement.textContent = originalText;
                        codeElement.style.background = 'rgba(255, 0, 0, 0.1)';
                    }, 1000);
                });
            }
        });
    });
    
    // Add dynamic particle effect to hero section
    const createParticles = function() {
        const heroSection = document.querySelector('.hero-section');
        if (!heroSection) return;
        
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 2px;
                height: 2px;
                background: rgba(255, 0, 0, 0.5);
                border-radius: 50%;
                pointer-events: none;
                animation: float-particle ${3 + Math.random() * 4}s infinite linear;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                opacity: ${0.3 + Math.random() * 0.4};
            `;
            heroSection.appendChild(particle);
        }
        
        // Add CSS animation for particles
        if (!document.querySelector('#particle-styles')) {
            const style = document.createElement('style');
            style.id = 'particle-styles';
            style.textContent = `
                @keyframes float-particle {
                    0% { transform: translate(0, 0) rotate(0deg); }
                    33% { transform: translate(30px, -30px) rotate(120deg); }
                    66% { transform: translate(-20px, 20px) rotate(240deg); }
                    100% { transform: translate(0, 0) rotate(360deg); }
                }
            `;
            document.head.appendChild(style);
        }
    };
    
    // Initialize particles with delay
    setTimeout(createParticles, 1000);
    
    // Add loading states for buttons
    const addToServerButtons = document.querySelectorAll('a[href*="discord.com"]');
    addToServerButtons.forEach(button => {
        button.addEventListener('click', function() {
            const originalContent = this.innerHTML;
            this.innerHTML = '<span class="loading"></span> Redirecting...';
            this.style.pointerEvents = 'none';
            
            // Reset after a delay (in case user comes back)
            setTimeout(() => {
                this.innerHTML = originalContent;
                this.style.pointerEvents = 'auto';
            }, 3000);
        });
    });
    
    // Easter egg - Konami code
    let konamiCode = [];
    const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA
    
    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.keyCode);
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
            // Easter egg activated!
            document.body.style.animation = 'rainbow 2s infinite';
            
            // Add rainbow animation CSS
            if (!document.querySelector('#rainbow-styles')) {
                const style = document.createElement('style');
                style.id = 'rainbow-styles';
                style.textContent = `
                    @keyframes rainbow {
                        0% { filter: hue-rotate(0deg); }
                        100% { filter: hue-rotate(360deg); }
                    }
                `;
                document.head.appendChild(style);
            }
            
            // Reset after 5 seconds
            setTimeout(() => {
                document.body.style.animation = '';
            }, 5000);
            
            konamiCode = [];
        }
    });
    
    // Performance optimization - lazy load images if any
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});

// Add some CSS for scrolled navbar state
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        .navbar.scrolled {
            background: rgba(26, 0, 0, 0.95) !important;
            backdrop-filter: blur(20px);
            box-shadow: 0 4px 30px rgba(255, 0, 0, 0.2);
        }
    `;
    document.head.appendChild(style);
});
