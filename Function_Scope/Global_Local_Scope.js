// Global Scope
let a=100
var b=100
const c= 1000
if(true){
    // block scope
    let a=10
    b=20
    console.log("Inner a:",a);
}
console.log("Outer a:",a);

if(true){
    b=45
}
console.log("b :",b)

// nesting Scope
function one(){
    const user="Anuj"
    function two(){
        const web="Google"
        console.log(web)
        console.log(user)
    }
    // console.log(web) error web is not defined
    two()

}
one()

// +++++++++++++++ Interesting ++++++++++++++
console.log(ADDone(5))
function ADDone(num1){
    return num1+1
}

// console.log(Addtw0(10))
// error 
const Addtw0=function(num1){
    return num1+2
}