// Scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});

// Navbar Hamburger Selection
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav")

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

navLink.forEach((link) =>
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    }),
);
