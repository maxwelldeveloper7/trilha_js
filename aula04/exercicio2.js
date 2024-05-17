const formulario = document.getElementById("formulario");
const texto = document.getElementById("texto");
const conteudo = document.getElementById("conteudo");

formulario.addEventListener("submit", function(event){
    event.preventDefault(); // Evita o comportamento padrão de envio do formulário
    conteudo.textContent = texto.value;
})