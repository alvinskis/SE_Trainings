import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/core/models/employee';
import { EmployeeService } from 'src/app/core/services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  empForm: FormGroup;
  isDataLoading: boolean;

  constructor(private route: ActivatedRoute, private empService: EmployeeService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const empId = +params.get('id');
      if (empId) {
        this.getEmployee(empId);
      }
    });

    this.empForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      designation: ['', Validators.required],
      department: ['', Validators.required],
      Gender: ['', Validators.required]
    });
  }

  getEmployee(id: number) {
    this.empService.getEmployeeById(id).subscribe(
      (employee: Employee) => this.editEmployee(employee),
      (err: any) => console.log(err)
    );
  }

  editEmployee(employee: Employee) {
    this.empForm.patchValue({
      id: employee.id,
      name: employee.name,
      designation: employee.designation,
      department: employee.department,
      Gender: employee.Gender
    });
  }

  onFormSubmit() {
    this.isDataLoading = true;
    this.empService.updateEmployee(this.empForm.value).subscribe(res => {
      const id = res.id;
      this.isDataLoading = false;
      this.router.navigate(['/details', id]);
    });
  }
}
