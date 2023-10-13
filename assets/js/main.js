var n = 1;
function buttonClick() {
	if (n >= 0) {
		document.getElementById('counter').innerHTML = n++;
		if (n === 10) {
			document.getElementById('fun-text').innerHTML = "That's enough for now!";
			n = -1;
		}
	}
}