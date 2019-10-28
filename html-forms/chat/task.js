'use strict';
let elChatWidget = document.querySelector('.chat-widget');
let elChatWidgetInput = document.getElementById('chat-widget__input');
let downTime;

elChatWidget.addEventListener('click', () => {
	
	if(!elChatWidget.classList.contains('chat-widget_active')) {
		elChatWidget.classList.add('chat-widget_active');
		downTime = setTimeout(()=>{sendMessage(randomMessage (), '');}, 30000);
	}

});

elChatWidgetInput.addEventListener('keydown', e => {

	if(e.keyCode == 13) {

		if (elChatWidgetInput.value) {
			clearTimeout(downTime);

			sendMessage(elChatWidgetInput.value, 'message_client');
			sendMessage(randomMessage (), '');
			scrollMessages();
			elChatWidgetInput.value = '';
		}

	}

});



function randomMessage () {
	let botMessages = [
	'Добрый день! До Свидания!',
	'Где ваша совесть?',
	'Вы не купили у нас не чего',
	'Кто тут?',
	'Мы ничего не будем вам продовать',
	'К сожалению все операторы сейчас заняты'
	];

	let index = Math.floor(Math.random() * botMessages.length);

	return botMessages[index];

}

function sendMessage (textMessage, isCientClass) {

const messages = document.querySelector( '.chat-widget__messages' );
let timeMessage = new Date().getHours() + ':' + new Date().getMinutes();
// добавит
messages.innerHTML += `
  <div class="message ${isCientClass}">
    <div class="message__time">${timeMessage}</div>
    <div class="message__text">
      ${textMessage}
    </div>
  </div>
`;

}

function scrollMessages () {
	let cwMC = document.querySelector('.chat-widget__messages-container');
	let cwM = document.querySelector('.chat-widget__messages');
	cwMC.scrollTop = cwM.getBoundingClientRect().height;
}
