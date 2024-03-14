const input = require("readline-sync");
 let a = input.questionInt("Enter value of a- ");
 let i=1;
 let sum=0;

 while (i<=a)
{
r=i%2

    if(r!==0)

    {sum=sum+i;
    
    i=i+2;}
    else{i=i+1;}
}

console.log(sum);
 
 