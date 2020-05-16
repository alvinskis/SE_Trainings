"use strict";
exports.__esModule = true;
var EmployeeService = /** @class */ (function () {
    function EmployeeService() {
    }
    EmployeeService.prototype.getEmployees = function () {
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
        ];
        return this.emp;
    };
    EmployeeService.prototype.getEmployeesbyId = function (id) {
        this.getEmployees();
        this.details = this.emp.filter(function (e) { return e.id === id; });
        return this.details;
    };
    EmployeeService.prototype.getEmployeeCount = function () {
        return this.emp.length;
    };
    EmployeeService.prototype.getFemaleEmployeeCount = function () {
        return this.emp.filter(function (x) { return x.gender == 'Female'; }).length;
    };
    EmployeeService.prototype.addEmployee = function (id, name, designation, department, gender) {
        this.getEmployees();
        this.emp.push({ id: id, name: name, designation: designation, department: department, gender: gender });
        console.log("Updated list of employess: ");
        console.log(this.emp);
    };
    EmployeeService.prototype.editEmployeesData = function (id, replacedKey, replacedValue) {
        this.employee = this.getEmployeesbyId(id);
        switch (replacedKey) {
            case "name":
                this.employee = this.employee.filter(function (e) { return e.name = replacedValue; });
                break;
            case "designation":
                this.employee = this.employee.filter(function (e) { return e.designation = replacedValue; });
                break;
            case "department":
                this.employee = this.employee.filter(function (e) { return e.department = replacedValue; });
                break;
            case "gender":
                this.employee = this.employee.filter(function (e) { return e.gender = replacedValue; });
                break;
        }
        console.log(this.employee);
    };
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
