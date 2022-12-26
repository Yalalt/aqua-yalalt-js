let breedList = document.getElementById("breeds");
let card = document.getElementsByClassName("card");

fetch("https://dog.ceo/api/breeds/list")
  .then((res) => res.json())
  .then((data) => {
    const breeds = data.message;
    breeds.forEach((breed) => {
      const optionTag = document.createElement("option");
      optionTag.value = breed;
      optionTag.textContent = breed;
      breedList.appendChild(optionTag);
    });
    fetchImage(data.message[0]);
  })
  .catch((err) => console.error(err));

function fetchImage(category) {
  fetch(`https://dog.ceo/api/breed/${category}/images/random`)
    .then((res) => res.json())
    .then((data) => {
      insertImage(data.message);
    });
}

async function insertImage(url) {
  let imageTag = document.createElement("img");
  imageTag.src = url;
  card[0].appendChild(imageTag);
}

breedList.addEventListener("change", () => {
  let selectBreed = breedList.value;
  card[0].removeChild(card[0].firstChild);
  fetchImage(selectBreed);
});


card[0].addEventListener("click", () => {
    let selected = breedList.value;
    card[0].removeChild(card[0].firstChild);
    fetchImage(selected);
});