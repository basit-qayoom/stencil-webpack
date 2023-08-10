import { h } from "@stencil/core";
export class MyForm {
  constructor() {
    this.handleSubmit = (event) => {
      event.preventDefault();
      alert(`Email: ${this.email}\nPassword: ${this.password}`);
    };
    this.handleEmailChange = (event) => {
      const inputElement = event.target;
      this.email = inputElement.value;
    };
    this.handlePasswordChange = (event) => {
      const inputElement = event.target;
      this.password = inputElement.value;
    };
    this.email = '';
    this.password = '';
  }
  render() {
    return (h("form", { onSubmit: this.handleSubmit }, h("div", null, h("label", { htmlFor: "email" }, "Email:"), h("input", { type: "email", id: "email", value: this.email, onInput: this.handleEmailChange, required: true })), h("div", null, h("label", { htmlFor: "password" }, "Password:"), h("input", { type: "password", id: "password", value: this.password, onInput: this.handlePasswordChange, required: true })), h("button", { type: "submit" }, "Submit")));
  }
  static get is() { return "my-form"; }
  static get encapsulation() { return "shadow"; }
  static get states() {
    return {
      "email": {},
      "password": {}
    };
  }
}
