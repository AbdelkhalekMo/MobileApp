# ServiceConnect - Mobile App Landing Page

A modern, responsive landing page for a service provider mobile application, featuring smooth animations, interactive elements, and a professional design.

## Features

- Modern, clean design with attractive animations
- Fully responsive layout that works on all devices
- Animated elements using GSAP and AOS libraries
- Interactive features and smooth scrolling
- Mobile-friendly navigation with hamburger menu
- Animated statistics counters
- App screenshots carousel with captions
- Social media integration

## Setup Instructions

1. Clone or download this repository
2. Ensure all required images are in the `assets` folder (see below)
3. Open `index.html` in your web browser to view the landing page
4. Customize the content in `index.html` to match your app's features and information
5. Modify colors and styling in `styles.css` if needed

## Required Assets

The following images should be placed in the `assets` folder:

- `logo.png` - Your app logo (recommended size: 150x40px)
- `favicon.ico` - Website favicon
- `hero-app.png` - Main app screenshot for the hero section (recommended size: 300x600px)
- `app-screen1.png` and `app-screen2.png` - Floating app screenshots (recommended size: 200x400px)
- `step1.png`, `step2.png`, `step3.png` - Images for the "How It Works" section (recommended size: 400x300px)
- `screen1.png` through `screen5.png` - App screenshots for the carousel (recommended size: 250x500px)
- `google-play.png` and `app-store.png` - Store badges (recommended size: 150x50px)

## Customization

### Colors

The main colors can be easily changed by modifying the CSS variables in the `:root` section of `styles.css`:

```css
:root {
    --primary-color: #4a6bff;
    --primary-dark: #3451db;
    --secondary-color: #00d09c;
    --text-color: #333;
    --light-text: #6b7280;
    --background: #f9fafb;
    --white: #ffffff;
}
```

### Content

Edit the text content in `index.html` to match your app's features, benefits, and information.

### Animations

The animations are powered by GSAP and AOS (Animate on Scroll). You can customize them in the `script.js` file.

## Browser Compatibility

The landing page is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## Performance Optimization

- All images should be optimized for web (compressed without losing quality)
- Consider using WebP format for better performance
- Lazy loading is implemented for images

## Credits

- Font Awesome for icons
- GSAP for animations
- AOS for scroll animations
- Google Fonts for typography (Poppins)

## License

This project is available for personal and commercial use.

## Contact

For any questions or support, please contact [your email]. 