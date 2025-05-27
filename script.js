document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS with enhanced settings
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Rain Animation Function
    function createRainAnimation(containerId, dropCount) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        // Clear any existing drops
        container.innerHTML = '';
        
        // Get container dimensions
        const containerHeight = containerId === 'hero-rain' ? 
            document.querySelector('.hero').offsetHeight : 
            document.querySelector('footer').offsetHeight;
            
        const containerWidth = container.offsetWidth;
        
        // Calculate spacing between drops
        const spacing = containerWidth / dropCount;
        
        // Create rain drops
        for (let i = 0; i < dropCount; i++) {
            const drop = document.createElement('div');
            drop.className = 'rain-drop';
            
            // Random properties for natural look
            const width = Math.random() * 1 + 0.5; // Width between 0.5px and 1.5px
            // Position with even spacing plus small random offset
            const posX = (spacing * i) + (Math.random() * spacing * 0.5);
            const delay = Math.random() * 6; // Random delay for animation start (increased)
            const duration = Math.random() * 3 + 4; // Duration between 4s and 7s (slower)
            const height = Math.random() * 100 + 150; // Height between 150px and 250px
            
            // Apply styles
            drop.style.left = `${posX}px`;
            drop.style.width = `${width}px`;
            drop.style.height = `${height}px`;
            drop.style.animationDelay = `${delay}s`;
            drop.style.animationDuration = `${duration}s`;
            
            // Set animation distance based on container height
            drop.style.animation = `rainFall${containerId === 'hero-rain' ? 'Hero' : 'Footer'} ${duration}s linear ${delay}s infinite`;
            
            // Append to container
            container.appendChild(drop);
        }
    }
    
    // Create rain animation keyframes dynamically
    function createRainKeyframes() {
        const style = document.createElement('style');
        
        // Get container heights
        const heroHeight = document.querySelector('.hero').offsetHeight;
        const footerHeight = document.querySelector('footer').offsetHeight;
        
        style.textContent = `
            @keyframes rainFallHero {
                0% {
                    transform: translateY(-100px);
                    opacity: 0;
                }
                10% {
                    opacity: 0.8;
                }
                90% {
                    opacity: 0.8;
                }
                100% {
                    transform: translateY(${heroHeight + 100}px);
                    opacity: 0;
                }
            }
            
            @keyframes rainFallFooter {
                0% {
                    transform: translateY(-100px);
                    opacity: 0;
                }
                10% {
                    opacity: 0.8;
                }
                90% {
                    opacity: 0.8;
                }
                100% {
                    transform: translateY(${footerHeight + 100}px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Initialize rain animations after a slight delay to ensure elements are loaded
    setTimeout(() => {
        createRainKeyframes();
        createRainAnimation('hero-rain', 15); // Reduced to 15 lines
        createRainAnimation('footer-rain', 15); // Reduced to 15 lines
    }, 500);

    // Back to Top Button with enhanced hover effects
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        
        // Scroll to top when clicked
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Enhanced hover effect
        backToTopBtn.addEventListener('mouseenter', () => {
            gsap.to(backToTopBtn, {
                scale: 1.1,
                backgroundColor: 'var(--secondary-color)',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
                duration: 0.3
            });
            gsap.to(backToTopBtn.querySelector('i'), {
                y: -5,
                scale: 1.2,
                duration: 0.3
            });
        });

        backToTopBtn.addEventListener('mouseleave', () => {
            gsap.to(backToTopBtn, {
                scale: 1,
                backgroundColor: 'var(--primary-color)',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                duration: 0.3
            });
            gsap.to(backToTopBtn.querySelector('i'), {
                y: 0,
                scale: 1,
                duration: 0.3
            });
        });
    }

    // Header scroll effect with enhanced styling
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.4)'; // More transparent
            header.style.backdropFilter = 'blur(8px)';
        } else {
            header.classList.remove('scrolled');
            header.style.padding = '20px 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.6)'; // Default transparency
            header.style.backdropFilter = 'blur(3px)';
        }
    });

    // Mobile menu toggle with improved animation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const languageSwitch = document.querySelector('.language-switch');
    const getStartedBtn = document.querySelector('.get-started-btn');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            
            // Create mobile menu if it doesn't exist
            if (!document.querySelector('.mobile-menu')) {
                const mobileMenu = document.createElement('div');
                mobileMenu.classList.add('mobile-menu');
                
                // Clone nav links
                const navLinksClone = navLinks.cloneNode(true);
                
                // Clone language switch
                const languageSwitchClone = languageSwitch.cloneNode(true);
                
                // Clone get started button
                const getStartedBtnClone = getStartedBtn.cloneNode(true);
                
                mobileMenu.appendChild(navLinksClone);
                mobileMenu.appendChild(languageSwitchClone);
                mobileMenu.appendChild(getStartedBtnClone);
                
                document.body.appendChild(mobileMenu);
                
                // Add styles to mobile menu with animation
                mobileMenu.style.position = 'fixed';
                mobileMenu.style.top = header.offsetHeight + 'px';
                mobileMenu.style.left = '0';
                mobileMenu.style.width = '100%';
                mobileMenu.style.backgroundColor = 'white';
                mobileMenu.style.padding = '20px';
                mobileMenu.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.1)';
                mobileMenu.style.zIndex = '999';
                mobileMenu.style.display = 'none';
                mobileMenu.style.flexDirection = 'column';
                mobileMenu.style.gap = '20px';
                mobileMenu.style.transition = 'all 0.3s ease';
                
                // Style nav links in mobile menu
                const mobileNavLinks = mobileMenu.querySelector('.nav-links');
                mobileNavLinks.style.display = 'flex';
                mobileNavLinks.style.flexDirection = 'column';
                mobileNavLinks.style.gap = '15px';
                
                // Style language switch in mobile menu
                const mobileLangSwitch = mobileMenu.querySelector('.language-switch');
                mobileLangSwitch.style.margin = '10px 0';
                
                // Style get started button in mobile menu
                const mobileGetStartedBtn = mobileMenu.querySelector('.get-started-btn');
                mobileGetStartedBtn.style.alignSelf = 'flex-start';

                // Add click event to mobile menu links to close menu
                const mobileLinks = mobileMenu.querySelectorAll('a');
                mobileLinks.forEach(link => {
                    link.addEventListener('click', () => {
                        mobileMenu.style.display = 'none';
                        hamburger.classList.remove('active');
                        // Reset hamburger
                        const lines = hamburger.querySelectorAll('.line');
                        lines[0].style.transform = 'none';
                        lines[1].style.opacity = '1';
                        lines[2].style.transform = 'none';
                    });
                });
            }
            
            const mobileMenu = document.querySelector('.mobile-menu');
            if (hamburger.classList.contains('active')) {
                mobileMenu.style.display = 'flex';
                // Transform hamburger to X with smoother animation
                const lines = hamburger.querySelectorAll('.line');
                lines[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
                lines[0].style.transition = 'transform 0.3s ease';
                lines[1].style.opacity = '0';
                lines[1].style.transition = 'opacity 0.2s ease';
                lines[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
                lines[2].style.transition = 'transform 0.3s ease';
            } else {
                mobileMenu.style.display = 'none';
                // Reset hamburger with animation
                const lines = hamburger.querySelectorAll('.line');
                lines[0].style.transform = 'none';
                lines[1].style.opacity = '1';
                lines[2].style.transform = 'none';
            }
        });
    }

    // Animated counter for stats with improved animation
    const stats = document.querySelectorAll('.stat-number');
    
    function animateStats() {
        stats.forEach(stat => {
            const value = stat.innerText;
            let startValue = 0;
            let endValue;
            
            if (value.includes('M')) {
                endValue = parseFloat(value) * 1000000;
            } else if (value.includes('K')) {
                endValue = parseFloat(value) * 1000;
            } else {
                endValue = parseFloat(value);
            }
            
            let duration = Math.floor(2000 / endValue);
            if (duration < 1) duration = 1;
            
            let counter = setInterval(() => {
                startValue += Math.ceil(endValue / 100);
                
                if (startValue >= endValue) {
                    stat.innerText = value;
                    clearInterval(counter);
                } else {
                    if (value.includes('M')) {
                        stat.innerText = (startValue / 1000000).toFixed(1) + 'M+';
                    } else if (value.includes('K')) {
                        stat.innerText = (startValue / 1000).toFixed(1) + 'K+';
                    } else {
                        stat.innerText = startValue.toFixed(1);
                    }
                }
            }, duration);
        });
    }
    
    // Run stats animation when in viewport with improved threshold
    const statsSection = document.querySelector('.stats-container');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        observer.observe(statsSection);
    }

    // GSAP Animations with enhanced effects
    // Animated lines
    gsap.to('.anim-line', {
        scaleX: 1,
        duration: 1.5,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.animated-lines',
            start: 'top 80%',
        }
    });

    // Hero section animations with improved timing
    gsap.from('.hero-content h1', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
    
    gsap.from('.hero-content p', {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out'
    });
    
    gsap.from('.app-buttons', {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: 'power3.out'
    });
    
    gsap.from('.main-app-img', {
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
        ease: 'back.out(1.7)'
    });
    
    gsap.from('.floating-img', {
        x: (i) => i % 2 === 0 ? -50 : 50,
        opacity: 0,
        duration: 1,
        delay: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Add continuous floating animation to app screenshots
    gsap.to('.floating-img.img1', {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });

    gsap.to('.floating-img.img2', {
        y: -15,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.5
    });

    // Features section animations
    function animateFeaturesSection() {
        const featuresSection = document.querySelector('.features');
        const featuresTitle = document.querySelector('.features h2');
        const featurePhone = document.querySelector('.features-phone-mockup');
        const leftCards = document.querySelectorAll('.features-left .feature-card');
        const rightCards = document.querySelectorAll('.features-right .feature-card');
        
        if (!featuresSection || !featuresTitle) return;
        
        // Create scroll trigger for features section
        ScrollTrigger.create({
            trigger: featuresSection,
            start: 'top 70%',
            onEnter: () => {
                // First animate phone mockup to appear
                gsap.to(featurePhone, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    ease: 'back.out(1.5)'
                });
                
                // Animate title from bottom to top
                setTimeout(() => {
                    // Position title below its final position
                    gsap.set(featuresTitle, {
                        y: 50,
                        opacity: 0
                    });
                    
                    // Animate title to its final position
                    gsap.to(featuresTitle, {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: 'power3.out'
                    });
                }, 600);
                
                // Set initial position for cards (at the middle where the phone is)
                gsap.set(leftCards, {
                    x: 150, // Start from the middle (phone position)
                    opacity: 0
                });
                
                gsap.set(rightCards, {
                    x: -150, // Start from the middle (phone position)
                    opacity: 0
                });
                
                // Animate left cards from middle to left
                gsap.to(leftCards, {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    delay: 1.2,
                    ease: 'back.out(1.2)'
                });
                
                // Animate right cards from middle to right
                gsap.to(rightCards, {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    delay: 1.2,
                    ease: 'back.out(1.2)'
                });
            },
            once: true
        });
    }
    
    // Initialize features section animations
    animateFeaturesSection();

    // How It Works Section with Enhanced Step Numbers
    function enhanceHowItWorksSection() {
        const section = document.querySelector('.how-it-works');
        const stepsContainer = document.querySelector('.steps-container');
        
        if (!section || !stepsContainer) return;
        
        // Set position relative on steps container for absolute positioning
        stepsContainer.style.position = 'relative';
        
        // Enhance step numbers to be on the timeline
        const steps = document.querySelectorAll('.step');
        steps.forEach(step => {
            const stepNumber = step.querySelector('.step-number');
            
            // Style step number to be a circle on the timeline
            stepNumber.style.position = 'absolute';
            stepNumber.style.left = '50%';
            stepNumber.style.transform = 'translateX(-50%)';
            stepNumber.style.width = '60px';
            stepNumber.style.height = '60px';
            stepNumber.style.borderRadius = '50%';
            stepNumber.style.backgroundColor = 'white';
            stepNumber.style.border = '4px solid var(--primary-color)';
            stepNumber.style.display = 'flex';
            stepNumber.style.alignItems = 'center';
            stepNumber.style.justifyContent = 'center';
            stepNumber.style.zIndex = '2';
            stepNumber.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.1)';
            
            // Adjust content positioning
            if (step.classList.contains('step-right')) {
                step.querySelector('.step-content').style.paddingRight = '80px';
                step.querySelector('.step-content').style.textAlign = 'right';
            } else {
                step.querySelector('.step-content').style.paddingLeft = '80px';
                step.querySelector('.step-content').style.textAlign = 'left';
            }
        });
        
        // Animate timeline growth and steps appearance
        ScrollTrigger.create({
            trigger: section,
            start: 'top 60%',
            onEnter: () => {
                // No timeline animation needed
                
                // Animate each step
                steps.forEach((step, index) => {
                    const delay = 0.5 + (index * 0.4);
                    
                    // Animate step number
                    gsap.fromTo(step.querySelector('.step-number'), 
                        { scale: 0, opacity: 0 },
                        { scale: 1, opacity: 1, duration: 0.6, delay: delay, ease: 'back.out(1.7)' }
                    );
                    
                    // Animate step content
                    gsap.fromTo(step.querySelector('.step-content'),
                        { 
                            x: step.classList.contains('step-right') ? -50 : 50, 
                            opacity: 0 
                        },
                        { 
                            x: 0, 
                            opacity: 1, 
                            duration: 0.8, 
                            delay: delay + 0.2, 
                            ease: 'power3.out' 
                        }
                    );
                    
                    // Animate step image
                    gsap.fromTo(step.querySelector('.step-image'),
                        { 
                            x: step.classList.contains('step-right') ? 50 : -50, 
                            opacity: 0 
                        },
                        { 
                            x: 0, 
                            opacity: 1, 
                            duration: 0.8, 
                            delay: delay + 0.4, 
                            ease: 'power3.out' 
                        }
                    );
                });
            },
            once: false
        });
    }
    
    // Initialize How It Works enhanced section
    enhanceHowItWorksSection();
    
    // Enhanced horizontal scroll for app screens with 3D carousel effect
    function initializeEnhancedScreenSlider() {
        const screenSlider = document.getElementById('screenSlider');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const sliderDots = document.getElementById('sliderDots');
        
        if (!screenSlider) return;
        
        // Get all screen items
        const screenItems = screenSlider.querySelectorAll('.screen-item');
        if (!screenItems.length) return;
        
        let currentIndex = 0;
        const totalItems = screenItems.length;
        let autoSlideTimer;
        const autoSlideDelay = 3500; // Increased by 1 second (from 2.5s to 3.5s)
        
        // Initialize carousel positions
        function updateCarousel() {
            screenItems.forEach((item, index) => {
                // Calculate position relative to current index
                let position = index - currentIndex;
                
                // Wrap around for continuous flow effect
                if (position < -2) position += totalItems;
                if (position > 2) position -= totalItems;
                
                // Calculate z-index based on position
                const zIndex = 5 - Math.abs(position);
                
                // Calculate x position, scale, and opacity
                let xPos = position * 250; // Wider spacing
                let scale = 1 - Math.abs(position) * 0.2;
                let opacity = 1 - Math.abs(position) * 0.3;
                
                // Apply transforms with enhanced animation
                gsap.to(item, {
                    x: xPos,
                    scale: scale,
                    opacity: opacity,
                    zIndex: zIndex,
                    duration: 0.6,
                    ease: "power2.out"
                });
            });
            
            // Update active dot
            updateDots();
        }
        
        // Create dots for navigation
        function createDots() {
            if (!sliderDots) return;
            
            sliderDots.innerHTML = ''; // Clear existing dots
            
            screenItems.forEach((_, index) => {
                const dot = document.createElement('div');
                dot.classList.add('slider-dot');
                if (index === 0) dot.classList.add('active');
                
                dot.addEventListener('click', () => {
                    goToSlide(index);
                });
                
                sliderDots.appendChild(dot);
            });
        }
        
        // Update active dot
        function updateDots() {
            if (!sliderDots) return;
            
            const dots = sliderDots.querySelectorAll('.slider-dot');
            dots.forEach((dot, index) => {
                if (index === currentIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }
        
        // Go to next slide - always move right for continuous flow effect
        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarousel();
            resetAutoSlide();
        }
        
        // Go to previous slide - also moves right for continuous flow
        function prevSlide() {
            // For continuous right movement, we go to the last slide when at first
            if (currentIndex === 0) {
                currentIndex = totalItems - 1;
            } else {
                currentIndex = (currentIndex - 1) % totalItems;
            }
            updateCarousel();
            resetAutoSlide();
        }
        
        // Go to specific slide
        function goToSlide(index) {
            // Determine if we should move right or left
            // For continuous right movement, always increment index
            if (index > currentIndex) {
                // Moving forward (right)
                currentIndex = index;
            } else {
                // For continuous right flow, we loop through all slides to get to target
                // This creates a continuous right movement
                let steps = totalItems - currentIndex + index;
                for (let i = 0; i < steps; i++) {
                    setTimeout(() => {
                        nextSlide();
                    }, i * 200);
                }
                return;
            }
            
            updateCarousel();
            resetAutoSlide();
        }
        
        // Auto slide functionality
        function startAutoSlide() {
            stopAutoSlide();
            autoSlideTimer = setInterval(nextSlide, autoSlideDelay);
        }
        
        function stopAutoSlide() {
            if (autoSlideTimer) clearInterval(autoSlideTimer);
        }
        
        function resetAutoSlide() {
            stopAutoSlide();
            startAutoSlide();
        }
        
        // Event listeners
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);
        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
        
        // Touch swipe functionality
        function handleSwipe() {
            let startX, moveX;
            let threshold = 100; // Minimum distance to be considered a swipe
            
            screenSlider.addEventListener('touchstart', (e) => {
                startX = e.touches[0].clientX;
                stopAutoSlide();
            });
            
            screenSlider.addEventListener('touchmove', (e) => {
                if (!startX) return;
                moveX = e.touches[0].clientX;
            });
            
            screenSlider.addEventListener('touchend', () => {
                if (!startX || !moveX) {
                    resetAutoSlide();
                    return;
                }
                
                let diff = startX - moveX;
                
                // For continuous right flow, both left and right swipes move right
                if (Math.abs(diff) > threshold) {
                    nextSlide();
                }
                
                startX = null;
                moveX = null;
                resetAutoSlide();
            });
        }
        
        // Initialize
        createDots();
        updateCarousel();
        startAutoSlide();
        handleSwipe();
        
        // Update on window resize
        window.addEventListener('resize', updateCarousel);
    }
    
    // Initialize enhanced screen slider
    initializeEnhancedScreenSlider();

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animate How It Works section
    function animateHowItWorks() {
        const steps = document.querySelectorAll('.step');
        
        if (steps.length === 0) return;
        
        steps.forEach((step, index) => {
            // Create scroll trigger for each step
            ScrollTrigger.create({
                trigger: step,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleClass: { targets: step, className: 'active' },
                once: false,
                onEnter: () => {
                    // Animate step number
                    gsap.to(step.querySelector('.step-number'), {
                        scale: 1.2,
                        color: 'rgba(99, 102, 241, 0.4)',
                        duration: 0.5,
                        ease: 'back.out(1.7)'
                    });
                    
                    // Animate step content
                    gsap.to(step.querySelector('.step-content'), {
                        y: -10,
                        opacity: 1,
                        duration: 0.7,
                        delay: 0.2,
                        ease: 'power3.out'
                    });
                    
                    // Animate phone mockup
                    gsap.to(step.querySelector('.phone-mockup'), {
                        y: -15,
                        opacity: 1,
                        duration: 0.7,
                        delay: 0.4,
                        ease: 'power3.out'
                    });
                },
                onLeaveBack: () => {
                    // Reset animations when scrolling back up
                    gsap.to(step.querySelector('.step-number'), {
                        scale: 1,
                        color: 'rgba(99, 102, 241, 0.2)',
                        duration: 0.5
                    });
                    
                    gsap.to(step.querySelector('.step-content'), {
                        y: 0,
                        opacity: 0.7,
                        duration: 0.7
                    });
                    
                    gsap.to(step.querySelector('.phone-mockup'), {
                        y: 0,
                        opacity: 0.7,
                        duration: 0.7
                    });
                }
            });
            
            // Add continuous floating animation to phone mockups
            gsap.to(step.querySelector('.phone-mockup'), {
                y: -10,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                delay: index * 0.2
            });
        });
    }
    
    // Initialize How It Works animations
    animateHowItWorks();

    // Policy Section Toggle
    function initializePolicyToggles() {
        const policyItems = document.querySelectorAll('.policy-item');
        
        policyItems.forEach(item => {
            const header = item.querySelector('.policy-header');
            
            header.addEventListener('click', () => {
                // Check if this item is already active
                const isActive = item.classList.contains('active');
                
                // Close all items first
                policyItems.forEach(policyItem => {
                    policyItem.classList.remove('active');
                });
                
                // If the clicked item wasn't active, make it active
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });
    }
    
    // Initialize policy toggles
    initializePolicyToggles();
}); 