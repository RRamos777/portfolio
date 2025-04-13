  // Preloader
  window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('fade-out');
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500);
    
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true
    });
});

// Sticky Header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const backToTop = document.getElementById('backToTop');
    
    if (window.scrollY > 100) {
        header.classList.add('sticky');
        backToTop.classList.add('active');
    } else {
        header.classList.remove('sticky');
        backToTop.classList.remove('active');
    }
});

// Typed.js
document.addEventListener('DOMContentLoaded', function() {
    const typed = new Typed('#typed', {
        strings: ['C# Development', '.NET Core Applications', 'Angular Frontend', 'SQL Server Databases', 'Enterprise Solutions'],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 1500,
        loop: true
    });
});

// Particles.js
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
            value: '#ffffff'
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            }
        },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
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
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// Toggle Mobile Menu
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// Theme Toggle
document.getElementById('themeToggle').addEventListener('click', function() {
    document.body.dataset.theme = document.body.dataset.theme === 'dark' ? '' : 'dark';
    this.innerHTML = document.body.dataset.theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', document.body.dataset.theme);
});

// Check for saved theme preference
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.dataset.theme = savedTheme;
        document.getElementById('themeToggle').innerHTML = savedTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    }
});

// Project Filter
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Update active button
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Filter projects
        const filter = this.dataset.filter;
        document.querySelectorAll('.project-card').forEach(card => {
            if (filter === 'all' || card.dataset.filter === filter) {
                card.style.display = 'block';
            } else {
                card .style.display = 'none';
            }
        });
    });
});

// Testimonial Slider
const testimonialsContainer = document.querySelector('.testimonials-container');
const testimonials = document.querySelectorAll('.testimonial');
let currentIndex = 0;

document.querySelector('.next-btn').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateSlider();
});

document.querySelector('.prev-btn').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateSlider();
});

function updateSlider() {
    testimonialsContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto slide testimonials
setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateSlider();
}, 5000);

// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;
    
    // Simple validation
    const formGroups = this.querySelectorAll('.form-group');
    formGroups.forEach(group => {
        const input = group.querySelector('input, textarea');
        if (!input.value.trim()) {
            group.classList.add('error');
            valid = false;
        } else {
            group.classList.remove('error');
            group.classList.add('success');
        }
        
        // Email validation
        if (input.type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                group.classList.add('error');
                valid = false;
            }
        }
    });
    
    // Form submission feedback
    const formSubmission = document.querySelector('.form-submission');
    if (valid) {
        formSubmission.classList.add('success');
        formSubmission.classList.remove('error');
        formSubmission.textContent = "Your message has been sent successfully!";
        this.reset(); // Reset the form fields
    } else {
        formSubmission.classList.add('error');
        formSubmission.classList.remove('success');
        formSubmission.textContent = "Please fix the errors in the form.";
    }
});

// Project Details Modal
document.querySelectorAll('.project-details-btn').forEach(button => {
    button.addEventListener('click', function() {
        const projectId = this.dataset.project;
        loadProjectDetails(projectId);
        document.getElementById('projectDetailsModal').classList.add('active');
    });
});

// Close Modal
document.getElementById('modalClose').addEventListener('click', function() {
    document.getElementById('projectDetailsModal').classList.remove('active');
});

// Load Project Details
function loadProjectDetails(projectId) {
    // Here you would typically fetch project details from an API or database
    // For demonstration, we'll use static content
    const projectDetails = {
        erp: {
            title: "Enterprise Resource Planning System",
            description: "A comprehensive ERP solution for managing inventory, sales, purchasing, and HR operations.",
            tech: "C#, .NET Core, Angular, SQL Server",
            images: ["/api/placeholder/400/300", "/api/placeholder/400/300"]
        },
        dtr: {
            title: "School DTR & Canteen System",
            description: "RFID-based attendance tracking system with integrated canteen management features.",
            tech: "Angular, TypeScript, .NET Core, SQL Server",
            images: ["/api/placeholder/400/300", "/api/placeholder/400/300"]
        },
        // Add more projects as needed
    };

    const project = projectDetails[projectId];
    const modalContent = document.querySelector('.project-details-content');
    modalContent.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <h4>Technologies Used:</h4>
        <p>${project.tech}</p>
        <div class="project-details-gallery">
            ${project.images.map(img => `<div class="gallery-item"><img src="${img}" alt="${project.title}"></div>`).join('')}
        </div>
    `;
}