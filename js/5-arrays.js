//Crear un arreglo sin datos
let peliculas = [];

//Crear un arreglo con datos
let series = [`Breaking bad`, 4, `Peaky blinders`, 5];

//mostar el arreglo
document.write(`<p>`+series`</p>`);
console.log(peliculas);

document.write(`<h3>Mostrar todos los elementos`);
document.write(`<ul>`);
for(let i; i<series.length;i++) {
    document.write(`<li>${series[i]}</li>`);
}
document.write(`</ul>`);

//Agregar un nuevo item al final del arreglo
series.push(`El marginal`);

document.write(`<h3>Agregar un nuevo elemento al final del arreglo</h3>`);
document.write(`<ul>`);
for(let i; i<series.length;i++) {
    document.write(`<li>${series[i]}</li>`);
}
document.write(`</ul>`);

//agregar un nuevo elemento en una posicion particular del arreglo
series.splice(3, 0, `Stranger things`)
document.write(`<h3>Agregar un nuevo elemento en una posicion especifica del arreglo</h3>`);
document.write(`<ul>`);
for(let i; i<series.length;i++) {
    document.write(`<li>${series[i]}</li>`);
}
document.write(`</ul>`);

//eliminar un elemento del arreglo en una posicion particular
series.splice(4,1);//posicion del elemento, cantidad de elementos a borrar
document.write(`<h3>Eliminar un elemento en una posicion especifica del arreglo</h3>`);
document.write(`<ul>`);
for(let i; i<series.length;i++) {
    document.write(`<li>${series[i]}</li>`);
}
document.write(`</ul>`);

//Borrar todos los elementos desde cierta posicion
// series.splice(3);//posicion del elemento, cantidad de elementos a borrar
// document.write(`<h3>Borrar todos los elementos desde cierta posicion</h3>`);
// document.write(`<ul>`);
// for(let i; i<series.length;i++) {
//     document.write(`<li>${series[i]}</li>`);
// }
// document.write(`</ul>`);

//Modificar el valor de un elemento
series[4] = `loki`;
document.write(`<h3>Modificar el valor de un elemento</h3>`);
document.write(`<ul>`);
for(let i; i<series.length;i++) {
    document.write(`<li>${series[i]}</li>`);
}
document.write(`</ul>`);

console.log(series.length);
console.log(series[20]);