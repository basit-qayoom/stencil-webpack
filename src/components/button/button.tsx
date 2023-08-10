import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-button',
  shadow: true, // Enable Shadow DOM
})
export class MyButton {
  render() {
    return (
      <button>
        Button
      </button>
    );
  }
}