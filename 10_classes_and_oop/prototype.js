// let myName = "shivangi    "
// let myChannel = "chai    "

// console.log(myName.truelength)

let myHeros = ["thor", "spiderman"]

let heroPower = {
  thor: "hammer",
  spiderman:"sling",

  getSpiderPower : function(){
    console.log(`spidy power is ${this.spiderman}`)
  }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all object`)
} 

Array.prototype.heyhitesh = function(){
    console.log(`hitesh say Hello`)
}

// heroPower.hitesh()
myHeros.hitesh()
myHeros.heyhitesh()
// heroPower.heyhitesh()


//inheritance

const user = {
    name:"chai",
    email:"chai@google.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
 makeAssignement : 'JS assignment',
 fullTime : true,
 __proto__ : TeachingSupport
}

Teacher.__proto__ = user

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode    "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)
}

anotherUsername.trueLength()
"Shivi".trueLength()
"iceTea".trueLength()
"shivangishrivastava".trueLength()