/*var miArray = [];
var miArray2 = ['Adios', '!'];
var miArray3 = [1,2,3]
miArray.push(2);

miArray.push('Hola');// añade

var resConcat = miArray.concat(miArray2); // juntar dos arrays
var resJoin = miArray3.join(' | '); // juntar dos arrays en formato de string
miArray3.reverse();

var resUnshift = miArray3.unshift(4);//añade el primero
console.log(miArray3);
miArray3.shift();// borra primero
miArray3.pop(;)// quita el ultimo
console.log(miArray3)*/

/*var arr = [11,22,33,44,55,66,77,88,99];
var primerostres = arr.slice(0,3); // coge de un indece a otro y te lo devuelve como resultado
console.log(primerostres);*/

/* var pelicula = ["Superman", , "Superman 3"];
pelicula.splice(1,0, "Superman 2"); //añade en una array
console.log(pelicula); */

/*var arr = [1,2,3];
var barra = ' | '
arr.forEach(function(num, index, array) {
    var resJoin = arr.join(' | ');
    console.log('-------------');
    console.log(barra + resJoin + barra);
    if( index === arr.length -1){
        console.log('-------------');
    }
})

// foreach + join crear un tablero*/

// .short()
/*var nombres = ['Ivan', 'Fran', 'Belen', 'Miguel'];
nombres.sort(); // devuelve las array ordenado alfa
console.log(nombres);

var numeros = [1,55,3,33,99];
numeros.sort(function (a, b) {
    return b-a; //lo ordena de mayor a menor dependiendo del valor que pongas primero
});
console.log(numeros);*/

var tablero = [
    {col:0 , row:0 }, {col:0 , row:1 }, {col:0 , row:2 },
    {col:1 , row:0 }, {col:1 , row:1 }, {col:1 , row:2 },
    {col:2 , row:0 }, {col:2 , row:1 }, {col:2 , row:2 }
];

tablero.sort(function (a,b) {
   return a.row - b.row || b.col - a.col;
});

console.log(tablero);