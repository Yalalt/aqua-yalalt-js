let board = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

let root = document.getElementById("root");
let selectedElement;

function generateFields(board) {
  let sudokuField = document.createElement("div");
  sudokuField.setAttribute("id", "sudokuField");

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let newDiv = document.createElement("div");
      newDiv.setAttribute("class", "field");
      newDiv.setAttribute("id", i + "-" + j);
      newDiv.addEventListener("click", () => {
        console.log(newDiv.id);
        selectedElement = [parseInt(newDiv.id[0]), parseInt(newDiv.id[2])];
      });
      if (board[i][j] !== 0) {
        newDiv.innerText = board[i][j];
      }
      sudokuField.appendChild(newDiv);
    }
  }
  root.appendChild(sudokuField);
}

function generateButtons() {
  let buttons = document.createElement("div");
  buttons.setAttribute("id", "buttons");

  for (let i = 0; i < 9; i++) {
    let newDiv = document.createElement("button");
    newDiv.setAttribute("class", "button");
    newDiv.innerText = i + 1;
    buttons.appendChild(newDiv);
  }
  root.appendChild(buttons);
}

function initialGame() {
  //random numbe generate fill board[0][0] -> board[2][2]
  //davhtsahgui 1-9 hoornd random too generate hiine
}


  // end shalgana true false butsaana
  // jishee n shalgah 3n nohtsol baigaa
  // center 5 iin too oruulhad
  // (center squere- d 5n too banyy?) || (i==4) uyd 5n too bainyy || (j==4) uyd 5n too bainyy
function isValidSudoku(grid) {
  // Check rows
  for (let i = 0; i < 9; i++) {
    let row = new Set();
    for (let j = 0; j < 9; j++) {
      if (grid[i][j] !== 0) {
        if (row.has(grid[i][j])) {
          return false;
        }
        row.add(grid[i][j]);
      }
    }
  }

  // Check columns
  for (let i = 0; i < 9; i++) {
    let column = new Set();
    for (let j = 0; j < 9; j++) {
      if (grid[j][i] !== 0) {
        if (column.has(grid[j][i])) {
          return false;
        }
        column.add(grid[j][i]);
      }
    }
  }

  // Check 3x3 sub-grids
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      let subGrid = new Set();
      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          if (grid[i + k][j + l] !== 0) {
            if (subGrid.has(grid[i + k][j + l])) {
              return false;
            }
            subGrid.add(grid[i + k][j + l]);
          }
        }
      }
    }
  }

  return true;
}

generateFields(board);
generateButtons();

document.getElementById("test").addEventListener("click", () => {
  board[selectedElement[0]][selectedElement[1]] = "8";
  generateFields(board);
});

if(isValidSudoku(board)){
  console.log("Zow baina");
} else {
  console.log("Buruu too oruulsan bna");
}