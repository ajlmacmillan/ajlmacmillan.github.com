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
                    case "portfolio.json":
                        loadPortfolioProjects(json);
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
        card.className = "card";

        const title = document.createElement("h3");
        title.className = "card-title";
        title.textContent = item.title;

        const date = document.createElement("p");
        date.className = "card-date";
        date.textContent = `Published: ${item.date}`;

        const description = document.createElement("p");
        description.className = "card-summary";
        description.textContent = item.description;

        const link = document.createElement("a");
        link.className = "card-link";
        link.href = item.url;
        link.textContent = "Read More";

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
        card.className = "card";

        const title = document.createElement("h3");
        title.className = "card-title";
        title.textContent = item.title;

        const published = document.createElement("p");
        published.className = "card-date";
        published.textContent = `Published: ${item.published}`;

        const description = document.createElement("p");
        description.className = "card-summary";
        description.textContent = item.description;

        const tags = document.createElement("div");
        tags.className = "card-tags";
        item.tags.forEach((tag) => {
            const tagSpan = document.createElement("span");
            tagSpan.className = "card-tag";
            tagSpan.textContent = tag;
            tags.appendChild(tagSpan);
        });

        const link = document.createElement("a");
        link.className = "card-link";
        link.href = item.url;
        link.textContent = "Read More";

        card.appendChild(title);
        card.appendChild(published);
        card.appendChild(description);
        card.appendChild(tags);
        card.appendChild(link);
        container.appendChild(card);
    });
}

function loadPortfolioProjects(data) {
    const container = document.querySelector(".cards-container");
    data.data.forEach((item) => {
        const card = document.createElement("div");
        card.className = "card";

        const image = document.createElement("img");
        image.className = "card-image";
        image.src = item.image;
        image.alt = item.title;

        const metaContainer = document.createElement("div");
        metaContainer.className = "card-meta";

        const title = document.createElement("h3");
        title.className = "card-title";
        title.textContent = item.title;

        const description = document.createElement("p");
        description.className = "card-description";
        description.textContent = item.description;

        const company = document.createElement("p");
        company.className = "card-company";
        company.textContent = item.company;

        const industry = document.createElement("p");
        industry.className = "card-industry";
        industry.textContent = item.industry;

        const link = document.createElement("a");
        link.className = "card-link";
        link.href = item.url;
        link.textContent = "View Project";

        card.appendChild(image);
        metaContainer.appendChild(title);
        metaContainer.appendChild(date);
        metaContainer.appendChild(description);
        metaContainer.appendChild(company);
        metaContainer.appendChild(industry);
        metaContainer.appendChild(link);
        card.appendChild(metaContainer);
        container.appendChild(card);
    });
}
