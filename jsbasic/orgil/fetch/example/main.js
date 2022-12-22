const form = document.querySelector("form");
const countriesContainer = document.querySelector(".countries");
// https://restcountries.com/v3.1/name/${country}
// https://restcountries.com/v3.1/alpha/${neighbour}
const url = "https://restcountries.com/v3.1/name/";

// async function renderCountry(country) {
//   try {
//     let dataRes = await fetch(url + country);
//     let responsedata = await dataRes.json();
//     return responsedata;
//   } catch (error) {
//     console.error("Error uuslee: " + error);
//   }
// }

function getCountry(country) {
    console.log(url.concat(country));
    fetch(url.concat(country)).then((res) => res.json()).then((data) => displayData(data[0])).catch((error) => console.error(error));
}

function displayData(data) {
  console.log(data);

//   renderCountry(country).then((data) => {
//     console.log(data);
    let htmlDom = `<article class="country">
        <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${data.population.toLocaleString()}</p>
          <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
          <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name} / ${Object.values(data.currencies)[0].symbol}</p>
        </div>
      </article>`;
      countriesContainer.innerHTML += htmlDom;
//   });
  // inputV.value = "";
}

form.addEventListener("submit", (e) => {
    e.defaultPrevented();
    console.log(e.target.country_name.value);
    getCountry(e.target.country_name.value);
});