// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    console.log('Mobile menu script loaded');

    const hamburger = document.getElementById('hamburger-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOverlay = document.getElementById('menu-overlay');
    const body = document.body;
    
    if (!hamburger || !mobileMenu || !menuOverlay) {
        console.error('Mobile menu elements not found', {
            hamburger: !!hamburger,
            mobileMenu: !!mobileMenu,
            menuOverlay: !!menuOverlay
        });
        return;
    }
    
    // Function to toggle menu state
    function toggleMenu() {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        body.style.overflow = body.style.overflow === 'hidden' ? '' : 'hidden';
        console.log('Menu toggled, active:', hamburger.classList.contains('active'));
    }
    
    // Function to close menu
    function closeMenu() {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        body.style.overflow = '';
        console.log('Menu closed');
    }
    
    // Toggle menu when hamburger is clicked
    hamburger.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
    });
    
    // Close menu when overlay is clicked
    menuOverlay.addEventListener('click', closeMenu);
    
    // Close menu when clicking on links
    const mobileLinks = document.querySelectorAll('.mobile-menu-links a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    
    // Close menu when ESC key is pressed
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            closeMenu();
        }
    });
    
    // Close menu when window is resized to desktop size
    window.addEventListener('resize', function() {
        if (window.innerWidth > 991 && mobileMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    console.log('Mobile menu initialized successfully');
}); 