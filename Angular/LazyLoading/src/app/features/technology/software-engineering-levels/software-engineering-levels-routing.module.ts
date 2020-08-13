import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SoftwareEngineeringLevelsComponent } from './software-engineering-levels.component';


const routes: Routes = [
  { path: '', component: SoftwareEngineeringLevelsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoftwareEngineeringLevelsRoutingModule { }
