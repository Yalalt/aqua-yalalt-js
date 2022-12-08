let Person = {
  firstname: "Yalalt",
  lastname: "Dorj",
  age: 30,
  score: [78, 90, 85, 98],
  shout: () => {
    console.log("HAAHAA WOO");
  },
  address: {
    country: "Mongolia",
    city: "UB",
    district: "Bayangol",
    apartment: "UB Apartment",
    build: "A building",
  },
  fullName: function(){
    return this.firstname + " " + this.lastname;
  },
};



// console.log(Person.age);
// console.log(Person.fullName());


// let Person2 = {...Person};
// Person2.firstname = "Erdene";
// console.log(Person2.firstname);

// console.log(Person.fullName());

let array11 = [10,20,30];
let array22 = [...array11];

let array33 = [...[...array11]];

array22[0] = 99;
// console.log(array11);
// console.log(array22);

// console.log(Object.keys(Person));
// console.log(Object.values(Person));
