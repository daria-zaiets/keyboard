
							// ФУНКЦИИ
let inp = document.querySelector('.inpKey');

function pushDown(event) {
	let symbol = event.keyCode;
	let elem = '.key[data="' + symbol + '"]';
	let key = document.querySelector(elem);
	key.classList.add('active');
}

function release(event) {
	let symbol = event.keyCode;
	let elem = '.key[data="' + symbol + '"]';
	let key = document.querySelector(elem);
	key.classList.remove('active');
}

								// РЕАЛИЗАЦИЯ

inp.onkeydown = (event) => {
	if (event.keyCode == 9) {
		let elem = '.key[data="' + event.keyCode + '"]';
		let key = document.querySelector(elem);
		key.classList.add('active');
		return false;
	} 
	else if (event.keyCode == 91) {
		console.log('shift');
		let elem = '.key[data="' + event.keyCode + '"]';
		let key = document.querySelectorAll(elem);
		for (item of key) {
			item.classList.add('active');
		}
	}
	else if(event.keyCode == 20) {
		let elem = '.key[data="' + event.keyCode + '"]';
		let key = document.querySelector(elem);
		key.classList.toggle('active');
	}
	else pushDown(event);
}

inp.onkeyup = (event) => {
	if(event.keyCode == 9) {
		let elem = '.key[data="' + event.keyCode + '"]';
		let key = document.querySelector(elem);
		key.classList.remove('active');
	}
	else if (event.altKey || event.ctrlKey || event.shiftKey || event.keyCode == 91) {
		let elem = '.key[data="' + event.keyCode + '"]';
		let key = document.querySelectorAll(elem);
		for (item of key) {
			item.classList.remove('active');
		}
	}
	else if (event.keyCode == 20) {
		return false;
	}
	else release(event);
}