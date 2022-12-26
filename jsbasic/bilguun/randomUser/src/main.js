const cardImageTag = document.querySelector(".card_image");
const unameTag = document.getElementById("name");
const emailTag = document.getElementById("email");
const phoneTag = document.getElementById("phoneNumber");
const locationTag = document.getElementById("location");
const deviceTag = document.getElementById("devices");
const url = "https://randomuser.me/api";


function fetchData(url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        displayInfo(data.results[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function getDevice(age) {
    return age > 27? "Mobile" : "Computer";
  }

function displayInfo(data) {
  let imageCreate = document.createElement('img');
  imageCreate.src = data.picture.large;
  imageCreate.alt = "Profile picture";
  imageCreate.classList.add('proImage');
  cardImageTag.appendChild(imageCreate);

  unameTag.textContent = data.name.title.concat(". ", data.name.first, " ", data.name.last);
    emailTag.textContent = data.email;
    phoneTag.textContent = data.phone;
    locationTag.textContent = data.location.city.concat(", ", data.location.country);
    deviceTag.textContent = getDevice(data.dob.age);
}

fetchData(url);