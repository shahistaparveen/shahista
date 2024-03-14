const input = require("readline-sync");
 let n= input.questionInt("Enter the number: ");
 let i=0;
 let digit;

 while (n!=0)

 {i=i+1; n=Math.floor(n/10);}

 console.log(i);