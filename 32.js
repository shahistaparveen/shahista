const input = require("readline-sync");
let n = input.questionInt("Enter value of n-");
let num=n;
let i=1;
let m=1;
while (i<=n)

   if (n%i==0)

   {
    m=m*i , i=i+1
   }
   else 
   {
    i=i+1
   }
   if (m==n)
   {
    console.log("prime");
   }
   else{
    console.log("not prime");
   }