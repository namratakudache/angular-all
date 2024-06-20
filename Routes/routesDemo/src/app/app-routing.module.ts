import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeListComponent } from './employe-list/employe-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';

const routes: Routes = [
  { path: 'empty', redirectTo: '/department', pathMatch: 'full' },
  { path: 'department', component: DepartmentListComponent },
  { path: 'department/:id', component: DepartmentDetailsComponent },
  { path: 'employees', component: EmployeListComponent },
  { path: '**', component: PageNotFoundComponent },
];
// WildcardsRoutes:"**"
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
