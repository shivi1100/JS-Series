let score = "33abc"

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber); 

// 33 => 33
//33abc => NaN Not a number
// tru => 1, false => 0

// let isLoggedIn = 1
// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn)

//true => 1; false => 0;
// "" => false
// "shivi" => true

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)

 //  ****************************  Operations  *********************************

let value = 3
let negValue = -value
// console.log(negValue)

//console.log(2+2)
//console.log(2-2)
//console.log(2*2)
//console.log(2**2)
//console.log(2/2)
//console.log(2%2)

let str1 = "hello"
let str2 = " shivangi"
let str3 = str1 + str2
// console.log(str3)

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + "2")
console.log("1"+ 2 + 2) // if first is string that whole number convert into string
console.log(1 + 2 + "2") // if first digit in numbers that whole convert into inumber and then string

console.log((3 + 4) * 5 % 3)

console.log(+true) // not preferable
console.log(+"") // not preferable

let num1, num2, num3
num1 = num2 = num3 = 2+2

let gameCounter = 100
gameCounter++;
console.log(gameCounter)