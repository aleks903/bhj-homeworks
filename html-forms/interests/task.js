'use strict';
let input = document.getElementsByTagName('input');

function checkLists (event) {
	let target = event.target;

	let childLi = target.closest('li').querySelectorAll('ul li');

	if (childLi.length > 0) {
		for (let j = 0; j < childLi.length; j++) {
			childLi[j].querySelector('input').checked = target.checked;
		}
	}

	upListChecked(target);
}

function upListChecked(target) {
	let parentUlChild = target.closest('ul');
	let childInput = parentUlChild.querySelectorAll('input');
	let parentLiUl = parentUlChild.closest('li');

	if (parentLiUl) {
		parentLiUl = parentLiUl.querySelector('input');
		let massiv = [];

		for (let i = 0; i < childInput.length; i++) {
			massiv.push(childInput[i].checked);
		}

		parentLiUl.checked = massiv.every(Boolean);
		parentLiUl.indeterminate = !massiv.every(Boolean) && massiv.some(Boolean);

		upListChecked(parentLiUl);
	}

}

for (let i = 0; i < input.length; i++) {
	input[i].addEventListener('click', checkLists);
}