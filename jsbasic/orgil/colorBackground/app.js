let getBody = document.getElementsByTagName("body")[0];
let btn = document.getElementById("btn");
let color1 = Math.floor(Math.random() * 255);
let color2 = Math.floor(Math.random() * 255);
let color3 = Math.floor(Math.random() * 255);
let choosedColor = `rgb(${color1}, ${color2}, ${color3})`;
getBody.style.backgroundColor = choosedColor;
console.log(getBody.innerHTML);

btn.addEventListener("click", generateColor);

function generateColor(){
    let color1 = Math.floor(Math.random() * 255);
    let color2 = Math.floor(Math.random() * 255);
    let color3 = Math.floor(Math.random() * 255);
    let choosedColor = `rgb(${color1}, ${color2}, ${color3})`;
    getBody.style.backgroundColor = choosedColor;
    
}