function testar(){
let n1 = document.getElementById('txt1')
let n2 = document.getElementById('txt2')
let res = document.getElementById('res')
let num1 = Number(n1.value)
let num2 = Number(n2.value)

    if(num1 == num2){
        res.innerHTML = `${num1} é igual a ${num2}\n`;
    }else{
        res.innerHTML = `${num1} é diferente de ${num2}\n`;   
    }
    let n3 = num1 + num2
    if(n3 > 10){
     res.innerHTML += `,${num1} + ${num2} = ${n3}, ${n3} é maior que 10,\n`
    }else if (n3 == 10){
        res.innerHTML += `,${num1} + ${num2} = ${n3}, ${n3} é igual 10,\n`
    }else{
        res.innerHTML += `,${num1} + ${num2} = ${n3}, ${n3} é menor que 10,\n`
    }if(n3 <20){
        res.innerHTML += `,${num1} + ${num2} = ${n3}, ${n3} é menor que 20,\n`
    }else if(n3 >20){
        res.innerHTML += `,${num1} + ${num2} = ${n3}, ${n3} é maior que 20,\n`
    }else(n3 == 20);{
        res.innerHTML += `,${num1} + ${num2} = ${n3}, ${n3} é igual a 20,\n`
    }
}
