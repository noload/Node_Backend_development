let arr = [10, 30, 2, 30, 57, 39, 10, 50, 20];

function frequecyCount(arr) {
  let freq = {};
  let duplicate = [];
  arr.forEach((item, index) => {
    if (!freq[item]) {
      freq[item] = { count: 0, index: [] };
    } else {
      duplicate.push(item);
    }
    freq[item].count += 1;
    freq[item].index.push(index);
  });

  return { freq, duplicate };
}

console.log(frequecyCount(arr));
