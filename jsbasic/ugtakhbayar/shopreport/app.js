const reportData = [
    {productName: "Tous les Jours Cake", unitPrice: 15000, amount: 40, totalPrice: 600000, casherId: 1, date: '2022-11-02'},
    {productName: "Chocolate", unitPrice: 4700, amount: 28, totalPrice: 131600, casherId: 1, date: '2022-11-02'},
    {productName: "Bread", unitPrice: 3000, amount: 58, totalPrice: 174000, casherId: 1, date: '2022-11-02'},
    {productName: "Colgate", unitPrice: 4300, amount: 8, totalPrice: 34400, casherId: 1, date: '2022-11-02'},
    {productName: "Jaeyug Kimbab", unitPrice: 3861, amount: 20, totalPrice: 77220, casherId: 1, date: '2022-11-02'},
    {productName: "Cow Meat", unitPrice: 9450, amount: 12, totalPrice: 113400, casherId: 1, date: '2022-11-02'},
    {productName: "Baccus", unitPrice: 3960, amount: 2, totalPrice: 113400, casherId: 1, date: '2022-11-02'},
    {productName: "Salat Dresser", unitPrice: 3900, amount: 6, totalPrice: 23400, casherId: 1, date: '2022-11-02'},
    {productName: "Bon Aqua", unitPrice: 519, amount: 44, totalPrice: 22836, casherId: 1, date: '2022-11-02'},
    {productName: "Egg bor Tumen", unitPrice: 5729, amount: 32, totalPrice: 183328, casherId: 1, date: '2022-11-02'},
    {productName: "Egg white", unitPrice: 5530, amount: 22, totalPrice: 121660, casherId: 1, date: '2022-11-02'},
    {productName: "Bakery", unitPrice: 3600, amount: 52, totalPrice: 187200, casherId: 1, date: '2022-11-02'},
    {productName: "Safeguard", unitPrice: 3249, amount: 10, totalPrice: 32490, casherId: 1, date: '2022-11-02'},
    {productName: "Coca cola", unitPrice: 3450, amount: 6, totalPrice: 20700, casherId: 1, date: '2022-11-02'},
    {productName: "Pepsi", unitPrice: 3440, amount: 5, totalPrice: 17200, casherId: 1, date: '2022-11-02'},
    {productName: "Water 0.5l", unitPrice: 800, amount: 33, totalPrice: 26400, casherId: 1, date: '2022-11-02'},
    {productName: "Vegan buuz", unitPrice: 11500, amount: 7, totalPrice: 80500, casherId: 1, date: '2022-11-02'},
    {productName: "Khan buuz", unitPrice: 14800, amount: 9, totalPrice: 133200, casherId: 1, date: '2022-11-02'},
    {productName: "Eco rice 5kg", unitPrice: 30000, amount: 15, totalPrice: 450000, casherId: 1, date: '2022-11-02'},
    {productName: "Brown rice", unitPrice: 12000, amount: 9, totalPrice: 108000, casherId: 1, date: '2022-11-02'},
    {productName: "Evok", unitPrice: 46999, amount: 8, totalPrice: 375992, casherId: 1, date: '2022-11-02'},
    {productName: "Eden", unitPrice: 31299, amount: 11, totalPrice: 344289, casherId: 1, date: '2022-11-02'},
    {productName: "Senguur", unitPrice: 2899, amount: 48, totalPrice: 139152, casherId: 1, date: '2022-11-02'},
    {productName: "Seruun", unitPrice: 2699, amount: 42, totalPrice: 113358, casherId: 1, date: '2022-11-02'},
    {productName: "Tiger", unitPrice: 3239, amount: 36, totalPrice: 116604, casherId: 1, date: '2022-11-02'},
    {productName: "Kaltenberg", unitPrice: 4429, amount: 24, totalPrice: 106296, casherId: 1, date: '2022-11-02'},
    {productName: "Minute maid", unitPrice: 2099, amount: 54, totalPrice: 113346, casherId: 1, date: '2022-11-02'},
    {productName: "APA water", unitPrice: 1429, amount: 38, totalPrice: 54302, casherId: 1, date: '2022-11-02'},
    {productName: "Vita 500", unitPrice: 2499, amount: 8, totalPrice: 19992, casherId: 1, date: '2022-11-02'},
    {productName: "Vitos Eco juice", unitPrice: 2059, amount: 18, totalPrice: 37062, casherId: 1, date: '2022-11-02'},
    {productName: "Ice Coffee", unitPrice: 3499, amount: 27, totalPrice: 94473, casherId: 1, date: '2022-11-02'},
    {productName: "Wild Berry", unitPrice: 1739, amount: 17, totalPrice: 29563, casherId: 1, date: '2022-11-02'},
    {productName: "Ice tea", unitPrice: 1869, amount: 31, totalPrice: 57939, casherId: 1, date: '2022-11-02'},
    {productName: "Uzem MonJuice", unitPrice: 3019, amount: 25, totalPrice: 75475, casherId: 1, date: '2022-11-02'},
    {productName: "Red Bull", unitPrice: 2219, amount: 34, totalPrice: 75446, casherId: 1, date: '2022-11-02'},
    {productName: "CJ hetbahn ffood", unitPrice: 13449, amount: 12, totalPrice: 161388, casherId: 1, date: '2022-11-02'},
    {productName: "Fan's ffood", unitPrice: 3759, amount: 23, totalPrice: 86457, casherId: 1, date: '2022-11-02'},
    {productName: "Korean Soup", unitPrice: 4129, amount: 26, totalPrice: 107354, casherId: 1, date: '2022-11-02'},
    {productName: "El Corte Mejillones", unitPrice: 6499, amount: 16, totalPrice: 103984, casherId: 1, date: '2022-11-02'},
    {productName: "Sain Milk", unitPrice: 4599, amount: 28, totalPrice: 128772, casherId: 1, date: '2022-11-02'},
    {productName: "Yogurt tarag", unitPrice: 3999, amount: 15, totalPrice: 59985, casherId: 1, date: '2022-11-02'},
    {productName: "Zow Aarts Undaa", unitPrice: 4249, amount: 29, totalPrice: 123221, casherId: 1, date: '2022-11-02'},
];
let totalIncome = 0;
let totalNumberOfIncomes = 0;

