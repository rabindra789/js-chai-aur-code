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
console.log(loginUserMessage())