

//function suma(a,b) {
   //console.log(a+b);
//}
/*-function cuadrado (number){
    //console.log(number*number);

    return number*number;
}


console.log(cuadrado(5));

var res = cuadrado(10);
console.log(res);

var suma = function (a,b) {
    console.log('argumentos', arguments(2))
    return a+b;
};
suma(2,5,100); */

/*function concat(separator) {
    var result = "";
    console.log(arguments);
    for (i = 1; i < arguments.length; i++){
    result += arguments[i] + separator;
    }

    return  result;
};

var res = concat(' | ', 1,4,7);
console.log(res);*/

// Funciones con JavaScript

//var input = prompt("Introduzca una operacion");
/*var inputCodificado = escape(input);
alert("Cadena Codificada: " + inputCodificado);*/

//var resultado = eval(input);
//alert(resultado);

/*console.log(isFinite(0), isFinite(-1), isFinite(1234151451));
console.log(isFinite(Infinity), isFinite(-Infinity));
console.log(isFinite(1e308), isFinite(1e309), isFinite());*/


// Is not a number = isNaN
/*console.log(isNaN(123));
console.log(isNaN(1.23));
console.log(isNaN('abc'));
console.log(isNaN(NaN));*/

/*var a = true;
var b = false;
var c = new Date();
var d = "999";
var e = '999 999' ;
var f = function(){return 0};*/

/*console.log(Number(a))
console.log(Number(b))
console.log(Number(c))
console.log(Number(d))
console.log(Number(e))
console.log(Number(f()))
console.log(Boolean(f()))
console.log(String(f()))
console.log(String(c))
console.log(String(f))*/

/*var str = '1.23';
console.log(parseInt(str )); // Entero -> 1
console.log(parseFloat(str)); // Coma flotante -> 1.23*/

// Transformacion de string

/*var url = "http://localhost/mi pagina.html";
var enc = encodeURI(url); //
var dec = decodeURI(enc); //
console.log(url, enc, dec);*/

/*var num = 1.49;
console.log(Math.round(num), Math.round(1.51));// el mas cercano
console.log(Math.ceil(num));// el siguiente numero
console.log(Math.floor(num));// el numero anterior entero*/

/*
Una funcion que lance un prompt y pida un numero decimal
tiene que transformarla el numero a un flotante
tenemos que redondeando al mas cercano al alza
devolver el valor
 */




function f(res) {
    var input = prompt("Introduzca un numero decimal");
   input = parseFloat(input);
   input = Math.ceil(input);
    return input;
}
var res = f();
console.log(res);