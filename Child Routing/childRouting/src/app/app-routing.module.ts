import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';

import { DetailsComponent } from './details/details.component';
import { DepartmentComponent } from './department/department.component';
import { EmpInfoComponent } from './emp-info/emp-info.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'details',
        component: DetailsComponent,
      },
    ],
  },
  {
    path: 'employee',
    component: EmployeeComponent,
    children: [
      {
        path: 'department',
        component: DepartmentComponent,
      },
      { path: 'empInfo', component: EmpInfoComponent },
    ],
  },
  { path: 'user', component: UserComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
