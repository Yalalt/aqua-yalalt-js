let companies = [
  "Facebook",
  "Google",
  "Twitter",
  "Microsoft",
  "Oracle",
  "IBM",
  "Apple",
  "Amazon",
];

let cutedBegin3 = [3];
for (let i = 0; i < 3; i++) {
  cutedBegin3[i] = companies[i];
}
console.log("Эхний 3 компани: " + cutedBegin3);

let suul3company = [3];
debugger;
for (let icom = 1; icom < 4; icom++) {
  suul3company[icom - 1] = companies[companies.length - icom];
}

console.log("\nСүүлийн 3 компани: " + suul3company);

console.log("Компани дундаас авч хаях");