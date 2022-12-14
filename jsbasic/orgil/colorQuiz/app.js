const body = document.querySelector('body');
body.style.display = 'flex';
body.style.justifyContent = 'center';
body.style.alignItems = 'center';
body.style.flexDirection = 'column';
const root = document.querySelector(".root");
root.style.display = "flex";
root.style.flexWrap = "wrap";
root.style.width = "300px";
const score = document.querySelector("#score");
const tiles = 9;
let newScore = 0;
let LevelTag = document.querySelector("#level");
let level = 0;
let levelDiffColor = 100;

function randomNumber(min, max) {
  return Math.floor(Math.random() * max + min);
}

function updateScore(point) {
  newScore += point;
  score.innerHTML = newScore;
}

function updateLevel(point, diff) {
  level += point;
  LevelTag.innerHTML = level;
  if(levelDiffColor >= -10){
    levelDiffColor -= diff;
  } else {
    levelDiffColor = 0;
  }
}

function rgbGenerator() {
  const r = randomNumber(0, 255);
  const g = randomNumber(0, 255);
  const b = randomNumber(0, 255);
  return [r, g, b];
}

function getDifferentColor(colors) {
  const newColor = [...colors];
  const random = randomNumber(0, 2);
  if (newColor[random] > 150) {
    newColor[random] -= levelDiffColor;
  } else {
    newColor[random] += levelDiffColor;
  }
  return `rgb(${newColor[0]},${newColor[1]},${newColor[2]})`;
}

function startGame() {
  root.innerHTML = "";
  const colors = rgbGenerator();
  const randomIndex = randomNumber(0, 8);
  
  for (i = 0; i < tiles; i++) {
    const box = document.createElement("div");
    box.style.width = "98px";
    box.style.height = "98px";
    box.style.border = "1px solid white";
    root.appendChild(box);
    let isDifferent = randomIndex == i;
    if (isDifferent) {
      box.style.backgroundColor = getDifferentColor(colors);
    } else {
      box.style.backgroundColor = `rgb(${colors[0]},${colors[1]},${colors[2]})`;
    }
    box.addEventListener("click", function () {
      console.log(isDifferent);
      if (isDifferent) {
        updateScore(1);
        updateLevel(1, 10);
        if(levelDiffColor == -10){
          score.innerHTML = "You Win!";
        }
        startGame();
      } else {
        if (newScore == 1 || newScore == 0) {
          score.innerHTML = "Game Over";
          levelDiffColor = 100;
        } else {
          updateScore(-2);
          updateLevel(-1, -10);
        }
      }
    });
  }
  console.log("randIndex: " + randomIndex);
  console.log("level: " + level);
  console.log("Color dif: " + levelDiffColor);
}

startGame();