function getTotalIncomeByPrice(){
    for(const element of reportData){
        totalIncome += element.totalPrice;
    }
    return totalIncome;
}

function getTotalNumberOfIncomes(){
    for(const element of reportData){
        totalNumberOfIncomes += element.amount;
    }
    return totalNumberOfIncomes;
}
// Max 5 product Price
function getMaxIncomeNumFiveProdutions(){
    
    let maxIncomeFiveProduct = [...reportData];
    let top5price = maxIncomeFiveProduct.sort(function(a, b){
        return b.totalPrice - a.totalPrice;
    }).slice(0, 5);
    
    return top5price;
}

// Max 5 product amount
function getMaxIncomeFiveProd(){
    let maxIncomeFiveProduct = [...reportData];
    let top5Amount = maxIncomeFiveProduct.sort(function(a, b){
        return b.amount - a.amount;
    }).slice(0, 5);

    return top5Amount;
}

// Max 10 Price for each product
function getMaxIncomeTenProd(){
    let maxIncomeTenProd = [...reportData];
    let top10price = maxIncomeTenProd.sort(function(a, b){
        return b.totalPrice - a.totalPrice;
    }).slice(0, 10);
    return top10price;
}

function getPercentByPrice(price){
    let niitIncome = Math.floor(price / (totalIncome / 100));
    return niitIncome;
}

function getPercentByAmount(amount){
    let niitBorluulalt = Math.floor(amount / (totalNumberOfIncomes / 100));
    return niitBorluulalt;
}

