function sayMyName() {
  console.log("R");
  console.log("A");
  console.log("B");
  console.log("I");
  console.log("N");
  console.log("D");
  console.log("R");
  console.log("A");
}

// sayMyName()

// function addTwoNumers (num1, num2){
//     console.log(num1 + num2)

// }
function addTwoNumers(num1, num2) {
  // let result = num1 + num2
  // return result
  return num1 + num2;
}

const result = addTwoNumers(3, 5);

// console.log(`Result: ${result}`);


function loginUserMessage (username = "sam"){
    if (!username) {
        console.log("Please enter a user name");
        return
    }
    return `${username} just logged in.`
}

// console.log(loginUserMessage("Rabindra"))
// console.log(loginUserMessage())

function calculateCartPrice (...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500));

const user = {
  username: "Rabindra",
  age: 18
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`);
}

// handleObject(user)
handleObject({
  username: "sam",
  age: 10
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
  return getArray[0]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 43443, 432, 243, 78]));