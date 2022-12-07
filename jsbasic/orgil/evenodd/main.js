let firstIndex = 4;
let lastIndex = 89;

function getEvenNumbers(fnum, lnum){
    let temp = 0;
    let reslt = [];
    let intex = 0;
    if(fnum > lnum) {
        temp = fnum;
        fnum = lnum;
        lnum = temp;
    }
    for(let i = fnum; i <= lnum; i++){ 
        if(i % 2 != 0){
            reslt[intex] = i;
            intex++;
        }
    }
    return reslt;
}
function getOddNumbers(fnum, lnum){
    let tempo = 0;
    let reslt = [];
    let infex = 0;
    if(fnum > lnum) {
        tempo = fnum;
        fnum = lnum;
        lnum = tempo;
    }
    for(let i = fnum; i <= lnum; i++){ 
        if(i % 2 == 0){
            reslt[infex] = i;
            infex++;
        }
    }
    return reslt;
}

let test1 = getEvenNumbers(lastIndex, firstIndex);
let test2 = getOddNumbers(lastIndex, firstIndex);

console.log(`Өгөгдсөн тоо нь ${firstIndex}, ${lastIndex}`);
console.log("Сондгой тоо нь");
console.log(test1);
console.log("Тэгш тоо нь");
console.log(test2);