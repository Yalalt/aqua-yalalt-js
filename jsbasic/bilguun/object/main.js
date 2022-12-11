const dogs = [
  {
    name: 'Groucho Barks',
    breed: 'German Shepherd',
    color: 'Хар хүрэн',
    age: 12,
    attractive: "Эрэл хайгуулч, Ухаантай",
  },
  {
   name: 'Pepper',
   breed: 'Shih Tzu',
   color: 'Шаргал алтлаг болон цагаан',
   age: 11,
   attractive: "Урт үстэй, Загварлаг",
  },
  {
   name: 'Bark Twain',
   breed: 'Dachshund',
   color: 'Бор хүрэн',
   age: 10,
   attractive: "Богино хөл урт бие",
  },
  {
   name: 'Pembroke Welsh Corgi',
   breed: 'Corgis',
   color:'Бор шар, цагаан хүрэн',
   age: 10,
   attractive: "Гурван өнгийн гоё үстэй",
  },
  {
   name: 'Spotted Coach dog',
   breed: 'Dalmatian',
   color: "Цагаан хар толботой",
   age: 12,
   attractive: "Толбот, богино үстэй, спортлог"
  },
 ]

 function getNames(list){
  for(const dog of list){
    console.log(dog.name);
  }
 }

 function getInfoDogs(list){
  
    for(const dog of list){
      console.log(`Нэр: ${dog.name} \t\tҮүлдэр: ${dog.breed}\nНас: ${dog.age} \t\t\t\tӨнгө: ${dog.color} \nОнцлог шинж чанар: \t\t${dog.attractive}`);
    }
 }

console.table(dogs);
console.log("Нохойн нэрс");
console.log(getNames(dogs));
console.group("Дэлгэрэнгүй мэдээлэл");
getInfoDogs(dogs);
console.groupEnd();


