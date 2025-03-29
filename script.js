document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger-menu");
    const navUl = document.getElementById("nav-ul");

    hamburger.addEventListener("click", function() {
        navUl.classList.toggle("show");
    });
});
