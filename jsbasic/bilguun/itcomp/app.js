const itCompany = [
  "Google",
  "Facebook",
  "Microsoft",
  "Twitter",
  "Apple",
  "Oracle",
  "Amazon",
];

function sortedArray(list) {
    return list.sort((a, b) => {
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
        return 0;
    });
}

function reverseSort(list) {
    return sortedArray(list).reverse();
}

function startRemoveItem(){
    itCompany.shift();
}

function endItemRemove(){
    itCompany.pop();
}

function removeMiddleItemITCompany(item){
    let index = itCompany.indexOf(item);
    if(index > -1) {
        itCompany.splice(index, 1);
    } else {
        console.log("Ajillahgvi bna");
    }
}

function removeAll(){
    itCompany.splice(0, itCompany.length);
}

function start(){
    console.log("\nIT Company sorted");
    let testSocialSort = sortedArray(itCompany);
    console.log(testSocialSort);
    
    console.log("\nReversed Sort IT Company");
    let testSocialReverseSort = reverseSort(itCompany);
    console.log(testSocialReverseSort);
    
    console.log("\nStart remove first item");
    startRemoveItem();
    console.log(itCompany);
    
    console.log("\nEnd remove last item");
    endItemRemove();
    console.log(itCompany);
    
    console.log("\nRemove middle item Google");
    removeMiddleItemITCompany('Google');
    console.log(itCompany);

    console.log("\nRemove All elements");
    removeAll();
    console.log(itCompany);
}

start();