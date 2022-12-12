let firstDom = document.getElementById("aimag-101");
let sukhbaatarDom = document.getElementById("aimag-315");
let lastDom = document.getElementById("aimag-522");

console.log(firstDom);
console.log(sukhbaatarDom);
console.log(lastDom);

let liElements = document.getElementsByTagName("li");

let toggle = 0;
for (let i = 0; i < liElements.length; i++) {
    iterator.style.fontFamily = "Segoe UI, sans-serif";
    iterator.style.fontSize = "26px";
    iterator.style.color = 'lightcoral';
    iterator.style.padding = '16px';
    iterator.style.margin = '8px 0px';

    if(toggle >= 0 && toggle <= 7){
        iterator.style.color = '#fff';
        iterator.style.backgroundColor = 'gray';
    } else if(toggle > 7 && toggle < 14){
        iterator.style.backgroundColor = 'lightgray';
        iterator.style.color = '#000';
    } else {
        iterator.style.backgroundColor = 'black';
        iterator.style.color = 'gray';
    }
    toggle++;
}



