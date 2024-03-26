const name = "Rabindra"
const repoCount = 10

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('rabindra-hc-com');

// console.log(gameName[0]);
// console.log(gameName.__proto__);



// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('i'));


const newString = gameName.substring(0, 4)
console.log(newString);



const anotherString = gameName.slice(-10, 4)
console.log(anotherString);


const newStringOne = "     Rabindra     "
console.log(newStringOne);
console.log(newStringOne.trim());



const url = "https://rabindra.com/rabindra%18meher"

console.log(url.replace('%18', '-'));

console.log(url.includes('rabindra'));


console.log(gameName.split('-'));