let pNum = 1;
let rowNum = 6;
let pascalNumbers = "";

debugger;
for (var i = 0; i < rowNum; i++) {
  for (var j = rowNum - i; j > 0; j--) {
    pascalNumbers += " ";
  }
  pNum = 1;
  for (let number = 0; number <= i; number++) {
    if (number == 0 || number == i - 1) {
      pascalNumbers += `${pNum} `;
    } else {
      pascalNumbers += `${pNum} `;
    }
    pNum = pNum * (i - number)/(number + 1);
  }
  pascalNumbers += "\n";
}
console.log(pascalNumbers);
