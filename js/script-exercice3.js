/**
 * @author ETOUMI Aristide
 * @description DI-Bootcamp Week3 Day3 ExercicesXP | Exercise 3: Drag & Drop
 */

/*
Copy the code above, to a structured HTML file.
In your Javascript file add the functionality which will allow you to drag the box and drop it into the target.
Check out the Course Notes named DOM animations.
*/

let target = document.getElementById("target");
let box = document.getElementById("box");
box.setAttribute("draggable", true);

box.ondragstart = (ev) => {
    ev.dataTransfer.setData("ev.target.id", ev.target.id);
};

// box.ondragend = (ev) => {
//     let xCoord = ev.clientX;
//     let yCoord = ev.clientY;

//     ev.target.style.left = xCoord + "px";
//     ev.target.style.top = yCoord + "px";
//     ev.target.style.position = "absolute";
// };

target.ondragover = (ev) => {
    ev.preventDefault();
    ev.target.classList.add("drag-style");
};

target.ondragleave = (ev) => {
    ev.preventDefault();
    ev.target.classList.remove("drag-style");
};

target.ondrop = (ev) => {
    ev.preventDefault();

    let data = ev.dataTransfer.getData("ev.target.id");
    console.log(ev.dataTransfer);
    let box = document.getElementById(data);
    ev.target.appendChild(box);
};

