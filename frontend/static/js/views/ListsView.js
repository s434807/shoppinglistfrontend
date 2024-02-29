import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.listId = params.id;
        this.setTitle("Viewing List");
    }

    async getHtml() {
        return `
            <h1>This is list id </h1>
            <p>You are currently viewing it</p>

            <div style="text-align:center" class="container">
            <!-- section title -->
            <div class="row mt-3">
                <div class="col-12 text-center">
                    <h1>Add an item</h1>
                </div>
            </div>
            <!-- section city name -->
            <div class="row mt-3">
                <div class="col-12">
                    <div class="input-group">
                        <input id="post_shopping_list_item_name" type="text" class="form-control" placeholder="Name">
                        <input id="post_shopping_list_item_quantity" type="text" class="form-control" placeholder="Quantity">
                        <input id="post_shopping_list_item_quantity_unit" type="text" class="form-control" placeholder="Quantity unit">
                        <input id="post_shopping_list_item_purchased" type="checkbox" class="form-control" placeholder="Purchased">
                        <label for="post_shopping_list_item_purchased">Purchased</label>
                        <input id="post_shopping_list_item_list_id" type="text" class="form-control" placeholder="List id">
                        <div class="input-group-append">
                            <button onclick="POSTShoppingListItem()" id="button_post_shopping_list_item" class="btn btn-primary" type="button">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
