document.addEventListener('DOMContentLoaded', () => {

    // =========================================================
    // 1. MOBILE NAVBAR TOGGLE FUNCTIONALITY (Consolidated)
    // =========================================================
    const menuToggle = document.querySelector('.menu-toggle');
    const navbarItems = document.querySelector('.navbar-items');
    const menuIconOpen = document.querySelector('.menu-icon-open');
    const menuIconClose = document.querySelector('.menu-icon-close');

    if (menuToggle && navbarItems) {
        menuToggle.addEventListener('click', () => {
            // Toggle the 'active' class on the ul to reveal/hide it (CSS required!)
            navbarItems.classList.toggle('active');
            
            // Toggle the 'hidden' class on the icons
            if (menuIconOpen && menuIconClose) {
                menuIconOpen.classList.toggle('hidden');
                menuIconClose.classList.toggle('hidden');
            }
        });

        // Close the menu when a link is clicked
        navbarItems.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navbarItems.classList.contains('active')) {
                    navbarItems.classList.remove('active');
                    
                    if (menuIconOpen && menuIconClose) {
                        menuIconOpen.classList.remove('hidden');
                        menuIconClose.classList.add('hidden');
                    }
                }
            });
        });
    }

    // =========================================================
    // 2. SMOOTH SCROLLING FOR ALL INTERNAL ANCHOR LINKS
    // =========================================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navbarHeight = 58; // Height of sticky navbar
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // =========================================================
    // 3. DYNAMIC STAR AND COMET GENERATION (Consolidated)
    // =========================================================
    const starField = document.getElementById('star-field');
    const numTwinklingStars = 100; // Using the smaller, more efficient number
    const colors = ['#ffffff', '#ffeedd', '#d8bfd8', '#add8e6']; 
    const numComets = 8; // Using the smaller number for better performance

    if (starField) {
        
        // --- A. Generate Twinkling Stars ---
        for (let i = 0; i < numTwinklingStars; i++) {
            const star = document.createElement('div');
            star.classList.add('twinkle-star');
            
            const x = Math.random() * 100; 
            const y = Math.random() * 100;
            const size = Math.random() * 3 + 1; 
            const colorIndex = Math.floor(Math.random() * colors.length);
            const duration = Math.random() * 3 + 2; 
            
            star.style.left = `${x}vw`;
            star.style.top = `${y}vh`;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.setProperty('--star-color', colors[colorIndex]);
            star.style.animationDuration = `${duration}s`;
            star.style.animationDelay = `${-Math.random() * duration}s`;

            starField.appendChild(star);
        }

        // --- B. Generate Shooting Comets ---
        for (let i = 0; i < numComets; i++) {
            const comet = document.createElement('div');
            comet.classList.add('comet');

            const xStart = -Math.random() * 50; 
            const yStart = -Math.random() * 50;
            
            comet.style.left = `${xStart}vw`;
            comet.style.top = `${yStart}vh`;
            
            const duration = Math.random() * 5 + 5; 
            const delay = Math.random() * 14 + 1; 
            
            comet.style.animation = `shoot ${duration}s linear infinite`;
            comet.style.animationDelay = `${delay}s`;

            starField.appendChild(comet);
        }
    }
});