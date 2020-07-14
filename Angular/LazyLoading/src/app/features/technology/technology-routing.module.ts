import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechnologyComponent } from './technology.component';
import { CEOComponent } from './software-engineering-levels/ceo/ceo.component';


const routes: Routes = [
  {
    path: '', component: TechnologyComponent,
    children: [
      { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
      {
        path: 'sel', loadChildren: () => import('./software-engineering-levels/software-engineering-levels.module').then(m => m.SoftwareEngineeringLevelsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnologyRoutingModule { }
