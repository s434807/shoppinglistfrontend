function attemptLogin() {
  let loginbuttonvalue = document.getElementById("login_login").value;
  let passwordbuttonvalue = document.getElementById("login_password").value;
  //const re = /.*".*":"(.*)"/g;
  fetch("https://localhost/api/login_check", {
      method: "POST",
      body: JSON.stringify({
        "username": loginbuttonvalue,
        "password": passwordbuttonvalue
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
  console.log("LOGIN","Login is:", loginbuttonvalue, "Password is:", passwordbuttonvalue);
}

function attemptRegister() {
  let loginbuttonvalue = document.getElementById("register_login").value;
  let emailbuttonvalue = document.getElementById("register_email").value;
  let passwordbuttonvalue = document.getElementById("register_password").value;
  fetch("https://localhost/api/user/register", {
      method: "POST",
      body: JSON.stringify({
        "username": loginbuttonvalue,
        "email": emailbuttonvalue,
        "password": passwordbuttonvalue
        }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
  })
  .then(response => response.text())
  .then(text => console.log(text))
  .catch(error => console.log('Error:', error));
  console.log("REGISTER", "Login is:", loginbuttonvalue, "Email is:", emailbuttonvalue, "Password is:", passwordbuttonvalue)
}

function attemptPOSTShoppingList() {
  let namepostshopplinglist = document.getElementById("post_shopping_list_name").value;
  let fulfilledpostshoppinglist = Boolean(document.getElementById("post_shopping_list_fulfilled").value);
  let token = localStorage.getItem('jwtKey');
  fetch("https://localhost/api/shopping-list/", {
      method: "POST",
      body: JSON.stringify({
        "name": namepostshopplinglist,
        "fulfilled": fulfilledpostshoppinglist
        }),
      headers: {
        "Authorization": "Bearer " + token,
        "Content-type": "application/json; charset=UTF-8"
      }
  })
  .then(response => response.text())
  .then(text => console.log(text))
  .catch(error => console.log('Error:', error));
  console.log("POSTSH", "Name is:", namepostshopplinglist, "Fulfilled is:", fulfilledpostshoppinglist)
}

function attemptPOSTShoppingListItem() {
  let namepostshopplinglistitem = document.getElementById("post_shopping_list_item_name").value;
  let quantitypostshoppinglistitem = parseInt(document.getElementById("post_shopping_list_item_quantity").value);
  let quantityunitpostshoppinglistitem = document.getElementById("post_shopping_list_item_quantity_unit").value;
  let purchasedpostshoppinglistitem = document.getElementById("post_shopping_list_item_purchased").checked;
  let shoppinglistidpostshoppinglistitem = document.getElementById("post_shopping_list_item_list_id").value;
  let token = localStorage.getItem('jwtKey');
  fetch("https://localhost/api/shopping-list/items/", {
      method: "POST",
      body: JSON.stringify({
        "name": namepostshopplinglistitem,
        "quantity": quantitypostshoppinglistitem,
        "quantityUnit": quantityunitpostshoppinglistitem,
        "purchased": purchasedpostshoppinglistitem,
        "shoppingListId": shoppinglistidpostshoppinglistitem
        }),
      headers: {
        "Authorization": "Bearer " + token,
        "Content-type": "application/json; charset=UTF-8"
      }
  })
  .then(response => response.text())
  .then(text => console.log(text))
  .catch(error => console.log('Error:', error));
  console.log("POSTSHI", "Name is:", namepostshopplinglistitem, "Quantity is:", quantitypostshoppinglistitem, "Quantity type is :", quantityunitpostshoppinglistitem, "Purchased is:", purchasedpostshoppinglistitem, "SL id is:", shoppinglistidpostshoppinglistitem)
}

function attemptGethoppingList() {
  let token = localStorage.getItem('jwtKey');
  fetch("https://localhost/api/shopping-list/", {
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