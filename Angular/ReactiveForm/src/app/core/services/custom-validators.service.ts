import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorsService {
  companyNames: Array<string> = ['Infosys', 'Cognizant', 'Capgemini', 'SAP', 'Hewlett Packard Enterprise', 'Accenture', 'Oracle', 'IBM', 'Microsoft Corporation'];

  jobRoles: Array<string> = ['Product Manager', 'AI Engineer', 'Software Engineer', 'Cloud Architect', 'DevOps Engineer', 'Blockchain Engineer', 'Software Architect', 'Big Data Engineer', 'IoT Solutions Architect', 'Data Scientist'];

  constructor() { }

  CapitalLettersRule(): ValidatorFn {
    return (capital: AbstractControl): ValidationErrors => {
      if (capital.value !== null && capital.value !== capital.value.toUpperCase()) {
        return { capitalLetters: true };
      }
      return null;
    };
  }

  CompanyNameValidator(): ValidatorFn {
    return (companyName: AbstractControl): ValidationErrors => {
      if (!this.companyNames.includes(companyName.value)) {
        return { isCompanyName: true };
      }
      return null;
    };
  }

  JobRoles(): Array<string> {
    return this.jobRoles;
  }
}
