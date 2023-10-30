document.write(`<h2>Resolución de ejercicio auxiliar n°2</h2>`);
document.write(`Los resultados se muestran por consola`);

let nombre = "Bruno";
let apellido = "Madozzo Romay";
let nombreCompleto = "";

//SOLUCION N°1

nombreCompleto = nombre + " " + apellido;
console.log("Solución N°1:",nombreCompleto);

//SOLUCION N°2

nombreCompleto = nombre.concat(" "+ apellido);
console.log("Solución N°2:",nombreCompleto);

//SOLUCION N°3

nombreCompleto = `${nombre} ${apellido}`;
console.log("Solución N°3:",nombreCompleto);