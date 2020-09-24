using System;
using System.Collections.Generic;
using System.Text;

namespace LSP
{
    abstract class Employee : IEmployee, IEmployeeBonus
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public Employee(int id, string name)
        {
            Id = id;
            Name = name;
        }

        public abstract int CalculateBonus(int salary);

        public abstract int GetMinimumSalary();

        public string EmployeeIdentity()
        {
            return string.Format($"Id: {Id} | Name: {Name}");
        }
    }
}
