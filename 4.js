const input = require("readline-sync")
let n = input.questionInt("Enter value of n-");
let temp=n;
let rev=0;
let r;
while (n!=0)
{
    r=(n%10);

    rev=(rev*10+r);

    n=Math.floor (n/10);
}

if (temp==rev){
    console.log("palindrome");

}else{
    console.log("not palindrome");
}