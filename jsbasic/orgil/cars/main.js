let btn = document.getElementById("btn");
let brandBtn = document.getElementById("brandBtn");
let modelBtn = document.getElementById("modelBtn");

let btnSave = document.getElementById("btnSave");
let carsDom = document.getElementById("root");
carsDom.style.display = "flex";
carsDom.style.flexDirection = "row";
carsDom.style.flexWrap = "wrap";
carsDom.style.gap = "20px";


btn.addEventListener("click", async (e) => {
  e.preventDefault();
  const res = await fetch("http://localhost:3333/api/cars", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      createCard(data);
    });
});
// Btn bvr deer fetch bichih!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// a link deer id gaar barij addEventListener bich!!!!
btn.addEventListener("click", async (e) => {
  e.preventDefault();
  const res = await fetch("http://localhost:3333/api/cars", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      createCard(data);
    });
});
btn.addEventListener("click", async (e) => {
  e.preventDefault();
  const res = await fetch("http://localhost:3333/api/cars", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      createCard(data);
    });
});
btn.addEventListener("click", async (e) => {
  e.preventDefault();
  const res = await fetch("http://localhost:3333/api/cars", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      createCard(data);
    });
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
