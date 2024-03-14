const input = require("readline-sync");
 let m = input.questionInt("Enter the number: ");
 let n = input.questionInt("Enter the number: ");
 let i=m
 let  p=0
 while (i<=n){
    p=p+i
    i=i+1
 }
console.log(p);