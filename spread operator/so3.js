function countTheArgs(...args) {
	var sum=0;
	for (let arg of args)
		sum++;
	document.write(""+sum);
}