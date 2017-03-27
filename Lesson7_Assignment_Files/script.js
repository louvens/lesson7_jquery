/*
Program Name: Recipe Display Application
Author: Louvens Merilien
Date: 3/26/17
Filename: script.js
*/

//displays the next element after the current target
function display(event) {

    $ (event.currentTarget) .next().fadeIn("slow");
    
}//end of display

//attach event listener to h3 elements to invoke display function when clicked
$ ("h3").click(display);