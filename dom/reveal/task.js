'use strict';

window.addEventListener('scroll', function () {
	let revealElement = document.querySelectorAll('.reveal');

	for (let itemReveal of revealElement) {
		
		if(itemReveal.getBoundingClientRect().top < window.innerHeight) {
			itemReveal.classList.add('reveal_active');
		}

		if(itemReveal.getBoundingClientRect().bottom < 0 || itemReveal.getBoundingClientRect().top > window.innerHeight) {
			itemReveal.classList.remove('reveal_active');
		}
	}
});