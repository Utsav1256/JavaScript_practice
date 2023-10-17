/*
 ****
 ****
 ****
 ****
 */

//		No. of rows?? --> N = 4
//		No. of columns in ith row?? --> N
//		what to print?? --> *

// npm install prompt-sync

const prompt = require("prompt-sync")();

// const n = prompt("What is your anme??");
// console.log(`Hii ${n}`);

const N = prompt("Enter number of rows for the square pattern : ");
let String = "";

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    // console.log("*");  // we cant do this, we have to make a string
    String = String + "*"; // String += "*";
  }
  //   console.log();
  String += "\n"; // newline after each row
}

console.log(String);
