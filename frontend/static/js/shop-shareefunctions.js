//Send a GET request to obtain the list of your sharees
//Requires the JWT token
function GETSharee() {
    let token = localStorage.getItem('jwtKey');
    fetch("https://localhost/api/sharee/"+id+"/", {
        method: "GET",
        headers: {
          "Authorization": "Bearer " + token,
          "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(text => console.log(text))
    .catch(error => console.log('Error:', error));
}

//Send a POST request to add a sharee
//Requires 4 attributes + a JWT token
//1# 'readonly'(bool) status, if false sharee ought not be able to edit shared shopping list
//2# 'shoppinglistid'(int)
//1# 'email'(string) of sharee
//2# 'username'(string) of sharee
function POSTSharee() {
    let readonly = document.getElementById("post_sharee_readonly").checked;
    let shoppinglistid = document.getElementById("post_sharee_shopping_list_id").value;
    let email = document.getElementById("post_sharee_shopping_list_id").value;
    let username = document.getElementById("post_sharee_shopping_list_id").value;
    let token = localStorage.getItem('jwtKey');
    fetch("https://localhost/api/sharee/", {
        method: "POST",
        body: JSON.stringify({
          "readonly": readonly,
          "shoppingListId": shoppinglistid,
          "email": email,
          "username": username
          }),
        headers: {
          "Authorization": "Bearer " + token,
          "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.text())
    .then(text => console.log(text))
    .catch(error => console.log('Error:', error));
    console.log("Sharee POST", "Name of SL:", shopplinglistname, "SL Fulfilled Status:", shoppinglistfulfilledstatus)
  }

//Send a DELETE request remove sharee for user
//Requires 1 attribute + the JWT token
//#1 'id' of sharee
function DELETESharee(id) {
    let token = localStorage.getItem('jwtKey');
    fetch("https://localhost/api/sharee/"+id+"/", {
        method: "GET",
        headers: {
          "Authorization": "Bearer " + token,
          "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(text => console.log(text))
    .catch(error => console.log('Error:', error));
}