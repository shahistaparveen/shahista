const input = require("readline-sync");
let a = input.questionInt("Enter value of a- ");
let b = input.questionInt("Enter value of b- ");
 
c=b
b=a
a=c

console.log(a,b);