const prompt = require("prompt-sync")();

const size = parseInt(prompt("Enter size : "), 10);
let arr = new Array(size);

for (let i = 0; i < arr.length; i++) {
  arr[i] = parseInt(prompt(), 10);
}
console.log(arr.join(" "));
console.log(typeof arr); // object
console.log(typeof arr[1]); // number
