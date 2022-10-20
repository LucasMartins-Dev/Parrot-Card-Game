const img = [
   'imagens/bobrossparrot.gif',
   'imagens/explodyparrot.gif',
   'imagens/fiestaparrot.gif',
   'imagens/metalparrot.gif',
   'imagens/revertitparrot.gif',
   'imagens/tripletsparrot.gif',
   'imagens/unicornparrot.gif',
]

function clicar(elemento){
   elemento.children[0].classList.toggle("frontrotate");
   elemento.children[1].classList.toggle("backrotate");
   elemento.children[1].classList.toggle("parado");
}
    
  

 
   