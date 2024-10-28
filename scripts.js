function showForgotPassword() {
    alert("Please contact support for password assistance.");
}

function showBookingForm() {
    document.getElementById("bookingForm").style.display = "block";
    document.getElementById("myBookings").style.display = "none";
    document.getElementById("support").style.display = "none";
}

function showSection(section) {
    document.getElementById("bookingForm").style.display = "none";
    document.getElementById("myBookings").style.display = "none";
    document.getElementById("support").style.display = "none";
    document.getElementById(section).style.display = "block";
}

function signUp() {
    const password = document.getElementById("signUpPassword").value;
    const email = document.getElementById("email").value;

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    if (!validatePassword(password)) {
        alert("Password must be at least 8 characters with no spaces.");
        return;
    }

    alert("Sign up successful. Please log in.");
    document.getElementById("signUpForm").reset();
    showLogin();
}

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please enter your credentials.");
        return;
    }

    alert("Login successful.");
    document.getElementById("initialPage").style.display = "none";
    document.getElementById("homepage").style.display = "block";
}

function submitBooking() {
    const phone = document.getElementById("patientPhone").value;
    const name = document.getElementById("patientName").value;

    if (name.trim() === "") {
        alert("Please enter the patient's name.");
        return;
    }
    if (!validatePhoneNumber(phone)) {
        alert("Phone number must start with +234 and be 10 digits.");
        return;
    }

    const ticketId = "T
