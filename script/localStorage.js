

//window.sessionStorage.setItem('twitter', '@asdf');
//localStorage.setItem('linkedin', 'Alex@maestre')


//var linkedin = localStorage.getItem('linkedin')
//console.log(linkedin);


var miObjetoJson = '{"name": "Alex", "Job": 1}';
//console.log({name: 'Alex', job: '1'});

localStorage.setItem('persona', miObjetoJson);

var obj ={
    'a': 'a',
    b: 'b'
};
console.log(obj, JSON.stringify(obj));
console.log(JSON.parse(miObjetoJson), miObjetoJson);
// Se utiliza para pasar el objeto de javascript a json
// setItem --> para introducir el objeto en localSteorage
// o en sessionStorage.


localStorage.removeItem('prueba');
// Para borrar el item(prueba) del navegador.
localStorage.clear();
// borratodo lo que esta dentro de localstorage.