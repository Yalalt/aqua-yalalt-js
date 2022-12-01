console.log("1. Firstname, Lastname\n");

let firstname = "Yalalt";
let lastname = "Gandush";
console.log(`Овог нэр урт: овог ${lastname.length} нэр ${firstname.length}`);
console.log("\n2. Lower case\n");
console.log(`овог ${lastname.toLowerCase().toString()} нэр ${firstname.toLowerCase().toString()}`);
console.log("\n3. Capital case\n");
console.log(`овог ${lastname.toUpperCase().toString()} нэр ${firstname.toUpperCase().toString()}`);

console.log("\n4. Pinecone academy\n");
let academy = "Pinecone academy-н";
let leap = "Leap хөтөлбөрт тавтай морилно уу?";
let greeting = academy.concat(" ", leap);
console.log(greeting);

console.log("\n5. Information mine\n");
let country = "Монгол";
let city = "Улаанбаатар хот";
let age = 32;
let job = "Frontend Developer";

let sentences = "Намайг " + firstname + " гэдэг. Овог " + lastname + ". " + "Би " + country + " улсын " + city + "од амьдардаг. Одоо нэг компанид " + job + "-ээр ажилладаг.";

console.log(sentences);

console.log("\n6. Тоонууд\n");

console.log("\t1 2 3 4 5\n\t2 3 4 5 1\n\t3 4 5 1 2\n\t4 5 1 2 3\n\t5 1 2 3 4");
