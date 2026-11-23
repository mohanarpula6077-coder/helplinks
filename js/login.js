
import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", async function(event) {
        event.preventDefault();

        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value;
        const status = document.getElementById("loginStatus");

        status.style.color = "red";
        status.textContent = "Signing in...";

        try {
            await signInWithEmailAndPassword(auth, email, password);

            status.style.color = "green";
            status.textContent = "Login successful!";

            localStorage.setItem("helpLinkLoggedIn", "true");

            setTimeout(() => {
                window.location.href = "dashboard.html";
            }, 1000);

        } catch (error) {
            status.style.color = "red";
            status.textContent = "Invalid email or password. Please try again.";
            console.error(error);
        }
    });
}
