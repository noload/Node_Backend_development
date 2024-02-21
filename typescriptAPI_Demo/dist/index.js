"use strict";
function sumOdAge(user1, user2) {
    return user1.age + user2.age;
}
const sumAge = sumOdAge({ name: "vaibhav", age: 26 }, { name: "nilesh", age: 27 });
console.log(sumAge);
