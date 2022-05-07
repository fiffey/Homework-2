// Function called whenever user tab on any box
function iksoks() {

	var polje1, polje2, polje3, polje4, polje5, polje6, polje7, polje8, polje9;
	polje1 = document.getElementById("polje1").value;
	polje2 = document.getElementById("polje2").value;
	polje3 = document.getElementById("polje3").value;
	polje4 = document.getElementById("polje4").value;
	polje5 = document.getElementById("polje5").value;
	polje6 = document.getElementById("polje6").value;
	polje7 = document.getElementById("polje7").value;
	polje8 = document.getElementById("polje8").value;
	polje9 = document.getElementById("polje9").value;


	if ((polje1 == 'x' || polje1 == 'X') && (polje2 == 'x' ||
		polje2 == 'X') && (polje3 == 'x' || polje3 == 'X')) {
		document.getElementById('result')
			.innerHTML = "Igrač X je pobijedio!";
		document.getElementById("polje4").disabled = true;
		document.getElementById("polje5").disabled = true;
		document.getElementById("polje6").disabled = true;
		document.getElementById("polje7").disabled = true;
		document.getElementById("polje8").disabled = true;
		document.getElementById("polje9").disabled = true;
		window.alert('Igrač X je pobijedio!');
	}
	else if ((polje1 == 'x' || polje1 == 'X') && (polje4 == 'x' ||
		polje4 == 'X') && (polje7 == 'x' || polje7 == 'X')) {
		document.getElementById('result')
			.innerHTML = "Igrač X je pobijedio!";
		document.getElementById("polje2").disabled = true;
		document.getElementById("polje3").disabled = true;
		document.getElementById("polje5").disabled = true;
		document.getElementById("polje6").disabled = true;
		document.getElementById("polje8").disabled = true;
		document.getElementById("polje9").disabled = true;

		window.alert('Igrač X je pobijedio!');
	}
	else if ((polje7 == 'x' || polje7 == 'X') && (polje8 == 'x' ||
		polje8 == 'X') && (polje9 == 'x' || polje9 == 'X')) {
		document.getElementById('result')
			.innerHTML = "Igrač X je pobijedio!";
		document.getElementById("polje1").disabled = true;
		document.getElementById("polje2").disabled = true;
		document.getElementById("polje3").disabled = true;
		document.getElementById("polje4").disabled = true;
		document.getElementById("polje5").disabled = true;
		document.getElementById("polje6").disabled = true;
		window.alert('Igrač X je pobijedio!');
	}
	else if ((polje3 == 'x' || polje3 == 'X') && (polje6 == 'x' ||
		polje6 == 'X') && (polje9 == 'x' || polje9 == 'X')) {
		document.getElementById('result')
			.innerHTML = "Igrač X je pobijedio!";
		document.getElementById("polje1").disabled = true;
		document.getElementById("polje2").disabled = true;
		document.getElementById("polje4").disabled = true;
		document.getElementById("polje5").disabled = true;
		document.getElementById("polje7").disabled = true;
		document.getElementById("polje8").disabled = true;
		window.alert('Igrač X je pobijedio!');
	}
	else if ((polje1 == 'x' || polje1 == 'X') && (polje5 == 'x' ||
		polje5 == 'X') && (polje9 == 'x' || polje9 == 'X')) {
		document.getElementById('result')
			.innerHTML = "Igrač X je pobijedio!";
		document.getElementById("polje2").disabled = true;
		document.getElementById("polje3").disabled = true;
		document.getElementById("polje4").disabled = true;
		document.getElementById("polje6").disabled = true;
		document.getElementById("polje7").disabled = true;
		document.getElementById("polje8").disabled = true;
		window.alert('Igrač X je pobijedio!');
	}
	else if ((polje3 == 'x' || polje3 == 'X') && (polje5 == 'x' ||
		polje5 == 'X') && (polje7 == 'x' || polje7 == 'X')) {
		document.getElementById('result')
			.innerHTML = "Igrač X je pobijedio!";
		document.getElementById("polje1").disabled = true;
		document.getElementById("polje2").disabled = true;
		document.getElementById("polje4").disabled = true;
		document.getElementById("polje6").disabled = true;
		document.getElementById("polje8").disabled = true;
		document.getElementById("polje9").disabled = true;
		window.alert('Igrač X je pobijedio!');
	}
	else if ((polje2 == 'x' || polje2 == 'X') && (polje5 == 'x' ||
		polje5 == 'X') && (polje8 == 'x' || polje8 == 'X')) {
		document.getElementById('result')
			.innerHTML = "Igrač X je pobijedio!";
		document.getElementById("polje1").disabled = true;
		document.getElementById("polje3").disabled = true;
		document.getElementById("polje4").disabled = true;
		document.getElementById("polje6").disabled = true;
		document.getElementById("polje7").disabled = true;
		document.getElementById("polje9").disabled = true;
		window.alert('Igrač X je pobijedio!');
	}
	else if ((polje4 == 'x' || polje4 == 'X') && (polje5 == 'x' ||
		polje5 == 'X') && (polje6 == 'x' || polje6 == 'X')) {
		document.getElementById('result')
			.innerHTML = "Igrač X je pobijedio!";
		document.getElementById("polje1").disabled = true;
		document.getElementById("polje2").disabled = true;
		document.getElementById("polje3").disabled = true;
		document.getElementById("polje7").disabled = true;
		document.getElementById("polje8").disabled = true;
		document.getElementById("polje9").disabled = true;
		window.alert('Igrač X je pobijedio!');
	}

	else if ((polje1 == '0' || polje1 == '0') && (polje2 == '0' ||
		polje2 == '0') && (polje3 == '0' || polje3 == '0')) {
		document.getElementById('result')
			.innerHTML = "Igrač 0 je pobijedio!";
		document.getElementById("polje4").disabled = true;
		document.getElementById("polje5").disabled = true;
		document.getElementById("polje6").disabled = true;
		document.getElementById("polje7").disabled = true;
		document.getElementById("polje8").disabled = true;
		document.getElementById("polje9").disabled = true;
		window.alert('Igrač 0 je pobijedio!');
	}
	else if ((polje1 == '0' || polje1 == '0') && (polje4 == '0' ||
		polje4 == '0') && (polje7 == '0' || polje7 == '0')) {
		document.getElementById('result')
			.innerHTML = "Igrač 0 je pobijedio!";
		document.getElementById("polje2").disabled = true;
		document.getElementById("polje3").disabled = true;
		document.getElementById("polje5").disabled = true;
		document.getElementById("polje6").disabled = true;
		document.getElementById("polje8").disabled = true;
		document.getElementById("polje9").disabled = true;
		window.alert('Igrač 0 je pobijedio!');
	}
	else if ((polje7 == '0' || polje7 == '0') && (polje8 == '0' ||
		polje8 == '0') && (polje9 == '0' || polje9 == '0')) {
		document.getElementById('result')
			.innerHTML = "Igrač 0 je pobijedio!";
		document.getElementById("polje1").disabled = true;
		document.getElementById("polje2").disabled = true;
		document.getElementById("polje3").disabled = true;
		document.getElementById("polje4").disabled = true;
		document.getElementById("polje5").disabled = true;
		document.getElementById("polje6").disabled = true;
		window.alert('Igrač 0 je pobijedio!');
	}
	else if ((polje3 == '0' || polje3 == '0') && (polje6 == '0' ||
		polje6 == '0') && (polje9 == '0' || polje9 == '0')) {
		document.getElementById('result')
			.innerHTML = "Igrač 0 je pobijedio!";
		document.getElementById("polje1").disabled = true;
		document.getElementById("polje2").disabled = true;
		document.getElementById("polje4").disabled = true;
		document.getElementById("polje5").disabled = true;
		document.getElementById("polje7").disabled = true;
		document.getElementById("polje8").disabled = true;
		window.alert('Igrač 0 je pobijedio!');
	}
	else if ((polje1 == '0' || polje1 == '0') && (polje5 == '0' ||
		polje5 == '0') && (polje9 == '0' || polje9 == '0')) {
		document.getElementById('result')
			.innerHTML = "Igrač 0 je pobijedio!";
		document.getElementById("polje2").disabled = true;
		document.getElementById("polje3").disabled = true;
		document.getElementById("polje4").disabled = true;
		document.getElementById("polje6").disabled = true;
		document.getElementById("polje7").disabled = true;
		document.getElementById("polje8").disabled = true;
		window.alert('Igrač 0 je pobijedio!');
	}
	else if ((polje3 == '0' || polje3 == '0') && (polje5 == '0' ||
		polje5 == '0') && (polje7 == '0' || polje7 == '0')) {
		document.getElementById('result')
			.innerHTML = "Igrač 0 je pobijedio!";
		document.getElementById("polje1").disabled = true;
		document.getElementById("polje2").disabled = true;
		document.getElementById("polje4").disabled = true;
		document.getElementById("polje6").disabled = true;
		document.getElementById("polje8").disabled = true;
		document.getElementById("polje9").disabled = true;
		window.alert('Igrač 0 je pobijedio!');
	}
	else if ((polje2 == '0' || polje2 == '0') && (polje5 == '0' ||
		polje5 == '0') && (polje8 == '0' || polje8 == '0')) {
		document.getElementById('result')
			.innerHTML = "Igrač 0 je pobijedio!";
		document.getElementById("polje1").disabled = true;
		document.getElementById("polje3").disabled = true;
		document.getElementById("polje4").disabled = true;
		document.getElementById("polje6").disabled = true;
		document.getElementById("polje7").disabled = true;
		document.getElementById("polje9").disabled = true;
		window.alert('Igrač 0 je pobijedio!');
	}
	else if ((polje4 == '0' || polje4 == '0') && (polje5 == '0' ||
		polje5 == '0') && (polje6 == '0' || polje6 == '0')) {
		document.getElementById('result')
			.innerHTML = "Igrač 0 je pobijedio!";
		document.getElementById("polje1").disabled = true;
		document.getElementById("polje2").disabled = true;
		document.getElementById("polje3").disabled = true;
		document.getElementById("polje7").disabled = true;
		document.getElementById("polje8").disabled = true;
		document.getElementById("polje9").disabled = true;
		window.alert('Igrač 0 je pobijedio!');
	}

	else if ((polje1 == 'X' || polje1 == '0') && (polje2 == 'X'
		|| polje2 == '0') && (polje3 == 'X' || polje3 == '0') &&
		(polje4 == 'X' || polje4 == '0') && (polje5 == 'X' ||
		polje5 == '0') && (polje6 == 'X' || polje6 == '0') &&
		(polje7 == 'X' || polje7 == '0') && (polje8 == 'X' ||
		polje8 == '0') && (polje9 == 'X' || polje9 == '0')) {
			document.getElementById('result')
				.innerHTML = "Neriješeno!";
			window.alert('Neriješeno!');
	}
	else {

		// Here, resulting Result
		if (igrac == 1) {
			document.getElementById('result')
				.innerHTML = "Igrač X je na redu";
		}
		else {
			document.getElementById('result')
				.innerHTML = "Igrač 0 je na redu";
		}
	}
}

