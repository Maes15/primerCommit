//var mivar =10;
//var res = (mivar += 1, mivar += 2, mivar);

//console.log(res);

//console.log(typeof (1), typeof 1);
//console.log(typeof (false),typeof '');

//console.log(typeof ({}), typeof []);
//console.log(typeof (undefined),typeof null);
//function miFuncion () {}
//class miClase {};

//var instanciaFuncion = new miFuncion();
//console.log(typeof (miClase),typeof miFuncion, instanciaFuncion);
//console.log('instanceof -->', instanciaFuncion instanceof miClase);


var a = 'a';
var miArr = [1,2,3];
var miObje = {
    a: 'a',
    b: 'b'
}
console.log('a' in miObje);
delete a;
delete miArr[1];
delete miObje.a;

console.log(a);
console.log(miArr);
console.log(miObje);

console.log('a' in miObje);