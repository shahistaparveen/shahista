const input = require("readline-sync");
let n = input.questionInt("Enter value of n-");
let arr =[ ];
let i= 0;
while (i<n){
    let a = input.questionInt ("Enter a number:");
    arr[i]=a;
    i=i+1;
}
console.log(arr);{
    n=n-1;
    i=n;
    while (i>=0){
     console.log(arr[i]);
     i=i-1;
    }
}