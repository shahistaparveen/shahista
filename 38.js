const input = require("readline-sync");
let n = input.questionInt("Enter value of n-");

let arr=[],
 i= 0;

while (i<n){
    let a = input.questionInt ("Enter a number:");
    arr[i] =a;
    i=i+1;
}
console.log(arr);

let k = input.questionInt ("Enter value of k :");

let result = "no";
let j=0;
 
while (j<n){

if (arr[j]==k){
    result = "yes";
    break; 
} else {
 
}
j=j+1
}
console.log(result);