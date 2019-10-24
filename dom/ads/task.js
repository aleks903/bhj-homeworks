'use strict';
let interval = 1000;
let elementRotator = document.querySelectorAll('.rotator');

for(let itemRotator of elementRotator) {
	let elementRotatorCase = itemRotator.querySelectorAll('.rotator__case');

	setTimeout(function rotate() {
		for(let i = 0; i < elementRotatorCase.length; i++) {
			if(elementRotatorCase[i].classList.contains('rotator__case_active')) {
				elementRotatorCase[i].classList.remove('rotator__case_active');

				i = (i + 1) >= elementRotatorCase.length ? 0 : (i + 1);

				elementRotatorCase[i].classList.add('rotator__case_active');

				interval = elementRotatorCase[i].dataset.speed;
				elementRotatorCase[i].style.color = elementRotatorCase[i].dataset.color;
			}
		}
		setTimeout(rotate ,interval);
	}, interval);
}