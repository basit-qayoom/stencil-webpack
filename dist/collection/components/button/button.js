import { h } from "@stencil/core";
export class MyButton {
  render() {
    return (h("button", null, "Button"));
  }
  static get is() { return "my-button"; }
  static get encapsulation() { return "shadow"; }
}
