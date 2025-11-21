//II parte, refactorizar para hacer toggle, nos basaremos en lo que hicimos en el archivo partOne.js


function changeColor(newColor){
    //Escribe tu código aquí
    const backgroundElement = document.getElementById("background");
    backgroundElement.style.backgroundColor = newColor;
};

function changeText(newText){
    //Escribe tu código aquí
    const textElement = document.getElementById("text");
    textElement.textContent = newText;
};

function changeStyles(){
    //Escribe tu código aquí
    const textElement = document.getElementById("text");

    if (textElement.textContent === "red"){
        changeColor("darkblue");
        changeText("darkblue");
    }else{
        changeColor("red");
        changeText("red");
    }
};

export {changeColor, changeText, changeStyles}