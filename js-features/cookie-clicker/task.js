'use strict';

let elementSpan = document.getElementById('clicker__counter');
let elementImg = document.getElementById('cookie');
let elementSpeed = document.getElementById('clicker__speed');
let sumClick = 0;

let firstClick = 0;
let curTime = 0;

function cliker() {	
	elementImg.width = elementImg.width == 200 ? 250 : 200;
	elementImg.height = elementImg.height == 200 ? 250 : 200;

	elementSpan.textContent = ++sumClick;
	
	curTime = new Date().getTime() - firstClick;

	elementSpeed.textContent = Math.round((1 / (curTime/1000))*100)/100;
	
	firstClick = new Date().getTime();
}

elementImg.onclick = cliker;