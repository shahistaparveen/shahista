const input = require("readline-sync");
 let y = input.question("Enter value of y-");

  if (y%100==0){
  
  if (y%400==0)

    console.log("leap year");
  
  else console.log("not leap year");
  }
 else if (y%4==0)
  {
   console.log("leap year");
  }
  else {console.log("not leap year");}
