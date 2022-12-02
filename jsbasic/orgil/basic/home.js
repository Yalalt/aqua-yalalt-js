console.log("1. Даалгавар\n");
let strRow = "";
for (let i = 1; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    strRow += `${j} `;
  }
  strRow += "\t";
  for (let j = 10; j > 1; j--) {
    if (i >= 3 && i <= 7 && j <= 8 && j >= 4) {
      strRow += `  `;
    } else {
      strRow += `${j - 1} `;
    }
  }
  strRow += "\t";
  for (let k = i; k < 10; k++) {
    strRow += `${k - i + 1} `;
  }

  strRow += "\n";
}

console.log("");
console.log("");
console.log("2. Даалгавар");

// let sizeBox = Number(prompt("Ямар хэмжээтэй хайрцаг үүсгэх вэ"));
let sizeBox = 10;

let strBox = "";
for (let row = 1; row < sizeBox; row++) {
  for (let col = 1; col < sizeBox; col++) {
    if (col >= 1 && col <= 9) {
      strBox += `0${col} `;
    } else {
      strBox += `${col} `;
    }
  }
  strBox += "\n";
}
console.log(strRow);
console.log("");
console.log(strBox);

console.log("");
console.log("");
console.log("3. Даалгавар");

let strTriangle = "";
for (let rowt = 1; rowt < sizeBox; rowt++) {
  for (let colt = 1; colt < rowt; colt++) {
    strTriangle += `* `;
  }
  strTriangle += "\n";
}
console.log(strTriangle);

console.log("\n\n4. Даалгавар");

// let downPyramid = "";
// for (let row = 1; row < sizeBox; row++) {
//   for (let col = 1; col < sizeBox; col++) {
//         // let k = row;
//         if(col < row){
//             downPyramid += `  `;
//         }
//         downPyramid += `* `;
//         k++;

//   }
//   downPyramid += "\n";
// }
// console.log(downPyramid);
// console.log("");

console.log("\n\n5. Даалгавар");

let number = "1643212345679876543";
// let number = "1_643_212_345_679_876_543";
let temp;
for (let i = 0; i < number.length; i++) {}

number =
  number.substring(0, number.length - 3) +
  "_" +
  number.substring(number.length - 3, number.length);

console.log(number);

console.log("\n\n6. Даалгавар Password checker");
let phoneNum = "";
const realPhoneNum = "99880765";

// Utasnii dugaar zow oruulah hurtel shalgana
do {
  phoneNum = prompt("Утасны дугаараа оруулна уу");
  let firstChar = phoneNum.charAt(0);
  phoneNum = Number(phoneNum);

  if (Number.isInteger(phoneNum) && (firstChar == "9" || firstChar == "8")) {
    break;
  }
} while (true);

console.log("Login success");


