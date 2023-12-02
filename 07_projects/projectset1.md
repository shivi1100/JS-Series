# Project related to DOM

## Project link
[clickhere] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

# Project 1

```
console.log("Hello")

const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach((button) => {
 console.log(button)
 button.addEventListener('click',function(e){
   console.log(e)
   console.log(e.target)
   if(e.target.id === 'grey') {
     body.style.background = e.target.id
   }
   if(e.target.id === 'white') {
     body.style.background = e.target.id
   }
   if(e.target.id === 'blue') {
     body.style.background = e.target.id
   }
   if(e.target.id === 'yellow') {
     body.style.background = e.target.id
   }
   if(e.target.id === 'purple') {
     body.style.background = e.target.id
   }
 })
});

```

## Project 2 solution

``` javascript
const forms = document.querySelector('form')

forms.addEventListener('submit', function(e) {
  e.preventDefault()

 const height = parseInt(document.querySelector('#height').value) 
 const weight = parseInt(document.querySelector('#weight').value) 
 const result = document.querySelector('#results')
 
 if(height === ''|| height < 0 || isNaN(height)) {
   result.innerHTML = `please enter valid number ${height}`
 }else if(weight === ''|| weight < 0 || isNaN(weight)) {
   result.innerHTML = `please enter valid number ${weight}`
 } else {
   const bmi = (weight / ((height*height) / 10000)).toFixed(2)
   //show the result
   result.innerHTML = `<span>${bmi}</span>`
 }
})

```

## project 3 solution

```
const clock = document.getElementById('clock')
// document.querySelector('#clock')
//to update time each seconds the time interval method will be use

setInterval(function(){
  let date = new Date()
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString();
},1000)

```