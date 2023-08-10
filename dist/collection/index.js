import { h } from "@stencil/core";
export class MyApp {
  render() {
    return h("div", null, h("hr", null), h("my-timer", null), h("hr", null), h("my-button", null), h("hr", null), h("my-form", null), h("hr", null), h("my-input", null), h("hr", null), h("text-field", { text: 'Hello from text stencil component--- hey basit' }));
  }
  static get is() { return "my-app"; }
  static get encapsulation() { return "shadow"; }
}
