const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    if (nome.trim() === "" || email.trim() === ""){
        alert("Por favor, preencha todos os campos.");
    } else {
        alert("Formulário enviado com sucesso!");
        formulario.reset();
    }
});