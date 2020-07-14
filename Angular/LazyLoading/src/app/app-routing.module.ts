import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './features/home-page/home-page.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'technology', loadChildren: () => import('./features/technology/technology.module').then(m => m.TechnologyModule) },
  { path: 'salesMarketing', loadChildren: () => import('./features/sales-marketing/sales-marketing.module').then(m => m.SalesMarketingModule) },
  { path: 'humanResources', loadChildren: () => import('./features/human-resources/human-resources.module').then(m => m.HumanResourcesModule) },
  { path: 'home', component: HomePageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomePageComponent, PageNotFoundComponent];
