function showLoginForm() {
  document.getElementById('loginFormContainer').style.display = 'block';
}

function hideLoginForm() {
  document.getElementById('loginFormContainer').style.display = 'none';
  loginMessage.innerHTML = '';
}

function login(){
    var userEmail = document.getElementById('email').value;
    if (userEmail === 'admin@admin.com') {
      loginMessage.innerHTML = 'Welcome';
    } else {
      loginMessage.innerHTML = 'Invalid username or password';
    }
}

function forgotPw(){

}
