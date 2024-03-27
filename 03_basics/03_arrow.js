const user = {
    username: "rabindra",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "rabindra"
//     console.log(this.username);
// }

// chai()


// const chai = function(){
//     let username = "rabindra"
//     console.log(this.username);
// }


const chai = () => {
    let username = "rabindra"
    console.log(this);
}

// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  ( num1 + num2 )

const addTwo = (num1, num2) =>  ({username: "rabindra"})


console.log(addTwo(2, 3));

// const myArr = [2, 3, 4, 5]

// myArr.forEach(() => {})