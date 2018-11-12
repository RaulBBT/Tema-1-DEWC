function suma(...args){
	let sum = 0;
	for (let arg of args) 
		sum += arg;
	document.write(""+sum);
}