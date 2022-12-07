const palindromeCheck = function (n, a, b) {
  let result;
  let firstIndex = 0;
  let lastIndex = n.toString().length - 1;
  if (n !== 0) {
  }
  if (n[firstIndex] == n[lastIndex]) {
    palindromeCheck();
  }
};

let test1 = "abcddcba";
let test2 = 1234567654321;
let a = test1.length;
let b = test1.length;
let testFunction1 = palindromeCheck(test1, a, b);
// let testFunction2 = palindromeCheck(test2);

console.log(testFunction1);
// console.log(testFunction2);
