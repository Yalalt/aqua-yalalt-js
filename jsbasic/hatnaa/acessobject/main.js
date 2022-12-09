let students = [
  {
    name: "Сэд-Эрдэнэ",
    age: 19,
    gender: "male",
  },
  {
    name: "Индра",
    age: 19,
    gender: "female",
  },
  {
    name: "Хатнаа ",
    age: 21,
    gender: "male",
  },
  {
    name: "Тэмүүлэн",
    age: 23,
    gender: "male",
  },
  {
    name: "Намуун",
    age: 23,
    gender: "female",
  },
];
let countMale = 0;
let countFemale = 0;

function getHowMany(student) {
  let users = [];

  for (let i = 0; i < student.length; i++) {
    if (student[i].gender === "male") {
      countMale++;
    } else if (student[i].gender === "female") {
      countFemale++;
    }
  }
  users.push({ male: countMale, female: countFemale });

  return users;
}

function getInfo(arr) {
  let res;
  res = `Ангид ${arr.male} эрэгтэй сурагч, ${arr.female} эмэгтэй сурагч байна`;
  return res;
}

// Average age of a student
function getAverageAge(student) {
  let sum = 0;
  for (let i = 0; i < student.length; i++) {
    sum += student[i].age;
  }
  return sum / student.length;
}

// Add lastname add students
function addLastname(students) {
  let newStudents = students.map(function (student) {
    return { ...student, lastname: getLastName() };
  });

  return newStudents;
}

function getLastName() {
  let lastname = "Bold";
  return lastname;
}

function getSameAge(student) {
  let listAges = [];
  //   Nasiig ni tentsuulj new array vvsgej hadgalna
  for (let i = 0; i < student.length; i++) {
    for(let j = 0; j < student[j].length; j++) {
        if (student[i].age === student[j+1].age) {
          listAges.push(student[i]);
        }

    }
  }
  return listAges;

  let count = 0;
  console.log(listAges);
}

// Test get genders count
console.log("Эрэгтэй сурагч, Эмэгтэй сурагч:");
console.log(getHowMany(students));
console.log("\nСурагчдын насны дундаж:");
console.log(getAverageAge(students));
console.log("\nСурагчдын овог нэмсэн:");
let testNewStudents = addLastname(students);
console.log(testNewStudents);

console.log(getSameAge(students));
