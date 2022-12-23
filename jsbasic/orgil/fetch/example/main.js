const form = document.querySelector(".form");
const countriesContainer = document.querySelector(".countries");
const countryInput = document.getElementById("inputValue");
// https://restcountries.com/v3.1/name/${country}
// https://restcountries.com/v3.1/alpha/${neighbour}
//https://restcountries.com/v2/alpha/{code}  3 letter country code
const urlCountry = "https://restcountries.com/v3.1/name/";
const url = "https://restcountries.com/v3.1/all";
let searchCountry = [];

async function renderAllCountry() {
  try {
    let dataRes = await fetch(url);
    let responsedata = await dataRes.json();
    return responsedata;
  } catch (error) {
    console.error("Error uuslee: " + error);
  }
}

async function renderCountry(country) {
  try {
    let dataRes = await fetch(urlCountry + country);
    let responsedata = await dataRes.json();
    return responsedata;
  } catch (error) {
    console.error("Error uuslee: " + error);
  }
}

function displayData(country) {

  renderCountry(country).then((data) => {
    let countryData = data[0];
    searchCountry = countryData;
    let htmlDom = `<article class="country">
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

    renderAllCountry().then((data) => {
      let listCountries = getNeighbourCountries(searchCountry, data);
      for (let j = 0; j < listCountries.length; j++) {
        let htmlDom = `<article class="country neighbour">
        <img class="country__img" src="${listCountries[j].flags.svg}" />
            <div class="country__data">
              <h3 class="country__name">${listCountries[j].name.common}</h3>
              <h4 class="country__region">${listCountries[j].region}</h4>
              <p class="country__row"><span>👫</span>${listCountries[
                j
              ].population.toLocaleString()}</p>
              <p class="country__row"><span>🗣️</span>${
                Object.values(listCountries[j].languages)[0]
              }</p>
              <p class="country__row"><span>💰</span>${
                Object.values(listCountries[j].currencies)[0].name
              } / ${Object.values(listCountries[j].currencies)[0].symbol}</p>
            </div>
          </article>`;
        countriesContainer.innerHTML += htmlDom;
      }
    });
  });

}

function getNeighbourCountries(sCountry, data) {
  let thisCountry = sCountry;
  let icndx = 0;
  let neCountries = [];
  // songoson ulsiig object dotroos indexiin ni oloh
  for (let i = 0; i < data.length; i++) {
    if (thisCountry.name.common.includes(data[i].name.common)) {
      icndx = i;
    }
  }
  // Songoson ulsiin horshuudiig array dotor hiih
  // cca3 code to check
  for (let j = 0; j < data.length; j++) {
    for (let bord = 0; bord < thisCountry.borders.length; bord++) {
      if (thisCountry.borders[bord] == data[j].cca3) {
        neCountries.push(data[j]);
      }
    }
  }
  return neCountries;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  displayData(countryInput.value);
});




// Only by country view version
// Promise Fetch and then then catch ashiglaw Version 2
// function getCountry(country) {
//     console.log(url.concat(country));
//     fetch(url.concat(country)).then((res) => res.json()).then((data) => displayData(data[0])).catch((error) => console.error(error));
// }

// function displayData(country) {
//   console.log(country);

//   renderCountry(country).then((data) => {
//     console.log(data);
//     let htmlDom = `<article class="country">
//         <img class="country__img" src="${data.flags.svg}" />
//         <div class="country__data">
//           <h3 class="country__name">${data.name.common}</h3>
//           <h4 class="country__region">${data.region}</h4>
//           <p class="country__row"><span>👫</span>${data.population.toLocaleString()}</p>
//           <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
//           <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name} / ${Object.values(data.currencies)[0].symbol}</p>
//         </div>
//       </article>`;
//       countriesContainer.innerHTML = htmlDom;
//       countryInput.value = "";
//   });
// }

// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     getCountry(countryInput.value);
// });
