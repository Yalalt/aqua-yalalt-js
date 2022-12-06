let arr = [4, 32, 2, 5, 8, -10, 20, 1, 0, -20];

function arraySorter(inArr) {
let resultArr = [...inArr];
  for (let i = 0; i < resultArr.length; i++) {
      let min = i;
    
      for (let j = i + 1; j < resultArr.length; j++) {
        if (resultArr[j] < resultArr[min]) {
          min = j;
        }
      }
      
      if(min !== i){
        let temp = resultArr[i];
        resultArr[i] = resultArr[min];
        resultArr[min] = temp;
      }
  }
  return resultArr;
}

console.log("\nЭрэмблэхээс өмнө: " + arr);

let sortedArray = arraySorter(arr);
console.log("Эрэмбэлсний дараа: " + sortedArray);
