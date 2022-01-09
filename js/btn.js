function exibirMensagem() {
    //window.location="https://www.youtube.com/watch?v=rCj-Fb1OmXg"; //Abre a página na mesma aba.
    window.open('https://www.youtube.com/watch?v=rCj-Fb1OmXg'); //Abre a página em outra aba.   
}

var btn = document.getElementById("btn");
btn.addEventListener("click", exibirMensagem);