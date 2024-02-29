import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Lists");
    }
    
    async getHtml() {
        return `
            <h1>These are all of your lists</h1>
            <p>You are viewing the lists!</p>

            <div style="text-align:center" class="container">
            <!-- section title -->
            <div class="row mt-3">
                <div class="col-12 text-center">
                    <h1>Make a shopping list</h1>
                </div>
            </div>
            <!-- section city name -->
            <div class="row mt-3">
                <div class="col-12">
                    <div class="input-group">
                        <input id="post_shopping_list_name" type="text" class="form-control" placeholder="Name it!">
                        <input id="post_shopping_list_fulfilled" type="checkbox" class="form-control">
                        <label for="post_shopping_list_fulfilled">Fulfilled</label>
                        <div class="input-group-append">
                            <button onclick="POSTShoppingList()" id="button_post_shopping_list" class="btn btn-primary" type="button">Make 'em!</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div style="text-align:center" class="container">
            <!-- section title -->
            <div class="row mt-3">
                <div class="col-12 text-center">
                    <h1>Get your shopping lists</h1>
                </div>
            </div>
            <!-- section city name -->
            <div class="row mt-3">
                <div class="col-12">
                    <div class="input-group">
                        <div class="input-group-append">
                            <button onclick="GETShoppingList()" id="button_get_shopping_list" class="btn btn-primary" type="button">Grab 'em!</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div style="text-align:center" class="container">
            <!-- section title -->
            <div class="row mt-3">
                <div class="col-12 text-center">
                    <h1>Get a list of a speific ID</h1>
                </div>
            </div>
            <!-- section city name -->
            <div class="row mt-3">
                <div class="col-12">
                    <div class="input-group">
                        <input id="get_shopping_list_id" type="text" class="form-control" placeholder="Id">
                        <div class="input-group-append">
                            <button onclick="GETShoppingListId()" id="button_get_shopping_list" class="btn btn-primary" type="button">Grab it!</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div style="text-align:center" class="container">
            <!-- section title -->
            <div class="row mt-3">
                <div class="col-12 text-center">
                    <h1>Delete a shopping list</h1>
                </div>
            </div>
            <!-- section city name -->
            <div class="row mt-3">
                <div class="col-12">
                    <div class="input-group">
                        <input id="delete_shopping_list_id" type="text" class="form-control" placeholder="Id">
                        <div class="input-group-append">
                            <button onclick="DELETEShoppingListId()" id="button_get_shopping_list" class="btn btn-primary" type="button">Trash it!</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        `;
    }
}