const botao = document.getElementById("botao");
const body = document.body;

botao.addEventListener("click", function(){
    if (body.style.backgroundColor === "red"){
        body.style.backgroundColor = "blue";
    } else{
        body.style.backgroundColor = "red";
    }
});