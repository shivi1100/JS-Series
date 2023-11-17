// var c = 300;
let a = 50;

if(true) {
    let a = 10;
    const b = 30;
      c = 20;
      // console.log("Inner: ", a)    
}

// console.log(a);
// console.log(b);
// console.log(c);

function one (){
  const userName = "shivi"

  function two(){
    const website = "youtube"
    // console.log(userName);
  }
  // console.log(website)
  
  two()
}
one()

if(true) {
  const userName = "shivi"
  if(userName === "shivi") {
    const website = " youtube";
    // console.log(userName + website)
  }
  // console.log(website)
}
// console.log(userName)

// ++++++++++++++++++++++ Intresting ++++++++++++++++++++++++

console.log(addOne(5))

function addOne(num){
  return num + 1;
}

addTwo(5)
const addTwo = function addTwo(num){
  return num + 2;
}