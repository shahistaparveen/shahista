const input = require("readline-sync");
let m = input.questionInt("Enter the number: ");
let sum=0
while (m>0){
    h=m%10;
    sum=sum+h;
    Mthe.floor(m/10);
}
console.log(sum);