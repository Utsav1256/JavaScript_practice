const prompt = require("prompt-sync")();
// console.log(takeInput());
let arr = takeInput();
print(arr);

function takeInput() {
  const size = prompt();

  let arr = new Array(size);
  console.log(arr.length);
  print(arr);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = prompt();
  }
  return arr;
}

function print(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  //   console.log(arr); // -> it will print element of array as a string
}
