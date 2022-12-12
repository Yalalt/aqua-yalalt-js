let liElements = document.getElementsByTagName("li");
let sukhbaatarDom = document.getElementById("aimag-315");
let titleHeader = document.getElementsByClassName('title');

titleHeader[0].style.fontFamily = 'Arial';
titleHeader[0].style.textAlign = 'center';
titleHeader[0].style.color = '#333';

console.log(liElements[0].innerText);
console.log(sukhbaatarDom.innerText);
console.log(liElements[liElements.length - 1].innerText);

for (const element of liElements) {
  element.style.fontFamily = "Segoe UI, sans-serif";
  element.style.fontSize = "26px";
  element.style.padding = "10px";
  element.style.margin = "8px 0px";
  element.style.listStyle = "none";
  element.style.borderRadius = "3px";

  let getId = element.id;
  let id = Number(getId.split("-")[1]);

  if (100 < id && id <= 200) {
    element.style.color = "darkblue";
    element.style.backgroundColor = "lightgreen";
  }
  if (200 < id && id <= 300) {
    element.style.backgroundColor = "blue";
    element.style.color = "#fff";
  }
  if (300 < id && id <= 400) {
    element.style.backgroundColor = "black";
    element.style.color = "white";
  }
  if (400 < id && id < 500) {
    element.style.backgroundColor = "coral";
    element.style.color = "white";
  }
  if (500 < id) {
    element.style.backgroundColor = "red";
    element.style.color = "white";
  }
}
