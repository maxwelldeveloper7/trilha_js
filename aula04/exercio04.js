const botao = document.getElementById("botao");
const contador = document.getElementById("contador");
let count = 0;

botao.addEventListener("click", function(){
    count++;
    contador.textContent = count;
});