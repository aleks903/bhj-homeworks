
let tabsElement = document.querySelectorAll('.tab');
let currentIndex = 0;

for (let i = 0; i < tabsElement.length; i++) {
	tabsElement[i].addEventListener('click', function (event){
		let itemTabsElement = event.target.closest('.tabs').querySelectorAll('.tab');
		let itemTabElement = event.target.closest('.tabs').querySelectorAll('.tab__content');

		function curIn() {
			return Array.from(itemTabsElement).findIndex((element) => {return element.classList.contains('tab_active')});
		}

		currentIndex = curIn();

		itemTabsElement[currentIndex].classList.remove('tab_active');
		itemTabElement[currentIndex].classList.remove('tab__content_active');

		this.classList.add('tab_active');

		currentIndex = curIn();

		itemTabElement[currentIndex].classList.add('tab__content_active');
	});
}