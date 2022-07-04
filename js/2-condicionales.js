/* Estructura if

if(Condicion logica) {
    Todas las lineas de codigo que quiero
    que haga mi programa si se cumple la condicion,
    o el resultado de la condicion es true
}

*/

let numero1 = parseInt( prompt("Ingrese el primer numero") );
let numero2 = parseInt( prompt("Ingrese el segundo numero") );
console.log(numero1);
console.log(numero2);

if (numero1 > numero2) {
    document.write("El numero mas grande es el numero uno: " + numero1)
}else if (numero2 > numero1) {
    document.write("El numero mas grande es el numero dos: " + numero2)
} else {
    document.write("Los numeros son iguales")
}