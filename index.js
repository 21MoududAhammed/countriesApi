const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => showAllCountriesData(data))
}

const showAllCountriesData = (data) =>{
    const container = data.map(country => manageCountryData(country))
    const container2 = container.join(' ');
    const displayCountriesSection = document.getElementById('allCountriesDisplay')
    displayCountriesSection.innerHTML = container2;
}
 const manageCountryData = (country) =>{
        const {flags,name,area,capital,independent} = country;
        
        return(`
            <div class="country">
                <img src="${flags.png}">
                <h2>Name:<span class="countryName">${name.common}</span></h2>
                <h2>Capital:${capital}</h2>
                <h3>Area: ${area} km</h3>
            </div>
        `)
}
loadCountries();