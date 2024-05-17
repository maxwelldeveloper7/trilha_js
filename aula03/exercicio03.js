function verificarNumero(numero){
    return new Promise((resolve, reject) => {
        if(numero % 2 === 0){
            resolve("O número " + numero + " é par");
        }else{
            reject("O número " + numero + " é impar");
        }
    });
}

verificarNumero(4)
    .then((mensagem) =>{
        console.log(mensagem);
    })
    .catch((erro)=>{
        console.log("Erro:", erro);
    });

verificarNumero(7)
    .then((mensagem) =>{
        console.log(mensagem);
    })
    .catch((erro)=>{
        console.log("Erro:", erro);
    });