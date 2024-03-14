const input = require("readline-sync");
let a = input.questionInt("Enter value of a- ");
let b = input.questionInt("Enter value of b- ");

c= Math.floor(a/b)
d= a%b

console.log(c,d);
