let myName = "rabindra      "
let myChannel = "proton      "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",


    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.rabindra = function(){
    console.log(`rabindra is present in all objects`);
}

Array.prototype.heyRabindra = function () {
    console.log(`Rabindra says Hello`);
}

// heroPower.rabindra()
// myHeros.rabindra()
// myHeros.heyRabindra()
// heroPower.heyRabindra()


// inheritance

const user = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvaliable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Chaiaurcode       "

String.prototype.trueLength = function () {
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()

"rabindra".trueLength()
"iceTea".trueLength()