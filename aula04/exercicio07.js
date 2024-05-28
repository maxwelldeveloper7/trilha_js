const botao = document.getElementById('botao');
const paragrafo = document.getElementById('paragrafo');

botao.addEventListener('click', function(){
    if (paragrafo.style.display === 'none'){
        paragrafo.style.display = 'block';
    } else {
        paragrafo.style.display = 'none';
    }
});