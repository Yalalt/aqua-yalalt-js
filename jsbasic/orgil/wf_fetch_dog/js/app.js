let breedList = document.getElementById('breeds');
let card = document.getElementsByClassName('card');

fetch('https://dog.ceo/api/breeds/all').then((res) => res.json()).then((data) => {
    generateBreeds(data.message);
    fetchImages(data.message[0]);
}).catch(err => console.error(err));

function generateBreeds(data) {
    data.map((dogBreed) => {
        const html = `<option value="${dogBreed}">${dogBreed}</option>`;
    });
    console.log(dogBreed);
}

function fetchImage(data) {
    fetch(`https://dog.ceo/api/breed/${data}/images/random`).then((res) => res.json).then((data) => insertImage(data.message));
}

function insertImage(url) {
    const imageHtml = `<img src="${url}" />`;
    card.innerHTML = imageHtml;
}

breedList.addEventListener('change', (e) => {
    let current = e.target.current;
    fetchImages(current);
    console.log(current.message);
});