const input = require("readline-sync");
 let a = input.questionInt("Enter value of a- ");
 let b = input.questionInt("Enter value of b- ");
 let c = input.questionInt("Enter value of c- ");
 let d = input.questionInt("Entet value of d- ");
 let e = input.questionInt("Enter value of e- ");
 let f = input.questionInt("Enter value of f- ");
 let g = input.questionInt("Enter value of g- ");
 let h = input.questionInt("Entet value of h- ");
 
 if (a>b){
 max=a
 min=b 
}
else {
    max=b
    min=a
}
if (c>d){
    max1=c
    min1=d
}
else{
    max1=d
    min1=c
}
if (e>f){
    max2=e
    min2=f
}
else{
    max2=f
    min2=e
}
if (g>h){
    max3=g
    min3=h
}
else{
    max3=h
    min3=g
}
if (max>max1){
    max4=max
    min4=max1
}
else{
    max4=max1
    min4=max
}
if(max2>max3){
    max5=max2
    min5=max3
}
else{
    max5=max3
    min5=max2
}
if(max4>max5){
 s=max5
 s1=min4
 s2=min
 s3=min1   
}
else {
    s=max4
    s1=min5
    s2=min3
    s3=min2
}
if(s>s1){
    max6=s
    min6=s1
}
else {
    max6=s1
    min6=s
}
if(s2>s3){
    max7=s2
    min7=s3
}
else{
    max7=s3
    min7=s2
}
if(max6>max7){
    console.log(max6);
}
else{
    console.log(max7);
}