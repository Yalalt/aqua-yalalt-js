const studentsData = [
  {
    name: "Gonchigsumlai",
    email: "gonchigsumlai@gmail.com",
    birthYear: 1998,
    hobby: "Basketball",
    single: false,
  },
  {
    name: "Yalalt",
    email: "yalalt@gmail.com",
    birthYear: 1990,
    hobby: "Hiking Mountain",
    single: false,
  },
  {
    name: "Mike",
    email: "mike@gmail.com",
    birthYear: 1991,
    hobby: "Piano play",
    single: false,
  },
  {
    name: "Kayla",
    email: "kayla@gmail.com",
    birthYear: 1999,
    hobby: "Music and Movies",
    single: false,
  },
  {
    name: "Kathy",
    email: "kathy@gmail.com",
    birthYear: 2005,
    hobby: "Guitar",
    single: true,
  },
  {
    name: "Yukari",
    email: "yukari@gmail.com",
    birthYear: 2006,
    hobby: "Playing Pubg",
    single: true,
  },
  {
    name: "Kimura",
    email: "Kimura@gmail.com",
    birthYear: 2002,
    hobby: "Soccer",
    single: true,
  },
  {
    name: "Mike Liu",
    email: "orgil@gmail.com",
    birthYear: 2005,
    hobby: "Dota",
    single: false,
  },
  {
    name: "Kristen",
    email: "kristen@gmail.com",
    birthYear: 2003,
    hobby: "Dota and Pubg",
    single: true,
  },
  {
    name: "Coco",
    email: "coco@gmail.com",
    birthYear: 2004,
    hobby: "Music and Sing",
    single: true,
  },
  {
    name: "Lisa",
    email: "lisa@gmail.com",
    birthYear: 1997,
    hobby: "Dance, Lead Rapper",
    single: true,
  },
  {
    name: "Rose",
    email: "rose@gmail.com",
    birthYear: 1997,
    hobby: "Music, Dance, Vocalist",
    single: true,
  },
  {
    name: "Jennie",
    email: "jennierubyjane@gmail.com",
    birthYear: 1996,
    hobby: "Music Rapper",
    single: true,
  },
  {
    name: "Jisoo",
    email: "jisoo@gmail.com",
    birthYear: 1995,
    hobby: "Music Dance Sing",
    single: true,
  },
];

function createAgeTwentyOver(list) {
  let ages = [...list];
  let listAges = ages.filter((user) => {
    return user.birthYear < 2002;
  });
  return listAges;
}

function createAgeField(list) {
  let users = [];
  list.forEach((user) => {
    users.push({
      name: user.name,
      email: user.email,
      age: 2022 - user.birthYear,
      birthYear: user.birthYear,
      hobby: user.hobby,
      single: user.single,
    });
  });
  return users;
}

function getSingleStudents(list) {
  let users = [];
  list.forEach(function (user) {
    if (user.single === true) users.push(user);
  });
  return users;
}

// Display student information
function displayConsoleStudents(list) {
  for (const element of list) {
    console.log(
      `Сурагчын нэр: ${element.name}\nТөрсөн он: \t${element.birthYear}\nХобби: \t\t${element.hobby}\n`
    );
  }
}

// Display student information ages
function displayStudAge(list) {
  for (const element of list) {
    console.log(
      `Сурагчын нэр: ${element.name}\nТөрсөн он: \t${element.birthYear}\nНас: \t\t${element.age}\nХобби: \t\t${element.hobby}\n`
    );
  }
}

function displaySingleUsers(element) {
  for (const user of element) {
    console.log(
      `Сурагчын нэр: \t${user.name}\nТөрсөн он: \t\t${user.birthYear}\nХобби: \t\t\t${
        user.hobby}\nГэрэлсэн эсэх: \t${user.single ? "Ганц бие" : "Гэрэлсэн"}`
    );
  }
}

function start() {
  let testAge = createAgeTwentyOver(studentsData);
  console.group("Сурагчидаас 20 - оос дээш насны сурагчид");
  displayConsoleStudents(testAge);
  console.groupEnd();

  let getAgePrint = createAgeField(studentsData);
  console.group("\nСурагчдын нас болон бусад мэдээлэл");
  displayStudAge(getAgePrint);
  console.groupEnd();

  let varSingleStudent = getSingleStudents(studentsData);
  console.group("\nСурагчидын ганц бие хүмүүсийн мэдээлэл");
  displaySingleUsers(varSingleStudent);
  console.groupEnd();
}

start();
