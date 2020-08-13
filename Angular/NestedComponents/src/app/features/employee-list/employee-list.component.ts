import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/core/services/models/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  @Input() public employeeList: Employee[];
  constructor() { }

  ngOnInit(): void {
  }

}
