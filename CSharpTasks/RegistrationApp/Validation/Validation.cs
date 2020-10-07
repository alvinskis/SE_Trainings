using RegistrationApp.FileReaderWriter;
using System;
using System.Linq;
using System.Net.Mail;
using System.Text.RegularExpressions;

namespace RegistrationApp
{
    class Validation : IValidation
    {
        public DateTime Time { get; set; }
        private IReadWriteFile _readWriteFile;
        public Validation(IReadWriteFile readWriteFile)
        {
            _readWriteFile = readWriteFile;
        }
        public bool IsValidEmail(string email)
        {
            try
            {
                MailAddress mailAddress = new MailAddress(email);
                return mailAddress.Address == email;
            }
            catch
            {
                return false;
            }
        }

        public bool IsLowercase(string username)
        {
            foreach (var letter in username)
            {
                if (char.IsUpper(letter))
                {
                    return false;
                }
            }
            return true;
        }

        public bool IsEqual(string password, string confirmPassword)
        {
            if (password != confirmPassword)
            {
                return false;
            }
            return true;
        }

        public bool IsPasswordValid(string password)
        {
            var hasMinimum12Chars = new Regex(@".{8,}");
            var hasUppercaseChar = new Regex(@"[A-Z]+");
            var hasDigit = new Regex(@"[0-9]+");
            var hasSpecialChar = new Regex(@"[#_]+");

            if (hasMinimum12Chars.IsMatch(password) && hasUppercaseChar.IsMatch(password) && hasDigit.IsMatch(password) && hasSpecialChar.IsMatch(password))
            {
                return true;
            }
            return false;
        }

        public bool IsEmailSame(string emailAddress, string filePath)
        {
            foreach (var account in _readWriteFile.ReadFromFile(filePath))
            {
                if (emailAddress == account.EmailAddress)
                {
                    return true;
                }
            }
            return false;
        }

        public bool IsUsernameSame(string username, string filePath)
        {
            foreach (var account in _readWriteFile.ReadFromFile(filePath))
            {
                if (username == account.UserName)
                {
                    return true;
                }
            }
            return false;
        }

        public bool IsPasswordSame(string password, string username, string filePath)
        {
            var userPassword = from account in _readWriteFile.ReadFromFile(filePath)
                               where account.UserName == username
                               select account.Password;

            foreach (var pass in userPassword)
            {
                if (password == pass)
                {
                    return true;
                }
            }
            return false;
        }

        public bool IsUserLocked(string username, string filePath)
        {
            Time = DateTime.Now;
            var time = Time.ToString("HH:mm");

            var user = from account in _readWriteFile.ReadFromFile(filePath)
                       where account.UserName == username
                       select account.Time;

            foreach (var userTime in user)
            {
                if (userTime > Time)
                {
                    return true;
                }
            }
            return false;
        }
    }
}
