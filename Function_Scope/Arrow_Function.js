const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this);

function chai(){
    let username = "hitesh"
    console.log(this.username);
}

chai()

const hchai = function () {
    let username = "hitesh"
    console.log(this.username); // hitesh
}
hchai()

const Garamchai =  () => {
    let username = "hitesh"
    console.log(this); // {}
}


Garamchai()

// Arrow Function takes this from Surrounding Scope
const addTwo = (num1, num2) => {
    return num1 + num2
}

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()