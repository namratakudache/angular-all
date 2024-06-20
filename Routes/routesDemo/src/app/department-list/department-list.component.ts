import { Component } from '@angular/core';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css'], // Use styleUrls with an array
})
export class DepartmentListComponent {
  public departments = [
    { id: 1, name: 'IT' },
    { id: 2, name: 'Sales' },
  ];
}
