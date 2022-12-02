// Phone number enter here
let exitCode = true;
let phoneNum;
let getFixcode;
let numberN;
let prefixIsTrue;
let phoneIsNumber;

do {
  if (exitCode) {
    phoneNum = prompt(
      "Утасны дугаар нь +97699119911 форматтай байна\nТа утасны дугаараа оруулна уу?"
    );
    exitCode = false;
  } else {
    phoneNum = prompt(
      "Монгол улсын утасны дугаарыг буруу орууллаа\nУтасны дугаар нь +97699119911 байна\nУтасны дугаараа зөв оруулна уу?"
    );
  }
  try {
    getFixcode = phoneNum.substring(0, 4);
    numberN = phoneNum.substring(4, phoneNum.length);
  } catch (err) {
    console.error("Утга олгоогүй алдаа гарлаа.. " + err.message);
  }

  prefixIsTrue = getFixcode == "+976" ? true : false;
  phoneIsNumber = Number.isInteger(Number(numberN)) ? true : false;

} while (phoneNum.length !== 12 || !prefixIsTrue || !phoneIsNumber);

alert("Mонгол улсын утасны дугаарыг зөв орууллаа");

console.log("phone number: " + phoneNum);
console.log("Mонгол улсын утасны дугаарыг зөв орууллаа");
