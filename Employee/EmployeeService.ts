import { IEmployee } from "./IEmployee";
export class EmployeeService {
    emp: IEmployee[];
    details: any[];
    employee: any[];

    public getEmployees() {
        this.emp = [
            {
                id: 1,
                name: 'Mayura',
                designation: 'Trainer',
                department: 'Soft Eng',
                gender: 'Female'
            },

            {
                id: 2,
                name: 'Sam',
                designation: 'HR Manager',
                department: 'Human Resource',
                gender: 'Male'
            },
            {
                id: 3,
                name: 'James',
                designation: 'Escalation Manager',
                department: 'Support',
                gender: 'Male'
            },
            {
                id: 4,
                name: 'Smitha',
                designation: 'Data Testing Engineer',
                department: 'DTS',
                gender: 'Female'
            },
            {
                id: 5,
                name: 'Swathi',
                designation: 'Tech Lead',
                department: 'Soft Eng',
                gender: 'Female'
            },

        ]

        return this.emp;
    }

    public getEmployeesbyId(id: number): any {
        this.getEmployees();
        this.details = this.emp.filter(e => e.id === id);
        return this.details;
    }

    public getEmployeeCount(): number {
        return this.emp.length;
    }

    public getFemaleEmployeeCount(): number {
        return this.emp.filter(x => x.gender == 'Female').length;
    }

    public addEmployee(id: number, name: string, designation: string, department: string, gender: string): void {
        this.getEmployees();
        this.emp.push({ id: id, name: name, designation: designation, department: department, gender: gender });
        console.log("Updated list of employess: ");
        console.log(this.emp);
    }

    public editEmployeesData(id: number, replacedKey: string, replacedValue: string): void {
        this.employee = this.getEmployeesbyId(id);
        switch (replacedKey) {
            case "name":
                this.employee = this.employee.filter(e => e.name = replacedValue);
                break;
            case "designation":
                this.employee = this.employee.filter(e => e.designation = replacedValue);
                break;
            case "department":
                this.employee = this.employee.filter(e => e.department = replacedValue);
                break;
            case "gender":
                this.employee = this.employee.filter(e => e.gender = replacedValue);
                break;
        }
        console.log(this.employee);
    }
}
