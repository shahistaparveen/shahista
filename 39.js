const input = require("readline-sync");
let n = input.questionInt("Enter value of n-");
let arr =[ ];
let i= 0;
while (i<n){
    let a = input.questionInt ("Enter a number:");
    arr[i]=a;
    i=i+1;
}
{ console.log(arr);}

    let p=0,even=0, odd=0;

    while (p<n )

    {if (arr[p]%2==0)
    {
        even= even + arr[p];
    }
    else 
    {odd = odd + arr[p]}
    {p=p+1;}
}
{ console.log(odd , even);}
