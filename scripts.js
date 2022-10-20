const img = [
   'imagens/bobrossparrot.gif',
   'imagens/explodyparrot.gif',
   'imagens/fiestaparrot.gif',
   'imagens/metalparrot.gif',
   'imagens/revertitparrot.gif',
   'imagens/tripletsparrot.gif',
   'imagens/unicornparrot.gif',
]

let cartas;
function jogo(element){
cartas = prompt('Com quantas cartas deseja jogar ?')
while(cartas%2!==0 || cartas < 4 && cartas%2===0 || cartas>14 && cartas%2===0 ){
   alert('Numero de cartas inválido !')
cartas = prompt('Com quantas cartas deseja jogar ?')
}
let imgduplicada = [];

  if(cartas>=4 && cartas<=14 && cartas%2===0){
   for(let i=0;i<cartas/2;i++){
      imgduplicada.push(img[i]);
      imgduplicada.push(img[i]);
   }
}



 imgduplicada.sort(()=> Math.random() - 0.5);

console.log(imgduplicada)
console.log(img)

let seletor = document.querySelector(".cards");
for(let i=0;i<imgduplicada.length;i++){
   seletor.innerHTML += `
   <div class="colunm">
   <div class="card1" onclick="clicar(this)">
       <div class="lado front" ><img src="imagens/back.png"></div>
       <div class="lado back parado" ><img src="${imgduplicada[i]}"></div>
   </div>
   <div class="card2" onclick="clicar(this)">
       <div class="lado front"><img src="imagens/back.png"></div>
       <div class="lado back parado "><img src="${imgduplicada[i+1]}"></div>
   </div>
   `;
   i++
   }
}



function clicar(elemento){
   elemento.children[0].classList.toggle("frontrotate");
   elemento.children[1].classList.toggle("backrotate");
   elemento.children[1].classList.toggle("parado");
}
    
  

 
   