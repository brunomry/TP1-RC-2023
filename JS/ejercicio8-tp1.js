document.write(`<h2>Resolución de Ejercicio N°8 - TP1</h2>`);

let numero = parseInt(prompt("Ingrese un número: "));

//SOLUCION 1 - APLICANDO CONDICIONAL IF-ELSE

document.write(`<h3>- Solución n°1 aplicando condicional if-else:</h3>`);

if(numero % 2 == 0){
  document.write(`<p>El número ${numero} si es divisible por 2</p>`);
}else{
  document.write(`<p>El número ${numero} no es divisible por 2</p>`);
}

//SOLUCION 2 - APLICANDO OPERADOR TERNARIO

document.write(`<h3>- Solución n°2 aplicando operador ternario:</h3>`);

(numero % 2 == 0) 
  ? document.write(`<p>El número ${numero} si es divisible por 2</p>`)
  : document.write(`<p>El número ${numero} no es divisible por 2</p>`);