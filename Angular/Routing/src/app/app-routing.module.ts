import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './features/employees/employees.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { HomePageComponent } from './features/home-page/home-page.component';
import { OptionalParameterRoutingComponent } from './features/optional-parameter-routing/optional-parameter-routing.component';
import { ObservablesComponent } from './features/observables/observables.component';
import { EmployeeDetailsComponent } from './features/employee-details/employee-details.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'opr', component: OptionalParameterRoutingComponent },
  { path: 'observables', component: ObservablesComponent },
  { path: 'details/:id', component: EmployeeDetailsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EmployeesComponent, PageNotFoundComponent, HomePageComponent, OptionalParameterRoutingComponent, ObservablesComponent, EmployeeDetailsComponent];
