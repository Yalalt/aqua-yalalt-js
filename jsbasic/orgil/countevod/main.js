console.log("1. Өгөгдсөн утга дахь тэгш, сондгой тоог тоолох");

let arrNat = [5,6,4,12,19,121,1,7,9,63];
let evenCount = 0;
let oddCount = 0;

for(let g = 0; g < arrNat.length; g++){
    if(arrNat[g] % 2 == 0){
        evenCount++;
    } else {
        oddCount++;
    }
}
console.log(`Тэгш тоо: ${evenCount}\tСондгой тоо: ${oddCount} байна.`);
