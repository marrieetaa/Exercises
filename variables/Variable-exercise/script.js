//5a. Create a variable called 'name', and save your name is this variable(as a string);
const name  = 'Mariam';
//5b. Display the message 'My name is: ${name}' in the console.log;
console.log(`My name is: ${name}`);
//5c. At a restaurant, you order 1 coffe($5), 3 bagels ($3 each), and 1 soup ($9). Calculate the cost and save it in a variable called 'cost'.
const cost  = 5 + 3 * 3 + 9;
console.log(cost);
//5d. Display 'Cost of food: $${cost}' in the console.
console.log(`Cost of food: $${cost}`);
//5e. Let's say the restaurant charges a 10% tax. using the 'cost' variable from 5c, calculate the tax, and save the result in variable.
const tax = cost * 0.1;
console.log(tax);
//5f. Display 'Tax(10%): $${tax}' in the console.
console.log(`Tax(10%): $${tax}`);
//5g. Calculate the total, save in the variable called 'totalCost'., and display in the message 'Toatl cost: $${totalCost}' in the console.
const totalCost = cost + tax;
console.log(`Total cost: $${totalCost}`);