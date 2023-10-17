/*
 1111
 2222
 3333
 4444
*/
/*
		no.of rows ?? --> N = 4
		no. of columns?? --> = N
		what to print?? -->
        i pe depend kar raha hai (kyuki har row me same cheej nahi hai)
        row no. -> i
		*/

const prompt = require("prompt-sync")();

const N = prompt("Enter number of rows for the square pattern : ");

let string = "";

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    string += i;
  }
  string += "\n";
}

console.log(string);
