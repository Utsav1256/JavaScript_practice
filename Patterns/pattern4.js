/*
		 4321
		 4321
		 4321
		 4321
*/
/*
				no.of rows ?? --> N = 4
				no. of columns?? --> = N
				what to print?? --> 
                yaha content of each row is same --> it does not depends upon row
                content of each column is different --> it depends upon column
                --> column no. -> j (in reverse order)
*/
const prompt = require("prompt-sync")();

const N = prompt("Enter number of rows for the square pattern : ");
let string = "";
// for (let i = 1; i <= N; i++) {
//   for (let j = N; j > 0; j--) {
//     string += j;
//   }
//   string += "\n";
// }
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    string += N - j + 1;
  }
  string += "\n";
}

console.log(string);
