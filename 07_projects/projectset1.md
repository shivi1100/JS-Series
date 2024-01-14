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

## project 4 solution

```
let randomNumber = parseInt(Math.random()*100 + 1)

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaning = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
submit.addEventListener('click', function(e){
  e.preventDefault();
  const guess = parseInt(userInput.value);
  validateGuess(guess)
})
}

function validateGuess(guess){
 if(isNaN(guess)){
   alert('please enter valid a number')
 } else if (guess < 1) {
   alert('please enter a number more than 1')
 } else if (guess > 100) {
  alert('please enter a number less than 100')
 } else {
   prevGuess.push(guess)
   if(numGuess === 11){
     displayGuess(guess)
     displayMessage(`Game Over. Random number was ${randomNumber}`)
     endGame()
   } else {
     displayGuess(guess)
     checkGuess(guess)
   }
 }
}

function checkGuess(guess){
if(guess === randomNumber) {
  displayMessage(`you guessed it right`)
  endGame()
 } else if (guess < randomNumber) {
   displayMessage(`Number is Tooo low`)
 } else if (guess > randomNumber) {
   displayMessage(`Number is Tooo high`)
 }
}

function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML += `${guess} `
  numGuess++
  remaning.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(guess){
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id = "newGame">Start new game</h2>`
  startOver.appendChild(p)
  playGame = false;
  newGame();
}

function newGame(guess){
 const newGameButton =  document.querySelector('#newGame');
 newGameButton.addEventListener('click', function(e){
   randomNumber = parseInt(Math.random * 100 + 1)
   prevGuess = [];
   numGuess = 1;
   guessSlot.innerHTML = ''
   remaning.innerHTML = `${11 - numGuess}`
   userInput.removeAttribute('disabled');
   startOver.removeChild(p) 

   playGame = true
 });
}

```

### Project 5 solution

```
// generate random color

const randomColor = function(){
  const hex = '0123456789ABCDEF'
  let color = '#'
  for(let i = 0; i < 6; i++){
    color += hex[Math.floor(Math.random() * 16)]
  }
  return color
}
let intervalId;
const startChangingColor = function(){
if(!intervalId){
  intervalId = setInterval(changeBgColor, 1000)
}
  function changeBgColor(){
    document.body.style.backgroundColor = randomColor();
  }
}

const stopChangingColor = function(){
  clearTimeout(intervalId)
  intervalId = null;
}

document.querySelector('#start').
addEventListener('click', startChangingColor)

document.querySelector('#stop').
addEventListener('click', stopChangingColor)

```

## project 6 solution

```
const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) =>{
insert.innerHTML = `
<div class= 'color'> 
<table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
</div>
`
})

```