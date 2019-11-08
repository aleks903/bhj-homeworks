'use strict';
const elSignin = document.getElementById('signin');
const elWelcome = document.getElementById('welcome');
const elSpanUserId = document.getElementById('user_id');
const elLogin = document.getElementsByName('login')[0];
const elLogout = document.getElementById('logout__btn');

document.addEventListener('DOMContentLoaded', function () {

	if (localStorage.getItem('lsAuth')) {
		let dataLogId = JSON.parse(localStorage.getItem('lsAuth'));

		elWelcome.classList.add('welcome_active');
		elSpanUserId.textContent = `${dataLogId.login} (id = #${dataLogId.id})`;
	} else {
		elSignin.classList.add('signin_active');
	}
});

elLogout.addEventListener('click', function () {
	elSignin.classList.add('signin_active');
	elWelcome.classList.remove('welcome_active');
	localStorage.removeItem('lsAuth');
});

document.forms['signin__form'].addEventListener('submit', event => {
	event.preventDefault();

	let xhr = new XMLHttpRequest();
	let form = document.getElementById('signin__form');
	let formData = new FormData(form);

	xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
	xhr.send(formData);
	
	xhr.addEventListener('readystatechange', function () {

		if (this.readyState == xhr.DONE && this.status == 200) {
			let data = JSON.parse(this.responseText);

			if (data.success) {
				elSignin.classList.remove('signin_active');
				elWelcome.classList.add('welcome_active');
				elSpanUserId.textContent = `${elLogin.value} (id = #${data.user_id})`;

				let dataLogId = JSON.stringify({login: elLogin.value, id: data.user_id});
				localStorage.setItem('lsAuth', dataLogId);
			} else {
				alert('Неверный логин/пароль');
				clearInput();
			}
		}
	});
});

function clearInput() {
	let elInput = document.getElementsByTagName('input');
	for (let i = 0; i < elInput.length; i++) {
		elInput[i].value = '';
	}
}