const removeArrayElement = function (inputArray, el) {
  let indexKey;
  let result = "Your find element not found";

  while (inputArray.includes(el)) {
      if (inputArray.indexOf(el) != -1) {
        indexKey = inputArray.indexOf(el);
        result = inputArray.splice(indexKey, 1);
      }
    
      if (inputArray.lastIndexOf(el) != -1) {
        indexKey = inputArray.lastIndexOf(el);
        result = inputArray.splice(indexKey, 1);
      }
  }
  return result;
};



function callAlert(massive){
    alert("Array: " + massive);
}

console.log("array - аас тодорхой элементийг устгах\n");
let arraay = [2, 1, 6, 5, 8, 2, 3, 2, 1];
callAlert(arraay.toString());
let removeValue = Number(prompt("Массиваас устгах элементийг сонгоно уу"));

console.log("Input: " + arraay.toString());
console.log("Removed: " + removeArrayElement(arraay, removeValue));
console.log("Output: " + arraay.toString());

callAlert(arraay.toString());
