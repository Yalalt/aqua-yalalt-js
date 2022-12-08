const users = [
  {
    name: "Alex",
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 45,
    isLoggedIn: false,
    points: 30,
  },
  {
    name: "Job",
    email: "job@job.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  {
    name: "Brook",
    email: "brook@brooky.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 39,
    isLoggedIn: true,
    points: 50,
  },
  {
    name: "Daniel",
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 25,
    isLoggedIn: false,
    points: 40,
  },
  {
    name: "John",
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  {
    name: "Thomas",
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 18,
    isLoggedIn: false,
    points: 40,
  },
  {
    name: "Paul",
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 40,
  },
];
let highScoreUserNo = 0;

// Test хэсэг
console.group("Нэг хэрэглэгчийн мэдээлэл авсан нь:");
console.log(getUserInfoByName("Paul", users));
console.groupEnd();
console.log(getManySkilledPerson(users));
console.log("\nНэвтэрсэн хэрэглэгчид: " + checkLogin(users).join(", "));
console.log("\n50 болон 50-с дээш оноотой "+ getHighScoreUserCount(users) +" хөгжүүлэгч байна. Нэрс нь: " + getScoreHighUser(users).join(", "));
// Test хийхэд зориулж хийсэн мэдээлэл харуулах функц getInfo() 
let formatMernDev = getMernDev(users);
console.log("MERN хөгжүүлэгчид:\n" + getInfo(formatMernDev));
let formatOldestDev = getOldestDev(users);
console.log("Хамгийн өндөр настай 3 хөгжүүлэгчийн мэдээлэл:\n" + getInfo(formatOldestDev));

// нэг хөгжүүлэгчийн мэдээллийг буцаана, return string, para name array
function getUserInfoByName(name, list) {
  let user = "";
  for (let i = 0; i < list.length; i++) {
    if (list[i].name === name) {
      user += `Нэр: \t"${list[i].name}"\nEmail: "${list[i].email}"\nУр чадвар: "${list[i].skills}"\nНас: \t"${list[i].age}"\nОноо: "${list[i].points}"\n\n`;
    }
  }
  return user;
}

// Олон ур чадвартай хөгжүүлэгчийн мэдээлэл буцаана, return string
function getManySkilledPerson(list) {
  let skillUser = list[0].skills.length;
  let userIndex = 0;
  let userInfo = "";

  for (var i = 1; i < list.length; i++) {
    if (list[i].skills.length > skillUser) {
      skillUser = list[i].skills.length;
      userIndex = i;
    }
  }

  userInfo = `Хамгийн олон ур чадвартай хөгжүүлэгчийн мэдээлэл:\nНэр: \t${list[userIndex].name}\nEmail: \t${list[userIndex].email}\nНас: \t${list[userIndex].age}\nЭзэмшсэн Ур чадвар: ${list[userIndex].skills}`;

  return userInfo;
}

// нэвтэрсэн хэрэглэгчид буцаана, return array of users
function checkLogin(users) {
  let loginUsers = [];

  for (let i = 0; i < users.length; i++) {
    if (users[i].isLoggedIn === true) {
      loginUsers.push(users[i].name);
    }
  }
  return loginUsers;
}

// Зөвхөн өндөр оноотой хүмүүсийн нэрсийг буцаана, return array of users
function getScoreHighUser(user) {
  let hsusers = [];

  for (let i = 0; i < user.length; i++) {
    if (user[i].points >= 50) {
      hsusers.push(user[i].name);
      Object.prototype.highScoreUserNo++;
    }
  }
  return hsusers;
}

// Зөвхөн өндөр оноотой хүмүүсийн тоог буцаана, return number
function getHighScoreUserCount(user) {
  for (let i = 0; i < user.length; i++) {
    if (user[i].points >= 50) {
      highScoreUserNo++;
    }
  }
  return highScoreUserNo;
}

// MERN хөгжүүлэгчийн мэдээллийг буцаана, return array of users
function getMernDev(list) {
  let developers = [];

  for (let i = 0; i < list.length; i++) {
    if (list[i].skills.includes("MongoDB", "Express", "React", "Node")) {
      developers.push(list[i]);
    }
  }
  return developers;
}

// return a list of users String, para array of users
function getInfo(userobj) {
  let userInfo = "";
  for (let i = 0; i < userobj.length; i++) {
    userInfo += `Нэр: ${userobj[i].name}\nEmail: ${userobj[i].email}\nНас: ${userobj[i].age}\nУр чадвар: ${userobj[i].skills}\nОноо: ${userobj[i].points}\n\n`;
  }

  return userInfo;
}

// Өндөр настай хөгжүүлэгчийн мэдээллийг буцаана, return array of users
function getOldestDev(list) {
  let developers = [];
  let ageList = getAgesArray(list);
  
  for (let j = ageList.length - 1; j > 3; j--) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].age == ageList[j]) {
        developers.push(list[i]);
        break;
      }
    }
  }
  return developers;
}

// return 1 хэмжээст насны массив
function getAgesArray(list) {
  let ages = [];
  for (let i = 0; i < list.length; i++) {
    ages.push(list[i].age);
  }
  return ages.sort();
}
