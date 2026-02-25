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
        const path = window.location.pathname;

        const routeMap = {
            "/": "announcements.json",
            "/pages/blog/": "blog.json",
            "/pages/creative/": "creative.json"
        };

        const dataFile = routeMap[path];

        if (!dataFile) return;

        // fetch JSON data
        fetch(`/data/${dataFile}`)
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
        const listItem = document.createElement("li");
        listItem.className = "card-list-item";
        const link = document.createElement("a");
        link.className = "card-link";
        link.href = item.url;

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

        listItem.appendChild(link);
        link.appendChild(card);
        card.appendChild(title);
        card.appendChild(date);
        card.appendChild(description);
        container.appendChild(listItem);
    });
}

function loadTagged(data) {
    const container = document.querySelector(".cards-container");
    data.data.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.className = "card-list-item";
        const link = document.createElement("a");
        link.className = "card-link";
        link.href = item.url;

        const card = document.createElement("div");
        card.className = item.type == "blog" ? "card blog-card" : "card";

        const title = document.createElement("h3");
        title.className = "card-title";
        title.innerHTML = item.title;

        const published = document.createElement("p");
        published.className = "card-date";
        published.innerHTML = `Published: ${item.date}`;

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

        listItem.appendChild(link);
        link.appendChild(card);
        card.appendChild(title);
        card.appendChild(published);
        card.appendChild(description);
        card.appendChild(tags);
        container.appendChild(listItem);
    });
}
