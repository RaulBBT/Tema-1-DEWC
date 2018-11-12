document.write("<table border = '0' cellspacing = '2' bgcolor = 'black' width = '200'>");
var nCol=prompt("Introduce el numero de columnas");
var altura=prompt("Introduce la altura");
var anchura=prompt("Introduce la anchura");
document.write("<tr bgcolor = 'white' height = '"+altura+"'>");
var i=1;
while(i<=nCol){
	document.write("<td width = '"+anchura+"'> &nbsp;</td>");
	i++;
}
document.write("</tr>");
document.write("</table>");