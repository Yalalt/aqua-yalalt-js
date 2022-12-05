console.log("1. Array numbers deerh uildeluud");

let arrayOfNumbers = [43,56,23,89,88,90,99,652,15,290,11];
let arraysSum = 0;

for(let ind = 0; ind < arrayOfNumbers.length; ind++){
    arraysSum = arraysSum + arrayOfNumbers[ind];
}

let maxVal = arrayOfNumbers[0];
for(let mind = 1; mind < arrayOfNumbers.length; mind++){
    if(maxVal < arrayOfNumbers[mind]) {
        maxVal = arrayOfNumbers[mind];
    }
}

let minVal = arrayOfNumbers[0];
for(let sm = 1; sm < arrayOfNumbers.length; sm++){
    if(minVal > arrayOfNumbers[sm]){
        minVal = arrayOfNumbers[sm];
    }
}

console.log(arraysSum);
console.log(maxVal);
console.log(minVal);