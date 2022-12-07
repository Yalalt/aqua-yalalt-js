const alphabetics = "ФЦУЖЭНГШҮЗКЪЕЙЫБӨАХРОЛДПЯЧЁСМИТЬВЮ";
// let registerID = "ЕЮ91082135";
let registerID = prompt("Регистрийн дугаараа оруулна уу");

let alphA = registerID[0];
let alphB = registerID[1];
if (
  alphabetics.includes(alphA) &&
  alphabetics.includes(alphB) &&
  Number.isInteger(Number(registerID.slice(2, 10))) &&
  registerID.length == 10
) {
  alert("Та монгол улсын регистрийн дугаарыг зөв орууллаа");
  console.log("Та монгол улсын регистрийн дугаарыг зөв орууллаа");
} else {
  alert("Та монгол улсын иргэний бүртгэлийн дугаарыг буруу орууллаа");
  console.log("Та монгол улсын иргэний бүртгэлийн дугаарыг буруу орууллаа");
}
