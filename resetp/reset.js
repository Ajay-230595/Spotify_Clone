document.getElementById('resetPasswordForm').addEventListener('submit', function(event) {
  event.preventDefault();
  // Here you can handle the form submission, e.g., send the data to the server
  const email = document.getElementById('email').value;
  const newPassword = document.getElementById('new-password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (newPassword !== confirmPassword) {
      alert('Passwords do not match');
  } else {
      // Proceed with password reset logic
      alert('Password reset successfully for ' + email);
  }
});
