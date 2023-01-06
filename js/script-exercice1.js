/**
 * @author ETOUMI Aristide
 * @description DI-Bootcamp Week3 Day3 ExercicesXP | Exercice 1: TIMER
 */

/*
Part I
1- In your Javascript file, using setTimeout, call a function after 2 seconds.
2- The function will alert “Hello World”.


Part II
1- In your Javascript file, using setTimeout, call a function after 2 seconds.
2- The function will add a new paragraph <p>Hello World</p> to the <div id="container">.


Part III
In your Javascript file, using setInterval, call a function every 2 seconds.
The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
The interval will be cleared (ie. clearInterval), when the user will click on the button.
Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.
*/

//PART 1

setTimeout(() => {
    //alert("Hello World")
}, 2000);

//PART 2
let container = document.getElementById("container");
function createParagraph(params) {
    let p = document.createElement("p");
    p.innerHTML = "Hello World";
    container.appendChild(p);
}

setTimeout(() => {
    //createParagraph();
}, 2000);

//PART 3
let compteur = 0;
let idIntervalAnimation = setInterval(() => {
    compteur += 1;

    compteur > 5 ? clearInterval(idIntervalAnimation) : createParagraph();
}, 2000);

let clearButton = document.getElementById("clear");
clearButton.onclick = () => {
    clearInterval(idIntervalAnimation);
};