const myNums = [1, 2, 3, 4, 5];

// const myTotal = myNums.reduce(function (acc, cval) {
//     console.log(`acc: ${acc} and curval: ${cval}`);
//     return acc + cval
// }, 0)

const myTotal = myNums.reduce((acc, cval)=> acc + cval, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "datascience course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);