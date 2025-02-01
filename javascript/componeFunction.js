/**
 *this is basic exmple of compose where we will have ultiple functions and each function value is depend on one another
 * @param {*} value
 * @returns
 */
function add(value) {
  return value + value;
}

function multiply(value) {
  return value * value;
}

console.log(add(multiply(6)));

//

function compose(...functions) {
  return function (args) {
    functions.reduceRight((acc, fn) => fn(acc), args);
  };
}

console.log(compose(multiply, add)(5));
