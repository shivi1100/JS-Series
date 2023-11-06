
function sayMyName(){
    console.log("S");
    console.log("h");
    console.log("i");
    console.log("v");
    console.log("i") ;   
}
// sayMyName()

// function addTwoNumber(number1 , number2){
// console.log(number1 + number2)
// }

function addTwoNumber(number1 , number2){
//  let result = number1 + number2
//  return result
return number1 + number2;
}
const result = addTwoNumber(2, 5)
// console.log("Result: ", result)


function loginUsermessage(Username = "sam") {
    if(!Username){  // username is undefined
   console.log("Please enter a username")
   return
    }
    return `${Username} just logged in` // this will not work after return line no. 27
}
// console.log(loginUsermessage("shivi"))
console.log(loginUsermessage("shivi"))

function calculateCartPrice(val1, val2, ...num1){ // ...num1 ===> rest operator 3dott
 return num1
}

// console.log(calculateCartPrice(200, 300, 400, 2000))

const user = {
    username : "shivi",
    price : 500
}

function handelObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price
    }`)
}

// handelObject(user)
handelObject({
    username: "sam",
    price: 400
})

const myNewArray = [200, 300, 400]

function returnSecondValue(getArray){
 return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 500, 600, 800]))