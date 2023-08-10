'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-43298a15.js');

const MyApp = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return index.h("div", null, index.h("hr", null), index.h("my-timer", null), index.h("hr", null), index.h("my-button", null), index.h("hr", null), index.h("my-form", null), index.h("hr", null), index.h("my-input", null), index.h("hr", null), index.h("text-field", { text: 'Hello from text stencil component--- hey basit' }));
  }
};

const MyButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("button", null, "Button"));
  }
};

const MyForm = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h("form", { onSubmit: this.handleSubmit }, index.h("div", null, index.h("label", { htmlFor: "email" }, "Email:"), index.h("input", { type: "email", id: "email", value: this.email, onInput: this.handleEmailChange, required: true })), index.h("div", null, index.h("label", { htmlFor: "password" }, "Password:"), index.h("input", { type: "password", id: "password", value: this.password, onInput: this.handlePasswordChange, required: true })), index.h("button", { type: "submit" }, "Submit")));
  }
};

const MyInput = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.handleInputChange = (event) => {
      const inputElement = event.target;
      this.inputText = inputElement.value;
    };
    this.inputText = '';
  }
  render() {
    return (index.h("div", null, index.h("label", { htmlFor: "inputField" }, "Input:"), index.h("input", { type: "text", id: "inputField", value: this.inputText, onInput: this.handleInputChange, placeholder: 'Write here' }), index.h("p", null, "Text: ", this.inputText)));
  }
};

const MyTimer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.timerInSeconds = 0;
    setInterval(() => {
      this.timerInSeconds++;
    }, 1000);
  }
  render() {
    return (index.h("p", null, "Here is running timer ", this.timerInSeconds, " Seconds"));
  }
};

const TextField = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.text = undefined;
  }
  render() {
    return (index.h("div", null, index.h("h2", null, "Text Field Element"), index.h("h1", null, this.text)));
  }
};

exports.my_app = MyApp;
exports.my_button = MyButton;
exports.my_form = MyForm;
exports.my_input = MyInput;
exports.my_timer = MyTimer;
exports.text_field = TextField;
