import { Injectable } from '@angular/core';

export interface Employee {
  id: number;
  name: string;
  position: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employees: Employee[] = [
    { id: 1, name: 'John Doe', position: 'Developer' },
    { id: 2, name: 'Jane Smith', position: 'Designer' },
    { id: 3, name: 'Jim Brown', position: 'Manager' },
  ];

  constructor() {}

  getEmployees(): Employee[] {
    return this.employees;
  }
}
