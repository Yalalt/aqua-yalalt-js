function begin() {
  console.log("\n1. Enter strings here: ");
//   let inputValue = prompt("Таны оруулсан текстийг засварлаж харуулна\nТекст оруулна уу");
  let inputValue = "How are you doing today? Have a great day";

  let testPara = parameterizeStr(inputValue);
  alert("Text here: " + testPara);
  console.log("Input here: " + inputValue);
  console.log("Output here: " + testPara);
}

const parameterizeStr = function (inputValue) {
  let result = inputValue.split(" ");
  let reversedStr = result.join("-");
  return reversedStr;
};


begin();
