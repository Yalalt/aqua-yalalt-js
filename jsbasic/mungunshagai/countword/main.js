let data = [
    'Засгийн', 'газарт', '6.4', 'сая', 'тонн', 'нүүрс', 'алдагдсан', 'гэх', 'мэдээлэл', 'ирээгүй', 'байна.', 'Бодит', 'байдалд', 'ийм', 'их', 'хэмжээний', 'нүүрс', 'алдагдсан', 'гэх', 'асуудал', 'эргэлзээтэй', 'байна.', 'Хууль', 'хяналтын', 'байгууллага', 'хяналт', 'шалгалтын', 'ажил', 'явуулж', 'байна'
];

let searchInput = 'ХЯнал';
// let searchInput = prompt("Хайх үгээ оруулна уу.");

let lowerSearch = searchInput.toLowerCase();
let copyData = [];
let foundData = [];
let counter = 0;
let j= 0;
for(let i = 0; i < data.length; i++){
    copyData[i] = data[i].toLowerCase();
    if(copyData[i].includes(lowerSearch)){
        foundData[j] = copyData[i];
        j++;
        counter++;
    }
}
console.log(`${searchInput} гэдэг үг ${counter} орсон байна.`);


