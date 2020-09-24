using System;
using System.Collections.Generic;
using System.Text;

namespace LSP
{
    class Trainee : Employee
    {
        public Trainee(int id, string name) : base(id, name)
        {

        }

        public override int CalculateBonus(int salary)
        {
            return Convert.ToInt32(salary * 0.3);
        }

        public override int GetMinimumSalary()
        {
            return 1200;
        }
    }
}
