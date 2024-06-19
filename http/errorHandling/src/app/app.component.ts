// app.component.ts

import { Component, OnInit } from '@angular/core';
import { DataService } from './data-service.service';

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="errorMessage">{{ errorMessage }}</div>
    <div *ngIf="!errorMessage">
      <pre>{{ data | json }}</pre>
    </div>
  `,
})
export class AppComponent implements OnInit {
  data: any;
  errorMessage: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.fetchData().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }
}
