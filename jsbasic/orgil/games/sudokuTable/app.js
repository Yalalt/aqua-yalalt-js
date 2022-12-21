const grid = document.getElementById('grid');
const cells = grid.querySelectorAll('td');
const newPuzzleButton = document.getElementById('new-puzzle-button');
const checkSolutionButton = document.getElementById('check-solution-button');

newPuzzleButton.addEventListener('click', () => {
  // generate and populate puzzle
});

checkSolutionButton.addEventListener('click', () => {
  // check solution
});

for (const cell of cells) {
  cell.addEventListener('input', (event) => {
    // handle input
  });
}