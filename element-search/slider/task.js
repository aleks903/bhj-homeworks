let elSlidArrow = document.getElementsByClassName('slider__arrow');
let itemsImg = document.querySelectorAll('.slider__item');
let elDot = document.querySelectorAll('.slider__dot');
let indexImg = 0;

for (let i = 0; i < elSlidArrow.length; i++) {
	elSlidArrow[i].onclick = changeSlide;
}

for (let i = 0; i < elDot.length; i++) {
	elDot[i].onclick = () => {dotChangeSlide(i)};
}

function changeSlide (event) {
	let classSlideArrow = event.target.classList;
	
	itemsImg[indexImg].classList.remove('slider__item_active');

	if(classSlideArrow.contains('slider__arrow_prev')) {

		if (indexImg == 0) {
			indexImg = itemsImg.length - 1;
		} else {
			indexImg = indexImg - 1;
		}
	}

	if(classSlideArrow.contains('slider__arrow_next')) {

		if (indexImg == itemsImg.length - 1) {
			indexImg = 0;
		} else {
			indexImg = indexImg + 1;
		}
	}

	itemsImg[indexImg].classList.add('slider__item_active');
}

function dotChangeSlide(i) {
	itemsImg[indexImg].classList.remove('slider__item_active');
	itemsImg[i].classList.add('slider__item_active')
	indexImg = i;
}