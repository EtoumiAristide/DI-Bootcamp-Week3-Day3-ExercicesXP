/**
 * @author ETOUMI Aristide
 * @description DI-Bootcamp Week3 Day3 ExercicesXP | Exercice 2: Move The Box
 */

/*
1- Copy the code above, to a structured HTML file.
2- In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
Hint : use clearInterval as soon as the box reaches the right end side of the container
Hint : check out the demonstration in the Course Noted named JS Functions
*/
let container = document.getElementById("container");
let animate = document.getElementById("animate");
let initialPositionX = 0;
let animation;
let sideEnd = container.offsetWidth - animate.offsetWidth;
function myMove() {
    animation = setInterval(moveObject, 1);
}

//console.log(container.offsetWidth);
function moveObject() {
    initialPositionX++;
    if (initialPositionX <= sideEnd) {
        animate.style.left = initialPositionX + "px";
    } else {
        clearInterval(animation);
    }
}