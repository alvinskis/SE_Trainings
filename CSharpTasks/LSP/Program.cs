using System;
using System.Collections.Generic;

namespace LSP
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Employees Minimus Salaries: \n");
            List<IEmployee> employeesSalaries = new List<IEmployee>
            {
                new Trainee(1, "John"),
                new FullTime(2, "John"),
                new Contract(3, "Robert")
            };

            foreach (var employeeSalary in employeesSalaries)
            {
                Console.WriteLine($"{employeeSalary.EmployeeIdentity()} | Minimum Salary: {employeeSalary.GetMinimumSalary()}");
            }

            Console.WriteLine("\nEmployees Bonuses: \n");
            List<Employee> employeesBonuses = new List<Employee>
            {
                new Trainee(1, "John"),
                new FullTime(2, "John")
            };

            foreach (var employeeBonus in employeesBonuses)
            {
                Console.WriteLine($"{employeeBonus.EmployeeIdentity()} | Minimum Salary: {employeeBonus.GetMinimumSalary()} | Bonus: {employeeBonus.CalculateBonus(5000)}");
            }
        }
    }
}
