import { Injectable } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {
  public employeeData: Employee[];

  constructor() {
    this.employeeData = [{
      employeeId: 1,
      employeeName: 'Ayesha',
      projectId: 100,
      angularProficiency: 'Good'
    }, {
      employeeId: 2,
      employeeName: 'Lukas',
      projectId: 101,
      angularProficiency: 'Very Good'
    }, {
      employeeId: 3,
      employeeName: 'Tusani',
      projectId: 102,
      angularProficiency: 'Good'
    }, {
      employeeId: 4,
      employeeName: 'Deeksha',
      projectId: 103,
      angularProficiency: 'Excellent'
    }, {
      employeeId: 5,
      employeeName: 'Vaida',
      projectId: 101,
      angularProficiency: 'Excellent'
    }];
  }

  public getEmployeeList(): Employee[] {
    return this.employeeData;
  }
}
