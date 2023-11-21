const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "rubby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(myObject[key]);
    // console.log(`${key} shortcut is for ${myObject[key]} `);
}

const programming = ["js", "cpp", "py", "rb", "java"]

for (const key in programming) {
    // console.log(programming[key])
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State Of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key)
} // map is not work with for in



