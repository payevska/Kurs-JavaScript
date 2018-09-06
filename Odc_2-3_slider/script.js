var number = Math.floor(Math.random()*5) + 1;

function schowaj() {
	$("#slider").fadeOut(500);
}

function zmienslajd() {
	number++;
	if (number > 5) number = 1;
	var plik = "<img src=\"images/im" + number + ".png\">";

	document.getElementById("slider").innerHTML = plik;
	$("#slider").fadeIn(500);
	setTimeout("zmienslajd()",5000);
	setTimeout("schowaj()",4500);
	
};