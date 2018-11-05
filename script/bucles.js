// bucle while


//var numero = 14;
//var arr = [1,2,3];

//var res = arr [0] ? arr[0] : numero;
//console.log(res, arr.length);
//var contador = 0;


//while(contador < arr.length){
//    console.log('Bucle while /', contador, arr[contador]);

    // vuestro codigo//
 //
//
    //fin de codigo//
//    contador++;
//}

// do while, cuando necesitas que el codigo se imprima una vez al menos
//var contador = 0;
//do{
//    console.log(contador)
//    contador++

//}while(contador > 1);

/** Bucle for  anidados**/
//var numero = 14;
//var arr= [11, 22, 33];
//for(var i = 0; i < arr.length; i ++){
    //Vuestro codigo para resolver el problema
//}


/*var arr = []
for (var i = 0; i <3; i++){
    arr[i] = i+1;

    arr[i] = [];
   for(var j = 0; j < 3; j++){
        console.log(i, j);
        arr[i][j] = j;
    }
}
//console.log(arr);
//for(var i = 0; i < arr.length; i++){
//    console.log('-------------');
//    var str  = '|';
//    for(var j = 0; j < arr[i].length; j++){
        //console.log(arr[i][j]);
//        str += ' ' + arr[i][j] + ' |';

//    }
//    console.log(str);
//    if( i === arr.length -1){
//        console.log('-------------');
//    }
//}


/* var i = 0;
while(i < arr.length){

    console.log('-------------');

    var str = '|';
    var j = 0;
    while (j < arr[i].length){

        str += ' ' + arr[i][j] + ' |';
        j++;

    }
    console.log(str);
    if(i === arr +1){
        console.log('-------------');
    }

    i++;
} */


/** FOR IN**/ // Objetos

var obj = {
    name: 'Alex',
    job: 'Profgramador'
};

for (var propiedad in obj){
    console.log(propiedad+ ' ' +obj [propiedad]);

}

/** FOR OF **/ // Array

var arr =[11,22,33];

for(var valor of arr){
    console.log(valor)
}
