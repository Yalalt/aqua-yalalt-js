console.log("\n1. N Тооны факториал олох");
let factNumber = Number(prompt("1.Даалгавар\nФакториал олох\nN тоо оруулна уу"));
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

  console.log(`${mfactor} тооны факториал: ${ffact}`);
}