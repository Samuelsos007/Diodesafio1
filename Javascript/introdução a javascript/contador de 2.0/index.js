let count = 0;

let valor = document.getElementById('currentNumber');

function increment() {
	count++; 
    if(count >10){
        valor.style.color='blue'
    }else{
        valor.style.color = 'black'
    }
	valor.innerHTML = count;
    
}

function decrement() {
    count--;  
    if(count <=0){
        valor.style.color='red'
    }else{
        valor.style.color = 'black'
    }
	valor.innerHTML = count;

}
