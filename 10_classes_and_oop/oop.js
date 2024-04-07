// const user = {
//   username: "rabindra",
//   loginCount: 8,
//   signedIn: true,
//   getUserDetails: function () {
//     // console.log("got user details from database");
//     // console.log(`Username: ${this.username}`);
//     // console.log(this);
//   },
// };

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


function user(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}


const userOne = new user("Rabindra", 12, true)
const userTwo = new user("hitesh", 10, false)

console.log(userOne);
console.log(userTwo);

