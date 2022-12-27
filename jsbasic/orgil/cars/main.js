let btn = document.getElementById("btn");
let root = document.getElementById("root");
root.style.display = "flex";
root.style.flexDirection = "row";
root.style.flexWrap = "wrap";
root.style.gap = "20px";
let saveBtn = document.getElementById("saveBtn");

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
  root.innerHTML = "";

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

    root.appendChild(card);
  });
}
