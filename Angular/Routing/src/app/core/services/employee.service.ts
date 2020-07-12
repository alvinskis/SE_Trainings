import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { EmployeeSalary } from '../models/employee-salary';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public employee: Employee[];

  public employeeSalary = from([
    { id: 1, firstName: 'James', salary: 2100 }
  ]);

  constructor(private http: HttpClient) {
    this.employee = [{
      id: 1,
      firstName: 'James',
      lastName: 'Smith',
      email: 'james.s@gmail.com',
      department: 'Technology',
      hireDate: '2016-03-16',
      salary: 2100
    },
    {
      id: 2,
      firstName: 'John',
      lastName: 'Johnson',
      email: 'john.johnson@gmail.com',
      department: 'Sales',
      hireDate: '2010-05-18',
      salary: 2500
    },
    {
      id: 3,
      firstName: 'Robert',
      lastName: 'Williams',
      email: 'r.williams@gmail.com',
      department: 'HR',
      hireDate: '2015-08-20',
      salary: 1600
    },
    {
      id: 4,
      firstName: 'Jennifer',
      lastName: 'Davis',
      email: 'jennifer.davis@gmail.com',
      department: 'HR',
      hireDate: '2019-09-03',
      salary: 1500
    },
    {
      id: 5,
      firstName: 'Patricia',
      lastName: 'Wilson',
      email: 'patricia.w@gmail.com',
      department: 'Technology',
      hireDate: '2010-01-18',
      salary: 3000
    },
    {
      id: 6,
      firstName: 'Mary',
      lastName: 'Anderson',
      email: 'mary.anderson@gmail.com',
      department: 'Sales',
      hireDate: '2017-08-28',
      salary: 2000
    }];
  }

  getEmployees(): Employee[] {
    return this.employee;
  }

  getEmployeesById(id: number): Employee {
    return this.employee.find(x => x.id === id);
  }

  getEmployeeSalary(): Observable<EmployeeSalary> {
    return this.employeeSalary;
  }
}
