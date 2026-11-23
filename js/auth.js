const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
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

        const user = {
            name: name,
            email: email,
            phone: phone
        };

        localStorage.setItem("helpLinkUser", JSON.stringify(user));

        status.style.color = "green";
        status.textContent = "Registration successful!";
    });
}
// Login Form Validation

const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value;
        const status = document.getElementById("loginStatus");

        const savedUser = JSON.parse(localStorage.getItem("helpLinkUser"));

        if (!savedUser) {
            status.textContent = "Please register first!";
            return;
        }

        if (email === savedUser.email) {
            status.style.color = "green";
            status.textContent = "Login validation successful!";
            setTimeout(function() {
                localStorage.setItem("helpLinkLoggedIn", "true");
                 window.location.href = "dashboard.html";
}, 1000);
        } else {
            status.style.color = "red";
            status.textContent = "Email not found!";
        }
    });
}