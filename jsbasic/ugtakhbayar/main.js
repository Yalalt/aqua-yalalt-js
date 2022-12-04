console.log("1. Даалгавар 10 хүртэлх натурал тоо");
let ntoo = 0;
while (ntoo < 10) {
  ntoo++;
  console.log(`${ntoo} `);
}

console.log("\n2. Даалгавар 10 хүртэлх сондгой");
let mtoo = 1;
while (mtoo <= 10) {
  if (mtoo % 2 !== 0) {
    console.log(`${mtoo} `);
  }
  mtoo++;
}

console.log("\n3. Даалгавар 10 хүртэлх тэгш тоо");
let natoo = 1;
while (natoo <= 10) {
  if (natoo % 2 == 0) {
    console.log(`${natoo} `);
  }
  natoo++;
}

console.log("\n4. Даалгавар 100 хүртэлх тооны нийлбэр");
let sumToo = 1;
let niilberSave = 0;
while (sumToo <= 100) {
  niilberSave = niilberSave + sumToo;
  sumToo++;
}
console.log("100 хүртэлх натурал тооны нийлбэр: " + niilberSave);

console.log("\n5. Даалгавар N number and Sum");
// let n = 101;
let n = Number(prompt("5.Даалгавар\nN натурал тоог хэвлэх, тооны нийлбэр олох\nN toog oruulna uu"));
let naturalToo = 1;
let sanahToo = 0;
let hewleh = "";
while (naturalToo <= n) {
  sanahToo = sanahToo + naturalToo;
  hewleh = hewleh + naturalToo + " тооны\tнийлбэр: " + sanahToo + "\n";
  naturalToo++;
}
console.log(hewleh);

console.log("\n6. Даалгавар Анхны тоо шалгах");
// let anhToo = 97;
let anhToo = Number(prompt("6. Даалгавар\nАнхны тоог шалгах\nN toog oruulna uu"));
let natToo = 2;
let isPrime = 0;
while (natToo <= anhToo / 2) {
  if (anhToo % natToo == 0) {
    isPrime++;
    break;
  }
  natToo++;
}

if (isPrime == 0 && anhToo != 1) {
  console.log(anhToo + " Анхны тоо мөн");
} else {
  console.log(anhToo + " Анхны тоо биш байна");
}

console.log("\n7. Даалгавар 2 тооны хоорондох Анхны тоог хэвлэх");
// let primeSt = 53;
// let primenD = 100;

let primeSt = Number(prompt("7. Даалгавар\nТоон интервалын эхлэлийн утгыг оруулна уу"));
let primenD = Number(prompt("7. Даалгавар\nТоон интервалын төгсгөлийн утгыг оруулна уу"));

let isPrimeFound = 0;
let natorToo = 2;

while (primeSt <= primenD) {
  while (natorToo < primeSt) {
    if (primeSt % natorToo == 0) {
      isPrimeFound++;
    }
    natorToo++;
  }
  if (isPrimeFound == 0 && primeSt !== 1) {
    console.log(`${primeSt} `);
  }
  primeSt++;
  isPrimeFound = 0;
  natorToo = 2;
}

console.log("\n8. N Тооны факториал олох");
let factNumber = Number(prompt("8.Даалгавар\nФакториал олох\nN тоо оруулна уу"));
// let factNumber = 7;

let mfactor, ffact = 1;
mfactor = factNumber;

if (factNumber == 0 || factNumber == 1) {
  console.log(`${mfactor} toonii factorial: ${ffact}`);
} else {
  ffact = factNumber;
  do {
    factNumber--;
    ffact = ffact * factNumber;
  } while (factNumber !== 1);

  console.log(`${mfactor} toonii factorial: ${ffact}`);
}

console.log("\n9. Өгөгдсөн тооны цифрийн нийлбэр олох");
// let inputCypher = prompt("Өгөгдсөн тооны цифрийн нийлбэр олох\nДурын тоонууд оруулна уу");
let inputCypher = "98745234";

let charCount = 0;
let cySum = 0,
  cIntoo = 1;
let cypLength = inputCypher.length;

while (cIntoo <= cypLength) {
  let charCode = inputCypher.charCodeAt(cIntoo - 1);
  if (charCode >= 48 && charCode <= 57) {
    cySum = cySum + Number(inputCypher[cIntoo - 1]);
  } else {
    charCount++;
    console.log("Invalid Cypher");
    console.error("Зөвхөн тоо оруулна уу");
    break;
  }
  cIntoo++;
}
if (charCount === 0) {
  console.log(inputCypher + ": " + cySum);
}

console.log("\n10. N хүртэлх тооны сондгой тоо ба нийлбэр олох");
// let oddNum = Number(prompt("N toog oruulna uu"));
let oddNum = 52;
let sumOddNum = 0;
for (let i = 1; i <= oddNum; i++) {
  if (i % 2 !== 0) {
    console.log(i);
    sumOddNum = sumOddNum + i;
  }
}
console.log("N сондгой тоо нийлбэр: " + sumOddNum);

console.log("\n11. N хүртэлх тооны тэгш тоо ба нийлбэр олох");
// let evenNum = Number(prompt("N toog oruulna uu"));
let evenNum = 52;
let sumevenNum = 0;
for (let i = 1; i <= evenNum; i++) {
  if (i % 2 == 0) {
    console.log(i);
    sumevenNum = sumevenNum + i;
  }
}
console.log("N тэгш тоо нийлбэр: " + sumevenNum);

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

console.log("\n13. Өгөгдсөн тооны цифрүүд үгээр хэвлэх");

// let inStrCypher = prompt("Өгөгдсөн тооны цифрийн нийлбэр олох\nДурын тоонууд оруулна уу");
let inStrCypher = "6723894125";

let usgeer = "";
for (let vsg = 0; vsg < inStrCypher.length; vsg++) {
  let charCode = inStrCypher.charCodeAt(vsg);

  switch (charCode) {
    case 48:
      usgeer += "тэг ";
      break;
    case 49:
      usgeer += "нэг ";
      break;
    case 50:
      usgeer += "хоёр ";
      break;
    case 51:
      usgeer += "гурав ";
      break;
    case 52:
      usgeer += "дөрөв ";
      break;
    case 53:
      usgeer += "тав ";
      break;
    case 54:
      usgeer += "зургаа ";
      break;
    case 55:
      usgeer += "долоо ";
      break;
    case 56:
      usgeer += "найм ";
      break;
    case 57:
      usgeer += "ес ";
      break;
  }
}

console.log(`${inStrCypher} : ${usgeer}`);
