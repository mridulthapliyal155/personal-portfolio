// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    const href = anchor.getAttribute('href');
    // Only apply smooth scrolling to internal links (starting with #)
    if (href.startsWith('#')) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    }
});

// Add active class to navigation links based on scroll position
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 60) {
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

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        
        // Here you would typically send the form data to a server
        console.log('Form submitted:', formObject);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// Add animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.section');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initial call to animateOnScroll
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// Add initial styles for animation
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

// Hamburger menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.nav-hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navClose = document.querySelector('.nav-close');
  const navOverlay = document.querySelector('.nav-overlay');

  function openMenu() {
    navMenu.classList.add('open');
    navOverlay.classList.add('open');
    hamburger.style.display = 'none';
  }
  function closeMenu() {
    navMenu.classList.remove('open');
    navOverlay.classList.remove('open');
    hamburger.style.display = 'flex';
  }
  if (hamburger && navMenu && navClose && navOverlay) {
    hamburger.addEventListener('click', openMenu);
    navClose.addEventListener('click', closeMenu);
    navOverlay.addEventListener('click', closeMenu);
  }
}); 