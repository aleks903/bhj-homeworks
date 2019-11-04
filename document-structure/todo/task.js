'use strict';
let elInput = document.getElementById('task__input');
let elButtonAdd = document.getElementById('tasks__add');
let objTasks;
let idElement = 0;

document.addEventListener('DOMContentLoaded', () => {

	objTasks = JSON.parse(localStorage.getItem('task'));

	if(objTasks) {
		for (let i = 0; i < objTasks.length; i++) {
			
			idElement = idElement > objTasks[i].id ? idElement : objTasks[i].id + 1;

			addTask (objTasks[i].id, objTasks[i].text);
		}
	} else {
		objTasks = [];
	}
});

elInput.addEventListener('keydown', event => {

	if (elInput.value && event.key == 'Enter') {
		addTasks ();
	}
		
});

elButtonAdd.addEventListener('click', event => {

	if (elInput.value) {
		addTasks ();
	}
});

function addTasks () {
		addTask (idElement, elInput.value);

		objTasks.push({
			id: idElement,
			text: elInput.value
		});

		localStorage.setItem('task', JSON.stringify(objTasks));

		elInput.value = '';
		idElement++;
}

function addTask (id, text) {
	let elTasksList = document.getElementById('tasks__list');

	let element = document.createElement('div');
	element.className = 'task';
	element.dataset.id = id;
	element.innerHTML = `
	 	<div class="task__title">
	 		${text}
	 	</div>
	 	<a href="#" class="task__remove">&times;</a>
	 `;

	element.querySelector('.task__remove').addEventListener('click', event => {
		event.preventDefault();
		delTasks(event);
	});

	elTasksList.insertAdjacentElement('beforeEnd', element);
}

function delTasks (event) {
	let elDel = event.target.closest('.task');

	let indexTask = objTasks.findIndex(element => element.id == elDel.dataset.id);
	objTasks.splice(indexTask, 1);
	elDel.remove();

	localStorage.setItem('task', JSON.stringify(objTasks));
}