function restart() {
	location.reload();
	document.getElementById('polje1').value = '';
	document.getElementById("polje2").value = '';
	document.getElementById("polje3").value = '';
	document.getElementById("polje4").value = '';
	document.getElementById("polje5").value = '';
	document.getElementById("polje6").value = '';
	document.getElementById("polje7").value = '';
	document.getElementById("polje8").value = '';
	document.getElementById("polje9").value = '';

}


igrac = 1;
function prvoPolje() {
	if (igrac == 1) {
		document.getElementById("polje1").value = "X";
		document.getElementById("polje1").disabled = true;
		igrac = 0;
	}
	else {
		document.getElementById("polje1").value = "0";
		document.getElementById("polje1").disabled = true;
		igrac = 1;
	}
}

function drugoPolje() {
	if (igrac == 1) {
		document.getElementById("polje2").value = "X";
		document.getElementById("polje2").disabled = true;
		igrac = 0;
	}
	else {
		document.getElementById("polje2").value = "0";
		document.getElementById("polje2").disabled = true;
		igrac = 1;
	}
}

function trecePolje() {
	if (igrac == 1) {
		document.getElementById("polje3").value = "X";
		document.getElementById("polje3").disabled = true;
		igrac = 0;
	}
	else {
		document.getElementById("polje3").value = "0";
		document.getElementById("polje3").disabled = true;
		igrac = 1;
	}
}

