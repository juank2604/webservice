document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    const response = await fetch("https://social-network-backend.onrender.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });
    
    const data = await response.json();
    if (response.ok) {
        alert("Inicio de sesión exitoso");
        window.location.href = "home.html";
    } else {
        alert(data.error);
    }
});
