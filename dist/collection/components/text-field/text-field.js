import { h } from "@stencil/core";
export class TextField {
  constructor() {
    this.text = undefined;
  }
  render() {
    return (h("div", null, h("h2", null, "Text Field Element"), h("h1", null, this.text)));
  }
  static get is() { return "text-field"; }
  static get encapsulation() { return "shadow"; }
  static get properties() {
    return {
      "text": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The text to display as an h1 element."
        },
        "attribute": "text",
        "reflect": false
      }
    };
  }
}
