/* =====================================================
   SOURAV SUNA - PORTFOLIO
   script.js
===================================================== */

/* ===========================
   REVEAL ON SCROLL
=========================== */

const revealElements = document.querySelectorAll(
    ".section, .project-card, .timeline-item, .skill, .glass-card, .contact-card"
);

revealElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
});

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                entry.target.style.transition =
                    "opacity .8s ease, transform .8s ease";
            }
        });
    },
    {
        threshold: 0.15,
    }
);

revealElements.forEach((element) => observer.observe(element));

/* ===========================
   ACTIVE NAVIGATION
=========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});

/* ===========================
   LOGO → SCROLL TO TOP
=========================== */

const logo = document.querySelector(".logo");

if (logo) {

    logo.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

    });

}

/* ===========================
   PROJECT CARD 3D EFFECT
=========================== */

const cards = document.querySelectorAll(".project-card");

cards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -4;
        const rotateY = ((x - centerX) / centerX) * 4;

        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-8px)
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = `
            perspective(1000px)
            rotateX(0deg)
            rotateY(0deg)
            translateY(0px)
        `;

    });

});

/* ===========================
   SMOOTH SCROLL
=========================== */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {

    anchor.addEventListener("click", function (event) {

        event.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth",
            });

        }

    });

});

/* ===========================
   FOOTER YEAR
=========================== */

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
        `© ${new Date().getFullYear()} Sourav Suna. All Rights Reserved.`;

}

/* ===========================
   PAGE LOADED
=========================== */

window.addEventListener("load", () => {

    console.log("✅ Portfolio Loaded Successfully");

});