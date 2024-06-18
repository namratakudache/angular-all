import { Component } from '@angular/core';

@Component({
  //selector:<app-root></app-root>//using html tag
  // selector: '.app-root',//using class
  selector: '[app-root]', //using attribute
  template: `<h1>Hello {{ title }}</h1>
    <h1>{{ 'Welcome ' + getText() }}</h1>
    <h1>Decimal Number:{{ number }}</h1>
    <h1>Formatted Number:{{ number | number : '1.2-2' }}</h1>
    <h2>Original Price:{{ price }}</h2>
    <p>Formatted Price (USD): {{ price | currency : 'USD' }}</p>
    <p>Formatted Price (EUR): {{ price | currency : 'EUR' }}</p>
    <p>Formatted Price (JPY): {{ price | currency : 'JPY' }}</p>
    <p>
      Formatted Price (INR, Indian Locale):
      {{ price | currency : 'INR' : 'symbol' : '4.2-2' : 'en-IN' }}
    </p>

    <!-- formats the number to have at least 1 digit, 2 decimal places, and at most 2 decimal places. -->
    // <app-test></app-test> `,
  styles: [
    `
      h1 {
        color: green;
      }
    `,
  ],
})
export class AppComponent {
  title = 'Namrata';
  isDisabled = false;
  getText() {
    return 'Kudache';
  }
  number = 2345.4444;
  price = 1234.4566;
}
//interpolation cannot assign the to variables.
