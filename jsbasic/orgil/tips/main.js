let pay1 = 3000;
let pay2 = 27500;
let pay3 = 100000;


const getTip = function(taxVal) {
    let result;
    if(taxVal >= 5000 && taxVal <= 30000) {
        result = taxVal * 0.15;
    } else if(taxVal > 30000) {
        result = taxVal * 0.20;
    } else {
        result = 0;
    }
    return result;
}

const getTotalTax = function(payTax) {
    let res;
    res = getTip(payTax) + payTax;
    return res;
}

const getAverageTax = function(tax1, tax2, tax3) {
    let result;
    let a = getTotalTax(tax1);
    let b = getTotalTax(tax2);
    let c = getTotalTax(tax3);
    result = (a + b + c)/3;

    return result;
}

let result1Tip = getTip(pay1);
let result1Tax = getTotalTax(pay1);

let result2Tip = getTip(pay2);
let result2Tax = getTotalTax(pay2);

let result3Tip = getTip(pay3);
let result3Tax = getTotalTax(pay3);

let resultAve = getAverageTax(pay1, pay2, pay3);



console.log(`Хэрэглэгч ${pay1} төлсөн бол Tip нь ${result1Tip}, нийт төлбөр нь ${result1Tax}`);
console.log(`Хэрэглэгч ${pay2} төлсөн бол Tip нь ${result2Tip}, нийт төлбөр нь ${result2Tax}`);
console.log(`Хэрэглэгч ${pay3} төлсөн бол Tip нь ${result3Tip}, нийт төлбөр нь ${result3Tax}`);
console.log(`Хэрэглэгчдийн нийт төлбөрийн дундаж нь ${resultAve.toFixed(2)}`);