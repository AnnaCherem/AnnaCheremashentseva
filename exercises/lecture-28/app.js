document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registrationForm");
    const errorMessages = document.getElementById("errorMessages");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        
        errorMessages.innerHTML = "";

        const username = form.username.value.trim();
        const email = form.email.value.trim();
        const password = form.password.value;

        // ім’я користувача не може бути пустим
        if (username === "") {
            displayError("Username cannot be empty.");
            return;
        }

        // електронна адреса має бути у правильному форматі
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            displayError("Invalid email address.");
            return;
        }

        // пароль має містити принаймні 8 символів
        // пароль має містити принаймні одну велику літеру, одну малу літеру, одну цифру та один спеціальний символ.
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            displayError("Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one digit, and one special character.");
            return;
        }

        // після успішної реєстрації потрібно скинути значення полів форми.
        form.reset();
    });

    function displayError(message) {
        const errorMessage = document.createElement("p");
        errorMessage.textContent = message;
        errorMessages.appendChild(errorMessage);
    }
});
