let count = 0;

let valor = document.getElementById('currentNumber');

function increment() {
    if(count >=10){
        count = 10;
    }else{
	count++;
    }
	valor.innerHTML = count;
}

function decrement() {
    if(count <=0){
        count = 0
    }else{
	count--;
    }
	valor.innerHTML = count;

}
