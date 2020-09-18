using System;
using System.Collections.Generic;
using System.Text;

namespace BankAccount
{
    class Current : Account
    {
        public double minBalance = 100000;
        private double dailyWithdraw = 20000;

        public Current() : base()
        {

        }

        public override bool Deposit(double amount)
        {
            balance += amount;
            Console.WriteLine($"Your Balance is {balance}");
            return true;
        }

        public override bool Withdraw(double amount)
        {
            if (amount > balance)
            {
                Console.WriteLine("Your account has insufficient balance");
                return false;
            }
            else if (amount > dailyWithdraw)
            {
                Console.WriteLine("You cannot withdraw more than 20k");
                return false;
            }
            else
            {
                balance -= amount;
                Console.WriteLine($"You have withdraw: {amount}");
                Console.WriteLine($"Your balance droped to: {balance}");
                return true;
            }
        }
    }
}
