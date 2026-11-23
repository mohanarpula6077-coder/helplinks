
document.querySelectorAll(".event-card").forEach(card => {

    const title = card.querySelector("h3").textContent.trim();

    const button = document.createElement("button");
    button.type = "button";

    let events = JSON.parse(
        localStorage.getItem("joinedEvents") || "[]"
    );

    if (events.includes(title)) {
        button.textContent = "Registered";
        button.disabled = true;
    } else {
        button.textContent = "Register for Event";
    }

    button.addEventListener("click", function () {

        let savedEvents = JSON.parse(
            localStorage.getItem("joinedEvents") || "[]"
        );

        if (savedEvents.includes(title)) {
            alert("You already registered for this event!");
            return;
        }

        savedEvents.push(title);

        localStorage.setItem(
            "joinedEvents",
            JSON.stringify(savedEvents)
        );

        button.textContent = "Registered";
        button.disabled = true;

        alert("Successfully registered for " + title);

    });

    card.querySelector(".event-info").appendChild(button);

});
