import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'my-input',
  shadow: true, // Enable Shadow DOM
})
export class MyInput {
  @State()
  private inputText: string = '';

  private handleInputChange = (event: Event) => {
    const inputElement = event.target as HTMLInputElement;
    this.inputText = inputElement.value;
  };

  render() {
    return (
      <div>
        <label htmlFor="inputField">Input:</label>
        <input
          type="text"
          id="inputField"
          value={this.inputText}
          onInput={this.handleInputChange}
          placeholder='Write here'
        />
        <p>Text: {this.inputText}</p>
      </div>
    );
  }
}