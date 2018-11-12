var num_adivinar = prompt("Jugador 1, introduce un número para que el jugador 2 lo adivine.");
var acierto = false;
var num;
while(acierto==false){
	num = prompt("Introduce el numero que crees que es");
	if (num==num_adivinar){
		acierto=true;
		document.write("Enhorabuena, has acertado!!");
	}else{
		if (num>num_adivinar){
			alert("El numero que buscas es menor que el introducido, prueba otra vez:");
		}else{
			alert("El numero que buscas es mayor que el introducido, prueba otra vez:");
		}
	}
}