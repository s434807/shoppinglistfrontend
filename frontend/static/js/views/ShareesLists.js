import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Sharees Lists");
    }

    async getHtml() {
        return `
            <h1>Sharee Lists</h1>
            <p>You are viewing lists shared to you!</p>
        `;
    }
}