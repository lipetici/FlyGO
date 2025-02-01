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
