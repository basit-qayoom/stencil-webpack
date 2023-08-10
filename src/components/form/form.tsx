import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'my-form',
  shadow: true, // Enable Shadow DOM
})
export class MyForm {
  @State()
  email: string = '';

  @State()
  password: string = '';

  handleSubmit = (event: Event) => {
    event.preventDefault();
    alert(`Email: ${this.email}\nPassword: ${this.password}`);
  };

  handleEmailChange = (event: Event) => {
    const inputElement = event.target as HTMLInputElement;
    this.email = inputElement.value;
  };

  handlePasswordChange = (event: Event) => {
    const inputElement = event.target as HTMLInputElement;
    this.password = inputElement.value;
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={this.email}
            onInput={this.handleEmailChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={this.password}
            onInput={this.handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}