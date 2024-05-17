// Função que retorna uma promise
function esperarSegundos(segundos){
    return new Promise((resolve, reject) => {
        if(segundos > 0){
            setTimeout(() => {
                resolve("Esperou " + segundos + " segundos");
            }, segundos * 1000); // converte para milissegundos
        } else{
            reject("O tempo deve ser maior que 0");
        }
    });
}

// Usando uma promise
esperarSegundos(0)
    .then((mensagem)=>{
        console.log(mensagem)
    })
    .catch((erro)=>{
        console.log("Erro:", erro)
    });