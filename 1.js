const input = require("readline-sync");
let a = input.questionInt("Enter value of A- ");
let b = input.questionInt("Enter value of B- ");
let c = input.questionInt("enter value of c- ");
if (a>b && a>c ){
 console.log(a);
}
else if ( b>c)
{
    console.log(b);

} 
else { console.log(c);}