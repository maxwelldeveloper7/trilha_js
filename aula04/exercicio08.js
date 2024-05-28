const entrada = document.getElementById('entrada');
const contador = document.getElementById('contador');

entrada.addEventListener("input", function(){
    if (entrada.value.length > 1){
        contador.textContent = entrada.value.length + " caracteres.";
    }else{
        contador.textContent = entrada.value.length + " caractere.";
    }
});