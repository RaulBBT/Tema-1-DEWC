function calculateAge() {
	var bYear = Math.floor((Math.random()*40)+1970);
	var fecha=new Date();
	var currentYear = parseInt(fecha.getFullYear());
	var edad1=currentYear-bYear;
	var edad2=edad1-1;
	document.write("<p>Your birth year is: "+bYear+", You are either "+edad1+" or "+edad2+"</p>");
}