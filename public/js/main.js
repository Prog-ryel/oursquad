// Slideshow functionality
function initSlideshow() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    // Show first slide
    slides[0].classList.add('active');

    // Change slide every 5 seconds
    setInterval(() => {
        // Remove active class from current slide
        slides[currentSlide].classList.remove('active');
        
        // Move to next slide
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Add active class to new slide
        slides[currentSlide].classList.add('active');
    }, 5000); // Change slide every 5 seconds
}

// Initialize slideshow when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initSlideshow();
});

// Modal functionality
const serviceBtns = document.querySelectorAll('.service-btn');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close-modal');

// Open modal
serviceBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const serviceType = btn.getAttribute('data-service');
        const modal = document.getElementById(`modal-${serviceType}`);
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    });
});

// Close modal when clicking the close button
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        modal.classList.remove('show');
        document.body.style.overflow = ''; // Restore scrolling
    });
});

// Close modal when clicking outside
modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            document.body.style.overflow = ''; // Restore scrolling
        }
    });
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modals.forEach(modal => {
            modal.classList.remove('show');
            document.body.style.overflow = ''; // Restore scrolling
        });
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });

            // Update active link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// Update active navigation link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}); 