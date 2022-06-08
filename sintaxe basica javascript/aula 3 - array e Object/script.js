// o que são vetors ou arrays

//como declarar um array
/*let array =['string',1,true];
console.log(array)*/

// pode guardar vários tipos de dados
let array = ['string', 1, true,['array 1'],['array 2'],['array 3'],['array 4']]
/*console.log(array[3])*/
// forEach
/*array.forEach(function(item, index){console.log(item , index)});*/
//mostra o indice dos arrays
/*array.push('novo item')
console.log(array)*/
//adiciona um item no array
/*array.pop();
console.log(array);*/
//tira o ultimo item do array
/*array.shift();
console.log(array);*/
//tira o primeiro item do array
/*array.unshift('novo item');
console.log(array);*/
//adiciona um item no inicio do array
/*console.log(array.indexOf(true))*/
//Mostra o valor de um array
/*array.splice(0,3);
console.log(array);*/
//Apaga os arrays selecionados
/*let novoarray = array.slice(0, 3)
console.log(novoarray)*/
//Pega a parte selecionada de array
let object = {
    string: 'string', number: 1, boolean: true, array:["array"], objectInterno: { objetoInterno: 'objeto Interno' }
}
/*console.log(object.boolean)
desestruturação de strings
var string = object.string;
console.log(string)

var arrayinterno = object.array;
console.log(arrayinterno)
*/
var { string,boolean,objectInterno} = object;
console.log(string, boolean, objectInterno)