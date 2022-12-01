let count = 1;
let i = 0;
let strStar = "";
let starN = 20;

while(i < starN) {
    let j = i;
    let k = 0;
    while(j < starN-1) {
        strStar += " ";
        j++;
    }
    while(k <= i) {
        strStar += "* ";
        k++;
    }
    strStar += "\n";
    i++;
}

console.log(strStar);