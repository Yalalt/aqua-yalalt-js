
let colorR = 104;
let colorG = 5;
let colorB = 10;
const myInterval = setInterval(function () {
  for (const elem of divBox.childNodes) {
    let colorCode = Math.floor(Math.random() * 240) + 1;
    elem.style.backgroundColor = `rgb(${colorR},${colorG + colorCode},${colorR + colorCode})`;
    
  }
}, 1000);