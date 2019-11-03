'use strict';
let elInput = document.getElementById('task__input');
let elButtonAdd = document.getElementById('tasks__add');
let idElement = localStorage.length;

document.addEventListener('DOMContentLoaded', () => {

	for (let i = 0; i < localStorage.length; i++) {
		let keyItem = localStorage.key(i);
		idElement = idElement > keyItem ? idElement : Number(keyItem) + 1;
		addTask(localStorage.getItem(keyItem),keyItem);
	}
});

elInput.addEventListener('keydown', event => {

	if (elInput.value && event.key == 'Enter') {
		addTasks ();
	};
});

elButtonAdd.addEventListener('click', event => {

	if (elInput.value) {
		addTasks ();
	}
});

function addTasks () {

		addTask (elInput.value, idElement);
		localStorage.setItem(`${idElement}`, `${elInput.value}`);
		elInput.value = '';
		idElement++;
}

function addTask (text, dataId) {
	let elTasksList = document.getElementById('tasks__list');

	let element = document.createElement('div');
	element.className = 'task';
	element.dataset.id = `${dataId}`;
	element.innerHTML = `
	 	<div class="task__title">
	 		${text}
	 	</div>
	 	<a href="#" class="task__remove">&times;</a>
	 `;
	element.addEventListener('click', delTasks);
	elTasksList.insertAdjacentElement('beforeEnd', element);
}

function delTasks (event) {
	localStorage.removeItem(event.target.closest('.task').dataset.id);
	event.target.closest('.task').remove();
}