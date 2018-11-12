function onlyUniques(...args){
	var array=[];
	for (var i=0; i<args.length; i++){
		if (!array.includes(args[i])){
			array.push(args[i]);
		}
	}
	for (x=0;x<array.length;x++)
	{
		document.write(array[x]);
	}
}