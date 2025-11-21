//I parte, cambiar color y texto a darkblue

function changeColor(){
    //Escribe tu código aquí
    const backgroundElement = document.getElementById("background");
    backgroundElement.style.backgroundColor = 'darkblue';
};

function changeText(){
    //Escribe tu código aquí
    const textElement = document.getElementById("text");
    textElement.textContent = "darkblue";
};

function changeStyles(){
    //Escribe tu código aquí
    changeColor();
    changeText();
};

export {changeColor, changeText, changeStyles}