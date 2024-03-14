const input = require("readline-sync");
let n= input.questionInt("Enter value of n- ");
if(n<=10000){
    HRA= n*20/100
    DA=n*80/100
}
else if
 (n<=20000)
 {
HRA=n*25/100
DA=n*90/100
}
else
{
    HRA=n*30/100
    DA=n*95/100
}
G=n+HRA+DA
console.log(G);
