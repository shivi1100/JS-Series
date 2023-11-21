const coding = ["js", "ruby", "phy", "cpp", "java"]

// coding.forEach(function (val) {
//     console.log(val);
// })

// coding.forEach( (item) => {
//  console.log(item);
// })

// function printMe(item) {
//     console.log(item)
// }
// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
// console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js" 
    },
    {
        languageName : "java",
        languageFileName : "java" 
    },
    {
        languageName : "python",
        languageFileName : "py" 
    }
]

// from database value wil come in the format of array

myCoding.forEach( (item) => {
 console.log(item.languageName);
})