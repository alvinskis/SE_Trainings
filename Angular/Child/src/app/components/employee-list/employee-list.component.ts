import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { Employee } from 'src/app/core/models/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  public employees: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
  }

}
