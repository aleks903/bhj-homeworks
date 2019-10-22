function clickFn (event) {
	if (event.target.classList.contains('dropdown__value')) {
		event.target.parentElement.querySelector('.dropdown__list').classList.add('dropdown__list_active');
	}

	if (event.target.classList.contains('dropdown__link')) {
		event.target.closest('.dropdown').querySelector('.dropdown__value').textContent = event.target.textContent;
		event.target.closest('.dropdown__list').classList.toggle('dropdown__list_active');
		event.preventDefault();
	}	
}

document.addEventListener('click', clickFn);