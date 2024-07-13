const form = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;

	if (username === 'honney' && password === 'pass') {
		window.location.href = 'welcome.html';
	} else {
		alert('Invalid username or password');
	}
});