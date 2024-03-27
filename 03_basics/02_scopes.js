// var c = 300

// let a = 300

// if (true) {
//   let a = 10;
//   const b = 20;
//   console.log("inner: ", a);
// }

// console.log(a);
// console.log(b);

function one() {
  const username = "rabindra";

  function two() {
    const website = "google";
    console.log(username);
  }
  // console.log(website);

  two();
}

// one();


if (true) {
  const username = "rabindra"
  if (username === "rabindra") {
    const website = " youtube"
    // console.log(username + website);
  }
  // console.log(website);
}

// console.log(username);


// +++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++++++++++++++


console.log(addOne(5))
function addOne(num){
    return ++num
}


addTwo(5)
const addTwo = function(num){
  return num + 2
}
