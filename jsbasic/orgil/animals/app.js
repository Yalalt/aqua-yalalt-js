const animals = [
  { type: "dog", sound: "woof" },
  { type: "cow", sound: "moo" },
  { type: "cat", sound: "meow" },
  { type: "duck", sound: "quack" },
  { type: "birds", sound: "tweet" },
  { type: "fox", sound: "Ring-ding" },
  { type: "pig", sound: "oink" },
  { type: "mouse", sound: "squeak" },
  { type: "hourse", sound: "neigh" },
  { type: "sheep", sound: "maai-maai" },
  { type: "snake", sound: "hiss" },
  { type: "chicken", sound: "cluck" },
  { type: "frog", sound: "ribbit" },
];

function whatToSay() {
  for (const element of animals) {
    let message = "";
    message += element.sound.concat("-").repeat(5);
    console.log(`What does the ${element.type} say? ${message}ding!`);
  }
}
whatToSay();
