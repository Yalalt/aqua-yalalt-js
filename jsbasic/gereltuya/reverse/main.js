const getReversedValue = function (inputValue) {
  let result = inputValue.split("");
  let reversedStr = result.reverse();
  return reversedStr.join("");
};

function begin() {
  console.log("\n1. Өгөгдсөн text тооны урвууг хэвлэх");
  let inputValue = prompt("Таны оруулсан текстийг урвуугаар харуулна\nТоо эсвэл текст оруулна уу");
//   let inputValue = "1357986420";

  let numberB = getReversedValue(inputValue);
  alert("Reversed Number or Text is: " + numberB);
}

begin();
