// const input = require("readline-sync");
// let n = input.questionInt("Enter value of n-");
// let arr =[ ], i= 0;

// while (i<n)
// {
//   let a = input.questionInt ("Enter a number:");
//     arr[i]=a;
//     i=i+1;
// }
// console.log(arr);
// j=i+1;

// while(j<n)
// {
//     let p=1;
// }
// while(i<n){
//     if (arr[i]==arr[j])
//     {
//     p=p+1;
//     k=j;
//     }
//     else
//     {
//       p=p;
//       j=i+1;
//     }
// }
// while (k<n)
// {
//     arr[k]=arr[k+1];
//     k=k+1;
// }
// let b=n-1;
// console.log(a[i]-p);
// i=i+1;
// j=i+1; 


const input = require("readline-sync");
let n = input.questionInt("Enter value of n-");
let arr =[ ];
let i= 0;

while (i<n)
{
    let a = input.questionInt ("Enter a number:");
    arr[i]=a;
    i=i+1;
}
console.log(arr);

   let t=0, p=1;
   
   while (t<n){
   
    let  j=t+1;

    while (j<n)
    
    {

    if (arr[t]==arr[j])
    
       { p++;

        let m=j;

    while (m<n-1)
    {
        arr[m]=arr[m+1];
        m=m+1;
    } 
    n=n-1;
} else
    {
    j++;
    }
}
 {
    console.log(arr[t] +"-->"+p);
}
t++;
p=1; 

   }