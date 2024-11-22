let body = "";
let countriesData = [];  // Array to store all country data
fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
        countriesData = data;
        displayCountries(data);
    });

    // Function to display countries
    function displayCountries(countries) {
        body = "";
        countries.forEach((country) => {
            body += ` <div class="card p-3 m-3" style="width: 18rem;">
                <img src="${country.flags.png}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title fs-3 text-dark">${country.name.common}</h5>
                   <p class="card-text fw-bold"><span class="fw-bold text-primary fs-5">Capital : </span> ${country.capital}</p>
                  <p class="card-text fw-bold"><span class="fw-bold fs-6">Region : </span>  ${country.region}</p>
                  <p class="card-text fw-bold"> Population : ${country.population}</p>
                  <a href="${country.maps.googleMaps}" class="btn btn-primary">View in Google Maps</a>
                </div>
            </div>`;
            console.log(country);
        });
        document.getElementById("row").innerHTML=body;
        console.log(body);
    }
   
    // Function to filter countries based on the search input
function filterCountries() {
    const searchValue = document.getElementById("searchInput").value.toLowerCase();
    const filteredCountries = countriesData.filter((country) => {
        return country.name.common.toLowerCase().includes(searchValue);
    });
    displayCountries(filteredCountries);
}

    