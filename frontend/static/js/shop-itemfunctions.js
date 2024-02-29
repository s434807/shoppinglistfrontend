//Send a POST request to create and and an item to a shopping list
//Requires 5 attributes + a JWT token
//1# 'name'(string) of item
//2# 'quantity'(int) of item
//3# 'quantityunit'(string) of item
//4# 'purchased'(bool) status
//5# 'shoppinglistid'(string) of shopping list
function POSTShoppingListItem() {
  let name = document.getElementById("post_shopping_list_item_name").value;
  let quantity = parseInt(document.getElementById("post_shopping_list_item_quantity").value);
  let quantityunit = document.getElementById("post_shopping_list_item_quantity_unit").value;
  let purchased = document.getElementById("post_shopping_list_item_purchased").checked;
  let shoppinglistid = document.getElementById("post_shopping_list_item_list_id").value;
  let token = localStorage.getItem('jwtKey');
  fetch("https://localhost/api/shopping-list/items/", {
      method: "POST",
      body: JSON.stringify({
        "name": name,
        "quantity": quantity,
        "quantityUnit": quantityunit,
        "purchased": purchased,
        "shoppingListId": shoppinglistid
        }),
      headers: {
        "Authorization": "Bearer " + token,
        "Content-type": "application/json; charset=UTF-8"
      }
  })
  .then(response => response.text())
  .then(text => console.log(text))
  .catch(error => console.log('Error:', error));
  console.log("SHI POST", "Name:", name, "Quantity:", quantity, "Quantity Type:", quantityunit, "Purchased Status:", purchased, "SL Id:", shoppinglistid);
}

//Send a PATCH request to edit an existing item in a shopping list
//Requires 5 attributes + a JWT token
//1# 'name'(string) of item
//2# 'quantity'(int) of item
//3# 'quantityunit'(string) of item
//4# 'purchased'(bool) status
//5# 'shoppinglistid'(string) of shopping list
function PATCHShoppingListItem() {
  let name = document.getElementById("patch_shopping_list_item_name").value;
  let quantity = parseInt(document.getElementById("patch_shopping_list_item_quantity").value);
  let quantityunit = document.getElementById("patch_shopping_list_item_quantity_unit").value;
  let purchased = document.getElementById("patch_shopping_list_item_purchased").checked;
  let shoppinglistid = document.getElementById("patch_shopping_list_item_list_id").value;
  let token = localStorage.getItem('jwtKey');
  fetch("https://localhost/api/shopping-list/items/", {
      method: "PATCH",
      body: JSON.stringify({
        "name": name,
        "quantity": quantity,
        "quantityUnit": quantityunit,
        "purchased": purchased,
        "shoppingListId": shoppinglistid
        }),
      headers: {
        "Authorization": "Bearer " + token,
        "Content-type": "application/json; charset=UTF-8"
      }
  })
  .then(response => response.text())
  .then(text => console.log(text))
  .catch(error => console.log('Error:', error));
  console.log("SHI PATCH", "Name:", name, "Quantity:", quantity, "Quantity Type:", quantityunit, "Purchased Status:", purchased, "SL Id:", shoppinglistid);
}

//Send a DELETE request to delete an existing item in shopping list
//Requires 1 attributes + a JWT token
//1# 'id'(string) of item in shopping list
function DELETEShoppingListItemId(id) {
  let token = localStorage.getItem('jwtKey');
  fetch("https://localhost/api/shopping-list/items/"+id+"/", {
      method: "DELETE",
      headers: {
        "Authorization": "Bearer " + token,
        "Content-type": "application/json; charset=UTF-8"
      }
  })
  .then(response => response.text())
  .then(text => console.log(text))
  .catch(error => console.log('Error:', error));
}