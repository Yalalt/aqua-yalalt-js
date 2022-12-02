// Phone number enter here
let phoneNum;
let exitCode = true;
while(exitCode) {
    phoneNum = prompt("Утасны дугаар нь +97699119911 форматтай байна\nТа утасны дугаараа оруулна уу?");
    
    let getFixcode = phoneNum.substring(0,4);
    let prefixIsTrue = getFixcode == "+976"?true:false;
    let phoneIsNumber = phoneNum.charAt.apply.apply.apply.apply.app...console...
    console.log("pre condition check: " + phoneNum);

    while(phoneNum.length !== 12 || !prefixIsTrue || ) {
        phoneNum = prompt("Монгол улсын утасны дугаарыг буруу орууллаа\nУтасны дугаар нь +97699119911 байна\nУтасны дугаараа зөв оруулна уу?");
        
        getFixcode = phoneNum.substring(0,4);
        prefixIsTrue = getFixcode == "+976"?true:false;
        console.log("stat: " + phoneNum);
    }
    alert("Mонгол улсын утасны дугаарыг зөв орууллаа");
    exitCode = false;
}
console.log("phone number: " + phoneNum);
