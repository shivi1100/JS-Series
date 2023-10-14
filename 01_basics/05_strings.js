const name = "shivi"
const repoCount = 50

//console.log(name + repoCount + "value")

console.log(`Hello my name is ${name.toUpperCase()} and my repocount is ${repoCount}`)

const gameName = new String('shivangi')
// console.log(gameName[0])
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase())

// console.log(gameName.charAt(3))
// console.log(gameName.indexOf('g'))

const newString = gameName.substring(0,4)
// console.log(newString)

const anotherString = gameName.slice(-7, 3)
// console.log(anotherString)

const newStringOne = "                  shivi    " 
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://shivi.com/shivi%20shrivastava"
console.log(url)
console.log(url.replace('%20', '_'))

console.log(url.includes("shivi"))

let gameName2 = new String ("Shivi-SS")
console.log(gameName2.split("-"))

// learn more string method functions using consolelog*