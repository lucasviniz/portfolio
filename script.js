const typedTextElement = document.getElementById('typed-text');
const typedName = document.getElementById('typed-name');
const typedDescription = document.getElementById('typed-description');
const loadingBar = document.getElementById('load-bar');
let index = 0;

function typeText() {
    let horaAtual = new Date().getHours();
    let textTemp = "";
   
    if (horaAtual < 12) {
        textTemp = 'Olá, Bom dia!';
    } else if (horaAtual < 18) {
        textTemp= 'Olá, Boa tarde!';
    } else {
        textTemp = 'Olá, Boa noite!';
    }

    const text = textTemp;
    console.log(text);
    if (index < text.length) {
        typedTextElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 100);
    }
};


typeText();

window.onload = function() {
    typedName.classList.add('show-text');
    typedDescription.classList.add('show-text-description');
    loadingBar.classList.add('show-bar');
};




