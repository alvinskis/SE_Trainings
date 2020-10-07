using System;
using System.Collections.Generic;
using System.Text;

namespace RegistrationApp.FileReaderWriter
{
    interface IReadWriteFile
    {
        void WriteToFile(string username, string password, string emailAddress, DateTime date, string filePath, bool write);
        List<LoginAccount> ReadFromFile(string filePath);
        void UpdateFile(string filePath, string username);
    }
}
