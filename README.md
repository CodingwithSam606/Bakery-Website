# Bakery-Website - Premium Web Experience

A high-fidelity, fully responsive frontend landing page for a premium bakery. Built from scratch to demonstrate advanced CSS architecture, fluid micro-interactions, and mobile-first UX design principles.

Tech Stack: HTML5, CSS3, Vanilla JavaScript.

---

## Overview

Tusam Bakery is designed to emulate the digital presence of a high-end patisserie. The project moves away from standard flat UI templates by utilizing luxury typography, multi-layered shadows, and seamless section transitions. It is a purely frontend project, localized for the Nigerian market using Naira pricing.

---

## Key Features

- Cinematic Hero Slider: Smooth, crossfading background images with custom linear navigation bars.
- Dynamic Product Filtering: Vanilla JavaScript logic to filter cakes by category (Birthday, Wedding, Chocolate, Fruit).
- Premium Product Modals: Detailed item popups featuring a cinematic scaling animation and high-end blurred backdrop.
- Seamless Section Transitions: Custom SVG shape dividers to elegantly blend the hero section into the main content.
- Scroll-Triggered Animations: Fade-in effects that bring elements to life as the user scrolls down the page.

---

## Technical Highlights

This project focuses heavily on the feel of a website, rather than just how it looks:

1. The 4-Breakpoint System: Instead of a basic desktop and mobile media query, the layout gracefully adapts across 4 exact breakpoints (1024px, 840px, 600px, 420px) to prevent awkward in-between sizing.
2. Physics-Based Mobile Menu: The fullscreen mobile menu uses a custom CSS easing curve to simulate weight and momentum, rather than a cheap instant pop-up.
3. Scroll-Locking UX: When the mobile menu is open, JavaScript locks the body scrolling. This prevents the background from moving while the user navigates, which is a crucial UX standard.
4. Luxury Shadow Architecture: The site uses multi-layer, warm-toned shadows to create realistic depth and make elements appear to physically float off the screen.
5. Typography Pairing: Uses Playfair Display for headings to establish elegance, paired with Inter for body text to ensure maximum readability.

---

## Getting Started

To run this project locally, you do not need any build tools. It is pure HTML, CSS, and JS.

1. Clone the repository to your local machine.
2. Navigate to the project folder.
3. Open the index.html file directly in your browser.

---

## Project Structure

tusam-bakery/
|-- index.html          (Main HTML structure)
|-- style.css           (Complete styling and responsive queries)
|-- script.js           (Slider logic, filters, modal, mobile menu)
|-- README.md           (Project documentation)
|-- images/             (All bakery assets and photos)

---

## Responsive Design

The layout is heavily optimized for touch devices:

- Tablets (840px): Navigation collapses into an elegant fullscreen overlay.
- Mobile (600px): Product grids shift to 2-column, modal layouts stack vertically.
- Small Phones (420px): Grids shift to a constrained 1-column layout to maintain the card aesthetic, and buttons become full-width for easy thumb tapping.

---

## Future Enhancements

If this project were to go into production, the next steps would be:

- Integration with a backend to fetch products from a database.
- Implementation of a functional shopping cart.
- Adding a multi-step custom cake order form with image uploads.
- WebP image format implementation for faster load times.

---

DESKTOP PREVIEW: 📸
<img width="1333" height="684" alt="Screenshot (253)" src="https://github.com/user-attachments/assets/ec90df49-687b-4380-b484-66ea267512bc" />


## Author

Samuel Asalu
GitHub: https://github.com/CodingwithSam606

Note: This is a practice/demo project. All images are used for educational purposes. No real e-commerce transactions can be made.
