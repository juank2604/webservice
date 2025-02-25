document.getElementById("forgotPasswordForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;

    const response = await fetch("https://social-network-backend.onrender.com/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
    });

    const data = await response.json();
    if (response.ok) {
        alert("Se ha enviado un enlace de recuperación a tu correo.");
    } else {
        alert(data.error);
    }
});
