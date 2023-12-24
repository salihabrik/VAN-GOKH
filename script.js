document.addEventListener('DOMContentLoaded', function() {
    // Handle form submission for login
    document.querySelector('form[action="login.php"]').addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent the default form submission
      // Get the username and password from the form input fields
      let username = document.getElementById('username').value;
      let password = document.getElementById('password').value;
      // Perform client-side validation, for example, check for empty fields
      if (username.trim() === '' || password.trim() === '') {
        alert('Please enter both username and password');
        return;
      }
      // Send the username and password to the server for validation, using an AJAX request
      // Example: You can use fetch or XMLHttpRequest to send the form data to the server
      // After receiving the response from the server, you can handle it accordingly
      // For the example, let's log the form data to the console
      console.log('Logging in with username: ' + username + ' and password: ' + password);
    });
  
    // Handle form submission for registration
    document.querySelector('form[action="register.php"]').addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent the default form submission
      // Get the new username and password from the form input fields
      let newUsername = document.getElementById('new-username').value;
      let newPassword = document.getElementById('new-password').value;
      // Perform client-side validation, for example, check for empty fields
      if (newUsername.trim() === '' || newPassword.trim() === '') {
        alert('Please enter both new username and password');
        return;
      }
      // Send the new username and password to the server for registration, using an AJAX request
      // Example: You can use fetch or XMLHttpRequest to send the form data to the server
      // After receiving the response from the server, you can handle it accordingly
      // For the example, let's log the form data to the console
      console.log('Registering with new username: ' + newUsername + ' and new password: ' + newPassword);
    });
  
    // Handle terms & conditions checkbox
    document.getElementById('terms-conditions').addEventListener('change', function() {
      if (this.checked) {
        // If the checkbox is checked, enable the submit button
        document.getElementById('register-submit').removeAttribute('disabled');
      } else {
        // If the checkbox is unchecked, disable the submit button
        document.getElementById('register-submit').setAttribute('disabled', 'disabled');
      }
    });
  });
  