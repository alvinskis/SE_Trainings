using RegistrationApp.FileReaderWriter;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace RegistrationApp
{
    class ReadWriteTxtFile : IReadWriteFile
    {
        public DateTime Time { get; set; }

        [ReadWriteTxtFile]
        public void WriteToFile(string username, string password, string emailAddress, DateTime date, string filePath, bool write)
        {
            StreamWriter streamWriter = new StreamWriter(filePath, write);
            streamWriter.WriteLine("{0},{1},{2},{3}", username, password, emailAddress, date);
            streamWriter.Close();
        }

        [ReadWriteTxtFile]
        public List<LoginAccount> ReadFromFile(string filePath)
        {
            return File.ReadAllLines(filePath).Where(line => line.Length > 1).Select(LoginAccount.ParseFromCsv).ToList();
        }

        [ReadWriteTxtFile]
        public void UpdateFile(string filePath, string username)
        {
            Time = DateTime.Now;
            List<LoginAccount> loginAccounts = ReadFromFile(filePath);

            var accountToUpdate = (from account in loginAccounts
                                   where account.UserName == username
                                   select new { account.Password, account.EmailAddress }).ToList();

            loginAccounts.RemoveAll(user => user.UserName == username);

            foreach (var account in accountToUpdate)
            {
                WriteToFile(username, account.Password, account.EmailAddress, Time.AddMinutes(3), filePath, false);
            }

            foreach (var loginAccount in loginAccounts)
            {
                WriteToFile(loginAccount.UserName, loginAccount.Password, loginAccount.EmailAddress, loginAccount.Time, filePath, true);
            }
        }
    }
}
