using System;
using System.Collections.Generic;
using System.Text;

namespace BankAccount
{
    abstract class Account
    {
        public string customerName;
        public DateofBirth dateOfBirth;
        public double balance;
        protected string accType;
        public double amount;
        public abstract bool Deposit(double amount);
        public abstract bool Withdraw(double amount);

        public Account(string name, DateofBirth dateOfBirth, double balance)
        {
            customerName = name;
            this.dateOfBirth = dateOfBirth;
            this.balance = balance;
        }

        protected Account()
        {

        }
        public string GetAccType()
        {
            accType = Console.ReadLine();
            return accType;
        }

        public void DisplayAccountDeatils()
        {
            Console.WriteLine($"Customer Name: {customerName}");
            Console.WriteLine($"Customer Date Of Birth: {dateOfBirth}");
            Console.WriteLine($"Balance: {balance}");
        }
    }
}
