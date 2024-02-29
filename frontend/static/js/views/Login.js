import AbstractView from "./AbstractView.js";


export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Login");
    }

    async getHtml() {
        return `
        <div style="text-align:center" class="container">
        <!-- section title -->
        <div class="row mt-3">
            <div class="col-12 text-center">
                <h1>Mock login screen</h1>
            </div>
        </div>
        <!-- section city name -->
        <div class="row mt-3">
            <div class="col-12">
                <div class="input-group">
                    <input id="login_login" type="text" class="form-control" placeholder="Login">
                    <input id="login_password" type="text" class="form-control" placeholder="Password">
                    <div class="input-group-append">
                        <button onclick="accountLogin()" id="button_login" class="btn btn-primary" type="button">Attempt Login</button>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}