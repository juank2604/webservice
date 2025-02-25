document.getElementById("registerForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch("https://social-network-backend.onrender.com/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password })
    });

    const data = await response.json();
    if (response.ok) {
        alert("Registro exitoso, ahora puedes iniciar sesión");
        window.location.href = "index.html";
    } else {
        alert(data.error);
    }
});
