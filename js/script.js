document.getElementById('flight-search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;
    const departureDate = document.getElementById('departure-date').value;
    const returnDate = document.getElementById('return-date').value;

    console.log('Origem:', origin);
    console.log('Destino:', destination);
    console.log('Data de Ida:', departureDate);
    console.log('Data de Volta:', returnDate);

    // Redirecionar para a página de resultados com os parâmetros de pesquisa
    window.location.href = `search-results.html?origin=${origin}&destination=${destination}&departureDate=${departureDate}&returnDate=${returnDate}`;
});
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");

    if (email === "admin@teste.com" && password === "1234") {
        alert("Login bem-sucedido!");
        window.location.href = "dashboard.html"; // Redireciona para outra página
    } else {
        errorMessage.textContent = "E-mail ou senha incorretos.";
    }
});