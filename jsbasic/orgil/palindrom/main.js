let test1 = "abcddcba";
let test2 = 1234567654321;
let test3 = "abba";
let defaultTest = "Apple";
let testCall;

const palindromeCheck = function (inputArray) {
  inputArray = Number.isInteger(inputArray)
    ? inputArray.toString()
    : inputArray;
  let resultB = inputArray.split("");
  let resultBreversed = resultB.reverse();
  let resultBString = resultBreversed.join("");

  if (inputArray == resultBString) {
    return true;
  } else {
    return false;
  }
};

function getCheckTest(test) {
  switch (test) {
    case "1":
      testCall = palindromeCheck(test1);
      break;
    case "2":
      testCall = palindromeCheck(test2);
      break;
    case "3":
      testCall = palindromeCheck(test3);
      break;
    default:
      testCall = palindromeCheck(defaultTest);
      break;
  }
}

let inputUtga = prompt(
  `Тест хийх текстийн дугаарыг оруулна уу\n1. ${test1}\n2. ${test2}\n3. ${test3}\n4. ${defaultTest}`
);

getCheckTest(inputUtga);

if (testCall) {
  alert("Palindrome мөн байна");
} else {
  alert("Palindrome биш байна");
}
