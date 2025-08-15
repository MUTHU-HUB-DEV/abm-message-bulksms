
        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Initialize header state on load
        document.addEventListener('DOMContentLoaded', () => {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            }
        });

        // Mobile menu toggle
        const mobileToggle = document.getElementById('mobile-toggle');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
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

        // Active navigation link
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });

        // Fade in animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Contact form submission
        document.getElementById('contact-form').addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value;

            const whatsappMessage = `Hello GTech!

Name: ${name}
Phone: ${phone}
Email: ${email}
Service Interest: ${service}
Message: ${message}

I'm interested in your services. Please contact me.`;

            const encodedMessage = encodeURIComponent(whatsappMessage);
            const whatsappURL = `https://wa.me/918012626111?text=${encodedMessage}`;

            window.open(whatsappURL, '_blank');

            // Reset form
            this.reset();

            // Show success message
            alert('Thank you! Your message has been sent via WhatsApp. We will get back to you soon.');
        });

        // Service contact function
        function contactService(serviceName) {
            const message = `Hi GTech! I'm interested in your ${serviceName} service. Please provide me with more details and pricing information.`;
            const encodedMessage = encodeURIComponent(message);
            const whatsappURL = `https://wa.me/918012626111?text=${encodedMessage}`;
            window.open(whatsappURL, '_blank');
        }

        // Add loading animation
        window.addEventListener('load', () => {
            document.body.classList.add('loaded');
        });

        // Add animation delays to feature cards
        document.addEventListener('DOMContentLoaded', () => {
            const featureCards = document.querySelectorAll('.feature-card');
            featureCards.forEach((card, index) => {
                card.style.animationDelay = `${index * 0.1}s`;
            });

            const serviceCards = document.querySelectorAll('.service-card');
            serviceCards.forEach((card, index) => {
                card.style.animationDelay = `${index * 0.15}s`;
            });
        });

        // Typing effect for hero text (optional enhancement)
        function typeWriter(element, text, speed = 50) {
            let i = 0;
            element.innerHTML = '';

            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }

            type();
        }

        // Initialize typing effect on load
        window.addEventListener('load', () => {
            setTimeout(() => {
                const heroTitle = document.querySelector('h1 .gradient-text');
                if (heroTitle) {
                    const originalText = heroTitle.textContent;
                    typeWriter(heroTitle, originalText, 100);
                }
            }, 1000);
        });

        // Add bounce effect to WhatsApp button
        setInterval(() => {
            const whatsappBtn = document.querySelector('.floating-animation');
            if (whatsappBtn) {
                whatsappBtn.style.animation = 'none';
                setTimeout(() => {
                    whatsappBtn.style.animation = 'float 6s ease-in-out infinite';
                }, 10);
            }
        }, 10000);

        // Smooth reveal animation for sections
        const revealElements = document.querySelectorAll('.fade-in');

        function reveal() {
            revealElements.forEach((element, index) => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;

                if (elementTop < window.innerHeight - elementVisible) {
                    setTimeout(() => {
                        element.classList.add('visible');
                    }, index * 100);
                }
            });
        }

        window.addEventListener('scroll', reveal);
        reveal(); // Initial check

        // Add ripple effect to buttons
        document.querySelectorAll('button, .btn').forEach(button => {
            button.addEventListener('click', function (e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;

                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple');

                this.appendChild(ripple);

                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });

        // Performance optimization: Throttle scroll events
        let ticking = false;

        function updateOnScroll() {
            // Update scroll indicator
            const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            document.getElementById('scroll-indicator').style.width = scrolled + '%';

            ticking = false;
        }

        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(updateOnScroll);
                ticking = true;
            }
        }

        window.addEventListener('scroll', requestTick);

        // Add error handling for form submission
        document.getElementById('contact-form').addEventListener('submit', function (e) {
            e.preventDefault();

            try {
                const formData = new FormData(this);
                const name = formData.get('name');
                const phone = formData.get('phone');
                const email = formData.get('email');
                const service = formData.get('service');
                const message = formData.get('message');

                // Validate required fields
                if (!name || !phone || !email || !message) {
                    alert('Please fill in all required fields.');
                    return;
                }

                // Validate email format
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    alert('Please enter a valid email address.');
                    return;
                }

                // Validate phone number (basic validation)
                const phoneRegex = /^[\d\s\-\+\(\)]+$/;
                if (!phoneRegex.test(phone)) {
                    alert('Please enter a valid phone number.');
                    return;
                }

                const whatsappMessage = `Hello GTech!

Name: ${name}
Phone: ${phone}
Email: ${email}
Service Interest: ${service || 'Not specified'}
Message: ${message}

I'm interested in your services. Please contact me.`;

                const encodedMessage = encodeURIComponent(whatsappMessage);
                const whatsappURL = `https://wa.me/918012626111?text=${encodedMessage}`;

                window.open(whatsappURL, '_blank');

                // Reset form
                this.reset();

                // Show success message
                alert('Thank you! Your message has been sent via WhatsApp. We will get back to you soon.');

            } catch (error) {
                console.error('Error submitting form:', error);
                alert('There was an error sending your message. Please try again.');
            }
        });

        // Add keyboard navigation support
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                const mobileToggle = document.getElementById('mobile-toggle');
                if (mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                    mobileToggle.classList.remove('active');
                }
            }
        });

        // Add accessibility improvements
        document.querySelectorAll('a, button').forEach(element => {
            element.addEventListener('focus', function () {
                this.style.outline = '2px solid #6366f1';
                this.style.outlineOffset = '2px';
            });

            element.addEventListener('blur', function () {
                this.style.outline = 'none';
            });
        });

        console.log('GTech Website Loaded Successfully! 🚀');


        document.addEventListener('DOMContentLoaded', function () {
            const filterButtons = document.querySelectorAll('.filter-btn');
            const filterSections = document.querySelectorAll('.filter-section');

            filterButtons.forEach(button => {
                button.addEventListener('click', function () {
                    // Remove active class from all buttons
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    // Add active class to clicked button
                    this.classList.add('active');

                    const filterValue = this.getAttribute('data-filter');

                    // Filter sections
                    filterSections.forEach(section => {
                        if (filterValue === 'all') {
                            section.style.display = 'block';
                        } else {
                            if (section.getAttribute('data-category') === filterValue) {
                                section.style.display = 'block';
                            } else {
                                section.style.display = 'none';
                            }
                        }
                    });
                });
            });
        });
   
        // JavaScript
document.addEventListener('DOMContentLoaded', function() {
  const goToTopBtn = document.getElementById('goToTopBtn');
  const progressPath = document.getElementById('progressPath');
  
  // Show/hide button based on scroll position
  window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // Calculate scroll percentage
    const scrollPercent = (scrollPosition / (documentHeight - windowHeight)) * 100;
    const offset = 283 - (scrollPercent * 283 / 100);
    
    // Update progress circle
    progressPath.style.strokeDashoffset = offset;
    
    // Show/hide button
    if (scrollPosition > 300) {
      goToTopBtn.classList.add('visible');
    } else {
      goToTopBtn.classList.remove('visible');
    }
  });
  
  // Smooth scroll to top
  goToTopBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});