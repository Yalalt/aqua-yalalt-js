const form = document.querySelector(".form");
const countriesContainer = document.querySelector(".countries");
const countryInput = document.getElementById("inputValue");
// https://restcountries.com/v3.1/name/${country}
// https://restcountries.com/v3.1/alpha/${neighbour}
//https://restcountries.com/v2/alpha/{code}  3 letter country code
const urlCountry = "https://restcountries.com/v3.1/name/";
const url = "https://restcountries.com/v3.1/all";
let neighbours = [];

/**
 * Zassaarai nemj zasaarai
 * **/


function getCountry(country) {
  fetch(urlCountry + country).then(res => res.json())
  .then((data) => { displayData(data[0], "searched"); getNeighbours(neighbours); }).catch((error) => console.error(error));
}

function getNeighbours(neighbours){
  neighbours.forEach((neighbour) => {
    console.log(neighbour);
    fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
    .then(res => res.json())
    .then((data) => {
      displayData(data[0], "neighbour")
    });
  });
}

function displayData(country, className) {

    let countryData = country;
    let htmlDom = `<article class="country ${className}">
        <img class="country__img" src="${countryData.flags.svg}" />
        <div class="country__data">
          <h3 class="country__name">${countryData.name.common}</h3>
          <h4 class="country__region">${countryData.region}</h4>
          <p class="country__row"><span>👫</span>${countryData.population.toLocaleString()}</p>
          <p class="country__row"><span>🗣️</span>${
            Object.values(countryData.languages)[0]
          }</p>
          <p class="country__row"><span>💰</span>${
            Object.values(countryData.currencies)[0].name
          } / ${Object.values(countryData.currencies)[0].symbol}</p>
        </div>
      </article>`;
    countriesContainer.innerHTML = htmlDom;
    countryInput.value = "";
    neighbours = country.borders;
    console.log(neighbours);

}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  getCountry(countryInput.value);
});