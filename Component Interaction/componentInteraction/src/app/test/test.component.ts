import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<p>{{ message }}</p>
    <p>from child to parent</p>
    <button (click)="sendMessage()">Message from Child to parent</button>`,
  styles: './test.component.css',
})
export class TestComponent {
  @Input() message!: string;
  @Output() messageEvent = new EventEmitter<string>();
  sendMessage() {
    this.messageEvent.emit('Hello from Child');
  }
}
