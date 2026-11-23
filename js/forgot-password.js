
import { auth } from "./firebase-config.js";
import { sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

const resetForm = document.getElementById("resetForm");

resetForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    const email = document.getElementById("resetEmail").value.trim();
    const status = document.getElementById("resetStatus");

    status.style.color = "#1768a5";
    status.textContent = "Sending reset email...";

    try {
        await sendPasswordResetEmail(auth, email);

        status.style.color = "green";
        status.textContent = "Password reset link sent! Check your inbox.";

    } catch (error) {
        status.style.color = "red";

        if (error.code === "auth/user-not-found") {
            status.textContent = "No account found with this email.";
        } else {
            status.textContent = "Unable to send email. Please try again.";
            console.error(error);
        }
    }
});
