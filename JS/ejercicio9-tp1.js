document.write(`<h2>Resolución de Ejercicio N°9 - TP1</h2>`);

let frase = prompt("Ingresa una frase: ");

let vocalesFrase = "";
frase = frase.toLowerCase();

for(let i = 0; i < frase.length; i++){
  if(frase.charAt(i) == 'a' || frase.charAt(i) == 'e' || frase.charAt(i)== 'i' || frase.charAt(i)== 'o' || frase.charAt(i) == 'u'){
    vocalesFrase = vocalesFrase + frase[i];
  }
}

if(vocalesFrase != ""){
  document.write(`<p>Las vocales que aparecen en la frase "${frase}" son: <b>${vocalesFrase}</b></p>`);
}else{
  document.write(`<p>La frase "${frase}" no contiene vocales</p>`);
}