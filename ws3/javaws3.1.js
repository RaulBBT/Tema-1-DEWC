function tellFortune() {
	var nChild = Math.floor((Math.random()*5)+1);
	var numP = Math.floor((Math.random()*5)+1);
	var nameP = " ";
	switch (numP) {
		case 1:
			nameP="Antonia";
			break;
		case 2:
			nameP="Julia";
			break;
		case 3:
			nameP="Antonio";
			break;
		case 4:
			nameP="Marta";
			break;
		case 5:
			nameP="Maria";
			break;
	}
	var numJ = Math.floor((Math.random()*5)+1);
	var nameJ = " ";
	switch (numJ) {
		case 1:
			nameJ="Electricista";
			break;
		case 2:
			nameJ="Bombero";
			break;
		case 3:
			nameJ="Policia";
			break;
		case 4:
			nameJ="Mamporrero";
			break;
		case 5:
			nameJ="Arquitecto";
			break;
	}
	var numL = Math.floor((Math.random()*5)+1);
	var nameL = " ";
	switch (numL) {
		case 1:
			nameL="Barbate";
			break;
		case 2:
			nameL="Miami";
			break;
		case 3:
			nameL="Murcia";
			break;
		case 4:
			nameL="New York";
			break;
		case 5:
			nameL="Granada";
			break;
	}
	document.write("<p>You will be a "+nameJ+" in "+nameL+", and married to "+nameP+" with "+nChild+" kids.</p>");
}
