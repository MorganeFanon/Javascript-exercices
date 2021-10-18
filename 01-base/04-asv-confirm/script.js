/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

var age=prompt("quel est votre âge ?");
var sexe=prompt("quel est votre sexe ?");
var ville=prompt("quelles est votre ville ?");
var confirmAge = prompt("votre âge est-il " + age);
var confirmSexe=prompt("votre sexe est-il "+ sexe);
var confirmVille= prompt("votre ville est-elle " + ville);

if (confirmAge =="oui")
 alert("ok");
 else alert("quel est votre age?");
if (confirmSexe =="oui")  
alert("ok");
else alert("quel est votre sexe?");
if(confirmVille =="oui")
alert("ok");
else alert("quelle est votre ville ? ");
