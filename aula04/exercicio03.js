const entrada = document.getElementById("entrada");
const lista = document.getElementById("lista");

entrada.addEventListener("keyup", function(event){
    if(event.key === "Enter"){
        console.log('Pressionou e soltou Enter');
        const novoItem = document.createElement("li");
        novoItem.textContent = entrada.value;
        lista.appendChild(novoItem);
        entrada.value = "";
    }
})