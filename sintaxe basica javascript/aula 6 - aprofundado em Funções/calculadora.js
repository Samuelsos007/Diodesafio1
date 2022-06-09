function calculadora(){
    const op = Number(prompt('Escolha uma operação:\n 1 - Soma(+)\n 2 - Subtração (-)\n 3 - multiplicação\n 4- Divisão real(/)\n 5 - Divisão inteira(%)\n 6 - Potenciação(**)'))
    if(!op || op >= 7){
        alert('[ERRO] operação inválida!')
        calculadora();
    }else{

    let n1 = Number(prompt('Digite um valor: '))
    let n2 = Number(prompt('Digite outro valor: '))
    let resultado;

    if(!n1 || !n2){
        alert('[ERRO]Parâmetros inválidos')
        calculadora();
    }else {
    function soma(){
        resultado = n1 + n2
        alert(`A soma de ${n1} + ${n2} = ${resultado}`);
        novaop();
    }
    function subtracao(){
        resultado = n1 - n2
        alert(`A soma de ${n1} - ${n2} = ${resultado}`);
        novaop();
    }
    function mulplicacao(){
        resultado = n1 * n2
        alert(`A soma de ${n1} * ${n2} = ${resultado}`);
        novaop();
    }
    function divisaoReal(){
        resultado = n1 / n2
        alert(`A soma de ${n1} / ${n2} = ${resultado}`);
        novaop();
    }
    function divisaointeira(){
        resultado = n1 % n2
        alert(`A soma de ${n1} % ${n2} = ${resultado}`);
        novaop();
    }
    function potenciacao(){
        resultado = n1 ** n2
        alert(`A soma de ${n1} ** ${n2} = ${resultado}`);
        novaop();
    }
    function novaop(){
        let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');
        if(op == 1){
            calculadora();
        }else if (opcao == 2)
        {
            alert('Até mais')
        }else{
            alert('Digite uma opção válida')
            novaop
        }
    }
    }
   /* if (op == 1){
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
    }*/
    switch (op){
        case 1:
            soma();
        break;
        case 2:
            subtracao();
        break;
        case 3:
            mulplicacao();
        break;
        case 4:
            divisaoReal();
        break;
        case 5:
            divisaointeira();
        break;
        case 6:
            potenciacao();
        break
}
}
}
calculadora();