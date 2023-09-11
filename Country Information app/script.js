document.addEventListener("DOMContentLoaded", () => {
    const countryInfoElement = document.querySelector(".country-info");

    function fetchCountryData() {
        fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomCountry = data[randomIndex];

            const countryName = randomCountry.name.common;
            const capital = randomCountry.capital[0] || "N/A";
            const population = randomCountry.population.toLocaleString() || "N/A";
            const region = randomCountry.region || "N/A";

            const countryInfoHTML = `
                <p>Country: ${countryName}</p>
                <p>Capital: ${capital}</p>
                <p>Population: ${population}</p>
                <p>Region: ${region}</p>
            `;

            countryInfoElement.innerHTML = countryInfoHTML;
        })
        .catch(error => console.error("Error fetching data:", error));
    }

    // Initial fetch for the first country
    fetchCountryData();
});