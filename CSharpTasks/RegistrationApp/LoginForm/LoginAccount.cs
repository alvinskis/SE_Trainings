using System;

namespace RegistrationApp
{
    class LoginAccount
    {
        public string UserName { get; set; }
        public string Password { get; set; }
        public string EmailAddress { get; set; }
        public DateTime Time { get; set; }

        public static LoginAccount ParseFromCsv(string line)
        {
            var columns = line.Split(',');
            return new LoginAccount
            {
                UserName = columns[0],
                Password = columns[1],
                EmailAddress = columns[2],
                Time = Convert.ToDateTime(columns[3])
            };
        }
    }
}
