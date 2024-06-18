import { Component } from '@angular/core';

@Component({
  selector: 'app-keyword-display',
  templateUrl: './keyword-display.component.html',
  styleUrls: ['./keyword-display.component.css'],
})
export class KeywordDisplayComponent {
  text: string =
    'Angular is a platform for building mobile and desktop web applications. Angular is built on TypeScript.';
  keyword: string = 'Angular';
}
