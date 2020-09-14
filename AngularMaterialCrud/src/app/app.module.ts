import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeService } from './core/services/employee.service';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { EmployeeChartDataComponent } from './components/employee-chart-data/employee-chart-data.component';
import { ChartsModule, ThemeService } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    EmployeeDetailsComponent,
    EditEmployeeComponent,
    EmployeeChartDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [EmployeeService, ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
