let studentAges = [
  18, 19, 20, 21, 22, 23, 24, 26, 24, 22, 20, 18, 19, 23, 24, 25, 26, 27, 28,
  29,
];
let studentsNames = [
  "sharawnyambuu",
  "baljinnyam",
  "munkhbat",
  "dorjoo",
  "dulmaa",
  "yalalt",
  "orgil",
  "anhaa",
  "batsukh",
  "narandelgerekh",
  "nomin",
  "enkhtuul",
  "maral",
  "murun",
  "munkhmainbayarlakh",
];

// let maxName = studentsNames[1];
// for(let ko = 1; ko < studentsNames.length; ko++){
//     if(studentsNames[ko-1].length > maxName.length){
//         maxName = studentsNames[ko-1];
//     }
// }
// console.log(maxName);

let longName = studentsNames[0];
for (let lo = 1; lo < studentsNames.length; lo++) {
  if (studentsNames[lo].length > longName.length) {
    longName = studentsNames[lo];
  }
}
console.log(longName);

// for(let nm = 0; nm <= studentsNames.length; nm++){
//     if(studentsNames[nm] && studentsNames[nm][0] === "d"){
//         console.log(studentsNames[nm]);
//     }
// }

// for(let i = 0; i < studentAges.length; i++){
//     studentAges[i] = studentAges[i] + 1;
// }
// console.log("Length: " + studentAges.length);
// console.log(studentAges);

let now = new Date();
console.log(now);

let jan01_1970 = new Date(0);
console.log(jan01_1970);

var dateUt = new Date(Date.UTC(2022,11,5,11,58,30));
console.log(dateUt.toUTCString());

