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