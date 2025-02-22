// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate skill bars on scroll
const skillCards = document.querySelectorAll('.skill-card');
const certCards = document.querySelectorAll('.cert-card');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

// Create an Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add fade-in class to sections
            entry.target.classList.add('fade-in');
            entry.target.classList.remove('fade-out'); // Remove fade-out if it exists
        } else {
            entry.target.classList.add('fade-out'); // Add fade-out when not in view
            entry.target.classList.remove('fade-in'); // Remove fade-in if it exists
        }
    });
}, observerOptions);

// Observe all sections for fade-in and fade-out animation
sections.forEach(section => {
    observer.observe(section);
});

// Add active class to nav links on scroll
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - sectionHeight / 3) {
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

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Trigger animations for nav and hero sections
    const animatedElements = document.querySelectorAll('.slide-down');
    animatedElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('slide-down'); // Tambahkan kelas slide-down
            element.style.opacity = 1; // Set opacity ke 1
        }, index * 300); // Delay bertahap untuk setiap elemen
    });

    // Trigger animations for skill and cert cards
    setTimeout(() => {
        skillCards.forEach(card => {
            card.style.opacity = 1; // Set initial opacity
        });
        certCards.forEach(card => {
            card.style.opacity = 1; // Set initial opacity
        });
    }, 500);
});

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Trigger animations for nav and hero sections
    const animatedElements = document.querySelectorAll('.slide-down');
    animatedElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('slide-down'); // Tambahkan kelas slide-down
            element.style.opacity = 1; // Set opacity ke 1
        }, index * 300); // Delay bertahap untuk setiap elemen
    });

    // Trigger animations for skill and cert cards
    setTimeout(() => {
        skillCards.forEach(card => {
            card.style.opacity = 1; // Set initial opacity
        });
        certCards.forEach(card => {
            card.style.opacity = 1; // Set initial opacity
        });
    }, 500);

    // Trigger fade-in animation for profile photo
    const profilePhoto = document.querySelector('.profile-photo');
    profilePhoto.classList.add('fade-in'); // Tambahkan kelas fade-in
});

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scroll ke bawah
        navbar.classList.add('hidden'); // Tambahkan kelas hidden
    } else {
        // Scroll ke atas
        navbar.classList.remove('hidden'); // Hapus kelas hidden
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Untuk Mobile or negative scrolling
});

// Add click event to profile image for rotation
const profileImage = document.querySelector('.profile-img');
profileImage.addEventListener('click', () => {
    profileImage.classList.add('rotate'); // Tambahkan kelas rotate
    // Hapus kelas rotate setelah animasi selesai
    setTimeout(() => {
        profileImage.classList.remove('rotate');
    }, 600); // Sesuaikan dengan durasi animasi
});
// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Trigger animations for nav and hero sections
    const animatedElements = document.querySelectorAll('.slide-down');
    animatedElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('slide-down'); // Tambahkan kelas slide-down
            element.style.opacity = 1; // Set opacity ke 1
        }, index * 300); // Delay bertahap untuk setiap elemen
    });

    // Trigger animations for skill and cert cards
    setTimeout(() => {
        skillCards.forEach(card => {
            card.style.opacity = 1; // Set initial opacity
        });
        certCards.forEach(card => {
            card.style.opacity = 1; // Set initial opacity
        });
    }, 500);

    // Trigger fade-in animation for profile photo
    const profilePhoto = document.querySelector('.profile-photo img');
    profilePhoto.classList.add('rotate'); // Tambahkan kelas rotate

    // Trigger fade-in animation for contact buttons
    const contactButtons = document.querySelectorAll('.contact-btn');
    contactButtons.forEach((button, index) => {
        setTimeout(() => {
            button.classList.add('fade-in'); // Tambahkan kelas fade-in
        }, index * 300); // Delay bertahap untuk setiap tombol
    });
});