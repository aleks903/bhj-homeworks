'use strict';
let elMenuLink = document.getElementsByClassName('menu__link');

for (let i = 0; i < elMenuLink.length; i++) {
	elMenuLink[i].onclick = () => check (i);
};

function check (i) {
	let elParent = elMenuLink[i].parentElement.querySelector('ul');

	if (elParent) {
		let parentActiv = elParent.className.includes('menu_active');
		changeActive(elMenuLink[i]);

		if (parentActiv) {
			elParent.classList.remove('menu_active');
		} else {
			elParent.classList.add('menu_active');
		}
	}
	
	return false;
}

function changeActive (element) {
	let mActive = element.closest('.menu_main').querySelector('.menu_active');

	if(mActive) {
		mActive.classList.remove('menu_active');
	}
}