import { EmployeeService } from "./EmployeeService";

let e=new EmployeeService();
e.addEmployee(6, "Modestas", "Database Developer", "Technology", "Male");
e.editEmployeesData(4, "designation", "Senior Data Testing Engineer");