const input = require("readline-sync");
let a = input.questionInt("Enter value of a- ");
let b = input.questionInt("Enter value of b- ");
let c = input.questionInt("Enter value of c- ");

if (a>b){
    max=a
    min=b
}
else 
{
    max=b
    min=a
}
if (max>c)
{
    max1=max
    min1=c
}
else
{
max1=c
min1=max
}

if (min>min1)
{
    console.log(min);
}
else
{
    console.log(min1);
}