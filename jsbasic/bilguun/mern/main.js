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
    email: "daniel@daniel.com",
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

// Test heseg
console.group("Нэг хэрэглэгчийн мэдээлэл авсан нь:");
console.log(getUserInfoByName("Paul", users));
console.groupEnd();
console.log(getManySkilledPerson(users));
console.log("\nНэвтэрсэн хэрэглэгчид: " + checkLogin(users));






// return String, get 2 parameter name and array
function getUserInfoByName(name, list) {
  let user = "";
  for (let i = 0; i < list.length; i++) {
    if (list[i].name === name) {
      user += `Нэр: \t"${list[i].name}"\nEmail: \t"${list[i].email}"\nУр чадвар: "${list[i].skills}"\nНас: \t"${list[i].age}"\nОноо: \t"${list[i].points}"\n\n`;
    }
  }
  return user;
}

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

function checkLogin(users) {
  let loginUsers = [];

  for (let i = 0; i < users.length; i++) {
    if (users[i].isLoggedIn === true) {
      loginUsers.push(users[i].name);
    }

  }
  return loginUsers;
}

