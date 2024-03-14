const input = require("readline-sync");
let n = input.questionInt("Enter value of n-");
let arr=[ ];
let i=0;
str='';
 
while(i<n){
    let  a = input.questionInt("Enter a number:");
    arr[i]=a;
    i=i+1;
}
console.log(arr);

let j=0;

while (j<n)

{for(i=1 ; i<=arr[j]; i=i+1)
    
{
str=str+">";


}
str=str+"\n";
j=j+1;
}
console.log(str);
