let btn = document.getElementById("btn");
let brandBtn = document.getElementById("brandBtn");
let modelBtn = document.getElementById("modelBtn");

let btnSave = document.getElementById("btnSave");
let carsDom = document.getElementById("root");
let ulBrand = document.getElementById("brandButton");
let ulModel = document.getElementById("modelButton");

carsDom.style.display = "flex";
carsDom.style.flexDirection = "row";
carsDom.style.flexWrap = "wrap";
carsDom.style.gap = "20px";

btn.addEventListener("click", async (e) => {
  e.preventDefault();
  const res = await fetch("http://localhost:3333/api/cars/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      createCard(data);
      console.log(data);
    });
});

function getEventTarget(e) {
  e = e || window.event;
  return e.target || e.srcElement;
}

// Brand button deer click event abah mon songogdson li awah
ulBrand.addEventListener("click", async (e) => {
  e.preventDefault();
  var target = getEventTarget(e);
  let brandName = target.textContent.toLowerCase();

  const res = await fetch(`http://localhost:3333/api/cars/`)
    .then((res) => res.json())
    .then((data) => {
      console.log(brandName);

      let filteredCars = [];
      if(brandName) {
        filteredCars = data.filter((car) => car.brand.toLowerCase().includes(brandName));
      } else {
        filteredCars = data;
      }
      createCard(filteredCars);
      console.log(filteredCars);
    }).catch((err) => console.log(data));
});
ulModel.addEventListener("click", async (e) => {
  e.preventDefault();
  var target = getEventTarget(e);
  let modelName = target.textContent.toLowerCase();
  console.log(modelName);

  const res = await fetch(`http://localhost:3333/api/cars/`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      let filteredCars = [];
      if(modelName) {
        filteredCars = data.filter((car) => car.model.toLowerCase().includes(modelName));
      } else {
        filteredCars = data;
      }
      createCard(filteredCars);
      console.log(filteredCars);
    }).catch((error) => console.error(error));
});



function createCard(data) {
  carsDom.innerHTML = "";

  data.map((item) => {
    let card = document.createElement("div");
    card.innerHTML = `<div class="card" style="width: 18rem">
        <img src="${item.image}" width="120px" class="card-img-top" alt="${item.brand}" />
        <div class="card-body">
            <h5 class="card-title">${item.model}</h5>
            <p class="card-text">
            ${item.brand} brand is quick example text to build on the card title and make up the
            bulk of the card's content.
            </p>
        </div>
        </div>`;

    carsDom.appendChild(card);
  });
}
