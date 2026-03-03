// Année actuelle dans le footer
const yearElement = document.getElementById("current-year");
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Dark mode toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
const html = document.documentElement;

// Vérifier la préférence sauvegardée
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    html.setAttribute("data-theme", savedTheme);
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    html.setAttribute("data-theme", "dark");
}

if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
        const currentTheme = html.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        html.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    });
}

// Smooth scroll pour les liens d'ancrage
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});

// Animation au scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

document.querySelectorAll(".animate").forEach(el => observer.observe(el));

// Validation du formulaire
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let successTimeout = null;

const contactForm = document.getElementById("contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = contactForm.querySelector('input[name="name"]');
        const email = contactForm.querySelector('input[name="email"]');
        const message = contactForm.querySelector('textarea[name="message"]');

        let isValid = true;

        // Réinitialiser les erreurs
        contactForm.querySelectorAll(".form__error").forEach(el => el.remove());

        // Validation du nom
        if (!name.value.trim()) {
            showError(name, "Le nom est requis");
            isValid = false;
        }

        // Validation de l'email
        if (!email.value.trim()) {
            showError(email, "L'email est requis");
            isValid = false;
        } else if (!emailRegex.test(email.value)) {
            showError(email, "L'email n'est pas valide");
            isValid = false;
        }

        // Validation du message
        if (!message.value.trim()) {
            showError(message, "Le message est requis");
            isValid = false;
        } else if (message.value.trim().length < 10) {
            showError(message, "Le message doit contenir au moins 10 caractères");
            isValid = false;
        }

        if (isValid) {
            clearTimeout(successTimeout);
            contactForm.querySelector(".form__success")?.remove();

            const successMessage = document.createElement("div");
            successMessage.className = "form__success";
            successMessage.textContent = "Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.";
            contactForm.appendChild(successMessage);

            contactForm.reset();

            successTimeout = setTimeout(() => {
                successMessage.remove();
            }, 5000);
        }
    });
}

function showError(input, message) {
    const error = document.createElement("span");
    error.className = "form__error";
    error.textContent = message;
    input.parentElement.appendChild(error);
}

// Animation du header au scroll
const header = document.querySelector(".header");
if (header) {
    window.addEventListener("scroll", () => {
        header.classList.toggle("header--scrolled", window.pageYOffset > 100);
    });
}
