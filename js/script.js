


document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    // Validate phone number format (for simplicity, assuming 10 digits)
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Invalid phone number");
        return;
    }

    // Check password length
    if (password.length < 8) {
        alert("Password must be at least 8 characters long");
        return;
    }

    const formData = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone_number: phone,
        password: password
    };

    console.log(formData);
    alert("Form submitted successfully!");
});

// JavaScript to toggle the navbar on small screens
document.getElementById('hamburger').addEventListener('click', function() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('show');
});


