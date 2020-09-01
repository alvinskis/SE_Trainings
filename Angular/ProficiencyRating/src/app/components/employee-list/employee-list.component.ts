import { Component, OnInit, Output } from '@angular/core';
import { EmployeeDataService } from 'src/app/core/services/employee-data.service';
import { Employee } from 'src/app/models/employee.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  public employeeData: Employee[];
  @Output() public proficiencyRating = new EventEmitter<string>();

  constructor(private employeeService: EmployeeDataService) { }

  ngOnInit(): void {
    this.employeeData = this.employeeService.getEmployeeList();
  }

  public getProficiencyRating(proficiencyRating: string) {
    this.proficiencyRating.emit(proficiencyRating);
  }
}
