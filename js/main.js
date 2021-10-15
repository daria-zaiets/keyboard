/**
 *  @param {NodeList} inp - element input 
 */
let inp = document.querySelector('.inp-key');

/**
 * adds styles to the key
 * 
 * @param {Number} symbol - key pressed code
 * @param {String} elem - element selector string
 * @param {NodeList} key - element-key with selector @elem
 */
function pushDown(event) {
	let symbol = event.keyCode;
	let elem = '.key[data="' + symbol + '"]';
	let key = document.querySelector(elem);
	key.classList.add('active');
}

/**
 * removes styles from a key
 * 
 * @param {Number} symbol - key pressed code
 * @param {String} elem - element selector string
 * @param {NodeList} key - element-key with selector @elem
 */
function release(event) {
	let symbol = event.keyCode;
	let elem = '.key[data="' + symbol + '"]';
	let key = document.querySelector(elem);
	key.classList.remove('active');
}


/**
 * adds styles to the pressed key
 * for CapsLock add and remove on click
 * 
 * @param {String} elem - element selector string
 * @param {NodeList} key - element-key with selector @elem
 */
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

/**
 * removes styles from released keys
 * do nothing for CapsLock
 * 
 * @param {String} elem - element selector string
 * @param {NodeList} key - element-key with selector @elem
 */
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