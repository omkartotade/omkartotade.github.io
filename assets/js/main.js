var n = 1;
var btn = document.getElementById('fun-btn');
btn.addEventListener('click', calcFun);
function calcFun() {
	if (n >= 0) {
		document.getElementById('counter').innerHTML = n++;
		document.getElementById('container').style.transform = "translate("+ randomInt() +"%, " + randomInt() + "%)";
		if (n === 12) {
			document.getElementById('fun-text').innerHTML = "That's enough for now!";
			n = -1;
			btn.removeEventListener('click', calcFun);
		}
	}
}

function randomInt() {
	const max = 25;
	const min = -25;
	return Math.floor(Math.random() * (max - min + 1)) + min;
}