// 1️⃣ Handle Edge Cases

//     If the array is empty and no initialValue is provided, throw an error.
//     This mimics JavaScript’s built-in reduce() behavior.

// 2️⃣ Set Up the Accumulator

//     If initialValue is provided, use it.
//     Otherwise, use the first element as the initial accumulator.

// 3️⃣ Loop Through the Array

//     Start at index 0 if initialValue exists, else start from 1.
//     Apply callback(accumulator, currentValue, index, array).

// 4️⃣ Return the Final Accumulated Value

//     After the loop, return the computed result.

// My implementation
Array.prototype.myReduce = function (callback, initialValue = this[0]) {
  this.forEach((item) => {
    initialValue += callback(initialValue, item);
  });
  return initialValue;
};
let arr = [10, , 20, 30, 40, 50];
console.log(arr.myReduce((acc, item) => acc + item, 10));

//GPT
Array.prototype.myReduces = function (callback, initialValue) {
  // Step 1: Handle edge cases
  if (this.length === 0 && initialValue === undefined) {
    throw new TypeError("Reduce of empty array with no initial value");
  }

  // Step 2: Set up accumulator
  let accumulator = initialValue !== undefined ? initialValue : this[0];
  let startIndex = initialValue !== undefined ? 0 : 1;

  // Step 3: Loop through array
  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  // Step 4: Return accumulated result
  return accumulator;
};
const numbers = [1, 2, 3, 4];

console.log(numbers.myReduces((acc, num) => acc + num, 0));
