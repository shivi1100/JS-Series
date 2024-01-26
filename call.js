function SetUsername(username) {
    // Complex DB Calls
    this.username = username
    console.log("called")
}

function createUser(username, email, password) {
    SetUsername.call(this, username)

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@gmail.com", "1234")
const chaiTwo = new createUser("Tea", "T@gmail.com", "258")
console.log(chai);
console.log(chaiTwo)