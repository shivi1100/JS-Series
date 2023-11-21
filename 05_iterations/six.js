// const coding = ["js", "ruby", "phy", "cpp", "java"]

// const value = coding.forEach( (item) => {
// //  console.log(item);
//  return item;
// })
// // for each not return value
// console.log(value);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// filter Also take call back
// const newNum = myNums.filter( (num) => num > 4)
// console.log(newNum)

// const newNum = myNums.filter( (num) => {  // if scope is used {} so its nesessary to use return keywrd & if scope is not opned it can be written directly
//     return num > 4
// })

// const newNums = []
// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums)

// object from data base assumed********
const books = [
    {titile: 'Book-One',   genre: 'Fiction',      publication: '1981', edition: '2004'},
    {titile: 'Book-Two',   genre: 'Non-Fiction',  publication: '1992', edition: '2008'},
    {titile: 'Book-Three', genre: 'History',      publication: '1999', edition: '2009'},
    {titile: 'Book-Four',  genre: 'Non_Fiction',  publication: '1998', edition: '2006'},
    {titile: 'Book-Five',  genre: 'Science',      publication: '1983', edition: '2007'},
    {titile: 'Book-Six',   genre: 'Fiction',      publication: '1994', edition: '2005'},
    {titile: 'Book-Seven', genre: 'History',      publication: '1996', edition: '2004'},
    {titile: 'Book-Eight', genre: 'Science',      publication: '1990', edition: '2000'},
    {titile: 'Book-Nine',  genre: 'History',      publication: '1995', edition: '2003'}
];

let userBooks = books.filter( (bk) => bk.genre === 'History')

 userBooks = books.filter( (bk) => {
    return bk.publication >= 1998 && bk.genre === 'History'
})

console.log(userBooks)
