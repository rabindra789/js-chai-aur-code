// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const jsUser = {
    name: "Rabindra",
    "full name": "Rabindra Kumar Meher",
    [mySym]: "mykey1",
    age: 18,
    location: "Bargarh",
    email: "rabindra@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "sunday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym]) // imp

jsUser.email = "rabindra@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "rabindra@microsoft.com"
// console.log(jsUser);


jsUser.greeting = function () {
    console.log("Hello js user");
}
jsUser.greetingTwo = function () {
    console.log(`Hello js user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());