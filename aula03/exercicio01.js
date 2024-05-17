function criarContador(){
    // Variável do escopo externo, que será "lembrada"
    let contagem = 0;

    // Retorna uma função que incrementa e exibe a contagem
    return function(){
        contagem++;
        console.log("Contagem:", contagem);
    };
}

const contador = criarContador();

let i = 1;

while(i <= 10){
    contador();
    i++;
}