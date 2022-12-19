let scrollBdy = document.getElementsByTagName("body");
let statxPage = document.querySelector(".btnPerc");
let a = document.body.clientHeight;
let b = window.innerHeight;
let currentWindow = a - b;
window.addEventListener("scroll", (event) => {
  let percentCurr = Math.floor((window.scrollY * 100) / currentWindow);
  statxPage.innerText = percentCurr + "%";
});
