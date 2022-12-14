let liProducts = document.getElementById("listProducts");
let cpBoxes = document.getElementById("colorPicker");
cpBoxes.style.display = "flex";
cpBoxes.style.flexWrap = "wrap";
cpBoxes.style.width = "100%";
debugger;
function generateColorBoxeSquare(colorCode) {
  let colorbx = document.createElement("div");
  colorbx.id = "colorbx";
  colorbx.className = "colorbx";
  colorbx.style.backgroundColor = colorCode;
  colorbx.style.width = "50px";
  colorbx.style.height = "50px";
  colorbx.style.margin = "5px";
  cpBoxes.appendChild(colorbx);
}

let choosedColor = `rgba(255,255,255,0.8)`;
let colorBtn = document.getElementById("btn");
// colorBtn.addEventListener("click", () => {});

function colorSet1() {
  let code1 = Math.floor(Math.random() * 60);
  let code2 = Math.floor(Math.random() * 60);
  let code3 = Math.floor(Math.random() * 60);
  let codeStr = `rgb(${code1},${code2},${code3})`;
  return codeStr;
}

function colorSet2() {
  let code21 = Math.floor(Math.random() * (120 - 61 + 1) + 61);
  let code22 = Math.floor(Math.random() * (120 - 61 + 1) + 61);
  let code23 = Math.floor(Math.random() * (120 - 61 + 1) + 61);
  let code2Str = `rgb(${code21}, ${code22}, ${code23})`;
  return code2Str;
}

function colorSet3() {
  let code31 = Math.floor(Math.random() * (180 - 121 + 1) + 121);
  let code32 = Math.floor(Math.random() * (180 - 121 + 1) + 121);
  let code33 = Math.floor(Math.random() * (180 - 121 + 1) + 121);
  let code3Str = `rgb(${code31}, ${code32}, ${code33})`;
  return code3Str;

}

function colorSet4() {
  let code41 = Math.floor(Math.random() * (255 - 181 + 1) + 181);
  let code42 = Math.floor(Math.random() * (255 - 181 + 1) + 181);
  let code43 = Math.floor(Math.random() * (255 - 181 + 1) + 181);
  let cpodeStr = `rgb(${code43}, ${code42}, ${code41})`;
  return cpodeStr;
}
function generateColorPicker() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        if(i == 0) {
            generateColorBoxeSquare(colorSet1());
        } else if(i == 1){
            generateColorBoxeSquare(colorSet2());
        } else if (i == 2) {
            generateColorBoxeSquare(colorSet3());
        } else {
            generateColorBoxeSquare(colorSet4());
        }
    }
  }
}

generateColorPicker();