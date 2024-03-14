const input = require("readline-sync");
let n = input.questionInt("Enter value of n-");
let m = input.questionInt("Enter value of m-");
let arr = [];
let b = [];
let c = [];
let i = 0;

while (i < n) {
    let d = input.questionInt("Enter d number:");
    arr[i] = d;
    i = i + 1;
}
console.log(arr);

let j = 0;
while (j < m) {
    let d = input.questionInt("Enter d number:");
    b[j] = d; 
    j = j + 1;
}
console.log(b);

let k = 0;
i = 0;  
j = 0;
while (k < m + n) {
    if (arr[i] < b[j]) {  
        c[k] = b[j];
        j = j + 1;
    } else {
        c[k] = arr[i];
        i = i + 1;
    }
    k = k + 1;
}
console.log(c);