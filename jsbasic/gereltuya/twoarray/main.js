let array1 = [3,45,23,78,34];
let array2 = [4,2,31,4,12,1];
let result = [];

for(let el = 0; el < array1.length; el++){
    result[el] = array1[el] * array2[el];
}

console.log("input: " + array1 + "\n\t\t" + array2);
console.log("output: " + result);