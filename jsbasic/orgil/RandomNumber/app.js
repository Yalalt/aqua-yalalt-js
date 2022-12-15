const inputTag = document.querySelector(".guess");
const msgTag = document.querySelector(".message");
const scoreTag = document.querySelector(".score");
const highScoreTag = document.querySelector(".highscore");
const strBtn = document.getElementById("startBtn");
const checkBtn = document.getElementById("checkBtn");

let globalVar = {
  randomToo: 0,
};

function start() {
  globalVar.randomToo = Math.floor(Math.random() * 20) + 1;
}

function checkNumber() {
  const inputValue = Number(inputTag.value);
  const scoreNumber = Number(scoreTag.innerHTML);
  const highNumber = Number(highScoreTag.innerHTML);

  if (isNaN(inputValue)) {
    msgTag.innerHTML = "Тоо оруулна уу";
  } else {
    if (inputValue > globalVar.randomToo) {
      if (scoreNumber - 1 !== 0) {
        msgTag.innerHTML = "Их байна";
      } else {
        afterLose();
      }
      scoreTag.innerHTML = scoreNumber - 1;
    } else if (inputValue < globalVar.randomToo) {
      if (scoreNumber - 1 !== 0) {
        msgTag.innerHTML = "Бага байна";
      } else {
        afterLose();
      }
      scoreTag.innerHTML = scoreNumber - 1;
    } else {
      msgTag.innerHTML = "Зөв таалаа";
      checkBtn.style.display = "none";
      document.body.style.backgroundColor = "#60b347";
      if (scoreNumber > highNumber) {
        highScoreTag.innerHTML = scoreNumber;
      }
    }
  }
}

function afterLose() {
  msgTag.innerHTML = "Та хожигдлоо";
  checkBtn.style.display = "none";
}

function resetGame() {
  globalVar.randomToo = Math.floor(Math.random() * 20) + 1;
  scoreTag.innerHTML = 20;
  inputTag.value = "";
  msgTag.innerHTML = "Start guess..";
  checkBtn.style.display = "block";
  document.body.style.background = "#222";
}

strBtn.addEventListener("click", resetGame);
checkBtn.addEventListener("click", checkNumber);
start();
