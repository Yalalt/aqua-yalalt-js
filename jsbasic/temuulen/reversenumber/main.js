console.log("\n12. Өгөгдсөн эерэг тооны урвууг хэвлэх");
// let numberA = Number(prompt("Тоо оруулна уу"));
let numberA = 1357986420;
let lengthTooA = numberA.toString().length;
let strNumberA = numberA.toString();
let numberB = "";
for (let i = lengthTooA - 1; i >= 0; i--) {
  numberB = numberB + strNumberA[i];
}
console.log(`Анх оруулсан тоо, урвуу тоо: ${numberA} > ${numberB}`);