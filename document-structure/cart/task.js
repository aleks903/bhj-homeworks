'use strict';
let elProductQuantityControl = document.querySelectorAll('.product__quantity-control');
let elProductAdd = document.querySelectorAll('.product__add');
let elCartStyle = document.querySelector('.cart').style;
let objProduct = [];

document.addEventListener('DOMContentLoaded', () => {
	objProduct = JSON.parse(localStorage.getItem('products'));

	if(objProduct) {
		for (let i = 0; i < objProduct.length; i++) {
			addCart (objProduct[i].id, objProduct[i].quantity, objProduct[i].img);
		}
	} else {
		objProduct = [];
	}

	cartIsEmpty();
});

for (let i = 0; i < elProductQuantityControl.length; i++) {

	elProductQuantityControl[i].addEventListener('click', event => {
		let elProductQuantityValue = event.target.closest('.product__quantity-controls').querySelector('.product__quantity-value');

		if (event.target.classList.contains('product__quantity-control_dec')) {

			if(Number(elProductQuantityValue.innerText) > 1) {
				elProductQuantityValue.textContent -= 1;
			}
		}

		if (event.target.classList.contains('product__quantity-control_inc')) {
			elProductQuantityValue.textContent = Number(elProductQuantityValue.innerText) + 1;
		}
	});
}

for (let i = 0; i < elProductAdd.length; i++) {
	elProductAdd[i].addEventListener('click', addProduct);
}

function addProduct (event) {
	let idProduct = event.target.closest('.product').dataset.id;
	let quantityProduct = event.target.closest('.product').querySelector('.product__quantity-value').innerText;
	let imgProduct = event.target.closest('.product').querySelector('.product__image');
	let cartProducts = document.querySelectorAll('.cart__product');

	for (let i = 0; i < cartProducts.length; i++) {

		if (cartProducts[i].dataset.id == idProduct) {
			let cartQuantityProduct = cartProducts[i].querySelector('.cart__product-count').innerText;
			quantityProduct = Number(quantityProduct) + Number(cartQuantityProduct);
			cartProducts[i].querySelector('.cart__product-count').innerText = quantityProduct;
			
			moveImg (imgProduct, cartProducts[i]);
			addLocalStorageProduct (idProduct, quantityProduct, imgProduct.src);

			return;
		}
	}

	addLocalStorageProduct (idProduct, quantityProduct, imgProduct.src);
	addCart (idProduct, quantityProduct, imgProduct.src);
	cartIsEmpty();
}

function addCart (id, quantity, img) {
	let product = document.createElement('div');

	product.className = 'cart__product';
	product.dataset.id = id;

	product.innerHTML = `
		<img class="cart__product-image" src="${img}">
		<div class="cart__product-count">${quantity}</div>
		<a href="#" class="product_remove">&times;</a>
	`;

	product.querySelector('.product_remove').addEventListener('click', event => {
		event.preventDefault();
		removeProduct(event);
	});

	document.querySelector('.cart__products').appendChild(product);
}

function removeProduct(event) {
	let cartProduct = event.target.closest('.cart__product');

	let indexProduct = objProduct.findIndex(element => element.id == cartProduct.dataset.id);
	objProduct.splice(indexProduct,1);
	localStorage.setItem('products', JSON.stringify(objProduct));

	cartProduct.remove();
	cartIsEmpty();
}

function addLocalStorageProduct (id, quantity, img) {
	let indexProduct = objProduct.findIndex(element => element.id == id);

	if (indexProduct >= 0) {
		objProduct[indexProduct].quantity = quantity;
	} else {
		objProduct.push({
			id,
			quantity,
			img
		});
	}
	
	localStorage.setItem('products', JSON.stringify(objProduct));
}

function cartIsEmpty () {
	if (document.querySelectorAll('.cart__product').length == 0) {
		elCartStyle.display = 'none';
	} else {
		elCartStyle.display = 'block';
	}
}

function moveImg (imgProduct, cartProduct) {
	let startTop = imgProduct.getBoundingClientRect().top;
	let startLeft = imgProduct.getBoundingClientRect().left;
	let endTop = cartProduct.getElementsByTagName('img')[0].getBoundingClientRect().top;
	let endLeft = cartProduct.getElementsByTagName('img')[0].getBoundingClientRect().left;
	
	let step = 100;
	let stepTop = (endTop - startTop) / step;
	let stepLeft = (endLeft - startLeft) / step;

	let cloneImg = imgProduct.cloneNode(false);
	
	cloneImg.style.position = 'absolute';
	cloneImg.style.zIndex = 1;
	
	document.body.insertAdjacentElement('afterBegin', cloneImg);
	
	let interval = setInterval(() => {
		startTop += stepTop;
		startLeft += stepLeft;
		cloneImg.style.top = startTop + 'px';
		cloneImg.style.left = startLeft + 'px';
		step--;

		if (step == 0) {
			clearInterval(interval);
			cloneImg.remove();
		};
	}, 2);
}