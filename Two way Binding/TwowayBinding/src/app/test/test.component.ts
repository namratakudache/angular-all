import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<p>Child Component</p>
    <input [(ngModel)]="childData" placeholder="Enter child data" />
    <p>Child Data: {{ childData }}</p>`,
  styleUrl: './test.component.css',
})
export class TestComponent {
  private _childData: string = '';

  @Input()
  get childData(): string {
    return this._childData;
  }

  set childData(value: string) {
    this._childData = value;
    this.childDataChange.emit(this._childData);
  }

  @Output() childDataChange = new EventEmitter<string>();
}
