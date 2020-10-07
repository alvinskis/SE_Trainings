using RegistrationApp.FileReaderWriter;
using RegistrationApp.LoginForm;
using System;

namespace RegistrationApp
{
    class Login : ILogin
    {
        public string FilePath { get; set; }
        public int Count { get; set; }
        private IValidation _validation;
        private IReadWriteFile _readWriteFile;
        public Login(string filePath, IValidation validation, IReadWriteFile readWriteFile)
        {
            _validation = validation;
            FilePath = filePath;
            _readWriteFile = readWriteFile;
        }

        public void LoginForm()
        {
            Count = 2;
            Console.WriteLine("Please Login");
            Console.Write("Username: ");
            var userName = Console.ReadLine();
            if (_validation.IsUsernameSame(userName, FilePath) == false)
            {
                Console.WriteLine($"\n{userName} did not exists.\nPlease enter the existing one or Register");
                return;
            }
            else if (_validation.IsUserLocked(userName, FilePath) == true)
            {
                Console.WriteLine($"\n{userName} is locked.\nPlease try again later");
                return;
            }
            Console.Write("Password: ");
            var password = Console.ReadLine();
            while (_validation.IsPasswordSame(password, userName, FilePath) == false)
            {
                Console.WriteLine($"Wrong password. Retry count: {Count}");

                if (Count == 0)
                {
                    Console.WriteLine($"\nYour Account Is Locked.\nThe Account Will reset after 3 min\n");
                    _readWriteFile.UpdateFile(FilePath, userName);
                    Count = 2;
                    return;
                }
                Console.Write("Password: ");
                password = Console.ReadLine();
                Count--;
            }
            Console.WriteLine("\nYou Have Successfully Logged In");
        }
    }
}
