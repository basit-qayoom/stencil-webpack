import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-app',
  shadow: true,
})
export class MyApp {
  render() {
    return <div>
      <hr />
      <my-timer></my-timer>
      <hr />
      <my-button></my-button>
      <hr />
      <my-form></my-form>
      <hr />
      <my-input></my-input>
      <hr />
      <text-field text='Hello from text stencil component--- hey basit'></text-field>
    </div>;
  }
}