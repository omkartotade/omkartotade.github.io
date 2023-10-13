var n = 1;
document.getElementById('fun-btn').addEventListener('click', calcFun);
function calcFun() {
	if (n >= 0) {
		document.getElementById('counter').innerHTML = n++;
		if (n === 10) {
			document.getElementById('fun-text').innerHTML = "That's enough for now!";
			n = -1;
			document.getElementById('fun-btn').removeEventListener('click', calcFun);
		}
	}
}