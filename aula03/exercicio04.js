function esperarTresSegundos(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("A espera de 3 segundos terminou.");
        }, 3000);
    });
}

esperarTresSegundos()
    .then((mensagem) =>{
        console.log(mensagem);
    })
    .catch((erro)=>{
        console.log("Erro:", erro);
    });