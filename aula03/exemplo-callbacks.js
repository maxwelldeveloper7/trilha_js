// Função que recebe um callback como argumento
function processarArray(array, callback){
    for (let i = 0; i < array.length; i++){
        callback(array[i])
    }
}

// Callback que exibe o elemento
function exibirElemento(elemento){
    console.log("Elemento: ", elemento);
}

const numeros = [1, 2, 3, 4, 5];
processarArray(numeros, exibirElemento);