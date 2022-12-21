// async function getAction(){
//     for(let i = 0; i < 10; i++){
//         for(let j = 0; j < 10; j++){
//             // some action
            
//         }
//     }
// }


// console.log("1 line");
// console.log("2 line");
// let result = getAction();
// let abc;
// result.then((res) => abc = res);

// console.log("Abc: " + abc);
// console.log("3 line");
// console.log("4 line");

function prepare_breakfast(){

    let washface_promise = new Promise((resolve, reject) => {
        resolve("first wash face");
    });

    console.log("Coffee boiling begin");
    let coffee_promise  = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("coffee ready");
        }, 2000);
    });
    
    console.log("Bread frying begin");
    let bread_promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Bread frying finish");
        }, 2000);
    });
    
    console.log("Bread add Jam");
    let jam_promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Bread added Jam finish");
        }, 1000);
    });

    
    let combined_promise = Promise.all([washface_promise, coffee_promise, togooHalaah, egg_promise, meat_promise, bread_promise, jam_promise]);

    return combined_promise;
}

function fryEgg(){
    console.log("Egg fry begin");
    let egg_promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("finished frying egg");
        }, 4000);
    });

    return egg_promise;
}

function fryMeat(){
    console.log("Meat frying begin");
    let meat_promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Meat frying finish");
        }, 6000);
    });
    return meat_promise;
}

function togooHalaah(){
    let togooHalaah = new Promise((resolve, reject) => {
        resolve("Togoo halaaj ehelsen");
    });
    return togooHalaah;
}

function eatFunction(){
    let eat_breakfast = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Pouring Juice");
        }, 6500);
    });
    return eat_breakfast;
}

async function morning() {
    let result = await prepare_breakfast();
    console.log(result);
}

async function morningAfterAction(){
    let eatResult = await eatFunction();
    console.log(eatResult);
}

async function togooHalaah(){
    
}

morning();
morningAfterAction();