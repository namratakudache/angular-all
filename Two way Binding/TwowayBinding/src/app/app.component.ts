import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Two Way Data Binding</h1>
    <h1>ngIf Example</h1>
    <button (click)="toggle()">Toggle Message</button>
    <p *ngIf="showMessage">Hello, this message is conditionally displayed!</p>
    <h1>ngFor Example</h1>
    <ul>
      <li *ngFor="let item of items">{{ item }}</li>
    </ul>

    <input [(ngModel)]="parentData" placeholder="Enter some text" />
    <p>Parent Data: {{ parentData }}</p>

    <app-test [(childData)]="parentData"></app-test>
    <h1>ngSwitch Example</h1>
    <select [(ngModel)]="selectedValue">
      <option *ngFor="let option of options" [value]="option">
        {{ option }}
      </option>
    </select>

    <div [ngSwitch]="selectedValue">
      <p *ngSwitchCase="'Option 1'">You selected Option 1</p>
      <p *ngSwitchCase="'Option 2'">You selected Option 2</p>
      <p *ngSwitchCase="'Option 3'">You selected Option 3</p>
      <p *ngSwitchDefault>Select an option</p>
    </div>
    <h1>Template Reference Variables Example</h1>
    <input #inputElement type="text" placeholder="Enter some text" />
    <button (click)="logInputValue(inputElement)">Log Input Value</button>`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TwowayBinding';
  parentData: string = 'Initial parent data';
  showMessage: boolean = true;
  toggle() {
    this.showMessage = !this.showMessage;
  }
  items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  options: string[] = ['Option 1', 'Option 2', 'Option 3'];
  selectedValue: string = '';
  logInputValue(input: HTMLInputElement) {
    console.log(input.value);
  }
}
