import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { EmployeeChartDataComponent } from './components/employee-chart-data/employee-chart-data.component';


const routes: Routes = [
  { path: 'employees', component: EmployeeComponent },
  { path: 'details/:id', component: EmployeeDetailsComponent },
  { path: 'edit/:id', component: EditEmployeeComponent },
  { path: 'add', component: AddEmployeeComponent },
  { path: 'stat', component: EmployeeChartDataComponent },
  { path: '', redirectTo: '/employees', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
