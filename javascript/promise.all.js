function customPromiseAll(promises) {
  let result = [];
  return new Promise((resolve, reject) => {
    promises.forEach((p, index) => {
      p.then((res) => result.push(res)).catch((er) => {
        reject(err);
      });
      if (index == promises.length - 1) {
        resolve(result);
      }
    });
  });
}

customPromiseAll([Promise.resolve("Hello"), Promise.resolve("hello")]).then(
  (data) => console.log(data)
);
