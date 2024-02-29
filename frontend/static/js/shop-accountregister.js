//Send a POST request to create an account
//Requires 3 attributes
//1# 'login'(string)
//2# 'email'(string) this while required is never used or called upon, any functions relating to emails have not been implemented
//3# 'passoword'(string)
function accountRegister() {
    let login = document.getElementById("register_login").value;
    let email = document.getElementById("register_email").value;
    let password = document.getElementById("register_password").value;
    fetch("https://localhost/api/user/register", {
        method: "POST",
        body: JSON.stringify({
          "username": login,
          "email": email,
          "password": password
          }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.text())
    .then(text => console.log(text))
    .catch(error => console.log('Error:', error));
    console.log("REGISTER", "Login is:", login, "Email is:", email, "Password is:", password);
  }