document.write(`<h2>Resolución de Ejercicio N°10- TP1</h2>`);

let numero = parseInt(prompt("Ingrese un número: "));

//SOLUCION 1 - APLICANDO CONDICIONAL IF-ELSE

document.write(`<h3>- Solución n°1 aplicando condicional if-else:</h3>`);

if(numero % 2 == 0 && numero % 3 == 0 && numero % 5 == 0 && numero % 7 == 0){
  document.write(`<p>El número ${numero} es divisible por 2, 3, 5 y 7</p>`);
}else if(numero % 2 == 0 && numero % 3 == 0 && numero % 5 == 0){
  document.write(`<p>El número ${numero} es divisible por 2, 3 y 5</p>`);
}else if(numero % 2 == 0 && numero % 3 == 0 && numero % 7 == 0){
  document.write(`<p>El número ${numero} es divisible por 2, 3 y 7</p>`);
}else if(numero % 2 == 0 && numero % 5 == 0 && numero % 7 == 0){
  document.write(`<p>El número ${numero} es divisible por 2, 5 y 7</p>`);
}else if(numero % 2 == 0 && numero % 3 == 0){
  document.write(`<p>El número ${numero} es divisible por 2 y 3</p>`);
}else if(numero % 2 == 0 && numero % 5 == 0){
  document.write(`<p>El número ${numero} es divisible por 2 y 5</p>`);
}else if(numero % 2 == 0 && numero % 7 == 0){
  document.write(`<p>El número ${numero} es divisible por 2 y 7</p>`);
}else if(numero % 3 == 0 && numero % 5 == 0 && numero % 7 == 0){
  document.write(`<p>El número ${numero} es divisible por 3, 5 y 7</p>`);
}else if(numero % 3 == 0 && numero % 5 == 0){
  document.write(`<p>El número ${numero} es divisible por 3 y 5</p>`);
}else if(numero % 3 == 0 && numero % 7 == 0){
  document.write(`<p>El número ${numero} es divisible por 3 y 7</p>`);
}else if(numero % 5 == 0 && numero % 7 == 0){
  document.write(`<p>El número ${numero} es divisible por 5 y 7</p>`);
}else if(numero % 2 == 0){
  document.write(`<p>El número ${numero} es divisible por 2</p>`);
}else if(numero % 3 == 0){
  document.write(`<p>El número ${numero} es divisible por 3</p>`);
}else if(numero % 5 == 0){
  document.write(`<p>El número ${numero} es divisible por 5</p>`);
}else if(numero % 7 == 0){
  document.write(`<p>El número ${numero} es divisible por 7</p>`);
}else{
  document.write(`<p>El número ${numero} no es divisible por 2, 3, 5 o 7</p>`);
}

//SOLUCION 2 - APLICANDO OPERADOR TERNARIO

document.write(`<h3>- Solución n°2 aplicando operador ternario:</h3>`);

(numero % 2 == 0 && numero % 3 == 0 && numero % 5 == 0 && numero % 7 == 0)
  ? document.write(`<p>El número ${numero} es divisible por 2, 3, 5 y 7</p>`)
  : (numero % 2 == 0 && numero % 3 == 0 && numero % 5 == 0)
    ? document.write(`<p>El número ${numero} es divisible por 2, 3 y 5</p>`)
    : (numero % 2 == 0 && numero % 3 == 0 && numero % 7 == 0)
      ? document.write(`<p>El número ${numero} es divisible por 2, 3 y 7</p>`)
      : (numero % 2 == 0 && numero % 5 == 0 && numero % 7 == 0)
        ? document.write(`<p>El número ${numero} es divisible por 2, 5 y 7</p>`)
        : (numero % 2 == 0 && numero % 3 == 0)
          ? document.write(`<p>El número ${numero} es divisible por 2 y 3</p>`)
          : (numero % 2 == 0 && numero % 5 == 0)
            ? document.write(`<p>El número ${numero} es divisible por 2 y 5</p>`)
            : (numero % 2 == 0 && numero % 7 == 0)
              ? document.write(`<p>El número ${numero} es divisible por 2 y 7</p>`)
              : (numero % 3 == 0 && numero % 5 == 0 && numero % 7 == 0)
                ? document.write(`<p>El número ${numero} es divisible por 3, 5 y 7</p>`)
                : (numero % 3 == 0 && numero % 5 == 0)
                  ? document.write(`<p>El número ${numero} es divisible por 3 y 5</p>`)
                  : (numero % 3 == 0 && numero % 7 == 0)
                    ? document.write(`<p>El número ${numero} es divisible por 3 y 7</p>`)
                    : (numero % 5 == 0 && numero % 7 == 0)
                      ? document.write(`<p>El número ${numero} es divisible por 5 y 7</p>`)
                      : (numero % 2 == 0)
                        ? document.write(`<p>El número ${numero} es divisible por 2</p>`)
                        : (numero % 3 == 0)
                          ? document.write(`<p>El número ${numero} es divisible por 3</p>`)
                          : (numero % 5 == 0)
                            ? document.write(`<p>El número ${numero} es divisible por 5</p>`)
                            : (numero % 7 == 0)
                              ? document.write(`<p>El número ${numero} es divisible por 7</p>`)
                              : document.write(`<p>El número ${numero} no es divisible por 2, 3, 5 o 7</p>`)
