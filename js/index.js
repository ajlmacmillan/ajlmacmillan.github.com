(function () {
    const burgerIcon = document.getElementById("burger-icon");
    const closeIcon = document.getElementById("close-icon");
    const mobileNav = document.querySelector(".mobile-nav-container");

    if (burgerIcon) {
        burgerIcon.addEventListener("click", function () {
            closeIcon.style.display = "block";
            mobileNav.style.display = "flex";
        });

        closeIcon.addEventListener("click", function () {
            closeIcon.style.display = "none";
            mobileNav.style.display = "none";
        });
    }

    window.addEventListener("load", () => {
        // get the path to determine JSON file
        const path = window.location.href;

        // mapping of paths to JSON files
        const fileMap = {
            "index.html": "announcements.json",
            "pages/blog/main.html": "blog.json",
            "pages/creative/main.html": "creative.json",
        };

        // get JSON data file name based on path
        let dataFile = ""; // default file
        for (const [key, value] of Object.entries(fileMap)) {
            if (path.includes(key)) {
                dataFile = value;
                break;
            }
        }

        // if no matching file, exit
        if (!dataFile) return;

        // fetch JSON data
        fetch(`https://www.livingcopy.uk/data/${dataFile}`)
            .then((response) => response.json())
            .then((json) => {
                switch (dataFile) {
                    case "announcements.json":
                        loadAnnouncements(json);
                        break;
                    case "blog.json":
                        loadTagged(json);
                        break;
                    case "creative.json":
                        loadTagged(json);
                        break;
                    default:
                        console.error("Unknown data file:", dataFile);
                }
            });
    });
})();

function loadAnnouncements(data) {
    const container = document.querySelector(".cards-container");
    data.data.forEach((item) => {
        const card = document.createElement("div");
        card.className = item.type == "blog" ? "card blog-card" : "card";

        const title = document.createElement("h3");
        title.className = "card-title";
        title.innerHTML = item.title;

        const date = document.createElement("p");
        date.className = "card-date";
        date.innerHTML = `Published: ${item.date}`;

        const description = document.createElement("p");
        description.className = "card-summary";
        description.innerHTML = item.description;

        const link = document.createElement("a");
        link.className = "card-link";
        link.href = item.url;
        link.innerHTML = "Read More";

        card.appendChild(title);
        card.appendChild(date);
        card.appendChild(description);
        card.appendChild(link);
        container.appendChild(card);
    });
}

function loadTagged(data) {
    const container = document.querySelector(".cards-container");
    data.data.forEach((item) => {
        const card = document.createElement("div");
        card.className = item.type == "blog" ? "card blog-card" : "card";

        const title = document.createElement("h3");
        title.className = "card-title";
        title.innerHTML = item.title;

        const published = document.createElement("p");
        published.className = "card-date";
        published.innerHTML = `Published: ${item.published}`;

        const description = document.createElement("p");
        description.className = "card-summary";
        description.innerHTML = item.description;

        const tags = document.createElement("div");
        tags.className = "card-tags";
        item.tags.forEach((tag) => {
            const tagSpan = document.createElement("span");
            tagSpan.className = "card-tag";
            tagSpan.innerHTML = tag;
            tags.appendChild(tagSpan);
        });

        const link = document.createElement("a");
        link.className = "card-link";
        link.href = item.url;
        link.innerHTML = "Read More";

        card.appendChild(title);
        card.appendChild(published);
        card.appendChild(description);
        card.appendChild(tags);
        card.appendChild(link);
        container.appendChild(card);
    });
}
