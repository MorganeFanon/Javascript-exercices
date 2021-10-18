/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

document.getElementById("addition").addEventListener("click",function () {
    var opOne = document.getElementById("op-one").value;
    var opTwo  = document.getElementById("op-two").value;
    var addition = document.getElementById("addition").value;
    addition.value = "op-one" + "op-two";
    alert("the sum of a and b is " + addition);
});


document.getElementById("substraction").addEventListener("click",function () {
    var a = document.getElementById("op-one").value;
    var b  = document.getElementById("op-two").value;
    var substraction = document.getElementById("substraction").value;
    substraction.value = a - b;
    alert("the substraction of b from a is" + substraction);
});



document.getElementById("multiplication").addEventListener("click",function () { 
    var a = document.getElementById("op-one").value;
    var b  = document.getElementById("op-two").value;
    var multiplication = document.getElementById("multiplication").value;
    multiplication.value = a * b;
    alert("the multiplication of a and b is" + multiplication);
});



document.getElementById("division").addEventListener("click",function () {
      var a = document.getElementById("op-one").value;
      var b  = document.getElementById("op-two").value;
      var division = document.getElementById("division").value;
      division.value = a / b;
      alert("the division of a by b is" + division);
  });
