const temp=100
if(temp>100){
    console.log("Temp is greater than 100.");
}
else{
    console.log("Less than 100")
}
/*
syntax
if(condition){
   block of code
}
else{
    block of code
    }
*/ 

// nested if-else

let marks=99
if(marks<100){
    if(marks>90){
        console.log("Grade is Distinction")
    }
    else{
        console.log("Wnat to improve")
    }
}
else{
    console.log("Enter valid marks.")
}


// <, >, <=, >=, ==, !=, ===, !==


// === checks the type also
// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// if-elseif-else
    const balance = 1000

if (balance > 500) console.log("test"),console.log("test2");

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
    
} else if (balance < 900) {
    console.log("less than 750");
    
} else {
    console.log("less than 1200");

}