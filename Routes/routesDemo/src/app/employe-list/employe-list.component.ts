import { Component } from '@angular/core';

@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrl: './employe-list.component.css',
})
export class EmployeListComponent {
  public employees = [
    { id: 1, name: 'E1' },
    { id: 2, name: 'E2' },
  ];
}
