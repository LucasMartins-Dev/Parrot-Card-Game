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
cartas = prompt('Com quantas cartas deseja jogar ? Nº par entre 4 e 14')
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

let seletor = document.querySelector(".cards");
for(let i=0;i<imgduplicada.length;i++){
   seletor.innerHTML += `
   <div class="colunm">
   <div class="card${i}" onclick="clicar(this)">
       <div class="lado front" ><img src="imagens/back.png"></div>
       <div class="lado back parado" ><img src="${imgduplicada[i]}"></div>
   </div>
   <div class="card${i+1}" onclick="clicar(this)">
       <div class="lado front"><img src="imagens/back.png"></div>
       <div class="lado back parado "><img src="${imgduplicada[i+1]}"></div>
   </div>
   `;
   i++
   }
}
let viradas=0;
let jogadas;
let anterior;
let ant;
let contemant;
let click=0;
let cont = 0;


 

function clicar(elemento){
   
   let contem = elemento.classList.contains("certo");
   console.log(contem)

   elemento.children[0].classList.add("frontrotate");
   elemento.children[1].classList.add("backrotate");
   elemento.children[1].classList.remove("parado");
   let atu = elemento;
   let atual = elemento.children[1].innerHTML;
 
   click++
   
   cont++
  
   
   if(anterior!==null && atu !== ant && contem === false && contemant === false){

      if(atual===anterior && atu!==ant ){
      elemento.classList.add("certo");
      elemento.children[1].classList.add("correto");
      ant.classList.add("certo");
      ant.children[1].classList.add("correto");
      viradas=viradas+2;
      console.log(viradas);
      }else if(click%2===0){
         let antant = ant;
         
         setTimeout(() =>{
         antant.children[0].classList.remove("frontrotate");
         antant.children[1].classList.remove("backrotate");
         antant.children[1].classList.add("parado");
         elemento.children[0].classList.remove("frontrotate");
         elemento.children[1].classList.remove("backrotate");
         elemento.children[1].classList.add("parado");
         
      }  ,1000);
   }

   } 
   contemant=contem;
   ant=atu;  
anterior=atual;
classcheck = null;
   console.log(viradas)
  
   if(cont===2){
      ant = null;
      atu = null;
      anterior= null;
      atual = null;
      cont = 0;
      } 
      let playagain;

   if(cartas == viradas){
      setTimeout(() =>{
      alert('Parabens você ganhou o Jogo com '+click+' jogadas!'); }  ,1000);
      setTimeout(() =>{ playagain = prompt ('Deseja jogar novamente ? sim / não');
      while(playagain !== "sim" && playagain !== "não"){
         alert('Comando inválido !')
         playagain = prompt ('Deseja jogar novamente ? sim / não');
      }
      if(playagain === "sim"){
         location.reload()
      }}  ,1000);
   }  

   }
   
   
   

    
  

 
   