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

   let t=0, j=t+1 ;
   while (t<n)
   {
    let p=1;

    while (j<n){

    if ( arr[t]==arr[j])
{
        p=p+1;
        let m=j;

    while (m<n-1)
    {
        arr[m]=arr[m+1];
        m=m+1;
    } 
    n=n-1;
   } else {
    j=j+1;
    }
}
if (p>1){
    console.log(arr[t]+ "-->"+p);
}
t=t+1;
p=1;
}