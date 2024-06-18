import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from './employee-service.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Employee List</h1>
    <ul>
      <li *ngFor="let employee of employees">
        {{ employee.name }} - {{ employee.position }}
      </li>
    </ul>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
  }
}
