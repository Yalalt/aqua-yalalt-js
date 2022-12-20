let numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let board = [
  [numbers, numbers, numbers],
  [numbers, numbers, numbers],
  [numbers, numbers, numbers],
];
let index = Math.floor(Math.random() * 9 + 1);
let rooot = document.getElementById('root');

function generateField(board){

    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            for(let k =  0; k < board[i][j].length; k++){
                let newBox = document.createElement('div');
                newBox.classList.add('field');
                rooot.appendChild(newBox);
            }
        }
    }
}
