import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'my-timer',
  shadow: true, // Enable Shadow DOM
})
export class MyTimer {
  @State()
  private timerInSeconds = 0;

  constructor() {
    setInterval(() => {
      this.timerInSeconds++;
    }, 1000);
  }

  render() {
    return (
      <p>
        Here is running timer {this.timerInSeconds} Seconds
      </p>
    );
  }
}