function sprawdz(){

	var liczba = document.getElementById("pole").value;
	/*document.write(liczba);*/

	if (liczba > 0) {
		document.getElementById("wynik").innerHTML = "dodatnia";
	} else if (liczba < 0) {
		document.getElementById("wynik").innerHTML = "ujemna";
	} else {
		document.getElementById("wynik").innerHTML = "zero";
	}
	}