function contador(){
    let contagem = 0; // Variável do escopo da função externa

    return function(){
        contagem ++; // Modifica a variável do escopo externo
        console.log('Contagem:', contagem);
    };
}

let minhaContagem = contador();

