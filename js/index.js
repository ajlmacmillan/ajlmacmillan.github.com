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

    window.addEventListener("load", () => {
        // get the path to determine JSON file
        const path = window.location.href;

        // mapping of paths to JSON files
        const fileMap = {
            "index.html": "announcements.json",
            "pages/blog/main.html": "blog.json",
            "pages/creative/main.html": "creative.json",
            "pages/portfolio/main.html": "portfolio.json",
        };

        // get JSON data file name based on path
        let dataFile = "announcements.json"; // default file
        for (const [key, value] of Object.entries(fileMap)) {
            if (path.includes(key)) {
                dataFile = value;
                break;
            }
        }

        // fetch JSON data
        fetch(`https://www.livingcopy.uk/data/${dataFile}`)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
            });
    });
})();
