function sub1(array1){
    if(!array1) return -1;
    if(!array1.length) return -1;
    for(let i = 0; i < array1.length; i++){
        if(array1[i] === 0){
            console.log("Você já é zero!");
        }else if(array1[i] % 2 === 0){
            console.log(`Substituindo ${array1[i]} por 0...`)
            array1[i] = 0;
        }
    }
    return array1;
}
let arr = [1, 3, 4, 5, 80, 33, 76, 65 ,32]
console.log(sub1(arr));
//solução 2
function sub(array){
    if (!array.length) return console.log(-1);
    const naozero = (num) => num !== 0;
    const numpar = (num) => num % 2 === 0;
    for(let i = 0; i < array.length; i++)
    if(numpar(array[i]) && naozero(array[i])){
        console.log(`trocando ${array[i]} por 0...`);
        array[i] = 0;
    }else if(!naozero(array[i])){
        console.log('Ops, você já vale 0')
    }
    console.log(array);
}
sub([2,0,3,5])