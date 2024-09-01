document.getElementById('signUpForm').addEventListener('submit', function(event) {
  event.preventDefault();
  // Here you can handle the form submission, e.g., send the data to the server
  alert('Form submitted');
});

function redirectToLogin() {
  // Redirect to the login page
  window.location.href = 'login.html';
}
