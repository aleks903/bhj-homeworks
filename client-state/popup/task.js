'use strict';
const elModalClose = document.querySelector('.modal__close');
const elClose = document.getElementById('subscribe-modal');

document.addEventListener('DOMContentLoaded', function() {
	if(localStorage.getItem('lsPopup') === 'close') {
		elClose.classList.remove('modal_active');
	}
});

elModalClose.addEventListener('click', function() {
	elClose.classList.remove('modal_active');
	localStorage.setItem('lsPopup', 'close');
});