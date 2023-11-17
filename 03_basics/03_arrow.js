const user = {
  userName : "shivi",
  price : 999,

  welcomeMessage: function(){
  console.log(`${this.userName} , welcome to website`)
  // console.log(this);
  }
}

user.welcomeMessage()
user.userName = "sam"
user.welcomeMessage()
// console.log(this);


// function chai(){  // this through output undefined so context only works with object 
//   const userName = "shivi"
//   console.log(this.userName)  
// }
// chai()

// const chai = function(){
//   const userName = "shivi"
//   console.log(this.userName)
// }  output is undefined

// const chai = () => {
//   const userName = "shivi"
//   console.log(this)
// }
// chai()

// const addTwo = (num1 , num2) => {
//   return num1 + num2 ---->explicit return when return should be there
// }
// console.log(addTwo(3,5))

// const addTwo = (num1 , num2) => num1 + num2 // implicit return ---> remove return

// const addTwo = (num1 , num2) => (num1 + num2) // implicit return ---> remove return

// ============how to return object =============
const addTwo = (num1 , num2) => ({userName: "shivi"})  // to return object it should be wrap into parenthesis
console.log(addTwo(3,5))
