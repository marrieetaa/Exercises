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