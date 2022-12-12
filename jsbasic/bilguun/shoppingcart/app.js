const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

function addItem(item) {
  shoppingCart.push(item);
}

function removeItem(item) {
    const index = shoppingCart.indexOf(item);
    if (index > -1) {
        shoppingCart.splice(index, 1);
    }
}

function editItem(item) {
    const index = shoppingCart.indexOf(item);
    if (index > -1) {
        shoppingCart.splice(index, 1);
        shoppingCart.splice(index, 0, 'Green '.concat(item));
    }
}

function addItemFromBefore(item){
    let newShoppingCart = [];
    const index = shoppingCart.indexOf(item);
    if (index < 0) {
        newShoppingCart = shoppingCart.unshift(item);
    }
    return newShoppingCart;
}

function start(){
    console.log("Shopping Cart started");
    console.log(shoppingCart);
    
    console.log("Start add Meat");
    // New shopping cart after start add item
    let testCart = addItemFromBefore('Meat');
    console.log(shoppingCart);
    
    console.log("End add Sugar");
    addItem('Sugar');
    console.log(shoppingCart);
    
    console.log("Removed -> Honey");
    removeItem('Honey');
    console.log(shoppingCart);

    console.log("Tea -> Green Tea");
    editItem('Tea');
    console.log(shoppingCart);
}

start();