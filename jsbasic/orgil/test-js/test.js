let strZai = "";
let starN = 1;
let triangSz = 8;

for (let i = 1; i <= triangSz; i++) {

  for (let dash = triangSz - i; dash > 0; dash--) {
        strZai = strZai + " ";
  }
  for(let num = 1; num <= i; num++){
    if(starN >= 1 && starN <= 9){
        strZai += `0${starN} `;
    } else {
        strZai += `${starN} `;
    }
    starN++;
  }
  strZai += "\n";
}

console.log(strZai);
