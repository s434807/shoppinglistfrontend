//Send a POST request to create a shopping list
//Requires 2 attributes + a JWT token
//1# 'name'(string) of shopping list
//2# 'fulfilled'(bool) status
function POSTShoppingList() {
  let shopplinglistname = document.getElementById("post_shopping_list_name").value;
  let shoppinglistfulfilledstatus = document.getElementById("post_shopping_list_fulfilled").checked;
  let token = localStorage.getItem('jwtKey');
  fetch("https://localhost/api/shopping-list/", {
      method: "POST",
      body: JSON.stringify({
        "name": shopplinglistname,
        "fulfilled": shoppinglistfulfilledstatus
        }),
      headers: {
        "Authorization": "Bearer " + token,
        "Content-type": "application/json; charset=UTF-8"
      }
  })
  .then(response => response.text())
  .then(text => console.log(text))
  .catch(error => console.log('Error:', error));
  console.log("SL POST", "Name of SL:", shopplinglistname, "SL Fulfilled Status:", shoppinglistfulfilledstatus);
}

//Send a PATCH request to edit an existing shopping list 
//Requires 3 attributes + a JWT token
//1# 'name'(string) of shopping list
//2# 'fulfilled'(bool) status 
//#3 'id'(string) of shopping list
function PATCHShoppingList() {
  let shopplinglistname = document.getElementById("patch_shopping_list_name").value;
  let shoppinglistfulfilledstatus = document.getElementById("patch_shopping_list_fulfilled").checked;
  let shoppinglistid = document.getElementById("patch_shopping_list_id").value;
  let token = localStorage.getItem('jwtKey');
  fetch("https://localhost/api/shopping-list/", {
      method: "PATCH",
      body: JSON.stringify({
        "name": shopplinglistname,
        "fulfilled": shoppinglistfulfilledstatus
        }),
      headers: {
        "Authorization": "Bearer " + token,
        "Content-type": "application/json; charset=UTF-8"
      }
  })
  .then(response => response.text())
  .then(text => console.log(text))
  .catch(error => console.log('Error:', error));
  console.log("SL PATCH", "Name of SL:", shopplinglistname, "SL Fulfilled Status:", shoppinglistfulfilledstatus);
}

//Send a GET request to obtain all shopping lists that belong to the user 
//Requires only the JWT token
function GETShoppingList() {
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
//Send a GET request to obtain all shopping lists that belong to the user 
//Requires 1 attribute + the JWT token
//1# 'id'(string) of shopping list
function GETShoppingListId() {
  let id = document.getElementById("get_shopping_list_id").value;
  let token = localStorage.getItem('jwtKey');
  fetch("https://localhost/api/shopping-list/"+id+"/", {
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
//Send a DELETE request to remove a shopping list from database 
//Requires 1 attribute + the JWT token
//1# 'id'(string) of shopping list
function DELETEShoppingListId() {
  let id = document.getElementById("delete_shopping_list_id").value;
  let token = localStorage.getItem('jwtKey');
  fetch("https://localhost/api/shopping-list/"+id, {
      method: "DELETE",
      headers: {
        "Authorization": "Bearer " + token,
        "Content-type": "application/json; charset=UTF-8"
      }
  })
  .then(response => response.json())
  .then(text => console.log(text))
  .catch(error => console.log('Error:', error));
}
