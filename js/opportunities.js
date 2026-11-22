
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const locationFilter = document.getElementById("locationFilter");
const clearFilters = document.getElementById("clearFilters");

const cards = document.querySelectorAll(".opportunity-card");
const resultCount = document.getElementById("result-count");
const noResults = document.getElementById("noResults");

function filterOpportunities() {

    const search = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    const location = locationFilter.value;

    let visibleCount = 0;

    cards.forEach(card => {

        const title = card.dataset.title.toLowerCase();
        const cardCategory = card.dataset.category;
        const cardLocation = card.dataset.location;

        const matchesSearch = title.includes(search);
        const matchesCategory =
            category === "all" || cardCategory === category;

        const matchesLocation =
            location === "all" || cardLocation === location;

        const showCard =
            matchesSearch && matchesCategory && matchesLocation;

        card.style.display = showCard ? "block" : "none";

        if (showCard) {
            visibleCount++;
        }
    });

    resultCount.textContent = visibleCount + " opportunities";

    noResults.hidden = visibleCount !== 0;
}

searchInput.addEventListener("input", filterOpportunities);
categoryFilter.addEventListener("change", filterOpportunities);
locationFilter.addEventListener("change", filterOpportunities);

clearFilters.addEventListener("click", () => {

    searchInput.value = "";
    categoryFilter.value = "all";
    locationFilter.value = "all";

    filterOpportunities();
});
// Join Opportunity Feature

document.querySelectorAll(".opportunity-card").forEach(card => {
    const button = document.createElement("button");

    button.textContent = "Join Opportunity";
    button.type = "button";

    button.addEventListener("click", function () {
        const title = card.dataset.title;

        let joined = JSON.parse(
            localStorage.getItem("joinedOpportunities") || "[]"
        );

        if (joined.includes(title)) {
            alert("You already joined this opportunity!");
            return;
        }

        joined.push(title);

        localStorage.setItem(
            "joinedOpportunities",
            JSON.stringify(joined)
        );

        alert("Successfully joined: " + title);
        button.textContent = "Joined";
    });

    card.appendChild(button);
});
// Join Opportunity Feature
document.querySelectorAll(".opportunity-card").forEach(card => {
    const button = document.createElement("button");

    button.textContent = "Join Opportunity";
    button.type = "button";
    button.className = "apply-btn";

    button.addEventListener("click", function () {
        const title = card.dataset.title;

        let joined = JSON.parse(
            localStorage.getItem("joinedOpportunities") || "[]"
        );

        if (joined.includes(title)) {
            alert("You already joined this opportunity!");
            button.textContent = "Joined";
            return;
        }

        joined.push(title);

        localStorage.setItem(
            "joinedOpportunities",
            JSON.stringify(joined)
        );

        alert("Successfully joined: " + title);
        button.textContent = "Joined";
    });

    card.querySelector(".opportunity-info").appendChild(button);
});