function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 2

console.log(multiplyBy5(5));
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype)

function createUser(username , score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`)
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe()
/*
Notes========================

What happend behind the scence when the "new" keyword is used:

A new object is created : The new keyword initiates the creation of a new Javascript object.

A prototype is linked : The newly created object get linked to the prototype property of the constructor function. This means
it has access to property and methods defined on the constructor's prototype.

The constructor is called

The new object is returned
*/