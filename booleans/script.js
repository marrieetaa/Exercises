//Booleans
console.log(3 < 5);
console.log(5 < 3);

console.log(typeof 'true');
console.log(typeof true);

console.log(5 == '5');
console.log(5 === '5');
console.log(5 !== 5);

console.log(3 > 5 - 5);

//If/else 
if(false){
  console.log('Hello');
}else{
  console.log('Bye');
}

//driveAgeCheck

/*
const age = 15;

if (age >= 16) {
   console.log('You can drive');
}else if(age >= 14) {
   console.log('Almost there');
}else {
  console.log('You can\'t drive');
}
*/

if(0) {
  console.log('truthy');
}

const cartQuantity = 5;
if(cartQuantity){
  console.log('Cart has products');
}


//const result = 0 ? 'truthy' : 'falsy';
//console.log(result);

const message = 5 && 'Hello';
console.log(message);

const currency = undefined|| 'USD'; //USD
console.log(currency);


//Lesson 6 - Boolenas & If/Else statements

//6a.Create a variable called 'hour' and save the current hour of the day(0-23):
//-if hour is between 6 and 12, display 'Good Morning' in the console;
//-If hour is between 13 and 17, display 'Good Afternoon' in the console;
//-Otherwise, display 'Good Night' in the console.

let hour = 18;
const name = 'Mariam';
if(hour >= 6 && hour <= 12){
  console.log(`Good morning ${name}`);
}else if(hour >= 13 && hour <= 17){
  console.log(`Good afternoon ${name}`);
}else {
  console.log(`Good night ${name}`);
}

//6b.Continuing from 6a, try changing the value in the 'hour' variable to make it display different messages.
// hour = 9/20/15..

//6c.Continuing from 6a, create a variable called 'name' and save your name inside (as a string). Update the if-statement to display your name in each message. For example: 'Good morning ${name}'. ---DONE.

//6d.Imagine an amusement park that has a discount for children(6 years and younger) or seniors(65 years and elder).
//-Create a variable 'age' and save a person;s age inside.
//-Create an if-statement that checks if the person qualifies for a discount. If they do, display 'Discount' in the console. Otherwise, display 'No discount' in the console.
let age = 64;
const isHoliday = true;
if((age <= 6 || age >= 65) || !isHoliday){
   console.log('Discount');
}else{
  console.log('No discount');
}

//6e. Continuing from exercise 6d, let's say the discount is only available if it is not a holiday. create a variable: const isHoliday = true;
//-Update the code so that in order to get a discount, people must meet the age requirement and it is also not a holiday;--DONE.

//6f.Generate a random number with Math.random(). Save it in a variable.
let randomNumber = Math.random();

//6g.Cretae an if-statements and check:
//-If the number is less than 0.5, then display 'heads' in the console.
//-Else display 'tails' in the console.

//6h.Instead of displaying 'heads' or 'tails' in the console, save the result in a variable called 'result'.

let result;
const guess = 'Heads';
if(randomNumber < 0.5) {
  result = 'Heads';
}else{
  result = 'Tails';
}

console.log(result);

//6i.Let's say we're trying to guess the result. Create a variable called 'guess' and save your guess('heads' or 'tails').
//-If your guess matches the result, display 'You win! in the console
//-If your guess does not match the result , display 'You lose!'.

if(guess === result){
  console.log('You win!');
}else{
  console.log('You lose!');
}

//6j.Instead of using if-statements in the previous exercises, try switching them onto ternary operators;
const play = randomNumber < 0.5 ? 'Heads' : 'Tails';
console.log(play);
const playResult = guess === result ? 'You win!' : 'You lose!';
console.log(playResult);






