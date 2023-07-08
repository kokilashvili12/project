document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var password = document.getElementById('password').value;
  var savedPassword = localStorage.getItem('password');
  
  if (password === savedPassword) {
    Swal.fire({
      icon: 'success',
      title: 'Login Successful',
      showConfirmButton: false,
      timer: 1500
    }).then(function() {
    
      window.location.href = 'main.html';
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Invalid Password',
      text: 'Please enter a valid password.',
      confirmButtonText: 'OK'
    });
  }
});