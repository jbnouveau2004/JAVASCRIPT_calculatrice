var calcul = [0]; // tableau pour le calcul final
var regroup; // pour afficher le tableau sans les délimiteurs
var operateur = 0; // pour avoir qu'un seul opérateur
var operante1 = "";
var operante2 = "";
var choix = "";
var total = "";


function affichetout(){
  regroup="";
  for(i=0;i<calcul.length;i++){
    regroup = regroup + calcul[i];
  }

  document.getElementById("result").value = "" + regroup;
}

//initialisation
affichetout();

//appui des touches
var btn = document.querySelector('#un');
btn.addEventListener('click', ajout1);

function ajout1(){
  if(calcul[0]==0){calcul.pop();}
  calcul.push(1);
  affichetout();
}

var btn = document.querySelector('#deux');
btn.addEventListener('click', ajout2);

function ajout2(){
  if(calcul[0]==0){calcul.pop();}
  calcul.push(2);
  affichetout();
}

var btn = document.querySelector('#trois');
btn.addEventListener('click', ajout3);

function ajout3(){
  if(calcul[0]==0){calcul.pop();}
  calcul.push(3);
  affichetout();
}

var btn = document.querySelector('#quatre');
btn.addEventListener('click', ajout4);

function ajout4(){
  if(calcul[0]==0){calcul.pop();}
  calcul.push(4);
  affichetout();
}

var btn = document.querySelector('#cinq');
btn.addEventListener('click', ajout5);

function ajout5(){
  if(calcul[0]==0){calcul.pop();}
  calcul.push(5);
  affichetout();
}

var btn = document.querySelector('#six');
btn.addEventListener('click', ajout6);

function ajout6(){
  if(calcul[0]==0){calcul.pop();}
  calcul.push(6);
  affichetout();
}

var btn = document.querySelector('#sept');
btn.addEventListener('click', ajout7);

function ajout7(){
  if(calcul[0]==0){calcul.pop();}
  calcul.push(7);
  affichetout();
}

var btn = document.querySelector('#huit');
btn.addEventListener('click', ajout8);

function ajout8(){
  if(calcul[0]==0){calcul.pop();}
  calcul.push(8);
  affichetout();
}

var btn = document.querySelector('#neuf');
btn.addEventListener('click', ajout9);

function ajout9(){
  if(calcul[0]==0){calcul.pop();}
  calcul.push(9);
  affichetout();
}

var btn = document.querySelector('#zero');
btn.addEventListener('click', ajout0);

function ajout0(){
  if(calcul[0]==0 && (calcul.length-1)==0){calcul.pop();}
  calcul.push(0);
  affichetout();
}

var btn = document.querySelector('#add');
btn.addEventListener('click', ajoutadd);

function ajoutadd(){
  if(calcul[calcul.length-1]==="-" || calcul[calcul.length-1]==="x" || calcul[calcul.length-1]==="/"){
  calcul.pop();
  operateur=0;}
  if(calcul[calcul.length-1]!=="+" && operateur==0){
  calcul.push("+");
  operateur = 1;}

  affichetout();
}

var btn = document.querySelector('#minus');
btn.addEventListener('click', ajoutminus);

function ajoutminus(){
  if(calcul[calcul.length-1]==="+" || calcul[calcul.length-1]==="x" || calcul[calcul.length-1]==="/"){
    calcul.pop();
    operateur=0;}
    if(calcul[calcul.length-1]!=="-" && operateur==0){
    calcul.push("-");
    operateur = 1;}
  
  affichetout();
}

var btn = document.querySelector('#mul');
btn.addEventListener('click', ajoutmul);

function ajoutmul(){
  if(calcul[calcul.length-1]==="+" || calcul[calcul.length-1]==="-" || calcul[calcul.length-1]==="/"){
    calcul.pop();
    operateur=0;}
    if(calcul[calcul.length-1]!=="x" && operateur==0){
    calcul.push("x");
    operateur = 1;}
  
  affichetout();
}

var btn = document.querySelector('#div');
btn.addEventListener('click', ajoutdiv);

function ajoutdiv(){
  if(calcul[calcul.length-1]==="+" || calcul[calcul.length-1]==="-" || calcul[calcul.length-1]==="x"){
    calcul.pop();
    operateur=0;}
    if(calcul[calcul.length-1]!=="/" && operateur==0){
    calcul.push("/");
    operateur = 1;}
  
  affichetout();
}

// remise à zéro
var btn = document.querySelector('#reset');
btn.addEventListener('click', reset);

function reset(){
  calcul = [0];
  operateur = 0;

  affichetout();
}

// calcul final
var btn = document.querySelector('#equ');
btn.addEventListener('click', calcultot);

function calcultot(){
  if(operateur==1){
  if(calcul[calcul.length-1]!=="+" || calcul[calcul.length-1]!=="-" || calcul[calcul.length-1]!=="x" || calcul[calcul.length-1]!=="/"){
  
  

  operateur=0;
  i=0;
  while(calcul[i]!= "+" && calcul[i]!= "-" && calcul[i]!= "x" && calcul[i]!= "/"){
    operante1 = operante1 + calcul[i];
    i=i+1;
  }
  choix = calcul[i];
  for(i=i+1;i<calcul.length;i++){
    operante2 = operante2 + calcul[i];
  }

  operante1 = parseInt(operante1, 10);
  operante2 = parseInt(operante2, 10);

  switch(choix){
    case "+":
      total = operante1 + operante2;
      calcul=[total];
      break;
    case "-":
      total = operante1 - operante2;
      calcul=[total];
      break;
    case "x":
      total = operante1 * operante2;
      calcul=[total];
      break;
    case "/":
      total = operante1 / operante2;
      calcul=[total];
      break;
    default:
      break;
  }

  operante1 = "";
  operante2 = "";
  affichetout();

}
}else{calcul.pop();}


}





