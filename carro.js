//Posicionamento dos Carros na tela
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 95, 150, 210, 270, 318];

//Velocidade
let velocidadeCarros = [3, 2.5, 2, 5, 3.3, 2.3];
//Medidas dos Carros
let comprimentoDoCarro = 50;
let alturaDoCarro = 40;

function mostraCarro(){
  for(let i = 0; i < imagemDosCarros.length; i++ ){
    image(imagemDosCarros[i], xCarros[i], yCarros[i], comprimentoDoCarro, alturaDoCarro);
  }
}
function voltaPosicaoInicialDoCarro(){
  for(let i = 0; i < imagemDosCarros.length; i++){
    if(passouTodaATela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}
function passouTodaATela(xCarro){
  return xCarro < -50;
}
function movimentaCarro(){
  for(let i = 0; i < imagemDosCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
  
}
