const input = require("readline-sync");
 let n= input.questionInt("Enter the number: ");
 let i=1 
 let sum=0
 while (i<=n){
    t=1/i
    sum=sum+t
    i=i+1
 }
 console.log(sum);