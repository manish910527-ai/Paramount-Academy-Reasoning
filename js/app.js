/* ==========================================
   PARAMOUNT ACADEMY
   app.js
   Module 2 - Part 1
========================================== */

window.addEventListener("load", () => {

    console.log("App Started");

    // Splash Screen Hide
    setTimeout(() => {

        const splash = document.getElementById("splash");
        const app = document.getElementById("app");

        if (splash) splash.style.display = "none";

        if (app) app.style.display = "block";

    }, 2000);

});


// ===============================
// Show Section
// ===============================

function showSection(sectionId){

    document.querySelectorAll(".form-section").forEach(section=>{

        section.classList.add("hidden");

    });

    const target=document.getElementById(sectionId);

    if(target){

        target.classList.remove("hidden");

    }

}

window.showSection=showSection;


// ===============================
// Empty Functions
// ===============================

function registerStudent(){

    alert("Register Module Coming Soon");

}

function loginStudent(){

    alert("Login Module Coming Soon");

}

function adminLogin(){

    alert("Admin Login Module Coming Soon");

}
