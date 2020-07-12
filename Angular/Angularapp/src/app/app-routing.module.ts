import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomPipesComponent } from './Components/custom-pipes/custom-pipes.component';
import { DirectivesComponent } from './Components/directives/directives.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { PipesComponent } from './Components/pipes/pipes.component';


const routes: Routes = [
  { path: 'custom-pipes', component: CustomPipesComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: '', component: EmployeeComponent },
  { path: 'pipes', component: PipesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CustomPipesComponent, DirectivesComponent, EmployeeComponent, PipesComponent];
