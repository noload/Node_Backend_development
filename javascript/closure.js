//example of using var  how we can controll the i values

for (var i = 0; i < 3; i++) {
  setTimeout(
    (i) => {
      console.log(i);
    },
    1000,
    i
  );
}

for (var i = 0; i < 3; i++) {
  (function (i) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  })(i);
}
