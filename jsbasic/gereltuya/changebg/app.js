let myBtn = document.getElementById("myBtn");
let elementRed = document.getElementById("bgRed");
let elementOrange = document.getElementById("bgOrange");

let inText1 = document.createElement("div");
let inText2 = document.createElement("div");
let inText3 = document.createElement("div");

inText1.innerText = "Click to set paragraph background Color";
inText2.innerText = "Click to set paragraph background Color";
inText3.innerText = "Click to set paragraph background Color";

myBtn.appendChild(inText1);
elementRed.appendChild(inText2);
elementOrange.appendChild(inText3);

myBtn.style.border = "1px solid black";
myBtn.style.borderRadius = "5px";
myBtn.style.padding = "5px";
myBtn.style.margin = "15px";
myBtn.style.textAlign = "center";
myBtn.style.backgroundColor = "transparent";
myBtn.style.width = "200px";
myBtn.style.height = "40px";

elementRed.style.padding = "5px";
elementRed.style.backgroundColor = "#fff";
elementRed.style.width = "200px";
elementRed.style.height = "60px";
elementRed.style.margin = "15px";
elementRed.style.textAlign = "center";
elementRed.style.borderRadius = "5px";
elementRed.style.border = "1px solid silver";

elementOrange.style.padding = "5px";
elementOrange.style.backgroundColor = "#fff";
elementOrange.style.width = "200px";
elementOrange.style.height = "60px";
elementOrange.style.margin = "15px";
elementOrange.style.textAlign = "center";
elementOrange.style.borderRadius = "5px";
elementOrange.style.border = "1px solid silver";

myBtn.addEventListener("click", function () {
  elementRed.style.width = "800px";
  elementRed.style.backgroundColor = "red";
  elementRed.style.transition = "2s";
  
  elementOrange.style.width = "800px";
  elementOrange.style.backgroundColor = "orange";
  elementOrange.style.transition = "3s";
});

myBtn.addEventListener("mouseout", function () {
  elementRed.style.width = "200px";
  elementRed.style.transition = "2s";
  
  elementOrange.style.width = "200px";
  elementOrange.style.transition = "3s";
});

