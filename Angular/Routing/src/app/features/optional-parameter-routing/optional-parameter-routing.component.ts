import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { Employee } from 'src/app/core/models/employee.model';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';

@Component({
  selector: 'app-optional-parameter-routing',
  templateUrl: './optional-parameter-routing.component.html',
  styleUrls: ['./optional-parameter-routing.component.scss']
})
export class OptionalParameterRoutingComponent implements OnInit {

  constructor(private _employeeService: EmployeeService, private _router: Router, private _route: ActivatedRoute) { }

  public employeeSalary;
  public employeeName;

  public employees: Employee[];

  ngOnInit(): void {
    this.employees = this._employeeService.getEmployees();
    this._route.paramMap.subscribe((params: ParamMap) => {
      let salary = params.get('salary');
      let firstName = params.get('name');
      this.employeeSalary = salary;
      this.employeeName = firstName;
    })
  }

  onSelect(employee): void {
    this._router.navigate(['/opr', { salary: employee.salary, name: employee.firstName }]);
  }



}
