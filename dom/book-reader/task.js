'use strict';
let bookElement = document.querySelector('#book');
let bookControlElement = document.querySelectorAll('.book__control');

for (let itemBookControl of bookControlElement) {
	if (itemBookControl.matches('.book__control_font-size'))
	{
		bookControl (
			itemBookControl,
			'font-size',
			'book_fs',
			'size'
		);
	}
	
	if (itemBookControl.matches('.book__control_color'))
	{
		bookControl (
			itemBookControl,
			'color',
			'book_color',
			'color'
		);
	}

	if (itemBookControl.matches('.book__control_background'))
	{
		bookControl (
			itemBookControl,
			'color',
			'book_bg',
			'color'
		);
	}

}

function bookControl (element, itemsClass, bookClass, dsValue)
{
	let activeElement = element.querySelector(`.${itemsClass}_active`);
	
	for (let itemFontSize of element.querySelectorAll(`.${itemsClass}`)) {
		itemFontSize.addEventListener('click', function () {
			activeElement.classList.remove(`${itemsClass}_active`);
			if (activeElement.dataset[dsValue]) bookElement.classList.remove(`${bookClass}-${activeElement.dataset[dsValue]}`);
			itemFontSize.classList.add(`${itemsClass}_active`);

			if(itemFontSize.dataset[dsValue]) bookElement.classList.add(`${bookClass}-${itemFontSize.dataset[dsValue]}`);
			activeElement = itemFontSize;

			event.preventDefault();
		});
	}
}