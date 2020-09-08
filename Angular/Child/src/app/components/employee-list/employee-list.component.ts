import { Component, OnInit, Input, ContentChild, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { Employee } from 'src/app/core/models/employee.model';
import { EmployeeSalaryComponent } from '../employee-salary/employee-salary.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit, AfterContentInit {

  @ContentChild(EmployeeSalaryComponent) employeeYear: EmployeeSalaryComponent;

  @ContentChildren(EmployeeSalaryComponent) employeeSalaryList: QueryList<EmployeeSalaryComponent>;

  @Input() employee: Employee;

  constructor() { }

  ngAfterContentInit(): void {
    this.employeeYear.salary.year = 2015;

    this.employeeSalaryList.toArray().forEach((salaryElement) => {
      salaryElement.salary.salary = 1900;
    });

  }

  ngOnInit(): void {
  }
}
