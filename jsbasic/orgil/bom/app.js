let labelist = document.getElementsByTagName("label");

let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let llbox = document.getElementById('textbox');

llbox.style.height = "300px";
llbox.style.backgroundColor = "lightblue";
llbox.style.marginTop = "30px";
let boxWidth = llbox.style.width;
// console.log(llbox);

let btnSubmit = document.getElementById("btnSubmit");
let btnReset = document.getElementById("btnReset");
let btnSelectTag = document.getElementsByTagName('button')

for (const el of labelist) {
//   console.log(el.innerHTML);
}

let inputBx = document.getElementsByClassName("inputBox");
for (const inputL of inputBx){
    inputL.style.border = "1px solid gray";
    inputL.style.borderRadius = "3px";
    inputL.style.fontSize = "24px";
    inputL.style.margin = "8px 0";
}

for(const btn of btnSelectTag){
    btn.style.border = "1px solid lightcoral";
    btn.style.borderRadius = "3px";
    btn.style.fontSize = "24px";
    btn.style.margin = "8px 0";
    btn.style.backgroundColor = "coral";
    btn.style.color = "#fff";
}

console.log("Firstname ID selector");
console.log(fname.innerHTML);

console.log("Lastname ID selector");
console.log(lname.innerHTML);



let count = 200;
let toggler = true;
let colorR = 98;
let colorG = 10;
let colorB = 10;
const myInterval = setInterval(function(){
    if(toggler){
        if(count < 800){
            count = count + 1;
            llbox.style.width = `${count}px`;
            llbox.style.backgroundColor = `rgb(${colorR},${colorG},${colorB})`;
            llbox.style.transition = "2s";
            if(colorG <= 255 && colorB <= 255) {
                colorG = colorG + 1;
                colorB = colorB + 1;
            }
        } else {
            toggler = !toggler;
        }
    } else {
        if(count >= 100){
            llbox.style.backgroundColor = `rgb(${colorR},${colorG},${colorB})`;
            llbox.style.transition = "2s";
            llbox.style.width = `${count}px`;
            count = count - 1;
            if(colorG >= 0 && colorB >= 0) {
                colorG = colorG - 1;
                colorB = colorB - 1;
            }
        } else {
            toggler = !toggler;
        }
    }
    console.log(boxWidth);
}, 8);

