const input = require("readline-sync");
 let n= input.questionInt("Enter the number: ");
 let r=0,m
 while (n>0){
    m=n%10

    r=r*10+m
    
    n=Math.floor(n/10)
 }
 console.log(r);
