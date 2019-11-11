'use strict';
const elModalClose = document.querySelector('.modal__close');
const elClose = document.getElementById('subscribe-modal');

document.addEventListener('DOMContentLoaded', function() {
	let arrCookie = document.cookie.split(';');
	for (let i = 0; i < arrCookie.length; i++) {
		if(arrCookie[i] === 'lsPopup=close') {
			elClose.classList.remove('modal_active');
		}
	}
});

elModalClose.addEventListener('click', function() {
	elClose.classList.remove('modal_active');
	document.cookie = 'lsPopup=close';
});

