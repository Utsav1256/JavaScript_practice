/*
		 1234
		 1234
		 1234
		 1234
*/
/*
				no.of rows ?? --> N = 4
				no. of columns?? --> = N
				what to print?? --> 
                har ek row me content same hai --> ye row pe to depend nahi kar raha
                but, har ek column me content different hai --> ye column pe depend kar raha hai
                --> column no. -> j
*/

const prompt = require("prompt-sync")();

const n = prompt("Enter number of rows for the square pattern : ");
let string = "";

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    string += j;
  }
  string += "\n";
}

console.log(string);
