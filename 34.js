const input = require("readline-sync");
let n = input.questionInt("Enter value of n-");
let num=n;
let i=1;
let sum=0;
while (i<n)
if (n%i==0)
{
    (sum=sum+i, i=i+1)
}
else( i=i+1)

if(sum==n)
{
    console.log("perfect");
}
else
{
    console.log("not perfect");
}