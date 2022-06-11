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