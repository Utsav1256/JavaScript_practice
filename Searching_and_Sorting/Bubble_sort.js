const takingInput = () => {
  const size = parseInt(prompt("Enter size of the element : "), 10);

  let arr = new Array(size);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = parseInt(prompt(), 10);
  }

  return arr;
};
const BubbleSort = (arr) => {
  //   for (let i = 0; i < arr.length; i++) {
  //     console.log(i);
  //     for (let j = 1; j < arr.length - i; j++) {
  //       if (arr[j - 1] > arr[j]) {
  //         let temp = arr[j - 1];
  //         arr[j - 1] = arr[j];
  //         arr[j] = temp;
  //       }
  //     }
  //   }
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

const prompt = require("prompt-sync")();

let arr = takingInput();
let sortedArr = BubbleSort(arr);
console.log(sortedArr);
