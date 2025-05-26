// Mobile Menu Toggle
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const body = document.body;

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-times');
    menuIcon.classList.toggle('fa-bars');
    navbar.classList.toggle('active');
    body.classList.toggle('menu-active');
};

// Close menu when clicking a link
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
        navbar.classList.remove('active');
        body.classList.remove('menu-active');
    });
});

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
            speed: 3,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "bounce",
            bounce: true,
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
                mode: "bubble"
            },
            onclick: {
                enable: true,
                mode: "repulse"
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
                distance: 200,
                size: 15,
                duration: 2,
                opacity: 0.8,
                speed: 3
            },
            repulse: {
                distance: 150,
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
    const typedElement = document.getElementById('typed-text');
    typedElement.style.opacity = '1';
    typedElement.style.color = '#59b2f4';
    
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

// 3D Tilt Effect
document.querySelectorAll('.project-box, .btn, .skills-category, .home-img img, .about-img img').forEach(el => {
    el.addEventListener('mousemove', (e) => {
        if (window.innerWidth > 768) { // Only on desktop
            const x = e.pageX - el.offsetLeft;
            const y = e.pageY - el.offsetTop;
            
            const centerX = el.offsetWidth / 2;
            const centerY = el.offsetHeight / 2;
            
            const angleX = (y - centerY) / 10;
            const angleY = (centerX - x) / 10;
            
            el.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateZ(10px)`;
        }
    });
    
    el.addEventListener('mouseleave', () => {
        if (window.innerWidth > 768) { // Only on desktop
            el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        }
    });
});

// Smooth Scroll with Ripple Effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Ripple effect
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        this.appendChild(ripple);
        
        const x = e.clientX - e.target.getBoundingClientRect().left;
        const y = e.clientY - e.target.getBoundingClientRect().top;
        
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        setTimeout(() => {
            ripple.remove();
        }, 1000);
        
        // Smooth scroll
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky Header and Scroll Progress
window.onscroll = () => {
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
    
    // Remove menu icon when scrolling
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
    navbar.classList.remove('active');
    body.classList.remove('menu-active');
    
    // Scroll progress
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.querySelector('.progress-bar').style.width = scrolled + '%';
    
    // Animate elements on scroll
    animateOnScroll();
};

// Form Submission
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent!';
        
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
    document.querySelectorAll('.skills-category, .project-box, .input-box input, textarea, .contact .btn').forEach(el => {
        el.classList.add('animate-on-scroll');
    })
});
    
   