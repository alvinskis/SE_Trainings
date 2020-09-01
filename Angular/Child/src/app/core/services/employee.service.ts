import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public employee: Employee[];

  constructor() {
    this.employee = [{
      id: 1,
      firstName: 'James',
      lastName: 'Smith'
    },
    {
      id: 2,
      firstName: 'John',
      lastName: 'Johnson'
    },
    {
      id: 3,
      firstName: 'Robert',
      lastName: 'Williams'
    }];
  }

  public getEmployees(): Employee[] {
    return this.employee;
  }
}
