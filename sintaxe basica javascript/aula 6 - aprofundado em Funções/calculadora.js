function calculadora(){
    const op = prompt('Escolha uma operação:\n 1 - Soma(+)\n 2 - Subtração (-)\n 3 - multiplicação\n 4- Divisão real(/)\n 5 - Divisão inteira(%)\n 6 - Potenciação(**)')
    console.log(op)

    let n1 = prompt('Digite um valor: ')
    let n2 = prompt('Digite outro valor: ')
    let resultado;

    function soma(){
        resultado = n1 + n2
        alert(`$(n1) + $(n2) = $(resultado)`)
    }
if (op == 1){
    soma();
}else if (op == 2){
    subtracao();
}else if (op == 3){
    mulplicacao();
}else if (op == 4){
    divisaoReal();
}else if (op == 5){
    divisaointeira();
}else if (op == 6){
    potenciacao();
}
}
calculadora();