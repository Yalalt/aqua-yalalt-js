let squares = document.getElementById("squares");
let colors = [];
let levelNumber = 1;
let quizObj = {};

function generateSquares(sqNumber) {
  for (let i = 0; i < sqNumber.length; i++) {
    for (let j = 0; j < sqNumber.length; j++) {
      let newSquare = document.createElement("div");
      newSquare.classList.add("square");
      squares.appendChild(newSquare);
    }
  }
}

function generateColors(sqNumber) {
  let codeColor = Math.floor(Math.random() * 240 + 1);
  let generatedColor = `rgb(${codeColor}, ${codeColor}, ${codeColor})`;
  let genQBoxline = genQBox(sqNumber);

  for (let i = 0; i < sqNumber * sqNumber; i++) {
    if (genQBoxline != null && genQBox == i) {
      if (levelNumber == 1) {
        let el1 = Math.floor(Math.random() * 255);
        let el2 = Math.floor(Math.random() * 255);
        let el3 = Math.floor(Math.random() * 255);
        let colorQuizBox = `rgb(${el1}, ${el2}, ${el3})`;
        colors.push(colorQuizBox);
      } else if (levelNumber == 2) {
        let el1 = Math.floor(Math.random() * 255);
        let el2 = Math.floor(Math.random() * 255);
        let el3 = codeColor;
        let colorQuizBox = `rgb(${el1}, ${el2}, ${el3})`;
        colors.push(colorQuizBox);
      } else if (levelNumber == 3) {
        let el1 = Math.floor(Math.random() * 255);
        let el2 = codeColor;
        let el3 = codeColor;
        let colorQuizBox = `rgb(${el1}, ${el2}, ${el3})`;
        colors.push(colorQuizBox);
      }
    }
    colors.push(generatedColor);
  }
}

function assignColor(sqNumber) {
  for (let i = 0; i < sqNumber * sqNumber; i++) {
    console.log(arguments);
    console.log(squares);
    // squares.childNodes[i].style.backgroundColor = colors[i];
    console.log(colors[i]);
  }
}

function genQBox(sqNumber) {
  return Math.floor(Math.random() * (sqNumber * sqNumber) + 1);
}

generateSquares(2);
generateColors(2);
assignColor(2);
