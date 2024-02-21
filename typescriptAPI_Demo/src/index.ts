interface User {
  name: string;
  age: number;
}

function sumOdAge(user1: User, user2: User) {
  return user1.age + user2.age;
}

const sumAge = sumOdAge(
  { name: "vaibhav", age: 26 },
  { name: "nilesh", age: 27 }
);

console.log(sumAge);
