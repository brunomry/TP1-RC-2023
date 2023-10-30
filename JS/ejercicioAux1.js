document.write(`<h2>Resolución de ejercicio auxiliar n°1</h2>`);
document.write(`Los resultados se mostrarán por consola`);

/* SOLUCION 1 */

let numero1 = 8, numero2 = 2;

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let producto = numero1 * numero2;
let division = numero1 / numero2;

console.group("Solución N°1");
console.log(`Resultado de la suma entre ${numero1} y ${numero2}: ${suma}`);
console.log(`Resultado de la resta entre ${numero1} y ${numero2}: ${resta}`);
console.log(`Resultado de la multiplcicación entre ${numero1} y ${numero2}: ${producto}`);
console.log(`Resultado de la división entre ${numero1} y ${numero2}: ${division}`);
console.groupEnd();

/* SOLUCION 2 */

let num1 = 15, num2 = 5;

console.group("Solución N°2");
console.log(`La suma entre ${num1} y ${num2} es igual a: ${num1 + num2}`);
console.log(`La resta entre ${num1} y ${num2} es igual a: ${num1 - num2}`);
console.log(`La multiplicación entre ${num1} y ${num2} es igual a: ${num1 * num2}`);
console.log(`La división entre ${num1} y ${num2} es igual a: ${num1 / num2}`);
console.groupEnd();
