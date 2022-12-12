let rootElement = document.getElementById("root");
let elementRed = document.getElementById('bgRed');
let elementOrange = document.getElementById('bgOrange');

let topDiv = document.createElement('div');
let inText1 = document.createElement('div');
let inText2 = document.createElement('div');
let inText3 = document.createElement('div');

inText1.innerText = "Click to set paragraph background Color";
inText2.innerText = "Click to set paragraph background Color";
inText3.innerText = "Click to set paragraph background Color";

rootElement.appendChild(topDiv);
topDiv.appendChild(inText1);
elementRed.appendChild(inText2);
elementOrange.appendChild(inText3);

topDiv.style.border = "1px solid black";
topDiv.style.borderRadius = "5px";
topDiv.style.padding = "5px";
topDiv.style.margin = "15px";
topDiv.style.textAlign = "center";
topDiv.style.backgroundColor = "transparent";
topDiv.style.width = "200px";
topDiv.style.height = "40px";

elementRed.style.padding = "5px";
elementRed.style.backgroundColor = 'red';
elementRed.style.width = "200px";
elementRed.style.height = "60px";
elementRed.style.margin = "15px";
elementRed.style.textAlign = "center";

elementOrange.style.padding = "5px";
elementOrange.style.backgroundColor = 'orange';
elementOrange.style.width = "200px";
elementOrange.style.height = "60px";
elementOrange.style.margin = "15px";
elementOrange.style.textAlign = "center";