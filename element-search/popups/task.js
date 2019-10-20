'use strict';

let elementModalMain = document.getElementById('modal_main');
elementModalMain.className += ' modal_active';

let elementClose = document.querySelectorAll('div.modal__close');
for(let i = 0; i < elementClose.length; i++) {
	elementClose[i].onclick = () => moduleClose();
}

let elementModalSuccess = document.querySelector('#modal_success');
let elementShowSuccess = document.querySelector('.show-success');

elementShowSuccess.onclick = () => {
	moduleClose();
	elementModalSuccess.className += ' modal_active';
};

function moduleClose () {
	let elementActive = document.querySelector('.modal_active');
	elementActive.className = elementActive.className.replace(' modal_active', '');
}