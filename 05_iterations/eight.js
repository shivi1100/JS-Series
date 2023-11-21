// Reduce Method

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// }, 0)  readability


const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)
console.log(myTotal)

const shoppingCart = [ // add all the price given in shopping cart
    {
        itemName: 'Jscourse',
        price: 1000
    },
    {
        itemName: 'python',
        price: 1500
    },
    {
        itemName: 'Javacourse',
        price: 2000
    }
]

const totalPrice = shoppingCart.reduce( (acc, item) => acc + item.
price, 0)
console.log(totalPrice);