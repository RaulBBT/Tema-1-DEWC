function sumEveryOther(...args){
	var sum=0;
	var i=0;
	for (let arg of args){
		if (i%2==0){
			sum=sum+arg;
		}
		i++;
	}
	document.write(""+sum);
}