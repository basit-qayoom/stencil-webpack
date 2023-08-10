import { r as registerInstance, h } from './index-e1d51ed0.js';

const MyApp = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h("div", null, h("hr", null), h("my-timer", null), h("hr", null), h("my-button", null), h("hr", null), h("my-form", null), h("hr", null), h("my-input", null), h("hr", null), h("text-field", { text: 'Hello from text stencil component--- hey basit' }));
  }
};

const MyButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("button", null, "Button"));
  }
};

const MyForm = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};

const MyInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.handleInputChange = (event) => {
      const inputElement = event.target;
      this.inputText = inputElement.value;
    };
    this.inputText = '';
  }
  render() {
    return (h("div", null, h("label", { htmlFor: "inputField" }, "Input:"), h("input", { type: "text", id: "inputField", value: this.inputText, onInput: this.handleInputChange, placeholder: 'Write here' }), h("p", null, "Text: ", this.inputText)));
  }
};

const MyTimer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.timerInSeconds = 0;
    setInterval(() => {
      this.timerInSeconds++;
    }, 1000);
  }
  render() {
    return (h("p", null, "Here is running timer ", this.timerInSeconds, " Seconds"));
  }
};

const TextField = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.text = undefined;
  }
  render() {
    return (h("div", null, h("h2", null, "Text Field Element"), h("h1", null, this.text)));
  }
};

export { MyApp as my_app, MyButton as my_button, MyForm as my_form, MyInput as my_input, MyTimer as my_timer, TextField as text_field };
