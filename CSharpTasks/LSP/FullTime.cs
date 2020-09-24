using System;
using System.Collections.Generic;
using System.Text;

namespace LSP
{
    class FullTime : Employee
    {
        public FullTime(int id, string name) : base(id, name)
        {

        }
        public override int CalculateBonus(int salary)
        {
            return Convert.ToInt32(salary * 0.7);
        }

        public override int GetMinimumSalary()
        {
            return 1500;
        }
    }
}
