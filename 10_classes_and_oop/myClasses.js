// ES6
/*
class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

 encryptpassword(){
    return `${this.password}abc`
 }
 changeUsername(){
    return `${this.username.toUpperCase()}`
 }
}

const chai = new User("chai", "chai@gmail.com", "124")
console.log(chai.encryptpassword());
console.log(chai.changeUsername());
*/

// Behind the scene

function User(username, email, password){
 this.username = username;
 this.email = email;
 this.password = password
}

User.prototype.encryptpassword = function(){
   return `${this.password}abc`
}

User.prototype.changeUsername = function(){
   return`${this.username.toUpperCase()}`
}

const tea = new User("tea", "tea@gmail.com", "1234")
console.log(tea.encryptpassword());
console.log(tea.changeUsername());