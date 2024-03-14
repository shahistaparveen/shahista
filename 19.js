const input = require("readline-sync");
let u= input.questionInt("Enter value of u-");
if (u<=50){
    T=u*0.50
    S=T*20/100
    B=T+S
}
else if(u<=150){
    T=50*0.50 + (u-50) *0.75
    S=T*20/100
    B=T+S
}
else if (u<=250){
    T= 50*0.50 + 100*0.75 + (u-150) *1.20
    S=T*20/100
    B=T+S
}
else {
    T= 50*0.50+ 100*0.75 + 100*1.20 + (u-250)*1.50
    S=T*20/100
    B=T+S
}
{console.log(B);}