const botao = document.getElementById("botao");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function(){
    mensagem.textContent = "Botão clicado!";
    console.log('o botão foi clicado');
});