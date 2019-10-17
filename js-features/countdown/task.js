'use strict';
let element = document.getElementById('timer');

let startTimer = 30;

let hh = 0;
let mm = 1;
let ss = 15;

function changeTimer() {
	if (startTimer == 0) {
		clearInterval(interval);
		alert('Вы победили в конкурсе!');
	}
	element.textContent = startTimer;
	startTimer --;
}

function changeHMSTimer () {
	if (ss == 0) {

		if (mm == 0) {

			if(hh == 0) {
				clearInterval(interval);
				alert('Вы победили в конкурсе!');
				document.location.assign('https://www.garant.ru/files/4/7/609374/dogovor_autsorsing.doc');

				return;
			}

			mm = 59;
		}

		mm--;
		ss = 59;
	}

	ss--;
	element.textContent = `
	${hh < 10 ? '0' + hh : hh} :
	${mm < 10 ? '0' + mm : mm} :
	${ss < 10 ? '0' + ss : ss}`;
}

let interval
//interval= setInterval(changeTimer, 100);
interval = setInterval(changeHMSTimer, 100);