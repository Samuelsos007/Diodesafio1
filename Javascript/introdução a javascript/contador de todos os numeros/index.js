let count = 0;

let valor = document.getElementById('currentNumber');

function increment() {
	count++; 
	valor.innerHTML = count;
}

function decrement() {
	count--;
	valor.innerHTML = count;

}
