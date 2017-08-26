function concatena(valor) {
  document.getElementById('calculo').value += valor;
}

function calcula(){
  document.getElementById('resul').value = eval(document.getElementById('calculo').value);
}

function limpia(){
  document.getElementById('calculo').value = "";
}
