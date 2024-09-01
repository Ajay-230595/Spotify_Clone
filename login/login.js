document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting the traditional way

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simple check for demonstration purposes
  if (username === 'user' && password === 'password') {
      document.getElementById('message').textContent = 'Login successful!';
      document.getElementById('message').style.color = 'green';
  } else {
      document.getElementById('message').textContent = 'Invalid username or password';
      document.getElementById('message').style.color = 'red';
  }
});

function togglePasswordVisibility() {
  const passwordInput = document.getElementById('password');
  const passwordType = passwordInput.getAttribute('type');
  passwordInput.setAttribute('type', passwordType === 'password' ? 'text' : 'password');
}
