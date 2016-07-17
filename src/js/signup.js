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