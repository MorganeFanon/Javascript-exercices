/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(()=> {

    // your code here

})();



function FizzBuzz(){ 
    for(let y = 0 ; y <= 20 ; y++) 
    {
         if(y % 5 === 0)
               console.log('Buzz');
    
         else if(y % 3 === 0)
                console.log('Fizz');
    
         else if(y % 3===0 && y % 5===0)
               console.log('FizzBuzz') ;
         else console.log('ni divisible par 3, ni divisible pare 5');
           }
    }
   FizzBuzz();
   