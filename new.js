console.log("sachintha lakshan")

//////////////////////////////

let num = 23
num = num + 10
console.log(num)

//////////////////////////////

let age = 12
if(age>18){
    console.log("you can watch it")
}
else{
    console.log("you cant watch it")
}

for(let i =0;i<=100;i++){
    console.log("sachintha lakshan",i)
}

////////////////////////////////

let day = 3;
switch(day){
   case 0:
    day = "Sunday";
    break;
   case 1:
    day = "Monday";
    break;
   case 2:
    day = "Tuesday";
    break;  
    case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
console.log("today is : "+day)

//////////////////////////////////////
//function

let num1 = 12;
let num2 = 23;
let num3 = 34;

function num_sum(){

   let num_total = num1 + num2 + num3;
   
   console.log(num_total);
}

num_sum()