// Products to console
function displayConsolePrice(list){
    let niitBorluulalt = 0;
    for(const element of list){
        console.log(`Бүтээгдэхүүний нэр: \t\t${element.productName}\nБорлуулалтын тоо: \t\t\t${element.amount}\nБорлуулалтын үнийн дүн:\t${element.totalPrice}\n`);
        niitBorluulalt += element.totalPrice;
    }
    console.log("Нийт борлуулалт: " + niitBorluulalt.toLocaleString());

    let percPerProduct = getPercentByPrice(niitBorluulalt);
    console.log(`Нийт борлуулалтын орлогын ${percPerProduct}% хувь эзэлж байна`);
}

// Ten Products to console
function displayConsoleTenPrice(list){
    let niitBorluulalt = 0;
    for(const element of list){
        niitBorluulalt += element.totalPrice;
    }
    console.log("Нийт борлуулалт: " + niitBorluulalt.toLocaleString());

    let percPerProduct = getPercentByPrice(niitBorluulalt);
    console.log(`Нийт борлуулалтын орлогын ${percPerProduct}% хувь эзэлж байна`);
}

// Products to console 
function displayConsoleAmount(list){
    let niitIncomeAmo = 0;
    for(const element of list){
        console.log(`Бүтээгдэхүүний нэр: \t\t${element.productName}\nБорлуулалтын тоо: \t\t\t${element.amount}\nБорлуулалтын үнийн дүн:\t${element.totalPrice}\n`);
        niitIncomeAmo += element.amount;
    }
    console.log("Нийт борлуулалтын тоо: " + niitIncomeAmo.toLocaleString());

    let percPerProductAmount = getPercentByAmount(niitIncomeAmo);
    console.log(`Нийт борлуулалтын ${percPerProductAmount}% хувь эзэлж байна`);
}

function minFiveProductPrice(){
    let minFiveProducts = [...reportData];
    let minFivePod = minFiveProducts.sort(function(a, b){
        return a.totalPrice - b.totalPrice;
    }).slice(0, 5);

    return minFivePod;
}

function minFiveProductAmount(){
    let minFiveProdAmout = [...reportData];
    let minFivProdAm = minFiveProdAmout.sort(function(a, b){
        return a.amount - b.amount;
    }).slice(0, 5);

    return minFivProdAm;
}

function start(){
    let totalIncomeByPrice = getTotalIncomeByPrice();
    console.log("Нийт борлуулалтын үнийн дүн");
    console.log("- " + totalIncomeByPrice.toLocaleString());

    let totalNumberOfIncomes = getTotalNumberOfIncomes();
    console.log("Нийт борлуулсан барааны тоо ширхэг");
    console.log("- " + totalNumberOfIncomes);

    console.log("\nХамгийн их зарагдсан 5 барааны жагсаалт /Борлуулалтын үнийн дүнгээр/");
    let maxIncomeFiveProduct = getMaxIncomeNumFiveProdutions();
    displayConsolePrice(maxIncomeFiveProduct);
    
    
    console.log("\nХамгийн их зарагдсан 5 барааны жагсаалт /Борлуулалтын тоогоор/");
    let maxFiveAmount = getMaxIncomeFiveProd();
    displayConsoleAmount(maxFiveAmount);
    
    console.log("\nХамгийн бага зарагдсан 5 барааны жагсаалт /Борлуулалтын үнийн дүнгээр/");
    let minIncFiveProdCost = minFiveProductPrice();
    displayConsolePrice(minIncFiveProdCost);

    console.log("\nХамгийн бага борлуулагдсан 5 барааны жагсаалт /Борлуулалтын тоогоор/");
    let testMinFivevProductAm = minFiveProductAmount();
    displayConsoleAmount(testMinFivevProductAm);

    console.log("\nХамгийн их борлуулагдсан 10 барааны үнийн дүн болон нийт борлуулалтад эзлэх хувь");
    let testMaxIncomesTenProd = getMaxIncomeTenProd();
    displayConsoleTenPrice(testMaxIncomesTenProd);

    console.log("\nShopping Report Console\n");
}

start();