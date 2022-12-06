// let inputStr = prompt("Ямар нэг утга оруулна уу?");
let inputStr = "The ApPle cO LLT";
let upperCaseFormat = "QWERTYUIOPASDFGHJKLZXCVBNM";
let lowerCaseFormat = "qwertyuiopasdfghjklzxcvbnm";

const toBigSmallCharacter = function (value, strLength) {
  let result = "";
  for (let i = 0; i < strLength; i++) {
    if (
      value.charCodeAt(i) > 64 &&
      value.charCodeAt(i) < 91 &&
      value.charCodeAt(i) !== 32
    ) {
      result += String.fromCharCode(value.charCodeAt(i) + 32);
    } else if (
      value.charCodeAt(i) > 96 &&
      value.charCodeAt(i) < 123 &&
      value.charCodeAt(i) !== 32
    ) {
      result += String.fromCharCode(value.charCodeAt(i) - 32);
    } else {
      result += String.fromCharCode(value.charCodeAt(i));
    }
  }
  return result;
};

// 2 dahi huvilbar ni
const upLowerCaseChanger = function (strInput) {
  let result = "";
  for (let j = 0; j < strInput.length; j++) {
    if (upperCaseFormat.includes(strInput[j])) {
      result += strInput[j].toLowerCase();
    } else if (lowerCaseFormat.includes(strInput[j])) {
      result += strInput[j].toUpperCase();
    } else {
      result += strInput[j];
    }
  }
  return result;
};

let strLen = inputStr.length;
let result = toBigSmallCharacter(inputStr, strLen);
let result2 = upLowerCaseChanger(inputStr);

console.log("Text: " + inputStr);
console.log("1.v is ASCII table uses");
console.log(result);
console.log("2.v is Format text uses");
console.log(result2);
