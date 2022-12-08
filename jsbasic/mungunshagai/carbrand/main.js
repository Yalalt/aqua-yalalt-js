const carBrands = [
    ["Aston Martin Lagonda Ltd", "UK", 2016],
    ["Audi", "Germany", 2016],
    ["BMW", "Germany", 2016],
    ["Chevrolet", "USA", 2016],
    ["Dodge", "USA", 2016],
    ["Ferrari", "Italy", 2016],
    ["Honda", "Japan", 2016],
    ["Jaguar", "UK", 2016],
    ["Lamborghini", "Italy", 2016],
    ];


const searchIndexbyBrand = function(searchval){
    
    let searchResult = [];
    carBrands.forEach(item => {
        if(item.includes(searchval)){
            searchResult.push(item[0], item[1], item[2]);
        }
    });
    return searchResult;
}

const getInfobyBrand = function(sIndex) {
    let searchInfo = [];
    carBrands.forEach((item, index) => {
        if(index == sIndex){
            searchInfo.push(item[0], item[1], item[2]);
        }
    });
    return searchInfo;
}

let test1 = getInfobyBrand(0);
let test2 = searchIndexbyBrand('a');
console.log(test1);
console.log(test2);