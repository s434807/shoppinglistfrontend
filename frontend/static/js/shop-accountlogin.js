//Send a POST request to login into an existing account, (if successful) also obtains a JWT key from backend and saves it to localStorage under the name 'jwtKey'
//Requires 2 attributes
//1# 'login'(string)
//2# 'passoword'(string)
function accountLogin() {
    let login = document.getElementById("login_login").value;
    let password = document.getElementById("login_password").value;
    //const re = /.*".*":"(.*)"/g;
    fetch("https://localhost/api/login_check", {
        method: "POST",
        body: JSON.stringify({
          "username": login,
          "password": password
          }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => response.json())
      .then(data => {
        //console.log(data);
        localStorage.setItem('jwtKey', data.token);
        console.log("JWT key is:", localStorage.getItem('jwtKey'))
      })
      .catch(error => console.log('Error:', error));
    console.log("LOGIN","Login is:", login, "Password is:", password);
  }