const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const dotsContainer = document.querySelector(".dots"); // Add <div class="dots"></div> in HTML

let current = 0;
let autoSlide;
let startX = 0;
let endX = 0;

// 1️⃣ Create dots
slides.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");

    dot.addEventListener("click", () => {
        current = index;
        showSlide(current);
        resetAutoSlide();
    });

    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

// 2️⃣ Show slide
function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");

    // Update dots
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

// 3️⃣ Next / Prev slides
function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
}

function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
}

// 4️⃣ Auto play
function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 4000);
}

function resetAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
}

// 5️⃣ Button events
nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
});

prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAutoSlide();
});

// 6️⃣ Swipe support for mobile
slides.forEach(slide => {
    slide.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    });

    slide.addEventListener("touchend", (e) => {
        endX = e.changedTouches[0].clientX;

        if (startX - endX > 50) {
            nextSlide();
        } else if (endX - startX > 50) {
            prevSlide();
        }

        resetAutoSlide();
    });
});

// 7️⃣ Start slider
showSlide(current);
startAutoSlide();

// Scroll Fade-In Animation

const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.2
});

fadeElements.forEach(element => {
    observer.observe(element);
});

// ================= STAGGER CHILD ANIMATION =================

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            const children = entry.target.querySelectorAll('.fade-child');

            children.forEach((child, index) => {
                setTimeout(() => {
                    child.classList.add('show');
                }, index * 150); // 150ms delay between each
            });

        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.fade-in').forEach(section => {
    sectionObserver.observe(section);
});

// ================= HERO LOAD ANIMATION =================

window.addEventListener('load', () => {
    const heroElements = document.querySelectorAll('.hero-left > *');

    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('hero-show');
        }, index * 200); // 200ms stagger
    });
});

// ================= ABOUT TEXT STAGGER =================

const aboutSection = document.querySelector('#about');

const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            const children = entry.target.querySelectorAll('.fade-child');

            children.forEach((child, index) => {
                setTimeout(() => {
                    child.classList.add('show');
                }, index * 200);
            });

            aboutObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.3
});

aboutObserver.observe(aboutSection);

// ================= PRODUCT FILTER =================

const filters = document.querySelectorAll(".filter");
const cakes = document.querySelectorAll(".cake-card");

filters.forEach(button => {

    button.addEventListener("click", () => {

        // change active button
        document.querySelector(".filter.active").classList.remove("active");
        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        cakes.forEach(cake => {

            if (filter === "all" || cake.getAttribute("data-category") === filter) {
                cake.style.display = "block";
            } else {
                cake.style.display = "none";
            }

        });

    });

});

// ================= PRODUCT MODAL =================

const modal = document.getElementById("cake-modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalPrice = document.getElementById("modal-price");
const modalDesc = document.getElementById("modal-desc");
const closeModal = document.querySelector(".close-modal");

cakes.forEach(cake => {

    cake.addEventListener("click", () => {

        const img = cake.querySelector("img").src;
        const title = cake.querySelector("h4").innerText;
        const price = cake.querySelector(".price").innerText;
        const desc = cake.dataset.desc;

        modalImg.src = img;
        modalTitle.innerText = title;
        modalPrice.innerText = price;
        modalDesc.innerText = desc;

        modal.style.display = "flex";

    });

});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});