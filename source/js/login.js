const revealPasswordBtn = document.querySelector('.login__reveal-password'),
      passwordInput = document.querySelector('.login__input-password input');

revealPasswordBtn.addEventListener('click', function() {
  this.classList.toggle('show-password')
  if (this.classList.contains('show-password')) {
    passwordInput.setAttribute('type', 'text');
  } else {
    passwordInput.setAttribute('type', 'password');
  }
})
