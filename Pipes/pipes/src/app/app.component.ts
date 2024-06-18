import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <h1>Pipes</h1>
    <p>Today's date is {{ today | date }}</p>
    <p>Custom formatted date:{{ today | date : 'fullDate' }}</p>
    <p>Short Time:{{ today | date : 'shortTime' }}</p>
    <p>Name:{{ name | uppercase }}</p>
    <p>Company:{{ company | titlecase }}</p>
    <p>Price:{{ price | currency }}</p>
    <p>Currency:{{ price | currency : 'EUR' }}</p>
    <p>
      Custom currency format: {{ price | currency : 'USD' : true : '4.2-2' }}
    </p>
    <p>{{ 'Helloo Dear' | slice : 0 : 6 }}</p>
    <p>{{ [1, 2, 3, 4, 5] | slice : 1 : 4 }}</p>
    <p>{{ employee | json }}</p>
    <p>Standard percentage:{{ decimalValue | percent }}</p>
    <p>Negative Percentage:{{ negative | percent }}</p>
    <p>Large Pecentage:{{ largeValue | percent }}</p>`,
  styles: './app.component.css',
})
export class AppComponent {
  title = 'pipes';
  today: number = Date.now();
  name: string = 'abcd';
  company: string = 'Osi Digital';
  price: number = 12345.6789;
  employee: object = { name: 'John', age: 30, address: { city: 'New York' } };
  decimalValue: number = 0.1234;
  negative: number = -0.3444;
  largeValue: number = 5.2345;
}
