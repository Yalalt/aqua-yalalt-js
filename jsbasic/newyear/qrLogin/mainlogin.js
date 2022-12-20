const e = {hwz: "w-v-h-v-m-e-r-m-e",}
let usrpwd = document.getElementById('userpassword');
let submitButton = document.getElementById('submitBtn');
let boxLogind = document.getElementById('boxLogin');
let rightSides = document.getElementById('rightSide');
let msg = document.getElementById('messageUser');
let hint = document.getElementById('hints');

submitButton.addEventListener('click', function(e) {
    console.log("Password: " + usrpwd.value);
    checkPassword(usrpwd.value);
});
function checkPassword(pwd){
    let newval = e.hwz.split('-').reverse().join('');
    if(pwd === newval) {
        boxLogind.classList.add('hide');
        rightSides.classList.remove('col-lg-6');
        rightSides.classList.add('col-lg-12');
        msg.textContent = "ТА АМЖИЛТТАЙ НЭВТЭРЛЭЭ";
        hint.classList.add('hide');
    } else {
        boxLogind.classList.add('leftSide');
        msg.textContent = "ТА НЭВТЭРЧ ЧАДСАНГҮЙ....";
    }
}