let arrayOfNumbers = [9, 2, 7, 4, 0, 3, 3, 5, 99, 5, 4, 99, 1, 22, 22];
let arrayOut = [];
let index = 0;
let c = arrayOfNumbers.length;
let count;
let maxItems = arrayOfNumbers.sort((a, b) => b - a).slice(0, 1);

// Select sort arga ashiglaw
for (var i = 0; i <= maxItems; i++) {
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