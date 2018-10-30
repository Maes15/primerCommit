//alert('Funciona!');

//document.querySelector('title');

//console.log();

var h1 = document.createElement('h1');
h1.appendChild(document.createTextNode('Pruebas desde consola'));
console.log(h1);

document.body.appendChild(h1);


// BOM

var miVentata = window.open('','', 'width=200, height=200');
miVentata.document.write('Hola Mundo'); // Para poner texto en la ventana emergente.
miVentata.moveBy(250,350); // Para situar la ventana emergente donde se quiera.
miVentata.focus(); // Para focalizar la atencion en la ventana emergente.