const input = require("readline-sync");
 let a = input.questionInt("Enter value of a- ");
 let b = input.questionInt("Enter value of b- ");
 let c = input.questionInt("Enter value of c- ");
 let d = input.questionInt("Entet value of d- ");

if((a<b && a<c && a>d ) || (a<b && a<d && a>c) || (a<c && a<d && a>b)){
    console.log(a);
}
else if ( (b<a && b<c && b>d) || (b<a && b<d && b>c) || (b<c && b<d && b>a) ){
console.log(b);
}
else if ((c<a && c<b && c>d) || (c<a && c<d && c>b) || (c<b && c<d && c>a) ){
    console.log(c);
}else {
    console.log(d);
}