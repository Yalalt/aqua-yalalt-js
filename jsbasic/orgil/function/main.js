
function maxCheck(too1, too2, too3) {
    let maxVal = too1;
    if(maxVal < too2 && too2 > too3) {
        maxVal = too2;
    } else if(maxVal < too3) {
        maxVal = too3;
    }

    return maxVal;
}

// let number1 = parseFloat(prompt("Enter first number: "));
// let number2 = parseFloat(prompt("Enter second number: "));
// let number3 = parseFloat(prompt("Enter third number: "));

// let result = maxCheck(number1, number2, number3);

// console.log("Ur dun: " + result);

let a = function(name) {
    return "Hello " + name;
}

const b = (name) => { return "Hello" + name}
                
