// let imgDisp = document.querySelector("#result");
// let urlImg = "https://images.unsplash.com/photo-1671418193953-9402c71d612d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80";

// const newPromise = new Promise((resolve, reject) => {
    
//     setTimeout(() => {
        
//         if (urlImg !== null) {
//           resolve();
//         } else {
//           reject();
//         }
//     }, 2000);
// });

// newPromise
//   .then(function (url) {
//     displayImage(url);
//   })
//   .catch((err) => {
//     console.error("Error uuslee: " + err);
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Finally worked");
//   });

// function displayImage(value) {
//   imgDisp.innerHTML = `<img src="${value}" width="300" crossorigin="anonymous"/>`;
// }

let BoldIncome = 5_000_000;

let hairiinHuch2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (BoldIncome > 1_000_000) {
      resolve("success");
    } else {
      reject("not enough funds to release new album");
    }
  }, 2000);
});

console.log(hairiinHuch2);

hairiinHuch2
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finished");
  });

let arr = [
  { name: "Andy", age: 30 },
  { name: "yunchir", age: 20 },
];
// let newArr = new Array(...arr);
let newArr = [...arr];
newArr[1].name = "yunchir1";

console.log(arr[1].name);
console.log(newArr[1].name);
// console.log(newArr);