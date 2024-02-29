import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.shareeslistId = params.id;
        this.setTitle("Sharee List");
    }

    async getHtml() {
        return `
            <h1>Shared list</h1>
            <p>You are viewing shared list #${this.shareeslistId}.</p>
        `;
    }
}
