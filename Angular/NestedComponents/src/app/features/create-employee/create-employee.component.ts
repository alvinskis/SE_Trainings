import { Component, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/core/services/models/employee.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  public employeeId: number;
  public employeeName: string;
  public location: string;
  @Output() public employeeList = new EventEmitter<Employee>();

  constructor() { }

  ngOnInit(): void {
  }

  public AddEmployee(): void {
    if (this.employeeId === undefined || this.employeeName === undefined || this.location === undefined) {
      alert('No Employee Records Found');
    }
    else {
      this.employeeList.emit({ employeeId: this.employeeId, employeeName: this.employeeName, location: this.location });
    }
  }

}
