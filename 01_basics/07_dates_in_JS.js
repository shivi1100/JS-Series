// Date

let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toUTCString())
// console.log(typeof myDate)

//let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")  //yyy-mm-dd  output mm-dd-yyy
let myCreatedDate = new Date("01-14-2023")  //mm-dd-yyy
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()  // uses for designing quizes polls

// console.log(myTimeStamp) // output is 16973495407893 so its the miliseconds
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))  // for converting in seconds

let newDate = new Date()
console.log(newDate.toLocaleString('default',{
    weekday:"long",
    day:"numeric"
}))
// console.log(newDate.getFullYear())
// console.log(newDate.getDay())
// console.log(newDate.getMonth() + 1)

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday:"long"
})