import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { Employee } from 'src/app/core/models/employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private _employeeService: EmployeeService) { }

  public employeeDetails: Employee;

  ngOnInit(): void {
    this._route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.employeeDetails = this.getEmployeeDetails(id);
    });
  }

  getEmployeeDetails(id: number): Employee {
    return this._employeeService.getEmployeesById(id);
  }

}
