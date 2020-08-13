import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Resolve } from '@angular/router';
import { EmployeeService } from './employee.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveService implements Resolve<Employee[]> {

  constructor(private employeeService: EmployeeService) { }

  resolve(): Employee[] {
    return this.employeeService.getEmployees();
  }
}
