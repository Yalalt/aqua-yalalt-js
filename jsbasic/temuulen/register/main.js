const alphabetics = "ФЦУЖЭНГШҮЗКЪЕЙЫБӨАХРОЛДПЯЧЁСМИТЬВЮ";
let registerID = "ЕЮ91082135";
const locAddressKey = [
  "А",
  "Б",
  "В",
  "Г",
  "Д",
  "Е",
  "Ж",
  "З",
  "И",
  "Й",
  "К",
  "Л",
  "М",
  "Н",
  "О",
  "П",
  "Р",
  "С",
  "Т",
  "Ф",
  "Х",
  "УЦ",
];
const locAddress = [
  "Архангай",
  "Баян-Өлгий",
  "Баянхонгор",
  "Булган",
  "Говь-Алтай",
  "Дорноговь",
  "Дорнод",
  "Дундговь",
  "Завхан",
  "Өвөрхангай",
  "Өмнөговь",
  "Сүхбаатар",
  "Сэлэнгэ",
  "Төв",
  "Увс",
  "Ховд",
  "Хөвсгөл",
  "Хэнтий",
  "Дархан-Уул",
  "Орхон",
  "Говьсүмбэр",
  "Улаанбаатар",
];

function isCorrectReg(registerIdd) {
  let alphA = registerIdd[0];
  let alphB = registerIdd[1];
  if (
    alphabetics.includes(alphA) &&
    alphabetics.includes(alphB) &&
    Number.isInteger(Number(registerIdd.slice(2, 10))) &&
    registerIdd.length == 10
  ) {
    return 1;
  } else {
    return -1;
  }
}

function getGender(registerNo) {
  let genderNum = Number(registerNo.slice(8, 9));
  let genderVal = "эрэгтэй";
  if (genderNum % 2 == 0) {
    genderVal = "эмэгтэй";
  }
  return genderVal;
}

function getBirthDay(registerNo) {
  let resultDay = Number(registerNo.slice(6, 8));
  return resultDay;
}

function getBirthMonth(registerNo) {
  let bornMonth = Number(registerNo.slice(4, 6));
  if (bornMonth > 20) {
    bornMonth = bornMonth - 20;
  }
  return bornMonth;
}

function getBirthYear(registerNo) {
  let resultY = Number(registerNo.slice(2, 4));
  let checkMonth = Number(registerNo.slice(4, 6));

  if (checkMonth > 20) {
    resultY = 2000 + resultY;
  } else {
    resultY = 1900 + resultY;
  }
  return resultY;
}

function getBirthRegion(registerNo) {
  let location;
  let alphaA = registerNo[0];
  let alphaB = registerNo[1];

  if (locAddressKey.includes(alphaA)) {
    let indexKey = locAddressKey.indexOf(alphaA);
    location = locAddress[indexKey];
  } else {
    return -1;
  }
  return location;
}

function getRegisterInfo(){
    let testRegisterTrue = isCorrectReg(registerID);
    let testGender = getGender(registerID);
    let testDay = getBirthDay(registerID);
    let testMonth = getBirthMonth(registerID);
    let testYear = getBirthYear(registerID);
    let testregion = getBirthRegion(registerID)?getBirthRegion(registerID):"location error";
    
    
    if (testRegisterTrue) {
      console.log("Регистрийн дугаар зөв байна.\n\n");
      console.log(`Таны төрсөн аймаг: ${testregion}\nТаны төрсөн он: ${testYear} сар: ${testMonth} өдөр: ${testDay} \nТаны хүйс: ${testGender}`);
    } else {
      console.log("Регистрийн дугаар буруу байна");
    }

}

getRegisterInfo();
