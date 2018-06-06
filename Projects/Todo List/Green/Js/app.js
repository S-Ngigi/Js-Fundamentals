// ADD BUTTON ANIMATION AND SUBMITTION
// retrieve the element
const add_button = document.getElementById("add");
// Adding event listener to our add_button element.
add_button = addEventListener("click", submit_task, false);

function submit_task(event) {
  event.preventDefault;
  // Grabbing svg circle and path
  const circle = document.querySelector('#add circle');
  const path = document.querySelector('#add path');
  // Adding a class to an svg element
  circle.setAttribute('class', 'circle');
  path.setAttribute('class', 'plus');
  // Adding event listener to svg circle element to know when the animation ends
  circle.addEventListener("animationend", circle_animated, false);
  // Calling function to remove svg element classes to reset animation.
  function circle_animated(params) {
    console.log("Worked");
    circle.removeAttribute('class');
    path.removeAttribute('class');
  }
}