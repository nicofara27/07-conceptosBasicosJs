//Funcion sin parametros
function saludar() {
    //Todo el codigo que quiero que tenga la funcion
    document.write(`<p>Hola mundo</p>`);
}

//Funciones con parametros
function saludo(nombre, apellido) {
    document.write(`<p>Hola mi nombre es ${nombre} y mi apellido es ${apellido}`);
}

//Funciones que retornan un valor
// function convertirDolaresAPesos(dolares) {
//     let precioFinal = dolares * 300;
//     return precioFinal;
// }

//Arrow function

let convertirDolaresAPesos = (dolares) => {
    let precioFinal = dolares * 300;
    return precioFinal;
}



//invocar o llamar
saludar();

let nombreUsuario = prompt("Ingrese un nombre");
let apellidoUsuario = prompt("Ingrese un apellido");

saludo(nombreUsuario, apellidoUsuario);

let play5 = convertirDolaresAPesos(700);
console.log(play5);
console.log(convertirDolaresAPesos(800));

document.write(`<p>Ipad pro 12,5" ${convertirDolaresAPesos(650)} sin impuestos</p>`);

