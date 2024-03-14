const input = require("readline-sync");
let a = input.questionInt("Enter value of a- ");
let b = input.questionInt("Enter value of b- ");
let LCM=0,c=a,d=b;
let HCF=1;
while (a!=b)
{
   if (a>b)
   
   { a=a-b }
   else
   { b=b-a}
}
HCF=a;
console.log(HCF);
LCM= (c*d)/HCF
console.log(LCM);