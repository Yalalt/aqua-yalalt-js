let timeDiv = document.getElementById("timeseconds");
let divBox = document.getElementById("box");
divBox.style.width = "330px";
divBox.style.display = "flex";
divBox.style.flexWrap = "wrap";

let colorR = 104;
let colorG = 5;
let colorB = 10;
let levelColCode = 50;
let randSelectBox = Math.floor(Math.random() * 16) + 1;
let colorCode = Math.floor(Math.random() * 240) + 1;
let colorCode2nd =
  colorCode >= 0 ? colorCode - levelColCode : colorCode - levelColCode;

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    let childDiv = document.createElement("div");
    divBox.appendChild(childDiv);
    childDiv.style.width = "80px";
    childDiv.style.height = "80px";
    childDiv.style.backgroundColor = `rgb(${colorR},${colorG + colorCode},${
      colorR + colorCode
    })`;
    childDiv.style.border = "1px solid white";
  }
}

divBox.childNodes[randSelectBox].style.backgroundColor = `rgb(${colorR},${
  colorG + colorCode2nd
},${colorR + colorCode2nd})`;

// let minutes = 1;
// let seconds = 60;
// const myInterval = setInterval(function () {
    
//   let nowTime = `${minutes}:${seconds}`;

//   timeDiv.
  
//   minutes--;
//   seconds--;
//   if (seconds >= 0) {
//     minutes--;
//     seconds = 60;
//   }
//   if (minutes >= 0) {
//     minutes = 0;
//     seconds = 0;
//     // GAME Over
//   }
// }, 100);
