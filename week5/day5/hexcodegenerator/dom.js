let container = document.querySelector(".container");
let btn = document.getElementById("btn");
let hex = document.getElementById("hex");

function generateHexCode() {
    const hexChars = '0123456789ABCDEF';
    let hexCode = '#';
    for (let i = 0; i < 6; i++) {
        hexCode += hexChars[Math.floor(Math.random() * 16)];
    }
    container.style.backgroundColor = hexCode;
    hex.innerHTML= hexCode;

   
}


btn.addEventListener('click', generateHexCode)

