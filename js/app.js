/* ==========================================
PARAMOUNT ACADEMY KHANDWA
app.js
Version : 1.0 Stable
========================================== */

// ===============================
// App Start
// ===============================

window.onload = function () {

console.log("App Started");

const splash = document.getElementById("splashScreen");
const app = document.getElementById("app");

// Hide Splash after 2 seconds
setTimeout(function () {

    if (splash) {
        splash.style.display = "none";
    }

    if (app) {
        app.style.display = "block";
    }

}, 2000);

};

// ===============================
// Show / Hide Forms
// ===============================

function showSection(sectionId) {

const sections = document.querySelectorAll(".form-section");

sections.forEach(function (section) {

    section.classList.add("hidden");

});

const current = document.getElementById(sectionId);

if (current) {

    current.classList.remove("hidden");

}

}

// Make function available to HTML
window.showSection = showSection;

// ===============================
// Temporary Buttons
// ===============================

const registerBtn = document.getElementById("registerBtn");

if (registerBtn) {

registerBtn.onclick = function () {

    alert("Student Registration Module Coming Soon");

};

}

const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {

loginBtn.onclick = function () {

    alert("Student Login Module Coming Soon");

};

}

const adminBtn = document.getElementById("adminLoginBtn");

if (adminBtn) {

adminBtn.onclick = function () {

    alert("Admin Login Module Coming Soon");

};

}

console.log("app.js Loaded Successfully");
