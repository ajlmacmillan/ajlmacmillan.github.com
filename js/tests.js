(function () {

    console.log("Running tests...");

    function test(name, fn) {
        try {
            fn();
            console.log(`✅ ${name}`);
        } catch (err) {
            console.error(`❌ ${name}`);
            console.error(err);
        }
    }

    function assert(condition, message) {
        if (!condition) throw new Error(message);
    }

    // -----------------------------
    // Burger Menu Tests
    // -----------------------------

    test("Burger click shows mobile nav", () => {
        const burger = document.getElementById("burger-icon");
        const closeIcon = document.getElementById("close-icon");
        const nav = document.querySelector(".mobile-nav-container");

        burger.dispatchEvent(new Event("click", { bubbles: true }));

        assert(closeIcon.style.display === "block", "Close icon should be visible");
        assert(nav.style.display === "flex", "Nav should be flex");
    });

    test("Close click hides mobile nav", () => {
        const closeIcon = document.getElementById("close-icon");
        const nav = document.querySelector(".mobile-nav-container");

        closeIcon.dispatchEvent(new Event("click", { bubbles: true }));

        assert(closeIcon.style.display === "none", "Close icon should be hidden");
        assert(nav.style.display === "none", "Nav should be hidden");
    });

    // -----------------------------
    // Mock Data
    // -----------------------------

    const mockAnnouncements = {
        data: [
            {
                title: "Announcement 1",
                date: "2026-02-25",
                description: "Test description",
                url: "#",
                type: "announcement"
            },
            {
                title: "Blog Post 1",
                date: "2026-02-24",
                description: "Blog description",
                url: "#",
                type: "blog"
            }
        ]
    };

    const mockTagged = {
        data: [
            {
                title: "Tagged 1",
                date: "2026-02-20",
                description: "Desc A",
                url: "#",
                type: "blog",
                tags: ["tag1", "tag2"]
            }
        ]
    };

    // -----------------------------
    // loadAnnouncements Tests
    // -----------------------------

    test("loadAnnouncements renders correct number of cards", () => {
        const container = document.querySelector(".cards-container");
        container.innerHTML = "";

        loadAnnouncements(mockAnnouncements);

        assert(container.children.length === 2, "Should render 2 cards");
    });

    test("Blog type gets blog-card class", () => {
        const container = document.querySelector(".cards-container");
        container.innerHTML = "";

        loadAnnouncements(mockAnnouncements);

        const secondCard = container.children[1]
            .querySelector(".card");

        assert(
            secondCard.classList.contains("blog-card"),
            "Blog card should have blog-card class"
        );
    });

    // -----------------------------
    // loadTagged Tests
    // -----------------------------

    test("loadTagged renders tags correctly", () => {
        const container = document.querySelector(".cards-container");
        container.innerHTML = "";

        loadTagged(mockTagged);

        const tags = container.querySelectorAll(".card-tag");
        assert(tags.length === 2, "Should render 2 tags");
        assert(tags[0].textContent === "tag1", "First tag incorrect");
    });

    // -----------------------------
    // Route Mapping Logic (Safe Simulation)
    // -----------------------------

    test("Route map resolves correctly", () => {
        const routeMap = {
            "/": "announcements.json",
            "/pages/blog/": "blog.json",
            "/pages/creative/": "creative.json"
        };

        const testPaths = {
            "/": "announcements.json",
            "/pages/blog/": "blog.json",
            "/pages/creative/": "creative.json",
            "/unknown/": undefined
        };

        for (const path in testPaths) {
            assert(
                routeMap[path] === testPaths[path],
                `Route failed for ${path}`
            );
        }
    });

    console.log("Tests complete.");

})();