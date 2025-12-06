// for login page
if (location.pathname.includes("login")) {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();

        if (email === "" || password === "") {
            alert("Please fill all fields.");
            return;
        }

        alert("Login Successful!");
        window.location.href = "index.html";
    });
}



// ===== ASK A QUESTION PAGE =====
if (location.pathname.includes("ask")) {
    const form = document.getElementById("askForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let title = document.getElementById("title").value.trim();
        let details = document.getElementById("details").value.trim();

        if (title === "" || details === "") {
            alert("Please enter both title and details.");
            return;
        }

        alert("Question Submitted!");
        form.reset();
    });
}



// ===== TOPICS PAGE =====
if (location.pathname.toLowerCase().includes("topics")) {
    let topics = document.querySelectorAll(".topic-item");

    topics.forEach(function (item) {
        item.addEventListener("click", function () {
            alert("You selected topic: " + item.innerText);
        });
    });
}



// ===== PROFILE PAGE =====
if (location.pathname.includes("profile")) {
    const form = document.getElementById("profileForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Profile Updated!");
    });
}
