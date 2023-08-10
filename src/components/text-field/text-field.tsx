import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'text-field',
  shadow: true,
})
export class TextField {
  /**
   * The text to display as an h1 element.
   */
  @Prop() text: string;

  render() {
    return (
      <div>
        <h2>Text Field Element</h2>
        <h1>{this.text}</h1>
      </div>
    );
  }
}
