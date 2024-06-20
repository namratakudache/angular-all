import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrl: './department-details.component.css',
})
export class DepartmentDetailsComponent {
  public id: any;
  constructor(private route: ActivatedRoute) {
    this.id = parseInt(this.route.snapshot.paramMap.get('id') ?? '0');
  }
}
