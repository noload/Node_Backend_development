const jwt = require("jsonwebtoken");

const value={
    name:"vaibhav",
    accNo:12949874
}

const token =jwt.sign(value,"vaibhav@123K");
console.log(token);

const verifiedTokenVlaue = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidmFpYmhhdiIsImFjY05vIjoxMjk0OTg3NCwiaWF0IjoxNzAzMzE3MDIwfQ.YRPc6dcX7P6Fvn9h9Qo7EYMZfGqE4flscalEbbmNvmo","vaibhav@123K")
console.log(verifiedTokenVlaue);