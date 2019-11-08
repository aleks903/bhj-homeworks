'use strict';
const elEditor = document.getElementById('editor');
const elClear = document.getElementById('clear');

document.addEventListener('DOMContentLoaded', function() {
	let getLS = localStorage.getItem('textEditor');
	if (getLS) elEditor.value = getLS;
});


elEditor.addEventListener('blur', function() {
	localStorage.setItem('textEditor', elEditor.value);
});

elClear.addEventListener('click', function(){
	elEditor.value = '';
	localStorage.removeItem('textEditor');
});