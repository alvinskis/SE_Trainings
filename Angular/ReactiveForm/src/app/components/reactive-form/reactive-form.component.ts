import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { CustomValidatorsService } from 'src/app/core/services/custom-validators.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  employeeForm: FormGroup;
  jobRoles = this.customValidators.JobRoles();

  get employeeExperience(): FormArray {
    return this.employeeForm.get('employeeExperience') as FormArray;
  }

  constructor(private formBuilder: FormBuilder, private customValidators: CustomValidatorsService) { }

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      userName: ['', [Validators.required, this.customValidators.CapitalLettersRule()]],
      email: ['', [Validators.required, Validators.email]],
      addExperience: false,
      employeeExperience: this.formBuilder.array([this.buildEmployeeExperience()])
    });
  }

  OnSubmit() {
  }

  addEmployeeExperience() {
    this.employeeExperience.push(this.buildEmployeeExperience());
  }

  buildEmployeeExperience(): FormGroup {
    return this.formBuilder.group({
      companyName: ['', [Validators.required, this.customValidators.CompanyNameValidator()]],
      jobTitle: '',
      totalExperience: '',
      fromDate: '',
      toDate: '',
      skills: ''
    });
  }

}
