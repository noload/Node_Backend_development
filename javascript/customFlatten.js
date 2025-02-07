// let arr = [1, 2, 3, [4, 5, 6], 7, [4, 5, 6, [4, 7, 8]]];

// function customFlat(arr, depth = 1) {
//   let result = [];

//   arr.forEach((ele) => {
//     if (Array.isArray(ele) && depth > 0) {
//       result.push(...customFlat(ele, depth - 1));
//     } else {
//       result.push(ele);
//     }
//   });

//   return result;
// }

// console.log(customFlat(arr, 2));

Array.prototype.custFlat = function (depth = 1) {
  let result = [];
  this.forEach((item) => {
    if (Array.isArray(item) && depth > 0) {
      result.push(...item.custFlat(depth - 1));
    } else {
      result.push(item);
    }
  });
  return result;
};

let arrr = [10, 203, 39, [20, 10, 40], 20, [30, 40]];

console.log(arrr.custFlat(1));
