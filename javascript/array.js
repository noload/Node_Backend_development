let arr = [10, 30, 2, 30, 57, 39, 10, 50, 20];

// function frequecyCount(arr) {
//   let freq = {};
//   let duplicate = [];
//   arr.forEach((item, index) => {
//     if (!freq[item]) {
//       freq[item] = { count: 0, index: [] };
//     } else {
//       duplicate.push(item);
//     }
//     freq[item].count += 1;
//     freq[item].index.push(index);
//   });

//   return { freq, duplicate };
// }

// console.log(frequecyCount(arr));

/**
 * Implementing Custom Array.prototype.map

To implement a custom version of the map() method for arrays, you need to follow these steps:

    Create a new array to store the results.
    Iterate over the original array and apply the provided callback function to each element.
    Push the result of each callback application into the new array.
    Return the new array at the end.
 */

Array.prototype.myMap = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i));
  }
  return result;
};

console.log([20, 30, 50, 37, 304, 29].myMap((item, index) => item * 2));
