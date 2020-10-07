using System;
using System.Collections.Generic;
using System.Text;

namespace RegistrationApp
{
    interface IValidation
    {
        bool IsValidEmail(string email);
        bool IsLowercase(string username);
        bool IsEqual(string password, string confirmPassword);
        bool IsPasswordValid(string password);
        bool IsEmailSame(string emailAddress, string filePath);
        bool IsUsernameSame(string username, string filePath);
        bool IsPasswordSame(string password, string username, string filePath);
        bool IsUserLocked(string username, string filePath);
    }
}
