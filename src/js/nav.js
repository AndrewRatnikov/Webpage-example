var width = document.body.clientWidth;
var search = document.getElementById('search');
var searchForm = document.getElementById('search-form');
var menu = document.getElementById('nav-menu');
var menuButton = document.getElementById('menu');
var store = document.getElementById('nav-store');
var storeMenu = document.getElementById('nav-store-menu');
var products = document.getElementById('nav-products');
var productsMenu = document.getElementById('nav-products-menu');

// ----- Hide or show menu  -----
function menuVisibility() {
	if (width < 898) {
		menu.classList.add('hidden');
	} else {
		menu.classList.remove('hidden');
	}
}

// -----  Toggle class hidden and active -----
function toggleClass(clickElem, showElem) {
	clickElem.addEventListener ('click', function() {
		if (clickElem == store) {
			productsMenu.classList.add('hidden');
			products.classList.remove('active');
		} else {
			storeMenu.classList.add('hidden');
			store.classList.remove('active');
		}
		if (clickElem == search) {
			document.getElementsByClassName('nav-wrap')[0].classList.toggle('nav-search-margin');
		}
		showElem.classList.toggle('hidden');
		clickElem.classList.toggle('active');
	});
}

function toggleMenuItems(e) {
	var elemToHide = document.getElementsByClassName('to-hide');
	var elemSibling = e.target.nextElementSibling || e.target.parentElement.nextElementSibling;
	for (var i = 0; i < elemToHide.length; i++) {
		if (elemSibling !== elemToHide[i]) {
			elemToHide[i].classList.add('hidden');
			elemToHide[i].previousElementSibling.classList.remove('active2');
		}
	}
	if (elemSibling.classList.length) {
		elemSibling.classList.toggle('hidden');
		
		if (e.target.className == 'nav-menu-item' || e.target.className == 'nav-menu-item active2') {
			e.target.classList.toggle('active2');
		} else {
			e.target.parentElement.classList.toggle('active2');
		}		
	}
}

menuVisibility();

window.onresize = function() {	
	width = document.body.clientWidth;
	menuVisibility();
};

// -----  Hide or show search block for small displays ------
toggleClass(search, searchForm);

// ----- Hide or show menu for small displays
toggleClass(menuButton, menu);

// -----  Hide or show nav item Store  -----
toggleClass(store, storeMenu);

storeMenu.addEventListener('click', toggleMenuItems);

/*
storeMenu.addEventListener('mouseover', function(e) {
	var elemToHide = document.getElementsByClassName('to-hide');
	var elemSibling = e.target.nextElementSibling || e.target.parentElement.nextElementSibling;
	var parentElem = e.target;
	//console.log(elemSibling.classList);
	if (elemSibling && elemSibling.classList && elemSibling.classList.length) {
		for (var i = 0; i < elemToHide.length; i++) {
			if (elemSibling !== elemToHide[i]) {
				elemToHide[i].classList.add('hidden');
				elemToHide[i].previousElementSibling.classList.remove('active2');
			}
		}
		elemSibling.classList.toggle('hidden');
		e.target.classList.toggle('active2');
	}
});
*/
// -----  Hide or show nav item Products -----
toggleClass(products, productsMenu);

productsMenu.addEventListener('click', toggleMenuItems);

//productsMenu.addEventListener('mouseover', toggleMenuItems);