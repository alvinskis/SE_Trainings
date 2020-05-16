"use strict";
exports.__esModule = true;
var EmployeeService_1 = require("./EmployeeService");
var e = new EmployeeService_1.EmployeeService();
e.addEmployee(6, "Modestas", "Database Developer", "Technology", "Male");
e.editEmployeesData(4, "designation", "Senior Data Testing Engineer");
