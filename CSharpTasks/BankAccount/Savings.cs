using System;
using System.Collections.Generic;
using System.Text;

namespace BankAccount
{
    class Savings : Account
    {
        public Savings() : base()
        {

        }

        public override bool Deposit(double amount)
        {
            balance += amount;
            Console.WriteLine($"Your Account balance is {balance}");
            return true;
        }

        public override bool Withdraw(double amount)
        {
            balance -= amount;
            Console.WriteLine($"You have withdraw: {amount}");
            Console.WriteLine($"Your balance droped to: {balance}");
            return true;
        }
    }
}
