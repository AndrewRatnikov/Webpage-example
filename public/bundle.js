/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports) {

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

/***/ },
/* 6 */
/***/ function(module, exports) {

	var signupName = document.getElementById('signup-name');
	var signupEmail = document.getElementById('signup-email');
	var signupPassword = document.getElementById('signup-password');
	var signupSubmit = document.getElementById('signup-submit');

	function signupValueCheck(elem) {
		elem.onfocus = function() {
			elem.previousElementSibling.style.opacity = 0.5;
			signupName.classList.remove('error');
			signupEmail.classList.remove('error');
			signupPassword.classList.remove('error');
		};
		elem.onblur = function() {
			elem.previousElementSibling.style.opacity = 1;
			if (!elem.value) {
				elem.previousElementSibling.classList.remove('hidden');
			}
		};
		elem.onkeydown = function(e) {
			if (e) {
				elem.previousElementSibling.classList.add('hidden');
			}
		};
	}

	function isValidEmail(el) {
		var pattern = new RegExp(/@/);
		return pattern.test(el);
	}

	signupValueCheck(signupName);
	signupValueCheck(signupEmail);
	signupValueCheck(signupPassword);

	signupSubmit.onclick = function() {
		if (!(signupName.value && signupPassword.value && isValidEmail(signupEmail.value))) {
			signupName.classList.add('error');
			signupEmail.classList.add('error');
			signupPassword.classList.add('error');
		}
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	var width = document.body.clientWidth;
	var menus = document.getElementsByClassName('nf-menu');
	var h3 = [];

	function showFooter() {		
		for (var i = 0; i < menus.length; i++) {
			if (width < 768) {	
				menus[i].classList.add('hidden');
				h3.push(menus[i].previousElementSibling);
			} else {
				menus[i].classList.remove('hidden');
			}
		}	
	}

	function clickH3(e) {
		e.target.classList.toggle('rotate');
		e.target.nextElementSibling.classList.toggle('hidden');
	}

	window.onresize = function() {
		width = document.body.clientWidth;
		showFooter();
	};

	showFooter();

	for (var i = 0; i < h3.length; i++) {
		h3[i].addEventListener('click', clickH3);
	}

/***/ }
/******/ ]);