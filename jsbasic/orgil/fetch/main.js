//   let newFoodsInfo = productsList.map((food) => {
//     localStorage.setItem(food.name, food.price);
//     return {ner: food.name, une: food.price};
//   });

  
//   console.log(newFoodsInfo);
let newProducts = {};
const url = 'http://127.0.0.1:5500/jsbasic/orgil/fetch/products.html';
async function getProducts(){
    try {
        const responseData = await fetch(url);
        const data = await responseData.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

let items = getProducts().then(dataList => {
    newProducts = dataList;
    console.log(newProducts);
});


function getNamePrice(list) {
    let prods = list.map(item => {
        return {ner: item.title, une: item.price};
    });
    console.log(prods);
}

getNamePrice(newProducts);

// let obj = {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json'}
// };

// async function updateDataProducts(url, obj){
//     try {
//         const sendData = await fetch(url, obj);
//     } catch(error) {
//         console.error(error);
//     }
// }