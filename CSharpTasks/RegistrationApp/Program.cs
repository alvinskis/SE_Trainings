using System;

namespace RegistrationApp
{
    class Program
    {
        static void Main(string[] args)
        {
            //Please enter the path to CSV format file
            string filePath = "Path to CSV File";
            Registration registration = new Registration(filePath, new ReadWriteTxtFile(), new Validation(new ReadWriteTxtFile()));
            Login login = new Login(filePath, new Validation(new ReadWriteTxtFile()), new ReadWriteTxtFile());
            //Console.WriteLine($"Class: ReadWriteTxtFile\nMetadata:");
            //ReadWriteTxtFileMetadata.Metadata();

            while (true)
            {
                Console.WriteLine("\nPlease select the option:");
                Console.WriteLine();
                Console.WriteLine("1.Login\n2.Register\n3.Exit");
                Console.Write("\n> ");

                string userInput = Console.ReadLine();

                while (userInput != "1" && userInput != "2" && userInput != "3")
                {
                    Console.WriteLine("Enter the correct option!!!");
                    Console.Write("\n> ");
                    userInput = Console.ReadLine();
                }

                switch (userInput)
                {
                    case "1":
                        login.LoginForm();
                        break;
                    case "2":
                        registration.RegistrationForm();
                        registration.SaveCredentials();
                        break;
                    case "3":
                        Environment.Exit(0);
                        break;
                    default:
                        break;
                }
            }
        }
    }
}
