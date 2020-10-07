using RegistrationApp.FileReaderWriter;
using RegistrationApp.RegistrationForm;
using System;
using System.Collections.Generic;

namespace RegistrationApp
{
    class Registration : IRegistration
    {
        public RegistrationAccount RegistrationAccount { get; set; }
        public string FilePath { get; set; }
        public DateTime Time { get; set; }
        private IReadWriteFile _readWriteFile;
        private IValidation _validation;

        public Registration(string filePath, IReadWriteFile readWriteFile, IValidation validation)
        {
            RegistrationAccount = new RegistrationAccount();
            _readWriteFile = readWriteFile;
            _validation = validation;
            FilePath = filePath;
        }

        public void RegistrationForm()
        {
            Console.WriteLine("Please Fill Registration Form:\n");
            Console.Write("First Name: ");
            RegistrationAccount.FirstName = Console.ReadLine();
            Console.Write("Last Name: ");
            RegistrationAccount.LastName = Console.ReadLine();

            Console.Write("Email Address: ");
            RegistrationAccount.EmailAddress = Console.ReadLine();
            while (_validation.IsValidEmail(RegistrationAccount.EmailAddress) == false)
            {
                Console.WriteLine("\nThe Email Address format is not valid.\n" +
                    "Please Enter The Correct Email Address\n");
                Console.Write("Email Address: ");
                RegistrationAccount.EmailAddress = Console.ReadLine();
            }
            while (_validation.IsEmailSame(RegistrationAccount.EmailAddress, FilePath) == true)
            {
                Console.WriteLine("Email Already Exists");
                Console.Write("Email Address: ");
                RegistrationAccount.EmailAddress = Console.ReadLine();
            }

            Console.Write("User Name: ");
            RegistrationAccount.UserName = Console.ReadLine();
            while (_validation.IsLowercase(RegistrationAccount.UserName) == false)
            {
                Console.WriteLine("\nUser Name Should Be In Lowercase\n");
                Console.Write("User Name: ");
                RegistrationAccount.UserName = Console.ReadLine();
            }
            while (_validation.IsUsernameSame(RegistrationAccount.UserName, FilePath) == true)
            {
                Console.WriteLine("\nUser Name Already Exists.\nPlease Use A Different User Name\n");
                Console.Write("User Name: ");
                RegistrationAccount.UserName = Console.ReadLine();
            }

            Console.Write("Password: ");
            RegistrationAccount.Password = Console.ReadLine();
            while (_validation.IsPasswordValid(RegistrationAccount.Password) == false)
            {
                Console.WriteLine("\nPassword Should Contain:\nLength of 12 characters.\n1 Uppercase\nDigits\nSpecial Symbol\n");
                Console.Write("Password: ");
                RegistrationAccount.Password = Console.ReadLine();
            }

            Console.Write("Confirm Password: ");
            var confirmPassword = Console.ReadLine();
            while (_validation.IsEqual(RegistrationAccount.Password, confirmPassword) == false)
            {
                Console.WriteLine("\nPasswords Should Match\n");
                Console.Write("Confirm Password: ");
                confirmPassword = Console.ReadLine();
            }
            Console.WriteLine("\nRegistration Successfully Completed\n");
            EmailNotification.SendEmail(RegistrationAccount);
        }

        public void SaveCredentials()
        {
            Time = DateTime.Now;
            _readWriteFile.WriteToFile(RegistrationAccount.UserName, RegistrationAccount.Password, RegistrationAccount.EmailAddress, Time, FilePath, true);
        }
    }
}
