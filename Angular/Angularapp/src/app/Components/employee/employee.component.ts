import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  emp: Employee[];
  constructor() {
    this.emp = [{
      id: 1,
      name: 'Mayura',
      location: 'Pune',
      isActive: true
    },
    {
      id: 2,
      name: 'Sam',
      location: 'Pune',
      isActive: false
    },
    {
      id: 3,
      name: 'Swathi',
      location: 'Pune',
      isActive: true
    },
    {
      id: 4,
      name: 'Modestas',
      location: 'Vilnius',
      isActive: false
    }
    ];
  }

  ngOnInit(): void {
  }

}
