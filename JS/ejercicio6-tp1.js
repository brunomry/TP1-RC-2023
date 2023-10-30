document.write(`<h2>Resolución de Ejercicio N°6 - TP1</h2>`);

let numero1 = parseInt(prompt("Ingrese el primer número: "));
let numero2 = parseInt(prompt("Ingrese el segundo número: "));
let mayor;

//SOLUCION 1 - APLICANDO CONDICIONAL IF-ELSE

document.write(`<h3>- Solución n°1 aplicando condicional if-else:</h3>`);

if(numero1 === numero2){
  document.write(`<p>Los números ingresados ${numero1} y ${numero2} son iguales</p>`);
}else if(numero1>numero2){
  document.write(`<p>El mayor entre número ${numero1} y número ${numero2} es el número ${numero1}</p>`);
}else{
  document.write(`<p>El mayor entre número ${numero1} y número ${numero2} es el número ${numero2}</p>`);
}

//SOLUCION 2 - APLICANDO OPERADOR TERNARIO

document.write(`<h3>- Solución n°2 aplicando operador ternario:</h3>`);

(numero1 === numero2) 
  ? document.write(`<p>Los números ingresados ${numero1} y ${numero2} son iguales</p>`)
  : (numero1 > numero2) 
    ? document.write(`<p>El mayor entre número ${numero1} y número ${numero2} es el número ${numero1}</p>`)
    : document.write(`<p>El mayor entre número ${numero1} y número ${numero2} es el número ${numero2}</p>`);

//SOLUCION 3 - APLICANDO EL OBJETO MATH

document.write(`<h3>- Solución n°3 aplicando objeto Math:</h3>`);

if(numero1 === numero2){
  document.write(`<p>Los números ingresados ${numero1} y ${numero2} son iguales</p>`);
}else{
  document.write(`<p>El mayor entre número ${numero1} y número ${numero2} es el número ${Math.max(numero1,numero2)}</p>`);
}