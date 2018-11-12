function greaterNum(){
	var num1 = Math.floor((Math.random()*20)+1);
	var num2 = Math.floor((Math.random()*20)+1);
	if (num1!=num2) {
		if (num1 > num2){
		document.write("<p>The greater number of "+num1+" and "+num2+" is "+num1+"</p>");
		}else{
		document.write("<p>The greater number of "+num2+" and "+num1+" is "+num2+"</p>");
		}
	}else{
		greaterNum();
	}
	
}