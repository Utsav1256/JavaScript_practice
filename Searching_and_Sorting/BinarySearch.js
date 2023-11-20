function takeInput() {
  const size = parseInt(prompt(), 10);

  let arr = new Array(size);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = parseInt(prompt(), 10);
  }

  return arr;
}

print = (arr) => {
  console.log(arr.join(" "));
};

//  selection sort
//  i/p -> arr
//  o/p -> sorted array
const SelectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex != i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
};

// BonarySearch
const BinarySearch = (arr, X) => {
  let startIndex = 0;
  let endIndex = arr.length - 1;

  while (startIndex <= endIndex) {
    // let mid = (startIndex + endIndex) / 2; // in JS- (int / int) = float
    let mid = Math.floor((startIndex + endIndex) / 2); //  rounding down to the nearest integer
    if (X == arr[mid]) {
      return mid;
    } else if (X < arr[mid]) {
      endIndex = mid - 1;
    } else if (X > arr[mid]) {
      startIndex = mid + 1;
    }
  }
  return -1;
};

const prompt = require("prompt-sync")();

let arr = takeInput();
let X = parseInt(prompt("Element to search : "));
print(arr);
let sortedArray = SelectionSort(arr);
print(sortedArray);
let index = BinarySearch(arr, X);
console.log(index);
