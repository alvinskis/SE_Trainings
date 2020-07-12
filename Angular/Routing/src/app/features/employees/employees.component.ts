import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/core/models/employee.model';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  constructor(private _employeeService: EmployeeService, private _router: Router) { }

  public employees: Employee[];

  ngOnInit(): void {
    this.employees = this._employeeService.getEmployees();
  }

  fetchId(employee): void {
    this._router.navigate(['/details', employee.id]);
  }

}
