'use strict';
let elHasTooltip = document.querySelectorAll('.has-tooltip');
let elTooltip = document.querySelector('.tooltip');


for (let i = 0; i < elHasTooltip.length; i++) {
	elHasTooltip[i].addEventListener('click', event => {
		if (elTooltip.textContent == event.target.title) {

			if (!elTooltip.classList.contains('tooltip_active')) {
				tooltipActive(event);
			} else {
				elTooltip.classList.remove('tooltip_active');
			}
		} else {
			elTooltip.classList.remove('tooltip_active');
			tooltipActive(event);
		}
		event.preventDefault();
	});
}

function tooltipActive(event) {
	elTooltip.classList.add('tooltip_active');
	elTooltip.textContent = event.target.title;

	let coordinat = getCoordinate(event.target);
	elTooltip.style.position = 'absolute';
	elTooltip.style.top = coordinat.top +'px';
	elTooltip.style.left = coordinat.left + 'px';
}

function getCoordinate (elem) {
	let box = elem.getBoundingClientRect();
	let top;
	let left;
	
	switch (elem.dataset.position) {
		case 'top':
			top = (box.top - elTooltip.getBoundingClientRect().height + document.scrollingElement.scrollTop);
			left = (box.left + document.scrollingElement.scrollLeft);
			break;
		case 'left':
			top = (box.top + document.scrollingElement.scrollTop);
			left = (box.left - elTooltip.getBoundingClientRect().width + document.scrollingElement.scrollLeft);
			break;
		case 'right':
			top = (box.top + document.scrollingElement.scrollTop);
			left = (box.right + document.scrollingElement.scrollLeft);
			break;
		case 'bottom':
			top = (box.bottom + document.scrollingElement.scrollTop);
			left = (box.left + document.scrollingElement.scrollLeft);
			break;
	}

	return {
		top,
		left
	};
}