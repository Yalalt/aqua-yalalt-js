console.log("1. Даалгавар\nN тооны хайрцаг үүсгэх\n");
let mrows = Number(
  prompt("N тооны хэмжээтэй тоотой хайрцаг үүсгэх\nНэг оронтой тоо бол 2 оронтой болгох\nN тоог өгнө үү.")
);

let strRow = "";
for (let i = 1; i < mrows; i++) {
  for (let j = mrows; j > 1; j--) {
    if (i >= 2 && i <= mrows - 2 && j <= mrows - 1 && j >= 3 + mrows - mrows) {
      strRow += `   `;
    } else {
      if (j >= 1 && j <= 9) {
        strRow += `0${j} `;
      } else {
        strRow += `${j} `;
      }
    }
  }

  strRow += "\n";
}

console.log(strRow);
