import { h } from "@stencil/core";
export class MyTimer {
  constructor() {
    this.timerInSeconds = 0;
    setInterval(() => {
      this.timerInSeconds++;
    }, 1000);
  }
  render() {
    return (h("p", null, "Here is running timer ", this.timerInSeconds, " Seconds"));
  }
  static get is() { return "my-timer"; }
  static get encapsulation() { return "shadow"; }
  static get states() {
    return {
      "timerInSeconds": {}
    };
  }
}
