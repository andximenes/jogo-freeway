let xAtor = 100;
let yAtor = 365;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}
function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 5;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
        yAtor += 5;
    }
  }
}
function verificaColisao(){
   //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  
  for(let i = 0; i < imagemDosCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoDoCarro, alturaDoCarro, xAtor, yAtor, 10);
    if(colisao){
      voltaAtorPosicaoInicial();
      somColisao.play();
      if(pontosMaiorQueZero()){
          meusPontos -= 1;
      
      }
    }
  } 
}
function voltaAtorPosicaoInicial(){
  yAtor = 365;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(22);
  fill(255, 240, 60);
  text(meusPontos, width / 5, 25);
}
function marcaPonto(){
  if(yAtor < 15){
    meusPontos += 1;
   voltaAtorPosicaoInicial();
    somPontos.play();
  }
}
function pontosMaiorQueZero(){
  return meusPontos > 0;
}
function podeSeMover(){
  return yAtor < 365;
}
