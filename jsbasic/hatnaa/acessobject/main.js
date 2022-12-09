let students = [
  {
    name: "Сод-Эрдэнэ",
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
let lastnames = [
  { lastname: "Bold" },
  { lastname: "Tulga" },
  { lastname: "Orgil" },
  { lastname: "Bat" },
  { lastname: "Amar" },
];

let users = {};
let studentsSameAge = [];
let listKeys = [];
let listAges = [];

function getHowMany(student) {
  let countFemale = 0;
  let countMale = 0;

  for (let i = 0; i < student.length; i++) {
    if (student[i].gender === "male") {
      countMale++;
    } else if (student[i].gender === "female") {
      countFemale++;
    }
  }
  users = { male: countMale, female: countFemale };
  return;
}

function getInfo(objStudent) {
  let res;
  res = `Ангид ${objStudent.male} эрэгтэй сурагч, ${objStudent.female} эмэгтэй сурагч байна`;
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
  let newStudents = students.map(function (student, index) {
    return { ...student, lastname: getLastName(index) };
  });

  return newStudents;
}

// Овог нэрсийг өөрчилхөд энд засна
function getLastName(item) {
  let lastname = lastnames[item].lastname;
  return lastname;
}

function getSameAge(aged) {

  for (let i = 0; i < students.length; i++) {
    if (students[i].age === aged) {
      listAges.push(students[i]);
    }
  }
  return listAges;
}

function getSameAgeStudents(students) {
  let listStudents = {};

  listStudents = students.reduce(function (student, item) {
    student[item.age] = (student[item.age] || 0) + 1;
    return student;
  }, {});

  listKeys = Object.keys(listStudents);
  let indexkey = Number(listKeys[0]);
  
  console.log(getSameAge(indexkey));
}

// Test get genders count
console.log("Эрэгтэй сурагч, Эмэгтэй сурагчын тоо:");
getHowMany(students);
console.log(getInfo(users));

console.log("\nСурагчдын насны дундаж:");
console.log(getAverageAge(students));

console.log("\nСурагчдын овог нэмсэн:");
let testNewStudents = addLastname(students);
console.log(testNewStudents);

let testtt = getSameAge(students, 19);
console.log(testtt);

console.log("Ижил настай сурагч: ");
getSameAgeStudents(students);
