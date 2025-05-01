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


const result = 0 ? 'truthy' : 'falsy';
console.log(result);

const message = 5 && 'Hello';
console.log(message);

const currency = undefined|| 'USD'; //USD
console.log(currency);