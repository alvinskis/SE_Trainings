import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/core/services/models/employee.model';

@Component({
  selector: 'app-store-records',
  templateUrl: './store-records.component.html',
  styleUrls: ['./store-records.component.scss']
})
export class StoreRecordsComponent implements OnInit {
  public employeeList: Employee[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  RecordEmployee(createEmployeeEvent) {
    this.employeeList.push(createEmployeeEvent);
  }

}
