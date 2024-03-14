const input = require("readline-sync");
let a = input.questionInt("Enter value of a- ");
let b = input.questionInt("Enter value of b- ");
 
a= a+b
b=a-b
a=a-b
 console.log(a,b);