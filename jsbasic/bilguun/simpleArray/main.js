let itCompanies = [
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
  cutedBegin3[i] = itCompanies[i];
}
console.log(itCompanies);
console.log("Эхний 3 компани: " + cutedBegin3);

let suul3company = [3];
debugger;
for (let icom = 1; icom < 4; icom++) {
  suul3company[icom - 1] = itCompanies[itCompanies.length - icom];
}

console.log("\nСүүлийн 3 компани: " + suul3company);
console.log("\nКомпани дундаас нь авч хаях");

let remCompanyNames = ["Apple", "Google"];
console.log("Авч хаях компани " + remCompanyNames + "\n");

for (let rem = 0; rem < remCompanyNames.length; rem++) {
  let index = itCompanies.indexOf(remCompanyNames[rem]);

  if(index !== -1) {
    itCompanies.splice(index, 1);
  }
}
console.log(itCompanies);

console.log("\nЭхний компанийг хасах: ");
itCompanies.shift();

console.log(itCompanies);

console.log("Сүүлийн компанийг хасах: ");
itCompanies.pop();

console.log(itCompanies);
