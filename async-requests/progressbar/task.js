'use strict';
let form = document.getElementById('form');
let elProgress = document.getElementById('progress');

document.addEventListener('submit', function (event) {
	let xhr = new XMLHttpRequest();
	let formData = new FormData(form);
	xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
	xhr.send(formData);

	xhr.onprogress = function(event) {
		elProgress.value = event.loaded / 100000000;
	};
	
	event.preventDefault();
});