using System;
using System.Collections.Generic;
using System.Text;

namespace BankAccount
{
    class DateofBirth
    {
        public int day;
        public int month;
        public int year;

        public DateofBirth()
        {

        }

        public void AssignValue(int day, int month, int year)
        {
            this.day = day;
            this.month = month;
            this.year = year;
        }


        public bool DateValidation()
        {
            if (day > 31 || month > 12 || year < 1962)
            {
                Console.WriteLine("Please enter valid date");
                return false;
            }
            else
            {
                return true;
            }
        }

        public bool DisplayDate()
        {
            if (DateValidation() == true)
            {
                Console.WriteLine($"Your Date Of Birth: {day}-{month}-{year}");
                return true;
            }
            else
            {
                Console.WriteLine("Please enter date again");
                return false;
            }
        }
    }
}
