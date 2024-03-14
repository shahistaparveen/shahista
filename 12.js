const input = require("readline-sync");
let a = input.questionInt("Enter value of a- ");

if (a>0)
{
    console.log("positive");
}
if (a<0)
{
    console.log("negative");
}
if (a==0)
{
    console.log("zero");
}