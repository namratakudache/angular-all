import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Component Interaction using Input Decorator</h1>
    <app-test [message]="parentMessage"></app-test>
    <h1>Component Interaction using Output Decorator</h1>
    <app-test (messageEvent)="recieveMessage($event)"></app-test>
    <p>Message from Child:{{ message }}</p>
  `,
  styles: './app.component.css',
})
export class AppComponent {
  title = 'Component Interaction';
  parentMessage = 'Message from parent to child';
  message: string = '';
  recieveMessage(message: string) {
    this.message = message;
  }
}
