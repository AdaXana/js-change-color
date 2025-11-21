import { changeStyles } from "./partOne.js";


//Aquí codificaremos el evento que disparará el botón "Click me"

const buttonElement = document.getElementById("click-me-button");

buttonElement.addEventListener( "click" , changeStyles );