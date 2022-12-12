var rootElement = document.getElementById("root");

rootElement.style.display = "flex";
rootElement.style.flexWrap = "wrap";
rootElement.style.flexDirection = "row";
rootElement.style.width = "850px";

let i = 0;

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    let newDiv = document.createElement("div");
    rootElement.appendChild(newDiv);

    newDiv.style.width = "100px";
    newDiv.style.height = "100px";

    const myInterval = setInterval(function () {
      i++;
      newDiv.style.width = `${100 + i}px`;
      newDiv.style.height = `${100 + i}px`;

      if (i == 10) {
        clearInterval(myInterval);
      }
    }, 1000);
    newDiv.style.border = "1px solid  black";

    if ((i + j) % 2 == 0) {
      newDiv.style.backgroundColor = "lightgray";
    }
  }
}
