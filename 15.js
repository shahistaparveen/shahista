const input = require("readline-sync");
 let a = input.question("Enter value of a- ");
 let b = input.question("Enter value of b- ");
 let c = input.question("Enter value of c- ");
 let d = input.question("Entet value of d- ");

if (a>b){
    if (a>c){
        if (a>d){
            console.log(a);
        }
        else{
            console.log(d);
        }
    } 
    else if(c>d){
        console.log(c);
    }
    else {
        console.log(d);
    }
}
else if (b>c)
{
    if(b>d){
        console.log(b);
    }
    else{
        console.log(d);
    }
}
else if (c>d)
{
    console.log(c);
}
else
{
    console.log(d);
}
