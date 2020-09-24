using System;
using System.Collections.Generic;
using System.Text;

namespace LSP
{
    interface IEmployee
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int GetMinimumSalary();
        public string EmployeeIdentity();
    }
}
