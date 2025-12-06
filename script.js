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
