import { h } from "@stencil/core";
export class MyInput {
  constructor() {
    this.handleInputChange = (event) => {
      const inputElement = event.target;
      this.inputText = inputElement.value;
    };
    this.inputText = '';
  }
  render() {
    return (h("div", null, h("label", { htmlFor: "inputField" }, "Input:"), h("input", { type: "text", id: "inputField", value: this.inputText, onInput: this.handleInputChange, placeholder: 'Write here' }), h("p", null, "Text: ", this.inputText)));
  }
  static get is() { return "my-input"; }
  static get encapsulation() { return "shadow"; }
  static get states() {
    return {
      "inputText": {}
    };
  }
}
