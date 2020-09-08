import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public employee: Employee[];

  public employeeSalary = [{
    year: 2010,
    salary: 1500
  },
  {
    year: 2020,
    salary: 3000
  }];

  constructor() {
    this.employee = [{
      id: 1,
      firstName: 'James',
      lastName: 'Smith',
      salary: this.employeeSalary
    },
    {
      id: 2,
      firstName: 'John',
      lastName: 'Johnson',
      salary: this.employeeSalary
    },
    {
      id: 3,
      firstName: 'Robert',
      lastName: 'Williams',
      salary: this.employeeSalary
    }];
  }

  public getEmployees(): Employee[] {
    return this.employee;
  }
}
