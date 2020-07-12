import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeService } from './core/services/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { ObservablesComponent } from './features/observables/observables.component';
import { EmployeeDetailsComponent } from './features/employee-details/employee-details.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ObservablesComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
