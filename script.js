// ===========================
// School Announcement Portal
// script.js
// ===========================

// Display welcome message
window.onload = function () {
    console.log("School Announcement Portal Loaded Successfully!");
};

// ===========================
// Login Function
// ===========================

function login() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let role = document.getElementById("role").value;

    if (email === "" || password === "") {
        alert("Please enter your email and password.");
        return;
    }

    if (role === "student") {
        window.location.href = "student.html";
    } else if (role === "teacher") {
        window.location.href = "teacher.html";
    } else {
        alert("Please select a role.");
    }

}

// ===========================
// Contact Form
// ===========================

function sendMessage() {

    alert("Your message has been sent successfully!");

    document.getElementById("contactForm").reset();

}

// ===========================
// Teacher Announcement
// ===========================

function postAnnouncement() {

    let title = document.getElementById("title").value;
    let message = document.getElementById("message").value;

    if (title === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    alert("Announcement Posted Successfully!");

    document.getElementById("announcementForm").reset();

}

// ===========================
// Search Announcements
// ===========================

function searchAnnouncement() {

    let input = document.getElementById("search").value.toLowerCase();

    let cards = document.getElementsByClassName("announcement");

    for (let i = 0; i < cards.length; i++) {

        let text = cards[i].innerText.toLowerCase();

        if (text.includes(input)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }

    }

}

// ===========================
// Logout
// ===========================

function logout() {

    if (confirm("Do you want to logout?")) {

        window.location.href = "login.html";

    }

}

// ===========================
// Date & Time
// ===========================

function updateDateTime() {

    let today = new Date();

    let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    let current = today.toLocaleDateString("en-US", options);

    let dateElement = document.getElementById("date");

    if (dateElement) {
        dateElement.innerHTML = current;
    }

}

setInterval(updateDateTime, 1000);

// ===========================
// Greeting
// ===========================

function greeting() {

    let hour = new Date().getHours();

    let message = "";

    if (hour < 12) {

        message = "Good Morning";

    } else if (hour < 18) {

        message = "Good Afternoon";

    } else {

        message = "Good Evening";

    }

    let greetingElement = document.getElementById("greeting");

    if (greetingElement) {

        greetingElement.innerHTML = message;

    }

}

greeting();