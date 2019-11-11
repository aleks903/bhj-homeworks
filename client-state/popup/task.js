'use strict';
const elModalClose = document.querySelector('.modal__close');
const elClose = document.getElementById('subscribe-modal');

document.addEventListener('DOMContentLoaded', function() {
	let arrCookie = document.cookie.split(';');
	console.log(arrCookie);
	for (let i = 0; i < arrCookie.length; i++) {
		
		if(arrCookie[i] === 'lsPopup=close') {
			elClose.classList.remove('modal_active');
		}
	}
});

elModalClose.addEventListener('click', function() {
	elClose.classList.remove('modal_active');
	document.cookie = 'lsPopup=close; expires=Tue, 19 Jan 2038 03:14:07 GMT';
});
