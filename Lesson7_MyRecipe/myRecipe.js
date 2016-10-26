/*
Program Name: My Extra New Recipe
Author: Michael Hanna
Date: October 26th, 2016
Filename: myRecipe.js
*/

//displays the next element after the current target
function display(event) {

$(event.currentTarget) .next() .fadeIn("fast");

}//end of display

//attach event listener to h3 elements to invoke display function when clicked
$("h3").click(display);

$("h2").click(function(){
     alert('Thanks for checking out my recipe!')
   });