const input = require("readline-sync");
let a = input.questionInt("Enter value of A- ");
let b = input.questionInt("Enter value of B- ");
if( a>b)
{
   max=a
   min=b
}
else{
    max=b
    min=a
}
r=max%min

if( min%r==0)
{
    
}
