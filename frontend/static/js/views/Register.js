import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Register");
    }

    async getHtml() {
        return `
        <div style="text-align:center" class="container">
        <!-- section title -->
        <div class="row mt-3">
            <div class="col-12 text-center">
                <h1>Register screen</h1>
            </div>
        </div>
        <!-- section city name -->
        <div class="row mt-3">
            <div class="col-12">
                <div class="input-group">
                    <input id="register_login" type="text" class="form-control" placeholder="Login">
                    <input id="register_email" type="text" class="form-control" placeholder="Email">
                    <input id="register_password" type="text" class="form-control" placeholder="Password">
                    <div class="input-group-append">
                        <button onclick="accountRegister()" id="button_register" class="btn btn-primary" type="button">Attempt Login</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        `;
    }
}