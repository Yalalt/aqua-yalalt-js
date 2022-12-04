// console.log("1. Даалгавар");
// let ntoo = 0;
// while (ntoo < 10) {
//   ntoo++;
//   console.log(`${ntoo} `);
// }

// console.log("\n2. Даалгавар");
// let mtoo = 1;
// while (mtoo <= 10) {
//   if (mtoo % 2 !== 0) {
//     console.log(`${mtoo} `);
//   }
//   mtoo++;
// }

// console.log("\n3. Даалгавар");
// let natoo = 1;
// while (natoo <= 10) {
//   if (natoo % 2 == 0) {
//     console.log(`${natoo} `);
//   }
//   natoo++;
// }

// console.log("\n4. Даалгавар нийлбэр");
// let sumToo = 1;
// let niilberSave = 0;
// while (sumToo <= 100) {
//   niilberSave = niilberSave + sumToo;
//   sumToo++;
// }
// console.log("100 хүртэлх натурал тооны нийлбэр: " + niilberSave);

// console.log("\n5. Даалгавар N number and Sum");
// let n = 101;
// // let n = Number(prompt("N toog oruulna uu"));
// let naturalToo = 1;
// let sanahToo = 0;
// while (naturalToo <= n) {
//   console.log(`${naturalToo} `);
//   sanahToo = sanahToo + naturalToo;
//   naturalToo++;
// }
// console.log("\nНийлбэр: " + sanahToo);

// console.log("\n6. Даалгавар Анхны тоо шалгах");
// let anhToo = 97;
// // let anhToo = Number(prompt("N toog oruulna uu"));
// let natToo = 2;
// let isPrime = 0;
// while (natToo <= anhToo / 2) {
//   if (anhToo % natToo == 0) {
//     isPrime++;
//     break;
//   }
//   natToo++;
// }

// if (isPrime == 0 && anhToo != 1) {
//   console.log(anhToo + " Анхны тоо мөн");
// } else {
//   console.log(anhToo + " Анхны тоо биш байна");
// }

// console.log("\n7. Даалгавар 2 тооны хоорондох Анхны тоог хэвлэх");
// let primeSt = 53;
// let primenD = 100;

// // let primeSt = +prompt("Тоон интервалын эхлэлийн утгыг оруулна уу");
// // let primenD = +prompt("Тоон интервалын төгсгөлийн утгыг оруулна уу");

// let isPrimeFound = 0;
// let natorToo = 2;

// while (primeSt <= primenD) {
//   while (natorToo < primeSt) {
//     if (primeSt % natorToo == 0) {
//       isPrimeFound++;
//     }
//     natorToo++;
//   }
//   if (isPrimeFound == 0 && primeSt !== 1) {
//     console.log(`${primeSt} `);
//   }
//   primeSt++;
//   isPrimeFound = 0;
//   natorToo = 2;
// }

// console.log("\n8. N Тооны факториал олох");
// // let factNumber = +prompt("N тоо оруулна уу");
// let factNumber = 7;

// let mfactor, ffact = 1;
// mfactor = factNumber;

// if (factNumber == 0 || factNumber == 1) {
//   console.log(`${mfactor} toonii factorial: ${ffact}`);
// } else {
//   ffact = factNumber;
//   do {
//     factNumber--;
//     ffact = ffact * factNumber;
//   } while (factNumber !== 1);

//   console.log(`${mfactor} toonii factorial: ${ffact}`);
// }

console.log("\n9. Өгөгдсөн тооны цифрийн нийлбэр олох");
// let inputCypher = prompt("Өгөгдсөн тооны цифрийн нийлбэр олох\nДурын тоонууд оруулна уу");
let inputCypher = "98745234";
debugger;
let charCount = 0;
let cySum = 0, cIntoo = 1;
let cypLength = inputCypher.length;

while (cIntoo <= cypLength) {
  let charCode = inputCypher.charCodeAt(cIntoo-1);
  if(charCode >= 48 && charCode <= 57){
    cySum = cySum + Number(inputCypher[cIntoo - 1]);
  } else {
    charCount++;
    console.log("Invalid Cypher");
    console.error("Зөвхөн тоо оруулна уу");
    break;
  }
  cIntoo++;
}
if(charCount === 0){
  console.log(inputCypher + ": " + cySum);
}

console.log("\n10. Өгөгдсөн тооны цифрийн нийлбэр олох");
