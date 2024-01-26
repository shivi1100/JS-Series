const user = {
    username: "shivi",
    loginCount: 8,
    signedIn: true,

    getuserDetails: function () {
        //   console.log("Got user detail from database")
        //   console.log(`username: ${this.username}`)
        //  console.log(this)
    }
}

// console.log(user.username);
// console.log(user.getuserDetails());
// console.log(this)

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this
}

const userOne = new User("shivi", 8, true)
const userTwo = new User("ChaiAurCode", 9, false)
console.log(userOne.constructor)
// console.log(userTwo)

// Note : new keyword ===> 1. when we create "new" keyword so empty object will create and this is called 
// instance just like "this" which also called a new object creation
// Step 1: new object created
// step 2 : this keyword pass on the it
// step 3 : "this" create passed value add on this
// constructor : reference about the user itself that is created
// instanceof operator