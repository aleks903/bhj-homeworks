'use strict';
let elLoader = document.getElementById('loader');
let elItems = document.getElementById('items');
let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();
xhr.addEventListener('readystatechange', function () {
	if (xhr.readyState === xhr.DONE && xhr.status === 200) {
		let data = JSON.parse(this.responseText);
		localStorage.setItem('exchangeRate', this.responseText);
		printVal (data);
		
		elLoader.classList.remove('loader_active');
	}
});

let exchangeRate = localStorage.getItem('exchangeRate');

if (exchangeRate) {
	elLoader.classList.remove('loader_active');
	let data = JSON.parse(exchangeRate);
	printVal (data);
}

function printVal (data) {
	let dataVal = data.response.Valute;
	let output ='';

	for (let key in dataVal) {
		output += `<div class="item">
			<div class="item__code">
				${dataVal[key].CharCode}
			</div>
			<div class="item__value">
				${dataVal[key].Value}
			</div>
			<div class="item__currency">
				${dataVal[key].Name}
			</div>
		</div>`;
	}

	elItems.innerHTML = output;
}