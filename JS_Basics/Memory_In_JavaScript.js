// stack memory for primitive datatypes
let name="Anuj"
let anothername=name
console.log(name)
console.log(anothername)
// copy is paased to anothername
anothername="Atharv"
console.log(name)
console.log(anothername)

// Heap memory for reference variable

let EmployyOne={
    name:"Aryan",
    id:101
}
let EmployyTwo=EmployyOne
console.log(EmployyOne.name)
console.log(EmployyOne.id)
console.log(EmployyTwo.name)
console.log(EmployyTwo.id)

EmployyTwo.id=105
// Now changes is wrt reference
console.log(EmployyOne.name)
console.log(EmployyOne.id)
console.log(EmployyTwo.name)
console.log(EmployyTwo.id)


