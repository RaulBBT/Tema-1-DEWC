function addOnlyNums(...args) {
	let sum = 0;
	for (let arg of args) {
		if (0<=arg && 10000>=arg){
			sum += arg;
		}
	}
	document.write(""+sum);
}