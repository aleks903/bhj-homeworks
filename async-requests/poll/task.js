'use strict';
let elPollTitle = document.getElementById('poll__title');
let elPollAnswers = document.getElementById('poll__answers');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();

xhr.addEventListener('readystatechange', function () {

	if(this.readyState == xhr.DONE && this.status == 200) {
		let dataJSON = JSON.parse(this.responseText);
		let data = dataJSON.data;
		let answerId = dataJSON.id;
		let buttons = '';

		elPollTitle.innerHTML = data.title;

		for (let i = 0; i< data.answers.length; i++) {
			buttons += `
			<button class="poll__answer" onclick = 'elBut(event, ${answerId})' data-id = ${i}>
				${data.answers[i]}
			</button>
			`;
		}

		elPollAnswers.innerHTML = buttons;

	}
});

function elBut (event, answerId) {
	alert('Спасибо, ваш голос засчитан!');

	let xhrPost = new XMLHttpRequest();
	xhrPost.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
	xhrPost.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
	xhrPost.send( `vote=${answerId}&answer=${event.target.dataset.id}` );

	xhrPost.addEventListener('readystatechange', function () {
		if(this.readyState == xhr.DONE && this.status == 200) {
			let dataJSON = JSON.parse(this.responseText).stat;
			let buttons = '';

			for (let i = 0; i< dataJSON.length; i++) {
				buttons += `
				<div>
					${dataJSON[i].answer}: ${dataJSON[i].votes/100}%
				</div>
				`;
			}
			elPollAnswers.innerHTML = buttons;
		}
	});
}