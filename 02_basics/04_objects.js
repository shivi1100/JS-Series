// const tinderUser = new Object()  // Singleton Object
const tinderUser = {}  // Non-Singleton Object

tinderUser.id = "123abc",
tinderUser.name = "sammy",
tinderUser.isloggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "abc@gmail.com",
    fullname : {
      userfullname : {
        firstname : "Shivi",
        lastname : "Shrivastava"
      }
    }
}
// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}

// console.log(obj3)

const user = [
    {
        id: 1,
        email: "abc@gmail.com" 
    },
    {
        id: 1,
        email: "abc@gmail.com" 
    },
    {
        id: 1,
        email: "abc@gmail.com" 
    }
]

user[1].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser)) // all keys get in array
// console.log(Object.values(tinderUser)) // all values get in array
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('islogged'))
// console.log(tinderUser.hasOwnProperty('isloggedIn'))

//destructuring of objects

const course = {
    coursename: "JS in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}
// console.log(course.courseInstructor)

const {courseInstructor} = course
const {courseInstructor : instructor} = course
// console.log(courseInstructor)
console.log(instructor)

//Json
// {
//     "name":"shivi",
//     "coursename":"JS in hindi",
//     "price":"free"
// }

[
    {},
    {},
    {}
]