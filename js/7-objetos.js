//crear un objeco con notacion literal

let celular = {
    //propiedades
    marca: "xiaomi",
    SO: "android",
    version: 11,
    color: ["plateado", "negro", "celeste metalizado"],
    bateria: {
        cargaRapida: true,
        amperes: "3500mah"
    },
    ram: ["4Gb", "6Gb", "8Gb", "16Gb"],
    //metodos
    sacarFotos: () => {document.write("<p>Preparando camara</p>")},
    llamar: function() {document.write("<p>Llamando a una persona...</p>")}
}

//mostrar un objeto

console.log(celular);

document.write(`<p>Marca: ${celular.marca}</p>`);
document.write(`<p>Marca: ${celular.version}</p>`);


//modificar una propiedad existente en el objeto

celular.version = 12;
document.write(`<p>Marca: ${celular.version}</p>`);

//invocar un metodo

celular.sacarFotos();