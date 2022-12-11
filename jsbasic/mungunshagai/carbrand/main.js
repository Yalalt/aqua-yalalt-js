const carBrands = [
  ["Aston Martin Lagonda Ltd", "UK", 2016],
  ["Audi R8", "Germany", 2016],
  ["BMW", "Germany", 2016],
  ["Chevrolet", "USA", 2016],
  ["Dodge", "USA", 2016],
  ["Ferrari", "Italy", 2016],
  ["Honda", "Japan", 2016],
  ["Jaguar", "UK", 2016],
  ["Lamborghini", "Italy", 2016],
  ["Porsche", "Germany", 2021],
];

function searchCarBrandbyChar(searchval) {
  let counter = 0;
  let toggle = false;

  for (let i = 0; i < carBrands.length; i++) {
    if (carBrands[i][0].startsWith(searchval.toUpperCase())) {
      if (!toggle) {
        console.log("Output: Хайлтад дараах брэндийн машин байна");
        toggle = true;
      }
      console.log(
        `Car brand: ${carBrands[i][0]}\nCountry: ${carBrands[i][1]}\nYear: ${carBrands[i][2]}\n`
      );
      counter++;
    }
  }
  if (counter == 0) {
    console.log("Output: Хайлтад машин олдсонгүй.");
  }
  return ".";
}

function getInfoByCountry(country) {
  let searchInfo = [];
  let counter = 0;
  let toggle = false;
  let inCountry = country.toUpperCase();

  for (let i = 0; i < carBrands.length; i++) {
    let brandCountry = carBrands[i][1].toUpperCase();
    if (brandCountry.includes(inCountry)) {
      if (!toggle) {
        console.log("Output: Хайлтад дараах брэндийн машин байна");
        toggle = true;
      }
      console.log(
        `${carBrands[i][0]}\t${carBrands[i][1]}\t${carBrands[i][2]}\n`
      );
      counter++;
    }
  }
  if (counter == 0) {
    console.log("Output: Хайлтад машин олдсонгүй.");
  }
  return "";
}

function getAllInfo(list) {
  let output = "";
  let ukC = 0;
  let gerC = 0;
  let usaC = 0;
  let itaC = 0;
  let japC = 0;

  list.forEach((element) => {
    switch (element[1]) {
      case "UK":
        ukC++;
        break;
      case "Germany":
        gerC++;
        break;
      case "USA":
        usaC++;
        break;
      case "Italy":
        itaC++;
        break;
      case "Japan":
        japC++;
        break;
      default:
        break;
    }
  });
  output += `Output: Нийт ${list.length} мөр дата, UK-${ukC}, Germany-${gerC}, USA-${usaC}, Italy-${itaC}, Japan-${japC}`;
  return output;
}

function getInputValue() {
  let input = prompt("1. Хайх машины брэндийн эхний үсгийг оруулна уу");
  console.log("Input: " + input);
  return input;
}
function getInputCoValue() {
  let input = prompt("2. Хайх машины УЛСЫН нэрийг оруулна уу");
  console.log("\nInput: " + input);
  return input;
}

function start() {
  let testByBrand = searchCarBrandbyChar(getInputValue());
  let testByCountry = getInfoByCountry(getInputCoValue());

  console.log(testByBrand);
  console.log(testByCountry);

  let testAllInfo = getAllInfo(carBrands);
  console.log(testAllInfo);
}

start();
