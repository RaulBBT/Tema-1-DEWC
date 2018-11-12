function helloWorld(){
	for (var i=1; i<=3; i++){
		var idioma = i;
		switch (idioma) {
			case 1:
				idioma="es";
				break;
			case 2:
				idioma="eus";
				break;
			case 3:
				idioma="al";
				break;
		}
		switch (idioma) {
			case "es":
				document.write("<p>Hola Mundo</p>");
				break;
			case "eus":
				document.write("<p>Kaixo mundua</p>");
				break;
			case "al":
				document.write("<p>Hallo Welt</p>");
				break;
		}
	}
	document.write("<p>Hello World</p>");
	
}