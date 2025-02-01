let arr = [1, 2, 3, [4, 5, 6], 7, [4, 5, 6, [4, 7, 8]]];

function customFlat(arr, depth = 1) {
let result = [];

  arr.forEach((ele) => {
    if (Array.isArray(ele) && depth > 0) {
      result.push(...customFlat(ele, depth - 1));
    } else {
      result.push(ele);
    }
  });

  return result;
}

console.log(customFlat(arr, 2));