function cetvrtoPolje() {
	if (igrac == 1) {
		document.getElementById("polje4").value = "X";
		document.getElementById("polje4").disabled = true;
		igrac = 0;
	}
	else {
		document.getElementById("polje4").value = "0";
		document.getElementById("polje4").disabled = true;
		igrac = 1;
	}
}

function petoPolje() {
	if (igrac == 1) {
		document.getElementById("polje5").value = "X";
		document.getElementById("polje5").disabled = true;
		igrac = 0;
	}
	else {
		document.getElementById("polje5").value = "0";
		document.getElementById("polje5").disabled = true;
		igrac = 1;
	}
}

function sestoPolje() {
	if (igrac == 1) {
		document.getElementById("polje6").value = "X";
		document.getElementById("polje6").disabled = true;
		igrac = 0;
	}
	else {
		document.getElementById("polje6").value = "0";
		document.getElementById("polje6").disabled = true;
		igrac = 1;
	}
}

function sedmoPolje() {
	if (igrac == 1) {
		document.getElementById("polje7").value = "X";
		document.getElementById("polje7").disabled = true;
		igrac = 0;
	}
	else {
		document.getElementById("polje7").value = "0";
		document.getElementById("polje7").disabled = true;
		igrac = 1;
	}
}

function osmoPolje() {
	if (igrac == 1) {
		document.getElementById("polje8").value = "X";
		document.getElementById("polje8").disabled = true;
		igrac = 0;
	}
	else {
		document.getElementById("polje8").value = "0";
		document.getElementById("polje8").disabled = true;
		igrac = 1;
	}
}

function devetoPolje() {
	if (igrac == 1) {
		document.getElementById("polje9").value = "X";
		document.getElementById("polje9").disabled = true;
		igrac = 0;
	}
	else {
		document.getElementById("polje9").value = "0";
		document.getElementById("polje9").disabled = true;
		igrac = 1;
	}
}
