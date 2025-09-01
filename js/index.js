(function () {
    console.log("JavaScript is running!");

    const burgerIcon = document.getElementById("burger-icon");
    const closeIcon = document.getElementById("close-icon");
    const mobileNav = document.querySelector(".mobile-nav-container");

    burgerIcon.addEventListener("click", function () {
        closeIcon.style.display = "block";
        mobileNav.style.display = "flex";
    });

    closeIcon.addEventListener("click", function () {
        closeIcon.style.display = "none";
        mobileNav.style.display = "none";
    });
})();
