/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

var question = prompt("voulez-vous du gâteau?");
function Myfunction() {
    if (question=="oui")
    alert("Bravo!");
    else if (question=="non")
    alert ("du gâteau, ça ne se refuse pas !");
}
Myfunction(question);

