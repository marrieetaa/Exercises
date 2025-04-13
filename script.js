//Lesson 1 - JavaScript Basics
//1a. Use alert(..); to display 'Good Morning' in popup
      //alert('Good Morning');
//1b. Display your name is popup
      //alert('Mariam');
//1c. Using math, calculate 10 + 5 in the Console
      console.log(10 + 5);
//1d. Calculate 20 - 5
      console.log(20 - 5);
//1e. Calculate 2 + 2 - 5 in the Console
      console.log(2 + 2 - 5);
//1f. Use document.body.innerHTML = ..; to display 'Good Morning' on the web page
      document.body.innerHTML = 'Good Morning';
//1g. Display your name on the web page
      document.body.innerHTML = 'Mariam';
//1h. You order a T-shirt for 10$, socks for 8$, and dinner plates for 20$.
   // Use JavaScript to calculate the total cost of your order.
      console.log(10 + 8 + 20);
//1i. Your bank account has 100$, you spend 20$ on lunch, 50$ on dinner,
   //and earn 200$ from your job.Calculate how much money you have.
      console.log(100 - 20 - 50 + 200);
//1j. Use document.body.innerHTML = ..; to make the web page blank;
      document.body.innerHTML = '';

//Lesson 2 - Numbers and Math
//2a. At a restaurant, you order 1 soup for 10$, 3 burgers for 8$ each, and 1 ice cream for 5$.
    // Use JavaScript to calculate the cost of the order.
      console.log(10 + 8 * 3 + 5);
//2b. You're at restaurant with 2 friends(3 people in total) and make the same order as 2a.
   // Calculate how much each person pays.
      console.log((10 + 8 * 3 + 5) / 3);
//2c. Calculate the total cost of a toaster($18.50) and 2 shirts($7.50 each).
      console.log(18.5 + 7.5 * 2);
//2d. Calculate a 10% tax for the total in exercise 2c.
      console.log((18.5 + 7.5 * 2) * 0.1);
//2e. Calculate a 20% tax for the total in 2c (remember that 1% = 1/100, so 20% = 20/100 = 0.2);  
      console.log((18.5 + 7.5 * 2) * 0.2);
//---->SETUP: TOASTER-$18.99(SHIPPING 4.99) + BASKETBALL-20.95 + T-SHIRT-7.99;    
//2f. Calculate the cost of the products(before shipping and taxes).Hint: calculate in cents.
      console.log((1899 + 2095 + 799) / 100);
//2g. Calculate the total before tax.
      console.log((1899 + 2095 + 799 + 499) / 100)
//2h. Calculate the 10% tax exactly.
      console.log(Math.round((1899 + 2095 + 799 + 499) * 0.1) / 100);
//2i. Calculate order total at the bottom.
      console.log((1899 + 2095 + 799 + 499) / 100 + Math.round((1899 + 2095 + 799 + 499) * 0.1) / 100);
//2j. Let's say we want to always round a number down(2.8 => 2);
    // Using Google or A.I. tool, search for the code to do this.
      console.log(Math.floor(2.8));  
//2k. Let's always round a number up (2.2 => 3).Search ho to do this.
      console.log(Math.ceil(2.2));   
//----> Fahrenheit = (Celsius *9/5) +32;
//      Celsius = (Fahrenheit - 32)*5/9;
//2l. The temperature is 25°C. Calulate the temperature in Fahrenheit.
       console.log((25 *9 / 5) +  32);
//2m. The temperature is 86°F. Calculate the temperature in Celsius.
       console.log((86 - 32) *5 / 9);
//2n. The temperature is -5°C. Calcualte the temperature in Fahrenheit.    
       console.log((-5 * 9  / 5) + 32);          

//Lesson 3 - Strings
//3a. Create the text 'My name is:' as a string.
      console.log('My name is:')
//3b. Create your name as a string(for example: 'Simon').
      console.log('Mariam');
//3c. Using concatenationm add the 2 strings from 3a and 3b together
    // to create the text: 'My name is: __(replace__ with your name).
      console.log('My name is: ' + 'Mariam');
//3d. At a restaurant, you order 1 coffe($5) an 1 bagel($3).
    //Using math calculate the total cost , and using concatentanion, 
    //create the text: 'The total cost:$__'(replace__ with the total you calculated).
      console.log('The total cost: $' + (5 + 3));
//3e. Do the same thing as 3d, but use a template string and interpolation.
      console.log(`The total cost: $${5+3}`);
//3f. Display the text from 3e in a popup using alert(..).  
      //alert('The total cost: $' + (5+3));
//3g. You order 1 coffee($5.99) and bagel ($2.95). Using math , calculate the total cost,
    // an using concatentaion, cretae the text:
    // 'Total cost: $__'
      console.log('The total cost: $' + (599 + 295) / 100);
//3h. Do the same thing as 3g, but use a template string and interpolation.
      console.log(`The total cost: $${(599 + 295) / 100}`);
//3i. Display the text from 3h in popup.
      alert(`The total cost: $${(599 + 295) / 100}`);
//3j. using a multi-line string, cretae the text from 3h and add a line of text underneath:
   // 'Thank you  come again!. Display both lines in popup.  
      alert('The total cost: $' + (599 + 295) / 100 + '\nThank you, come again!');
//----> SETUP: BASKETBALL-20.95(NUM-2)(SHIPPING-4.99) + T-SHIRTS-7.99(NUM-2)(SHIPPING-4.99).
//3K. Using interpolation, create the first line of text(use math to calculate the numbers 4 and 57.88)
      console.log(`Items(${1+1+1+1}): $${(2095 * 2 + 799 * 2) / 100}`);
//3l. Create second line of text: 'Shipping & handling; 9.98' (use math).
      console.log(`Shipping & handing: $${499 * 2 / 100}`);
//3m. Create third line: 'Total before tax: $67.86' (use macth).
      console.log(`Total before tax: $${(2095 * 2 + 799 * 2 + 499 * 2) / 100}`);
//3n. Create fourth line text: 'Estimated tax (10%): $6.79'
  // (use match and Math.round(..); to calculate the exact number).   
      console.log(`Estimated tax(10%): $${Math.round((2095 * 2 + 799 * 2 + 499 + 499) * 0.1) /100}`);
