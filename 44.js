const input = require("readline-sync");
 let ab = input.question("Enter value of ab- ");
 let bc = input.question("Enter value of bc- ");
 let cd = input.question("Enter value of cd- ");
 let da = input.question("Entet value of da- ");
 let i=90;

 if (ab==bc && cd==da){
    if (i==90){
        console.log("square");
    } else{
        console.log("rhombus");
    }
 }
 else if(ab==cd)
   { if(bc==da)
        {if (i==90)
            {console.log("rectangle");}
        }
         else{
            console.log("paralelogram");}
        
    }  
    else{console.log("equiangular");}
 