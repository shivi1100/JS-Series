// Singleton
// Object.create

// Object Literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Shivi",
    "full-name": "shivangi shrivastava",
     mySym: "myKey1", // Its symbol bt declaration is wrong it give string type so this not correct way
    [mySym]: "myKey1", // its correct way
    age: 18,
    location: "Jbp",
    email: "shivi@google.com",
    isloggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full-name"])
// console.log(typeof JsUser.mySym)
// console.log(typeof JsUser[mySym])

JsUser.email = "shivi@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "shivi@microsoft.com"

// console.log(JsUser)

JsUser.greeting = function(){
console.log("Hello Js User")
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`)
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());