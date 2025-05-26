// Mobile Menu Toggle
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

// Initialize particles.js
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#59b2f4"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#59b2f4",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});

// Scroll Reveal Animations
ScrollReveal().reveal('.home-content, .heading', { 
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { 
    origin: 'bottom',
    distance: '80px',
    duration: 2000,
    reset: true
});

ScrollReveal().reveal('.home-content h1, .about-img', { 
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
});

ScrollReveal().reveal('.home-content p, .about-content', { 
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
});

// Typed.js Multiple Text
document.addEventListener('DOMContentLoaded', function() {
    // First make the element visible
    const typedElement = document.getElementById('typed-text');
    typedElement.style.opacity = '1';
    typedElement.style.color = '#59b2f4';
    
    
    // Then initialize Typed.js
    new Typed('#typed-text', {
        strings: ['Frontend Developer', 'UI/UX Designer', 'Mobile App Developer'],
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 1500,
        loop: true,
        showCursor: true,
        cursorChar: '|',
        onBegin: function() {
            typedElement.style.visibility = 'visible';
        }
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Add ripple effect
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        this.appendChild(ripple);
        
        // Get position
        const x = e.clientX - e.target.getBoundingClientRect().left;
        const y = e.clientY - e.target.getBoundingClientRect().top;
        
        // Position the ripple
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        // Remove ripple after animation
        setTimeout(() => {
            ripple.remove();
        }, 1000);
        
        // Smooth scroll to target
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky Header
window.onscroll = () => {
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
    
    // Remove menu icon when scrolling
    menuIcon.classList.remove('fa-times');
    navbar.classList.remove('active');
    
    // Animate elements on scroll
    animateOnScroll();
};

// Form Submission
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Add loading animation
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent!';
        
        // Reset after 2 seconds
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }, 1500);
});

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.classList.add('show');
        }
    });
}

// Initialize animation on load
window.addEventListener('load', () => {
    // Add animate-on-scroll class to elements
    document.querySelectorAll('.skills-category, .project-box, .input-box input, textarea, .contact .btn').forEach(el => {
        el.classList.add('animate-on-scroll');
    });
    
    // Trigger initial animation check
    animateOnScroll();
});

// Add hover effect to project boxes


