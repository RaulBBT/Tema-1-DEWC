document.write("<table border = '0' cellspacing = '2' bgcolor = 'black' width = '200'>");
var nCol=prompt("Introduce el numero de columnas");
var nFil=prompt("Introduce el numero de filas");
var altura=prompt("Introduce la altura");
var anchura=prompt("Introduce la anchura");
for (i=1; i<=nFil; i++){
	document.write("<tr bgcolor = 'white' height = '"+altura+"'>");
	for (j=1; j<=nCol; j++){
		document.write("<td width = '"+anchura+"'> &nbsp;</td>");
	}
	document.write("</tr>");
}
document.write("</table>");