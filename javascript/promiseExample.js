function fetchData() {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hello vaibhav how are you");
    }
  });
}

const a = new Promise((resolve, reject) => {
  if (true) {
    resolve("Heyyy whasts  up");
  }
});

fetchData().then((data) => console.log(data));
a.then((data) => console.log(data));
