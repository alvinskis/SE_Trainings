using System;
using System.Collections.Generic;
using System.Text;

namespace LSP
{
    class Contract : IEmployee
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public Contract(int id, string name)
        {
            Id = id;
            Name = name;
        }

        public int GetMinimumSalary()
        {
            return 2000;
        }

        public string EmployeeIdentity()
        {
            return string.Format($"Id: {Id} | Name: {Name}");
        }
    }
}
