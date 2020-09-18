using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace BankAccount
{
    class Bank
    {
        public string[] customerName = new string[3];
        public string[] customerId = new string[3];
        public string[] accType = new string[3];
        public string[] myDateOfBirth = new string[3];
        public double[] myBalance = new double[3];
        public string id;// hold the id generated from idGenerator class and add string
        public int indexId = 0;// index number for account ID;
                               // we will use below variables in Create_Account method

        public bool val = true;
        public double depositAmount;
        public bool depositValue = true;

        IdGenerator idGenreator = new IdGenerator();
        DateofBirth dateofBirth = new DateofBirth();
        Savings savings = new Savings();
        Current current = new Current();

        private void GetAccount(string Id)
        {
            customerId[indexId] = Id;
            indexId++;
        }

        public void CreateAccount()
        {
            int d, y, m;
            string name;
            string accTypes;
            string input;
            double balance;
            Console.WriteLine("1. Savings");
            Console.WriteLine("2. Current");
            Console.Write("\r\n> ");
            input = Console.ReadLine();
            if (input == "1")
            {
                accTypes = "Savings";

                accType[indexId] = accTypes;

                Console.Write("Enter your Name: ");
                name = Console.ReadLine();
                customerName[indexId] = name;
                /* if users enters corrects DOB, it will take value until users enters
                 * correct date format*/
                while (val == true)
                {
                    Console.WriteLine("Enter Date of Birth");
                    Console.Write("Day: ");
                    d = Convert.ToInt32(Console.ReadLine());
                    Console.Write("Month: ");
                    m = Convert.ToInt32(Console.ReadLine());
                    Console.Write("Year: ");
                    y = Convert.ToInt32(Console.ReadLine());
                    dateofBirth.AssignValue(d, m, y);
                    if (dateofBirth.DisplayDate() == true)
                    {
                        myDateOfBirth[indexId] = Convert.ToString($"{d}-{m}-{y}");
                        val = false;
                    }
                    else
                    {
                        val = true;
                    }
                }
                val = true;
                Console.Write("Enter the balance: ");
                balance = Convert.ToDouble(Console.ReadLine());
                Console.WriteLine("Account Created Successfully");
                myBalance[indexId] = balance;
                id = idGenreator.GenerateId();// collect id from id generator;
                id = "EMI" + id;
                Console.WriteLine($"Your Account Number is  {id}");
                GetAccount(id);
            }
            else
            {
                accTypes = "Current";
                accType[indexId] = accTypes;
                Console.Write("Enter the Name: ");
                name = Console.ReadLine();
                customerName[indexId] = name;
                customerName[indexId] = name;
                /* if users enters corrects DOB, it will take value until users enters
                 * correct date format*/
                while (val == true)
                {
                    Console.WriteLine("Enter Date of Birth");
                    Console.Write("Day: ");
                    d = Convert.ToInt32(Console.ReadLine());
                    Console.Write("Month: ");
                    m = Convert.ToInt32(Console.ReadLine());
                    Console.Write("Year: ");
                    y = Convert.ToInt32(Console.ReadLine());
                    dateofBirth.AssignValue(d, m, y);
                    if (dateofBirth.DisplayDate() == true)
                    {
                        myDateOfBirth[indexId] = Convert.ToString($"{d}-{m}-{y}");
                        val = false;
                    }
                    else
                    {
                        val = true;
                    }
                }

                while (depositValue == true)
                {
                    Console.Write("Enter the balance: ");
                    balance = Convert.ToDouble(Console.ReadLine());
                    if (balance < current.minBalance)
                    {
                        Console.WriteLine("Current Account MinBalance should be 1lac");
                        depositValue = true;
                    }
                    else
                    {
                        myBalance[indexId] = balance;
                        depositValue = false;
                    }
                }
                Console.WriteLine("Current Account Created Successfully");
                id = idGenreator.GenerateId();
                id = "Current" + id;
                Console.WriteLine($"Your Account id is {id}");
                GetAccount(id);
            }
        }

        public void ShowAccountDetails()
        {
            int indexnum;
            string accountID = Console.ReadLine();
            if (customerId.Contains(accountID))
            {
                indexnum = Array.IndexOf(customerId, accountID);
                Console.WriteLine($"Name: {customerName[indexnum]}");
                Console.WriteLine($"ID: {customerId[indexnum]}");
                Console.WriteLine($"Account Type: {accType[indexnum]}");
                Console.WriteLine($"Balance: {myBalance[indexnum]}");
                Console.WriteLine($"Date Of Birth: {myDateOfBirth[indexnum]}");
            }
            else
            {
                Console.WriteLine("Entered Incorrect Account Info");
            }
        }

        public void Deposit()
        {
            int indexNum;
            Console.Write("Enter Account Id: ");
            string inID = Console.ReadLine();
            if (customerId.Contains(inID))
            {
                indexNum = Array.IndexOf(customerId, inID);
                Console.WriteLine($"Your Balance is {myBalance[indexNum]}");
                Console.Write("Enter the amount you want to deposit: ");
                depositAmount = Convert.ToDouble(Console.ReadLine());
                if (accType[indexNum] == "Savings")
                {
                    savings.balance = myBalance[indexNum];
                    savings.Deposit(depositAmount);
                    myBalance[indexNum] = savings.balance;
                }
                else if (accType[indexNum] == "Current")
                {
                    current.balance = myBalance[indexNum];
                    current.Deposit(depositAmount);
                    myBalance[indexNum] = current.balance;
                }
            }
            else
            {
                Console.WriteLine("Enter Correct Account id");
            }
        }

        public void Withdraw()
        {
            Console.Write("Enter Account Id: ");
            string accountId = Console.ReadLine();
            if (customerId.Contains(accountId))
            {
                int indexId = Array.IndexOf(customerId, accountId);
                Console.Write("Enter amount of money to withdraw: ");
                int moneyToWithdraw = Convert.ToInt32(Console.ReadLine());
                if (accType[indexId] == "Savings")
                {
                    savings.balance = myBalance[indexId];
                    savings.Withdraw(moneyToWithdraw);
                    myBalance[indexId] = savings.balance;
                }
                else if (accType[indexId] == "Current")
                {
                    current.balance = myBalance[indexId];
                    current.Withdraw(moneyToWithdraw);
                    myBalance[indexId] = current.balance;
                }
            }
            else
            {
                Console.WriteLine("Invalid Account");
            }
        }
    }
}
