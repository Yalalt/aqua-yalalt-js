let usrpwd = document.getElementById("userpassword"),
  submitButton = document.getElementById("submitBtn"),
  boxLogind = document.getElementById("boxLogin"),
  rightSides = document.getElementById("rightSide"),
  msg = document.getElementById("messageTitle");
  const e = localStorage.getItem('enterval');
  let msgDesc = document.getElementById("msgDescription"),
  hint = document.getElementById("hints");
function checkPassword(t) {
  t === e.split("-").reverse().join("")
    ? (boxLogind.classList.add("hide"),
      rightSides.classList.remove("col-lg-6"),
      rightSides.classList.add("col-lg-12"),
      (msg.textContent = "ТА АМЖИЛТТАЙ НЭВТЭРЛЭЭ. БАЯР ХҮРГЭЕ!"),
      hint.classList.add("hide"),
      msgDesc.classList.add("hide"),
      setTimeout(() => {
        window.location.replace("https://w3schools.com");
      }, 5e3))
    : (boxLogind.classList.add("leftSide"),
      (msg.textContent = "ТА НЭВТЭРЧ ЧАДСАНГҮЙ...."));
}
submitButton.addEventListener("click", function (t) {
  checkPassword(usrpwd.value);
});





