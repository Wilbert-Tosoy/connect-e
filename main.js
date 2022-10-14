const navBar = document.getElementById("nav-bar");
const navClose = document.getElementById("nav-close");
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".links");

navMenu.addEventListener("click", () => {
    navBar.classList.add("active");
});

navClose.addEventListener("click", () => {
    navBar.classList.remove("active");
});

navLink.forEach(n => n.addEventListener("click", () => {
    navBar.classList.remove("active");
}));

