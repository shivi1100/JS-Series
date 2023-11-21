
const userEmail = []  // when it assumed that string have truthy value or its value is true

if (userEmail) {
    console.log("Got User email");
} else{
    console.log("dont have user email")
}

// faly value 
// false, 0,-0, BigInt 0n,"", null, undefined, NaN

//truthy value
// "0", 'false', " ", [], {}, function(){}

if(userEmail.length === 0) {  // correct way to chck empty array
    console.log("Array is empty")
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish coalescing operator (??) : null or undefined it is create for these two dat types

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1)

// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

