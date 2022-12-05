let preNum = 1;
let currNum = 1;
let afterNum = 0;
let rowNum = 7;
let pascalNumbers = "";

for (var i = 1; i <= rowNum; i++) {
  for (var j = rowNum - i; j > 0; j--) {
    pascalNumbers += " ";
  }
  for (let number = 0; number < i; number++) {
    if (number == 0 || number == i - 1) {
      pascalNumbers += `${preNum} `;
      
    } else {
        afterNum = preNum + currNum;
        if(number == afterNum) {
            pascalNumbers += `${i - 1} `;
        } else {
            pascalNumbers += `${i} `;
        }
    }
  }
  pascalNumbers += "\n";
}

console.log(pascalNumbers);
