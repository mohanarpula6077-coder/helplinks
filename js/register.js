
import { auth } from "./firebase-config.js";
import {
    createUserWithEmailAndPassword,
    updateProfile
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", async function(event) {
        event.preventDefault();

        const name = document.getElementById("fullName").value.trim();
        const email = document.getElementById("registerEmail").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const password = document.getElementById("registerPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const status = document.getElementById("registerStatus");

        if (!name || !email || !phone || !password || !confirmPassword) {
            status.textContent = "Please fill all fields!";
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            status.textContent = "Enter a valid email!";
            return;
        }

        if (!/^[6-9][0-9]{9}$/.test(phone)) {
            status.textContent = "Enter a valid phone number!";
            return;
        }

        if (password.length < 6) {
            status.textContent = "Password must contain 6 characters!";
            return;
        }

        if (password !== confirmPassword) {
            status.textContent = "Passwords do not match!";
            return;
        }

        try {
            status.textContent = "Creating account...";

            const result = await createUserWithEmailAndPassword(
                auth, email, password
            );

            await updateProfile(result.user, {
                displayName: name
            });

            localStorage.setItem("helpLinkUser", JSON.stringify({
                name: name,
                email: email,
                phone: phone
            }));

            status.style.color = "green";
            status.textContent = "Registration successful!";

        } catch (error) {
            status.style.color = "red";

            if (error.code === "auth/email-already-in-use") {
                status.textContent = "This email is already registered!";
            } else {
                status.textContent = error.message;
            }
        }
    });
}
