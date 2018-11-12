document.write("<table border = '0' cellspacing = '2' bgcolor = 'black'>");
var anchura=prompt("Introduce la anchura");
var par =0;
for (i=1; i<=8; i++){
	document.write("<tr bgcolor = 'white' width= '"+anchura+"' height = '"+anchura+"'>");
	for (j=1; j<=8; j++){
		if (par%2==0){
			document.write("<td bgcolor= 'black' width= '"+anchura+"' height = '"+anchura+"'> &nbsp;</td>");
		}else{
			document.write("<td bgcolor= 'white' width= '"+anchura+"' height = '"+anchura+"'> &nbsp;</td>");
		}
		par++;
	}
	document.write("</tr>");
	par++;
}
document.write("</table>");