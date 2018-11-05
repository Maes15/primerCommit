
// undefined -->
// Numeros --> true (excepto el 0)
// String --> true (Excepto si estan vacias)
// Objetos --> true
// Array --> true
// null --> false
// Funciones--> 


var resultado = 100;

switch (resultado) {
    case 'Hola':
        console.log (resultado);
        break;
    case 100:
        console.log(typeof resultado);
        break;
    default:
        console.log('default');
}

//var x = resultado ? 'Verdadero' : 'Falso';
//console.log(x)




// si es menor que 10
// si es mayor que 10 y menor que 25 incluido
// si es mayor que 25 pero menor que 100 incluido
// el resto de casos


//if (10 > resultado){
//    console.log('Es menor que 10');
//} else if (25 >= resultado){
//    console.log('Esta entre 10 y 25');
//} else if (100 >= resultado){
//    console.log('Esta entre 25 y 50');
//} else{
//    console.log('Superiores que 100');
//}










//if (10 <= resultado  || 5 === resultado ){
//    console.log('Ha entrado en if');
//}
//else if (5 < resultado){
//    console.log('Es menor que 5')
//} ;

//if(15 === resultado){
//    console.log('Resultado es 15')
//};
//else  {
//    console.log('No ha entrado en if')
//}

