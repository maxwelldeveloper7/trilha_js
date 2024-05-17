function processarArray(array, callback){
    // Itera sobre o array e chama o callback para cada elemento
    for( let i = 0; i < array.length; i++){
        callback(array[i]);// Chama o callback passando o elemento
    }
}

// Callback para exibir o elemento
function exibirElemento(elemento){
    console.log("Elemento:", elemento);
}

// Testando com um array de números
const numeros = [10, 20, 30, 40, 50];

processarArray(numeros, exibirElemento);