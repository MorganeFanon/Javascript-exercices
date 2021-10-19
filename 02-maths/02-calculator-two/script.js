/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// to get the value of an input: document.getElementById("element-id").value

 var a = document.getElementById("op-one").value
 var b = document.getElementById("op-two").value
 var c= a+b;
 var d= a -b;
 var e = a*b;
 var f = a/b;
    document.getElementById("addition").addEventListener("click",function () {
        case "addition":
            console.log("la somme de a et de b est de " + c);
            break;
        case "substraction":
            console.log("la différence entre a et b est de" + d);
            break;
        case "multiplication":
            console.log("la multiplication de a et b est de " + e);
        case "division":
            console.log("la division de a par b est de" + f);
    )};            