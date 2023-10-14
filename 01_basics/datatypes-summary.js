// Primitive

// 7 types : String, Number, Boolean, BigInt, Symbol, Null, Undefined

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123') 
console.log(id === anotherId)

const bigNumber = 333445567899990023n

// RefrenceType(Non- primitive)

// Arrays, Objects(master objects and browser web events**) , Functions

const heros = ["shakytiman", "naagraj", "doga"];
let Obj = {
    name:"shivi",
    age:28
}

const myFunction = function(){
console.log("hello world")
}

console.log(typeof heros)

//http://262.ecma-international.org/5.1/#sec-11.4.3

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Memory-------
// Stack (Primitive)[get copy of the value] , Heap (Non-Primitive) [get refrence of the value]

let myYoutubeName = "shivishrivastavadotcom"

let anotherName = myYoutubeName
anotherName = "chaiorcode"
console.log(myYoutubeName)
console.log(anotherName)

let userOne = {
    email:"user@gmail.com",
    upi:"user@ybl"
}

let userTwo = userOne
userTwo.email = "shivi@gmail.com"

console.log(userTwo.email)
console.log(userOne.email)
