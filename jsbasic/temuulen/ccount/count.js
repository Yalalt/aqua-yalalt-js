let natToo = 987463251453553;
// let natToo = Number(prompt("N тоог оруулна уу"));

let strNatToo = natToo.toString();
let countToo = [];
for (let i = 0; i < 10; i++) {
  let io = 0;
  countToo[i] = 0;
  while (io < strNatToo.length) {
    let nat = Number(strNatToo.charAt(io));
    
    if (i == nat) {
        countToo[i]++;
    }
    io++;
  }
}

console.table(countToo);
