let arrayOfNumbers = [9, 2, 7, 4, 0, 3, 3, 5, 1, 5, 4, 1, 1];
let arrayOut = [];
let index = 0;
let c = arrayOfNumbers.length;
let occure, count;

for (var i = 0; i <= 9; i++) {
  occure = false;
  count = 1;
  for (var j = 0; j < c; j++) {
    if (arrayOfNumbers[j] === i) {
      if (count == 2) {
        arrayOut[index] = i;
        index++;
      }
      count++;
    }
  }
}

console.log(arrayOut);
