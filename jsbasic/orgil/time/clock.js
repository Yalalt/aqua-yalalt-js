let clockId = document.getElementById("clockId");

let i = 0;
let textClock = document.createElement("div");
let minute = 59;
let second = 0;
let hour = 1;
let timeSeconds = 0;

textClock.style.padding = "10px";
textClock.style.margin = "10px";
textClock.style.borderRadius = "5px";
textClock.style.backgroundColor = "coral";
textClock.style.color = "#fff";
textClock.style.fontSize = "22px";
textClock.style.fontWeight = "bold";
textClock.style.textAlign = "center";

const myInterval = setInterval(function(){
    clockId.appendChild(textClock);
    i++;
    second++;
    
    if(second == 60) {
        minute++;
        second = 0;
    }
    if(minute == 60) {
        hour++;
        minute = 0;
    }
    textClock.innerText = `${hour}:${minute<10?'0'+minute:minute}:${second<10?'0'+second:second}`;
}, 100);