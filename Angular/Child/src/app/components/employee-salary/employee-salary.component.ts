import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/core/models/employee.model';

@Component({
  selector: 'app-employee-salary',
  templateUrl: './employee-salary.component.html',
  styleUrls: ['./employee-salary.component.scss']
})
export class EmployeeSalaryComponent implements OnInit {

  @Input() salary: any;

  constructor() { }

  ngOnInit(): void {
  }

}
