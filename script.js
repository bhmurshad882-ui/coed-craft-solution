// =====================================================
// CODECRAFT SOLUTIONS - MAIN JAVASCRIPT
// =====================================================

// =====================================================
// NAVIGATION
// =====================================================
const navbar = document.querySelector('.navbar');
const mobileToggle = document.querySelector('.mobile-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Scroll effect for navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (mobileToggle) {
            mobileToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// Set active nav link based on current page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
    }
});

// =====================================================
// SCROLL REVEAL ANIMATIONS
// =====================================================
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// =====================================================
// SKILL BARS ANIMATION
// =====================================================
const skillBars = document.querySelectorAll('.skill-progress');

const animateSkills = () => {
    skillBars.forEach(bar => {
        const barTop = bar.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (barTop < windowHeight - 100 && !bar.classList.contains('animate')) {
            bar.classList.add('animate');
            const progress = bar.getAttribute('data-progress');
            bar.style.setProperty('--progress', progress + '%');
        }
    });
};

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);

// =====================================================
// FORM VALIDATION & SUBMISSION
// =====================================================
const contactForm = document.querySelector('#contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Simple validation
        if (!data.name || !data.email || !data.message) {
            alert('Please fill in all required fields.');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Success message (in a real app, this would send to a server)
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();

        // In production, you would send this to your backend:
        // fetch('/api/contact', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(data)
        // });
    });
}

// =====================================================
// PORTFOLIO FILTER
// =====================================================
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            // Filter projects
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// =====================================================
// TESTIMONIAL CAROUSEL (Simple)
// =====================================================
const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

const showTestimonial = (index) => {
    testimonials.forEach((testimonial, i) => {
        if (i === index) {
            testimonial.style.display = 'block';
            setTimeout(() => {
                testimonial.style.opacity = '1';
            }, 10);
        } else {
            testimonial.style.opacity = '0';
            setTimeout(() => {
                testimonial.style.display = 'none';
            }, 300);
        }
    });
};

if (testimonials.length > 0) {
    // Initialize
    showTestimonial(0);

    // Auto-rotate testimonials every 5 seconds
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 5000);
}

// =====================================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// =====================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// =====================================================
// DYNAMIC YEAR IN FOOTER
// =====================================================
const yearElement = document.querySelector('#current-year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// =====================================================
// WHATSAPP & FIVERR CTAs
// =====================================================
const whatsappButtons = document.querySelectorAll('.whatsapp-btn');
const fiverrButtons = document.querySelectorAll('.fiverr-btn');

// WhatsApp number from branding
const whatsappNumber = '03001221450'; // Add country code if needed

whatsappButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const message = encodeURIComponent('Hi! I found your services on CodeCraft Solutions and would like to discuss a project.');
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    });
});

// Fiverr - Open in new tab (user can provide actual Fiverr URL)
fiverrButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Replace with actual Fiverr profile URL
        window.open('https://www.fiverr.com/', '_blank');
    });
});

// =====================================================
// LOADING ANIMATIONS
// =====================================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
