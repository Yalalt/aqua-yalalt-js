let athletics = [
  {
    name: "Gonchig",
    age: 16,
    speed: [10, 13, 15, 18],
  },
  {
    name: "Gonchigsumlai",
    age: 18,
    speed: [12, 15, 18],
  },
  {
    name: "Altai",
    age: 17,
    speed: [10, 9, 11, 10, 9, 10, 9],
  },
  {
    name: "Dorj",
    age: 16,
    speed: [12, 13, 12, 12],
  },
  {
    name: "Bold",
    age: 19,
    speed: [15, 16],
  },
  {
    name: "Naranbayar",
    age: 17,
    speed: [13, 12, 14, 13],
  },
  {
    name: "Erdene",
    age: 17,
    speed: [11, 10, 12, 10, 12, 10],
  },
  {
    name: "Sukhbat",
    age: 15,
    speed: [12, 14, 15, 16],
  },
  {
    name: "Orgil",
    age: 18,
    speed: [13, 14, 13, 11, 10, 12],
  },
  {
    name: "Mike",
    age: 16,
    speed: [9, 10, 10],
  },
];

// function getAverageAge(list){
//    let aveAge = 0;

//     for(let i = 0; i < list.length; i++){
//         aveAge = aveAge + list[i].age;
//     }
//     aveAge = aveAge / list.length;
//     return Math.round(aveAge);
// }

// function getAverageSpeed(inputSpeed){
//     let aveinputSpeed = 0;
//     let resultSpeed = 0;
    
//     for(let i = 0; i < 1; i++){
//         let athleteSpeed = 0;

//         for(let j = 0; j < inputSpeed[i].speed.length; j++){
//             athleteSpeed = athleteSpeed + inputSpeed[i].speed[j];
//             console.log(inputSpeed[i].speed[j]);
//         }
//         resultSpeed = athleteSpeed/4;
//         aveinputSpeed = aveinputSpeed + resultSpeed;
//     }
//     aveinputSpeed = aveinputSpeed / inputSpeed.length;
    
//     return aveinputSpeed;
// }


  
  getAllInfo(athletics);
  
  function getAllNames(list) {
    let names = [];
    for (i = 0; i < list.length; i++) {
      names.push(list[i].name);
    }
  
    return names;
  }
  
  // {
  //     name: "gonchig",
  //     age: 15,
  //     country: "Mongolia",
  //     record: [10, 20, 30],
  //   },
  
  function getAvgSec(list) {
    let avgList = [];
    for (i = 0; i < list.length; i++) {
      //list.length = 5 (hunii too)
      let sum = 0;
      for (j = 0; j < list[i].record.length; j++) {
        sum += list[i].record[j];
      }
  
      let personNewObj = {
        name: list[i].name,
        avg: sum / list[i].record.length,
      };
      avgList.push(personNewObj);
    }
    return avgList;
  }
  
  function getAvgAge(list) {
    let sum = 0;
    for (i = 0; i < list.length; i++) {
      sum += list[i].age;
    }
    return Math.round(sum / list.length);
  }
  
  function getAllInfo(list) {
    let names = getAllNames(list);
    let avgAge = getAvgAge(list);
    let avgSec = getAvgSec(list);
    let sum = 0;
    for (i = 0; i < avgSec.length; i++) {
      sum += avgSec[i].avg;
    }
    console.table(avgSec);
    console.log("Avarage Speed:\t", sum / avgSec.length);
    console.log("Avarage Age:\t", avgAge);
    console.log("All Names: \t", names);
    return;
  }